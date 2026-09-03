import { Fragment, useState, useEffect, useCallback, useRef } from "react";
import { Modal } from "bootstrap";
import "bootstrap";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import styles from "./contact.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import FloatingActionButtonInstitute from "../../components/floatingbutton/floatingactionbuttoninstitute";
import { useTranslation } from "react-i18next";

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

function Contact() {
    const { t } = useTranslation();
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const [modalType, setModalType] = useState<"success" | "error">("success");

  useEffect(() => {
    document.title = "Contact Us";
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    [],
  );

  // ✅ Helper to show modal
  const showModal = (type: "success" | "error") => {
    setModalType(type);
    const modalEl = modalRef.current;
    if (modalEl) {
      const modal = new Modal(modalEl, { backdrop: "static" });
      modal.show();
    }
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/contact`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fullName: formData.fullName,
              email: formData.email,
              phoneNumber: formData.phone,
              message: formData.message,
            }),
          },
        );

        if (response.ok) {
          // ✅ Show success modal instead of alert
          showModal("success");
          setFormData({ fullName: "", email: "", phone: "", message: "" });
        } else {
          // ✅ Show error modal instead of alert
          showModal("error");
        }
      } catch (error) {
        console.error("Error:", error);
        // ✅ Show error modal instead of alert
        showModal("error");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData],
  );
  return (
    <Fragment>
      <NavBar />
      <FloatingActionButtonInstitute />


      {/* ── Contact Modal ── */}
      <div
        className="modal fade"
        ref={modalRef}
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className={`modal-content ${styles.contactModal}`}>
            <div className="modal-body text-center py-5 px-4">
              {/* Success State */}
              {modalType === "success" && (
                <>
                  <div className={styles.checkCircle}>
                    <svg viewBox="0 0 52 52" className={styles.checkSvg}>
                      <circle
                        cx="26"
                        cy="26"
                        r="25"
                        className={styles.checkCirclePath}
                      />
                      <path
                        d="M14 27 l8 8 l16-16"
                        className={styles.checkMark}
                      />
                    </svg>
                  </div>
                  <h3 className={`${styles.successTitle} mt-4`}>
                    {t("pages.contact.contact.text_message_sent")}</h3>
                  <p className={styles.successText}>
                    {t("pages.contact.contact.text_thank_you_for_reaching_out")}<br />
                    {t("pages.contact.contact.text_our_team_will_get_back_to_you_shortly")}</p>
                </>
              )}

              {/* Error State */}
              {modalType === "error" && (
                <>
                  <div className={styles.errorCircle}>
                    <svg viewBox="0 0 52 52" className={styles.checkSvg}>
                      <circle
                        cx="26"
                        cy="26"
                        r="25"
                        className={styles.errorCirclePath}
                      />
                      <path
                        d="M16 16 l20 20 M36 16 l-20 20"
                        className={styles.errorMark}
                      />
                    </svg>
                  </div>
                  <h3 className={`${styles.errorTitle} mt-4`}>
                    {t("pages.contact.contact.text_something_went_wrong")}</h3>
                  <p className={styles.successText}>
                    {t("pages.contact.contact.text_failed_to_send_your_message")}<br />
                    {t("pages.contact.contact.text_please_try_again_or_contact_us_directly")}</p>
                </>
              )}

              {/* Close Button */}
              <button
                className={`btn mt-3 ${styles.modalCloseBtn}`}
                data-bs-dismiss="modal"
              >
                {t("pages.contact.contact.text_close")}</button>
            </div>
          </div>
        </div>
      </div>

      <main className={`contactpage ${styles.contactPage}`}>
        {/* Banner Image */}
        <section
          className={`banner d-flex align-items-center ${styles.banner}`}
        >
          <div className="px-4 text-center d-flex flex-column align-items-center">
            <h1 className="display-5 fw-bold text-white my-4">{t("pages.contact.contact.text_contact_us")}</h1>
            <div className="col-lg-10 mx-auto">
              <p className="lead mb-4 text-center text-white">
                {t("pages.contact.contact.text_have_questions_need_clarification_or_ready_to_book")}</p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className={`form scroll-section ${styles.form}`}>
          <div className="title my-5">
            <h2 className={styles.sectionTitle}>{t("pages.contact.contact.text_fill_out_the_form")}</h2>
          </div>
          <div
            className={`border border-black p-5 ${styles.messageForm}`}
            id="messageForm"
          >
            <form onSubmit={handleSubmit} className="row">
              <div className="col-md-5">
                <div className="mb-3 d-flex flex-column">
                  <label
                    htmlFor="FullNameText"
                    className="form-label text-white"
                  >
                    {t("pages.contact.contact.text_full_name")}</label>
                  <input
                    type="text"
                    id="FullNameText"
                    name="fullName"
                    className="form-control"
                    placeholder={t("pages.contact.contact.placeholder_enter_your_full_name")}
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3 d-flex flex-column">
                  <label htmlFor="Email" className="form-label text-white">
                    {t("pages.contact.contact.text_email")}</label>
                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="form-control"
                    placeholder={t("pages.contact.contact.placeholder_enter_your_email")}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3 d-flex flex-column">
                  <label htmlFor="PhoneNum" className="form-label text-white">
                    {t("pages.contact.contact.text_phone_number")}</label>
                  <input
                    type="tel"
                    id="PhoneNum"
                    name="phone"
                    className="form-control"
                    placeholder={t("pages.contact.contact.placeholder_enter_your_phone_number")}
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="mb-3 d-flex flex-column">
                  <label
                    htmlFor="FullMessageText"
                    className="form-label text-white"
                  >
                    {t("pages.contact.contact.text_message")}</label>
                  <textarea
                    id="FullMessageText"
                    name="message"
                    className="form-control"
                    placeholder={t("pages.contact.contact.placeholder_enter_your_message")}
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3 d-flex justify-content-end">
                  <button
                    type="submit"
                    className={`py-2 btn btn-primary ${styles.submitBtn}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t("pages.contact.contact.text_sending") : t("pages.contact.contact.text_submit_your_message")}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>

        {/* Information Section */}
        <section className={`information scroll-section ${styles.information}`}>
          <div className="title my-5">
            <h2 className={styles.sectionTitle}>{t("pages.contact.contact.text_contact_information")}</h2>
          </div>

          <div className="d-flex flex-column col-lg-10 mx-auto">
            <p className={`lead text-start ${styles.para}`}>
              {t("pages.contact.contact.text_please_contact_deewan_institute_using_the_email_be")}</p>

            <div className="d-flex justify-content-center my-5">
              <div
                className={styles.contactBox}
                style={{ justifyContent: "center", textAlign: "center" }}
              >
                <img src="/assets/images/icons/mail.webp" alt={t("components.careers.careerform.text_email")} />
                <a href="mailto:arabic@deewaninstitute.com">
                  {t("pages.internship.internshipform.text_arabic_deewaninstitute_com")}</a>
              </div>
            </div>

            <p className={`lead text-start ${styles.para}`}>
              {t("pages.contact.contact.text_for_detailed_consultations_or_to_schedule_your_pro")}</p>

            <div className="row justify-content-center mt-4">
              <div className="col-md-6 d-flex flex-column">
                <div className={styles.contactBox}>
                  <img src="/assets/images/icons/mail.webp" alt={t("components.careers.careerform.text_email")} />
                  <a href="mailto:management@deewaninstitute.com">
                    {t("pages.contact.contact.text_management_deewaninstitute_com")}</a>
                </div>
                <div className={styles.contactBox}>
                  <img src="/assets/images/icons/mail.webp" alt={t("components.careers.careerform.text_email")} />
                  <a href="mailto:publicrelations.deewan@gmail.com">
                    {t("pages.contact.contact.text_publicrelations_deewan_gmail_com")}</a>
                </div>
              </div>
              <div className="col-md-6 d-flex flex-column">
                <div className={styles.contactBox}>
                  <img src="/assets/images/icons/phone.webp" alt={t("pages.contact.contact.alt_phone")} />
                  <a href="tel:+962778928188">{t("pages.contact.contact.text_962_7_7892_8188")}</a>
                </div>
                <div className={styles.contactBox}>
                  <img src="/assets/images/icons/whatsapp.webp" alt={t("pages.contact.contact.alt_whatsapp")} />
                  <a
                    href="https://wa.me/962778928188"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("pages.contact.contact.text_whatsapp_962_7_7892_8188")}</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Opening Hours*/}
        {/* <OpenHours data={{ backgroundColor: " ", color: "#000000" }} /> */}
        <section
          className={`openingHours scroll-section ${styles.openingHours}`}
        >
          <div className="title my-5">
            <h2 className={styles.sectionTitle}>{t("pages.contact.contact.text_opening_hours")}</h2>
          </div>
          <div className="row flex-wrap justify-content-center align-items-start g-3 mt-2">
            <div className="col-12 col-md-6 col-lg-4">
              <div className={styles.borderRight}>
                <h3 className="fw-bold">{t("pages.contact.contact.text_office_hours")}</h3>
                <ul>
                  <li>{t("pages.contact.contact.text_sun_thurs_9_00_am_20_00_pm")}</li>
                </ul>
                <span className={styles.italic}>
                  {t("pages.contact.contact.text_come_visit_us_we_d_love_to_see_you")}</span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className={styles.borderRight}>
                <h3 className="fw-bold">{t("pages.contact.contact.text_class_hours")}</h3>
                <ul>
                  <li>{t("pages.contact.contact.text_sun_thurs_9_00_am_20_00_pm")}</li>
                </ul>
                <span className={styles.italic}>
                  {t("pages.contact.contact.text_for_saturday_please_contact_us")}</span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className={styles.borderRight}>
                <h3 className="fw-bold">{t("pages.contact.contact.text_workspace")}</h3>
                <ul>
                  <li>{t("pages.contact.contact.text_sun_thurs_9_00_am_20_00_pm")}</li>
                </ul>
                <span className={styles.italic}>
                  {t("pages.contact.contact.text_it_is_provided_free_of_charge_to_deewan_students")}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className={`location scroll-section ${styles.location}`}>
          <div className="title my-5">
            <h2 className={styles.sectionTitle}>{t("pages.contact.contact.text_our_location")}</h2>
          </div>
          <div className="d-flex flex-column col-lg-10 mx-auto">
            <p className={`lead text-start ${styles.para}`}>
              {t("pages.contact.contact.text_deewan_institute_is_a_3_minute_walk_from_paris_cir")}</p>
            <div className={styles.locationMaps}>
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.1510040729036!2d35.92346077611702!3d31.95679987401723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5f8f0272092b%3A0x96d119fcca1fbf4c!2sDeewan%20Institute%20for%20Languages%20and%20Cultural%20Studies!5e0!3m2!1sen!2sjo!4v1761462171667!5m2!1sen!2sjo"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </Fragment>
  );
}

export default Contact;
