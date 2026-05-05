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

app.post("/api/checkout", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      address,
      region,
      paymentMethod,
      cart,
      totalPrice,
    } = req.body;

    const DELIVERY_FEE = 3;

    const paymentInstructions = {
      cash: `
        <div style="background-color: #fff8e1; padding: 15px; border-radius: 8px; margin-top: 10px;">
          <h3 style="color: #f57f17;">💵 Cash on Delivery</h3>
          <p>Please have the exact amount ready upon delivery.</p>
          <p><strong>Total to pay:</strong> ${totalPrice + DELIVERY_FEE} JOD</p>
        </div>
      `,
      cliq: `
        <div style="background-color: #e8f5e9; padding: 15px; border-radius: 8px; margin-top: 10px;">
          <h3 style="color: #2e7d32;">📱 CliQ Payment</h3>
          <p>Please send the payment via CliQ to:</p>
          <p><strong>CliQ Alias:</strong> DEEWAN</p>
          <p><strong>Amount:</strong> ${totalPrice + DELIVERY_FEE} JOD</p>
          <p>Please send a screenshot of the payment to confirm your order.</p>
        </div>
      `,
      paypal: `
        <div style="background-color: #e3f2fd; padding: 15px; border-radius: 8px; margin-top: 10px;">
          <h3 style="color: #1565c0;">💳 PayPal Payment</h3>
          <p>Please send the payment via PayPal using this link:</p>
          <a href="https://www.paypal.com/paypalme/DeewanInstitute" target="_blank">Pay via PayPal</a>
          <p><strong>Amount:</strong> ${totalPrice + DELIVERY_FEE} JOD</p>
          <p>Please send a screenshot of the payment to confirm your order.</p>
        </div>
      `,
    };

    const selectedPaymentInstruction = paymentInstructions[paymentMethod] || "";

    const cartItemsHtml = cart
      .map(
        (item) => `
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">${item.title} ${item.subtitle || ""}</td>
          <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
          <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: right;">${(item.price || 0) * item.quantity} JOD</td>
        </tr>
      `,
      )
      .join("");

    const orderTable = `
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="background-color: #f5f5f5;">
            <th style="padding: 8px; text-align: left;">Item</th>
            <th style="padding: 8px; text-align: center;">Quantity</th>
            <th style="padding: 8px; text-align: right;">Price</th>
          </tr>
        </thead>
        <tbody>${cartItemsHtml}</tbody>
        <tfoot>
          <tr>
            <td colspan="2" style="padding: 8px; text-align: right;"><strong>Subtotal:</strong></td>
            <td style="padding: 8px; text-align: right;">${totalPrice} JOD</td>
          </tr>
          <tr>
            <td colspan="2" style="padding: 8px; text-align: right;"><strong>Delivery:</strong></td>
            <td style="padding: 8px; text-align: right;">${DELIVERY_FEE} JOD</td>
          </tr>
          <tr style="background-color: #f5f5f5;">
            <td colspan="2" style="padding: 8px; text-align: right;"><strong>Total:</strong></td>
            <td style="padding: 8px; text-align: right;"><strong>${totalPrice + DELIVERY_FEE} JOD</strong></td>
          </tr>
        </tfoot>
      </table>
    `;

    // Email to customer
    await resend.emails.send({
      from: "Deewan Institute <app@deewaninstitute.com>",
      to: email,
      subject: "Deewan Institute - Book Order Confirmation",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          ${logoHtml}
          <hr/>
          <h2>Thank you for your order, ${firstName}!</h2>
          <p>Here is a summary of your order:</p>
          <h3>Order Summary:</h3>
          ${orderTable}
          <h3>Shipping Details:</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Region:</strong> ${region}</p>
          <h3>Payment Instructions:</h3>
          ${selectedPaymentInstruction}
          <hr/>
          ${footer}
        </div>
      `,
    });

    // Email to admin
    await resend.emails.send({
      from: "Deewan Institute <app@deewaninstitute.com>",
      to: [process.env.RECEIVER_EMAIL, process.env.RECEIVER_EMAIL_2],
      cc: process.env.RECEIVER_EMAIL_3,
      subject: `Deewan Website: New Book Order from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
          ${logoHtml}
          <hr/>
          <h2>New Order Received!</h2>
          <h3>Customer Details:</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Region:</strong> ${region}</p>
          <p><strong>Payment Method:</strong> ${paymentMethod.toUpperCase()}</p>
          <h3>Order Summary:</h3>
          ${orderTable}
          <hr/>
          ${footer}
        </div>
      `,
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