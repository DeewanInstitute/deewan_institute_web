const PDFDocument = require("pdfkit");

function generateInternshipPDF(data) {
  return new Promise((resolve) => {
    const doc = new PDFDocument({ margin: 40 });
    const buffers = [];

    doc.on("data", buffers.push.bind(buffers));
    doc.on("end", () => resolve(Buffer.concat(buffers)));

    // ===== Helpers =====
    const section = (title) => {
      doc.moveDown(1.5);
      doc.fontSize(16).font("Helvetica-Bold").text(title);
      doc.moveDown(0.5);
      doc.moveTo(doc.x, doc.y).lineTo(550, doc.y).stroke();
      doc.moveDown(0.7);
    };

    const field = (label, value) => {
      doc
        .fontSize(11)
        .font("Helvetica-Bold")
        .text(`${label}: `, { continued: true })
        .font("Helvetica")
        .text(value || "N/A");
    };

    const multiLine = (label, value) => {
      doc.fontSize(11).font("Helvetica-Bold").text(`${label}:`);
      doc.moveDown(0.3);
      doc.font("Helvetica").text(value || "N/A", {
        width: 500,
      });
      doc.moveDown(0.7);
    };

    // ===== Title =====
    doc
      .fontSize(20)
      .font("Helvetica-Bold")
      .text("Internship Application", { align: "center" });

    doc.moveDown(1);

    // =========================
    // 1. PERSONAL INFORMATION
    // =========================
    section("1. Personal Information");

    field("Full Name", data.personal.fullName);
    field("Gender", data.personal.gender);
    field("Date of Birth", data.personal.dateOfBirth);
    field("Nationality", data.personal.nationality);
    field("Residence", data.personal.residence);
    field("Email", data.personal.email);
    field("Phone", data.personal.phone);
    field("University", data.personal.university);
    field("Field of Study", data.personal.fieldOfStudy);
    field("Academic Level", data.personal.academicLevel);

    // =========================
    // 2. INTERNSHIP PREFERENCES
    // =========================
    section("2. Internship Preferences");

    field("Internship Option", data.preferences.option);
    field("Duration", data.preferences.duration);
    field("Start Date", data.preferences.startDate);
    field("End Date", data.preferences.endDate);
    field("Dates Flexible", data.preferences.datesFlexible);

    // =========================
    // 3. AREAS OF INTEREST
    // =========================
    section("3. Areas of Interest");

    field(
      "Selected Areas",
      Array.isArray(data.areas?.areas)
        ? data.areas.areas.join(", ")
        : data.areas?.areas || "N/A",
    );
    field("First Preference", data.areas.firstPreference);
    field("Second Preference", data.areas.secondPreference || "None");

    // =========================
    // 4. SKILLS & EXPERIENCE
    // =========================
    section("4. Skills & Experience");

    multiLine("Background", data.skills.background);
    field("Has Previous Experience", data.skills.hasPreviousExperience);

    if (data.skills.hasPreviousExperience === "Yes") {
      multiLine("Previous Experience", data.skills.previousExperience);
    }

    // Fix this line too — same Array.isArray guard:
    field(
      "Skills",
      Array.isArray(data.skills?.skills)
        ? data.skills.skills.join(", ")
        : data.skills?.skills || "N/A",
    );
    multiLine("Tools", data.skills.tools);

    // =========================
    // 5. LANGUAGE SKILLS
    // =========================
    section("5. Language Skills");

    field("English Level", data.languages.english);
    field("Arabic Level", data.languages.arabic);
    field("Other Languages", data.languages.otherLanguages || "None");

    // =========================
    // 6. MOTIVATION
    // =========================
    section("6. Motivation");

    multiLine("Why Deewan", data.motivation.why);
    multiLine("Learning Goals", data.motivation.learn);
    multiLine("Interest in Jordan / Arabic", data.motivation.jordan);

    // =========================
    // 7. ACCOMMODATION & CLASSES
    // =========================
    section("7. Accommodation & Activities");

    field("Need Accommodation", data.accommodation.needAccommodation);
    field("Arabic Classes", data.accommodation.arabicClasses);
    field("Cultural Activities", data.accommodation.culturalActivities);

    // =========================
    // 8. AVAILABILITY
    // =========================
    section("8. Availability & Commitment");

    field("Can Commit", data.availability.canCommit);

    multiLine(
      "Scheduling Limitations",
      data.availability.schedulingLimitations,
    );

    field("Applying Through", data.availability.applyingThrough);

    if (data.availability.applyingThrough === "Through a university program") {
      field("Coordinator Info", data.availability.coordinatorInfo);
    }

    // =========================
    // 9. DOCUMENTS
    // =========================
    section("9. Documents");

    field("CV Uploaded", "Yes");
    field("Motivation Letter", data.documents?.motivationLetter ? "Yes" : "No");
    field("Portfolio", data.documents?.portfolio ? "Yes" : "No");

    // =========================
    // 10. DECLARATION
    // =========================
    section("10. Final Declaration");

    field("Heard About", data.declaration.heardAbout);

    multiLine("Additional Info", data.declaration.anythingElse);

    field("Confirmed", data.declaration.confirmed ? "Yes" : "No");

    // ===== Footer =====
    doc.moveDown(2);
    doc
      .fontSize(9)
      .fillColor("gray")
      .text(
        "Deewan Institute for Languages and Cultural Studies — Amman, Jordan",
        { align: "center" },
      );

    doc.end();
  });
}

module.exports = generateInternshipPDF;
