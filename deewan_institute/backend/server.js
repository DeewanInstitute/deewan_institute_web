const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const { Resend } = require("resend");
const { db, bucket } = require("./firebase");
const generatePDF = require("./generateInternshipPDF");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = process.env.PORT || 5000;
const resend = new Resend(process.env.RESEND_API_KEY);

// ─── Helpers ────────────────────────────────────────────────────────────────

const LOGO_URL =
  "https://deewaninstitute.com/assets/images/logos/LogoDeewan.webp";

// Wraps the logo as an inline <img> tag (no CID needed with Resend)
const logoHtml = `
  <div style="text-align: center; padding: 20px 0;">
    <img src="${LOGO_URL}" alt="Deewan Institute Logo" style="width: 65%;" />
  </div>
`;

const footer = `
  <div style="text-align: center; padding: 20px 0; color: #888; font-size: 12px;">
    <p>Deewan Institute for Languages and Cultural Studies</p>
    <p>Al - Baouneyah St. 14, Amman 11191</p>
  </div>
`;

// ─── Middleware ──────────────────────────────────────────────────────────────

app.use(
  cors({
    origin: [
      "https://deewaninstitute.com",
      "https://www.deewaninstitute.com",
      "https://deewaninstitutewebsite.netlify.app",
      "https://69f1a656175d2ffc865aba71--deewanweb.netlify.app",
      "https://deewanweb.netlify.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.use(express.json());

// ─── Multer: Career CV ───────────────────────────────────────────────────────

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDF files are allowed"), false);
    }
  },
});

// ─── Multer: Internship Files ────────────────────────────────────────────────

const uploadInternship = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = [
      "application/pdf",
      "application/zip",
      "application/x-zip-compressed",
    ];
    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only PDF or ZIP files are allowed"), false);
    }
  },
}).fields([
  { name: "cv", maxCount: 1 },
  { name: "motivationLetter", maxCount: 1 },
  { name: "portfolio", maxCount: 1 },
]);

// ─── CAREER ENDPOINT ─────────────────────────────────────────────────────────

app.post("/api/career", upload.single("cv"), async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, position } = req.body;
    const file = req.file;

    if (!firstName || !lastName || !email || !phoneNumber || !position) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (!file) {
      return res.status(400).json({ message: "CV file is required" });
    }

    await resend.emails.send({
      from: "Deewan Institute <app@deewaninstitute.com>",
      to: [process.env.RECEIVER_EMAIL_4, process.env.RECEIVER_EMAIL_5],
      subject: `Career Application: ${position} - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
          ${logoHtml}
          <hr/>
          <h2>New Career Application</h2>
          <hr/>
          <p><strong>Position:</strong> ${position}</p>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phoneNumber}</p>
          <hr/>
          <p><strong>Attached CV:</strong> ${file.originalname}</p>
          <hr/>
          ${footer}
        </div>
      `,
      attachments: [
        {
          filename: file.originalname,
          content: file.buffer.toString("base64"),
          content_type: file.mimetype,
        },
      ],
    });

    res.status(200).json({ message: "Application sent successfully!" });
  } catch (error) {
    console.error("Career Form Error:", error);
    res.status(500).json({ message: "Error sending application." });
  }
});

// ─── CONTACT ENDPOINT ────────────────────────────────────────────────────────

app.post("/api/contact", async (req, res) => {
  try {
    const { fullName, email, phoneNumber, message } = req.body;

    await resend.emails.send({
      from: "Deewan Institute <app@deewaninstitute.com>",
      to: [process.env.RECEIVER_EMAIL_2, process.env.RECEIVER_EMAIL_4],
      subject: `Deewan Website: Message from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
          ${logoHtml}
          <hr/>
          <h2>Deewan Website Message</h2>
          <hr/>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phoneNumber}</p>
          <hr/>
          <p><strong>Inquiry:</strong></p>
          <p>${message}</p>
          <hr/>
          ${footer}
        </div>
      `,
    });

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Contact Form Error:", error);
    res.status(500).json({ message: "Error sending message." });
  }
});

// ─── CHECKOUT ENDPOINT ───────────────────────────────────────────────────────

const PDFDocument = require("pdfkit");

app.post("/api/checkout", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      region,
      notes,
      paymentMethod,
      cart,
      totalPrice,
    } = req.body;

    const DELIVERY_FEE = 3;
    const grandTotal = totalPrice + DELIVERY_FEE;
    const orderNumber = `DW-${Date.now()}`;

    //PDF Invoice Generation 
    const pdfBuffer = await new Promise((resolve, reject) => {
      const doc = new PDFDocument({ margin: 50, size: "A4" });
      const chunks = [];
      doc.on("data", (chunk) => chunks.push(chunk));
      doc.on("end", () => resolve(Buffer.concat(chunks)));
      doc.on("error", reject);

      const pageWidth = doc.page.width - 100; 

      // Header bar
      doc.rect(50, 40, pageWidth, 60).fill("#8f6e43");
      doc.fillColor("#ffffff").fontSize(22).font("Helvetica-Bold")
        .text("DEEWAN INSTITUTE", 60, 55);
      doc.fontSize(10).font("Helvetica")
        .text("Invoice / Order Confirmation", 60, 82);

      // Order meta
      doc.fillColor("#333333").fontSize(10).font("Helvetica-Bold");
      doc.text(`Order #: ${orderNumber}`, 50, 120);
      doc.text(`Date: ${new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" })}`, 50, 136);
      doc.font("Helvetica").fillColor("#555555")
        .text(`Payment: ${paymentMethod.toUpperCase()}`, 50, 152);

      // Section: Customer Details
      doc.moveDown(2);
      const sectionY = doc.y;
      doc.rect(50, sectionY, pageWidth, 18).fill("#f0f0f0");
      doc.fillColor("#111111").fontSize(10).font("Helvetica-Bold")
        .text("CUSTOMER DETAILS", 55, sectionY + 4);

      doc.font("Helvetica").fillColor("#333333").fontSize(10);
      const detailY = sectionY + 26;
      doc.text(`Name:`, 55, detailY).text(`${firstName} ${lastName}`, 130, detailY);
      doc.text(`Email:`, 55, detailY + 16).text(email, 130, detailY + 16);
      doc.text(`Phone:`, 55, detailY + 32).text(phone || "—", 130, detailY + 32);
      doc.text(`Address:`, 55, detailY + 48).text(`${address}, ${region}, Jordan`, 130, detailY + 48);
      if (notes) {
        doc.text(`Notes:`, 55, detailY + 64).text(notes, 130, detailY + 64, { width: pageWidth - 80 });
      }

      // Section: Order Items
      doc.moveDown(notes ? 6 : 5);
      const tableHeaderY = doc.y;
      doc.rect(50, tableHeaderY, pageWidth, 18).fill("#472211");
      doc.fillColor("#ffffff").fontSize(9).font("Helvetica-Bold");
      doc.text("ITEM", 55, tableHeaderY + 4);
      doc.text("QTY", 370, tableHeaderY + 4, { width: 40, align: "center" });
      doc.text("PRICE", 430, tableHeaderY + 4, { width: 65, align: "right" });

      let rowY = tableHeaderY + 22;
      cart.forEach((item, i) => {
        const itemTotal = (item.price || 0) * item.quantity;
        const bg = i % 2 === 0 ? "#fafafa" : "#ffffff";
        doc.rect(50, rowY, pageWidth, 20).fill(bg);
        doc.fillColor("#333333").fontSize(9).font("Helvetica");
        const label = `${item.title}${item.subtitle ? " " + item.subtitle : ""}`;
        doc.text(label, 55, rowY + 5, { width: 300, ellipsis: true });
        doc.text(String(item.quantity), 370, rowY + 5, { width: 40, align: "center" });
        doc.text(`${itemTotal} JOD`, 430, rowY + 5, { width: 65, align: "right" });
        rowY += 20;
      });

      // Totals block
      rowY += 8;
      doc.moveTo(50, rowY).lineTo(50 + pageWidth, rowY).strokeColor("#dddddd").stroke();
      rowY += 10;

      doc.fillColor("#472211").fontSize(10).font("Helvetica");
      doc.text("Subtotal:", 380, rowY).text(`${totalPrice} JOD`, 430, rowY, { width: 65, align: "right" });
      rowY += 18;
      doc.text("Delivery:", 380, rowY).text(`${DELIVERY_FEE} JOD`, 430, rowY, { width: 65, align: "right" });
      rowY += 10;

      doc.moveTo(380, rowY).lineTo(50 + pageWidth, rowY).strokeColor("#dddddd").stroke();
      rowY += 10;

      doc.rect(380, rowY, pageWidth - 330, 24).fill("#472211");
      doc.fillColor("#ffffff").fontSize(11).font("Helvetica-Bold");
      doc.text("TOTAL:", 385, rowY + 6);
      doc.text(`${grandTotal} JOD`, 430, rowY + 6, { width: 65, align: "right" });

      // Footer
      const footerY = doc.page.height - 60;
      doc.moveTo(50, footerY).lineTo(50 + pageWidth, footerY).strokeColor("#cccccc").stroke();
      doc.fillColor("#888888").fontSize(8).font("Helvetica")
        .text("Deewan Institute | deewaninstitute.com | Al-Weibdeh, Amman, Jordan", 50, footerY + 8, {
          align: "center",
          width: pageWidth,
        });

      doc.end();
    });

    //Payment instructions HTML
    const paymentInstructions = {
      cash: `<div style="background-color:#fff8e1;padding:15px;border-radius:8px;margin-top:10px;"><h3 style="color:#f57f17;">💵 Cash on Delivery</h3><p>Please have the exact amount ready upon delivery.</p><p><strong>Total to pay:</strong> ${grandTotal} JOD</p></div>`,
      cliq: `<div style="background-color:#e8f5e9;padding:15px;border-radius:8px;margin-top:10px;"><h3 style="color:#2e7d32;">📱 CliQ Payment</h3><p>Please send the payment via CliQ to:</p><p><strong>CliQ Alias:</strong> DEEWAN</p><p><strong>Amount:</strong> ${grandTotal} JOD</p><p>Please send a screenshot of the payment to confirm your order.</p></div>`,
      paypal: `<div style="background-color:#e3f2fd;padding:15px;border-radius:8px;margin-top:10px;"><h3 style="color:#1565c0;">💳 PayPal Payment</h3><p>Please send the payment via PayPal: <a href="https://www.paypal.com/paypalme/DeewanInstitute">Pay via PayPal</a></p><p><strong>Amount:</strong> ${grandTotal} JOD</p><p>Please send a screenshot of the payment to confirm your order.</p></div>`,
    };

    const selectedPaymentInstruction = paymentInstructions[paymentMethod] || "";

    const cartItemsHtml = cart
      .map((item) => `
        <tr>
          <td style="padding:8px;border-bottom:1px solid #eee;">${item.title} ${item.subtitle || ""}</td>
          <td style="padding:8px;border-bottom:1px solid #eee;text-align:center;">${item.quantity}</td>
          <td style="padding:8px;border-bottom:1px solid #eee;text-align:right;">${(item.price || 0) * item.quantity} JOD</td>
        </tr>`)
      .join("");

    const orderTable = `
      <table style="width:100%;border-collapse:collapse;">
        <thead><tr style="background-color:#f5f5f5;">
          <th style="padding:8px;text-align:left;">Item</th>
          <th style="padding:8px;text-align:center;">Qty</th>
          <th style="padding:8px;text-align:right;">Price</th>
        </tr></thead>
        <tbody>${cartItemsHtml}</tbody>
        <tfoot>
          <tr><td colspan="2" style="padding:8px;text-align:right;"><strong>Subtotal:</strong></td><td style="padding:8px;text-align:right;">${totalPrice} JOD</td></tr>
          <tr><td colspan="2" style="padding:8px;text-align:right;"><strong>Delivery:</strong></td><td style="padding:8px;text-align:right;">${DELIVERY_FEE} JOD</td></tr>
          <tr style="background-color:#f5f5f5;"><td colspan="2" style="padding:8px;text-align:right;"><strong>Total:</strong></td><td style="padding:8px;text-align:right;"><strong>${grandTotal} JOD</strong></td></tr>
        </tfoot>
      </table>`;

    const notesHtml = notes
      ? `<h3>Order Notes:</h3><p style="background:#fffde7;padding:10px;border-radius:6px;">${notes}</p>`
      : "";

    //Email to customer
    await resend.emails.send({
      from: "Deewan Institute <app@deewaninstitute.com>",
      to: email,
      subject: `Deewan Institute - Order Confirmation #${orderNumber}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          ${logoHtml}
          <hr/>
          <h2>Thank you for your order, ${firstName}!</h2>
          <p>Your order number is <strong>${orderNumber}</strong>.</p>
          <h3>Order Summary:</h3>${orderTable}
          <h3>Shipping Details:</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Phone:</strong> ${phone || "—"}</p>
          <p><strong>Address:</strong> ${address}, ${region}</p>
          ${notesHtml}
          <h3>Payment Instructions:</h3>${selectedPaymentInstruction}
          <hr/>${footer}
        </div>`,
    });

    //Email to admin (with PDF attachment) 
    await resend.emails.send({
      from: "Deewan Institute <app@deewaninstitute.com>",
      to: [process.env.RECEIVER_EMAIL, process.env.RECEIVER_EMAIL_2],
      cc: process.env.RECEIVER_EMAIL_3,
      subject: `Deewan Website: New Book Order #${orderNumber} — ${firstName} ${lastName}`,
      attachments: [
        {
          filename: `invoice-${orderNumber}.pdf`,
          content: pdfBuffer.toString("base64"),
          content_type: "application/pdf",
        },
      ],
      html: `
        <div style="font-family:Arial,sans-serif;max-width:800px;margin:0 auto;">
          ${logoHtml}
          <hr/>
          <h2>New Order Received! <span style="color:#888;font-size:14px;">#${orderNumber}</span></h2>
          <h3>Customer Details:</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "—"}</p>
          <p><strong>Address:</strong> ${address}, ${region}</p>
          <p><strong>Payment Method:</strong> ${paymentMethod.toUpperCase()}</p>
          ${notesHtml}
          <h3>Order Summary:</h3>${orderTable}
          <p style="margin-top:16px;color:#555;">📎 The PDF invoice is attached to this email.</p>
          <hr/>${footer}
        </div>`,
    });

    res.status(200).json({ message: "Order placed successfully!" });
  } catch (error) {
    console.error("Checkout Error:", error);
    res.status(500).json({ message: "Error placing order." });
  }
});
// ─── INTERNSHIP ENDPOINT ─────────────────────────────────────────────────────

app.post("/api/internship", uploadInternship, async (req, res) => {
  try {
    const raw = req.body;
    const files = req.files || {};

    const parsed = {};
    for (const key in raw) {
      try {
        parsed[key] = JSON.parse(raw[key]);
      } catch {
        parsed[key] = raw[key];
      }
    }

    parsed.documents = {
      cv: !!files.cv,
      motivationLetter: !!files.motivationLetter,
      portfolio: !!files.portfolio,
    };

    const id = uuidv4();

    // 1. Generate and upload application PDF
    const pdfBuffer = await generatePDF(parsed);
    const pdfFile = bucket.file(`internships/${id}/application.pdf`);
    await pdfFile.save(pdfBuffer, {
      metadata: { contentType: "application/pdf" },
    });
    const [pdfUrl] = await pdfFile.getSignedUrl({
      action: "read",
      expires: "03-01-2030",
    });

    // 2. Upload attached files to Firebase Storage
    const uploadFile = async (file, name) => {
      if (!file) return null;
      const fileRef = bucket.file(`internships/${id}/${name}`);
      await fileRef.save(file.buffer, {
        metadata: { contentType: file.mimetype },
      });
      const [url] = await fileRef.getSignedUrl({
        action: "read",
        expires: "03-01-2030",
      });
      return url;
    };

    const cvUrl = await uploadFile(files.cv?.[0], "cv.pdf");
    const motivationUrl = await uploadFile(
      files.motivationLetter?.[0],
      "motivation.pdf",
    );
    const portfolioFile = files.portfolio?.[0];
    const portfolioExt = portfolioFile?.originalname?.split(".").pop();
    const portfolioUrl = await uploadFile(
      portfolioFile,
      `portfolio.${portfolioExt || "file"}`,
    );

    // 3. Save to Firestore
    await db
      .collection("internships")
      .doc(id)
      .set({
        ...parsed,
        files: {
          cv: cvUrl,
          motivationLetter: motivationUrl,
          portfolio: portfolioUrl,
          pdf: pdfUrl,
        },
        createdAt: new Date(),
      });

    const applicantEmail = parsed.personal?.email;
    const applicantName = parsed.personal?.fullName || "Applicant";

    // 4. Email to applicant
    if (applicantEmail) {
      await resend.emails.send({
        from: "Deewan Institute <app@deewaninstitute.com>",
        to: applicantEmail,
        subject: "Deewan Institute — Internship Application Received",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            ${logoHtml}
            <hr/>
            <h2>Thank you for applying, ${applicantName}!</h2>
            <p>We have successfully received your internship application at Deewan Institute.</p>
            <p>You can download a copy of your application here:</p>
            <p><a href="${pdfUrl}" target="_blank" style="color: #8f6e43;">Download Application PDF</a></p>
            <br/>
            <p>We will review your application carefully and contact you by email or WhatsApp if shortlisted.</p>
            <hr/>
            ${footer}
          </div>
        `,
      });
    }

    // 5. Email to HR
    await resend.emails.send({
      from: "Deewan Institute <app@deewaninstitute.com>",
      to: [process.env.RECEIVER_EMAIL_4, process.env.RECEIVER_EMAIL_2],
      subject: `Internship Application — ${applicantName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          ${logoHtml}
          <hr/>
          <h2>New Internship Application Received</h2>
          <p><strong>Name:</strong> ${applicantName}</p>
          <p><strong>Email:</strong> ${applicantEmail}</p>
          <p><strong>Phone:</strong> ${parsed.personal?.phone || "N/A"}</p>
          <p><strong>University:</strong> ${parsed.personal?.university || "N/A"}</p>
          <p><strong>First Preference:</strong> ${parsed.areas?.firstPreference || "N/A"}</p>
          <p><strong>Internship Option:</strong> ${parsed.preferences?.option || "N/A"}</p>
          <hr/>
          <p><a href="${pdfUrl}" target="_blank" style="color: #8f6e43;">View Full Application PDF</a></p>
          ${cvUrl ? `<p><a href="${cvUrl}" target="_blank">View CV</a></p>` : ""}
          ${motivationUrl ? `<p><a href="${motivationUrl}" target="_blank">View Motivation Letter</a></p>` : ""}
          ${portfolioUrl ? `<p><a href="${portfolioUrl}" target="_blank">View Portfolio</a></p>` : ""}
          <hr/>
          ${footer}
        </div>
      `,
    });

    res.status(200).json({ message: "Application submitted successfully" });
  } catch (err) {
    console.error("Internship Error:", err);
    res.status(500).json({ message: "Error saving application" });
  }
});

// ─── HEALTH CHECK ────────────────────────────────────────────────────────────

// app.get("/api/health", (req, res) => {
//   res.status(200).json({ status: "Server is running!" });
// });

// ─── START ───────────────────────────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});