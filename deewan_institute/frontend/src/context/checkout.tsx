import "bootstrap";
import { Fragment, useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "bootstrap";
import styles from "./checkout.module.scss";
import { useShop } from "./shopcontext";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import FloatingActionButton from "../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../components/floatingbutton/floatingactionbuttoninstitute";
import { useTranslation } from "react-i18next";

type PaymentMethod = "cash" | "cliq" | "paypal" | "";

function Checkout() {
    const { t } = useTranslation();
  const modalRef = useRef<HTMLDivElement>(null);
  const errorModalRef = useRef<HTMLDivElement>(null);
  const paymentModalRef = useRef<HTMLDivElement>(null);
  const fillModalRef = useRef<HTMLDivElement>(null);
  const { cart, totalPrice } = useShop();
  const navigate = useNavigate();

  const DELIVERY_FEE = 3;
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("");
  const [validated, setValidated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/404", { replace: true });
    }
  }, [cart, navigate]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // ✅ Show "fill blanks" modal if form is invalid
    if (!form.checkValidity()) {
      setValidated(true);
      const fillModalEl = fillModalRef.current;
      if (fillModalEl) {
        const modal = new Modal(fillModalEl, { backdrop: true });
        modal.show();
      }
      return;
    }

    // ✅ Show "select payment" modal if no payment method
    if (!paymentMethod) {
      setValidated(true);
      const paymentModalEl = paymentModalRef.current;
      if (paymentModalEl) {
        const modal = new Modal(paymentModalEl, { backdrop: true });
        modal.show();
      }
      return;
    }

    const formData = new FormData(form);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/checkout`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            email: formData.get("email"),
            phone: formData.get("phone"), 
            address: formData.get("address"),
            region: formData.get("region"),
            notes: formData.get("notes"),
            paymentMethod,
            cart,
            totalPrice,
          }),
        },
      );

      if (response.ok) {
        // ✅ Show success modal
        const modalEl = modalRef.current;
        if (modalEl) {
          const modal = new Modal(modalEl, { backdrop: "static" });
          modal.show();
          setTimeout(() => {
            modal.hide();
            navigate("/publications");
          }, 3500);
        }
      } else {
        setErrorMessage("Failed to place order. Please try again.");
        const errorModalEl = errorModalRef.current;
        if (errorModalEl) {
          const modal = new Modal(errorModalEl, { backdrop: true });
          modal.show();
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(
        "Network error. Please check your connection and try again.",
      );
      const errorModalEl = errorModalRef.current;
      if (errorModalEl) {
        const modal = new Modal(errorModalEl, { backdrop: true });
        modal.show();
      }
    }
  };

  return (
    <Fragment>
      <NavBar />
      <FloatingActionButton />
      <FloatingActionButtonInstitute />

      {/* ── Success Modal ── */}
      <div
        className="modal fade"
        ref={modalRef}
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className={`modal-content ${styles.successModal}`}>
            <div className="modal-body text-center py-5 px-4">
              <div className={styles.checkCircle}>
                <svg viewBox="0 0 52 52" className={styles.checkSvg}>
                  <circle
                    cx="26"
                    cy="26"
                    r="25"
                    className={styles.checkCirclePath}
                  />
                  <path d="M14 27 l8 8 l16-16" className={styles.checkMark} />
                </svg>
              </div>
              <h3 className={`${styles.successTitle} mt-4`}>{t("context.checkout.text_order_placed")}</h3>
              <p className={styles.successText}>
                {t("context.checkout.text_your_order_has_been_checked_out_successfully")}<br />
                {t("context.checkout.text_please_check_your_email_for_confirmation")}</p>
              <p className={styles.successRedirect}>{t("context.checkout.text_redirecting_you_shortly")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Error Modal ── */}
      <div
        className="modal fade"
        ref={errorModalRef}
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className={`modal-content ${styles.errorModal}`}>
            <div className="modal-header border-0">
              <h5 className={`modal-title ${styles.errorTitle}`}>
                ⚠️ Something Went Wrong
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label={t("pages.contact.contact.text_close")}
              />
            </div>
            <div className="modal-body text-center py-3 px-4">
              <div className={styles.errorIcon}>✕</div>
              <p className={styles.errorMessage}>{errorMessage}</p>
            </div>
            <div className="modal-footer border-0 justify-content-center">
              <button
                type="button"
                className={styles.errorCloseBtn}
                data-bs-dismiss="modal"
              >
                {t("context.checkout.text_try_again")}</button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Payment Method Modal ── */}
      <div
        className="modal fade"
        ref={paymentModalRef}
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className={`modal-content ${styles.warningModal}`}>
            <div className="modal-header border-0">
              <h5 className={`modal-title ${styles.warningTitle}`}>
                💳 Payment Method Required
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label={t("pages.contact.contact.text_close")}
              />
            </div>
            <div className="modal-body text-center py-3 px-4">
              <p className={styles.warningMessage}>
                {t("context.checkout.text_please_select_a_payment_method_before_placing_your")}</p>
            </div>
            <div className="modal-footer border-0 justify-content-center">
              <button
                type="button"
                className={styles.warningCloseBtn}
                data-bs-dismiss="modal"
              >
                {t("context.checkout.text_ok_got_it")}</button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Fill Blanks Modal ── */}
      <div
        className="modal fade"
        ref={fillModalRef}
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className={`modal-content ${styles.warningModal}`}>
            <div className="modal-header border-0">
              <h5 className={`modal-title ${styles.warningTitle}`}>
                📋 Incomplete Form
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label={t("pages.contact.contact.text_close")}
              />
            </div>
            <div className="modal-body text-center py-3 px-4">
              <p className={styles.warningMessage}>
                {t("context.checkout.text_please_fill_in_all_required_fields_before_placing_")}</p>
            </div>
            <div className="modal-footer border-0 justify-content-center">
              <button
                type="button"
                className={styles.warningCloseBtn}
                data-bs-dismiss="modal"
              >
                {t("context.checkout.text_ok_got_it")}</button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Page Title ── */}
      <section className={`${styles.pageTitle} text-center`}>
        <h1>{t("context.checkout.text_checkout_page")}</h1>
        <hr className={styles.titleDivider} />
      </section>

      {/* ── Main Grid ── */}
      <section className={styles.checkoutGrid}>
        <div className="container-fluid px-4 px-md-5">
          <div className="row g-4 justify-content-center">
            {/* ── LEFT COLUMN ── */}
            <div className="col-12 col-lg-5 d-flex flex-column gap-4">
              {/* Checkout As Guest */}
              {/* <div className={styles.card}>
                <div
                  className={`d-flex justify-content-between align-items-start ${styles.cardHeader}`}
                >
                  <h2 className={styles.cardTitle}>Checkout As Guest:</h2> */}
                  {/* <button className={styles.signInBtn} type="button">
                    Sign In
                  </button> */}
                {/* </div>
                <hr className={styles.cardDivider} />
                <p className={styles.cardHint}>
                  Sign in to track your order and save your information for
                  faster delivery.
                </p>
              </div> */}

              {/* Shipping Details — now a real <form> */}
              <div className={styles.card}>
                <h2 className={styles.cardTitle}>{t("context.checkout.text_shipping_details")}</h2>
                <hr className={styles.cardDivider} />

                <form
                  id="shippingForm"
                  className={`${styles.shippingForm} mt-3 ${validated ? "was-validated" : ""}`}
                  noValidate
                  onSubmit={handleSubmit}
                >
                  {/* First Name / Last Name */}
                  <div className="row g-3 mb-3">
                    <div className="col-6">
                      <label htmlFor="firstName" className={styles.fieldLabel}>
                        {t("context.checkout.text_first_name")}</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className={`${styles.fieldInput} form-control`}
                        required
                        autoComplete="given-name"
                      />
                      <div className="invalid-feedback">{t("context.checkout.text_required")}</div>
                    </div>
                    <div className="col-6">
                      <label htmlFor="lastName" className={styles.fieldLabel}>
                        {t("context.checkout.text_last_name")}</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className={`${styles.fieldInput} form-control`}
                        required
                        autoComplete="family-name"
                      />
                      <div className="invalid-feedback">{t("context.checkout.text_required")}</div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label htmlFor="email" className={styles.fieldLabel}>
                      {t("pages.contact.contact.text_email")}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`${styles.fieldInput} form-control`}
                      required
                      autoComplete="email"
                    />
                    <div className="invalid-feedback">
                      {t("context.checkout.text_please_provide_a_valid_email_address")}</div>
                  </div>
                  {/* Phone Number */}
                    <div className="mb-3">
                      <label htmlFor="phone" className={styles.fieldLabel}>
                        {t("pages.contact.contact.text_phone_number")}</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className={`${styles.fieldInput} form-control`}
                        required
                        autoComplete="tel"
                        placeholder={t("context.checkout.placeholder_962_7x_xxx_xxxx")}
                      />
                      <div className="invalid-feedback">
                        {t("context.checkout.text_please_enter_your_phone_number")}</div>
                    </div>

                  {/* Address */}
                  <div className="mb-3">
                    <label htmlFor="address" className={styles.fieldLabel}>
                      {t("context.checkout.text_address")}</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className={`${styles.fieldInput} form-control`}
                      required
                      autoComplete="street-address"
                    />
                    <div className="invalid-feedback">
                      {t("context.checkout.text_please_enter_your_address")}</div>
                  </div>

                  {/* Region */}
                  <div className="mb-3">
                    <label htmlFor="region" className={styles.fieldLabel}>
                      {t("context.checkout.text_region")}</label>
                    <select
                      id="region"
                      name="region"
                      className={`${styles.fieldInput} form-select`}
                      required
                      autoComplete="address-level1"
                    >
                      <option value="">{t("context.checkout.text_select_region")}</option>
                      <option>{t("context.checkout.text_amman")}</option>
                      <option>{t("context.checkout.text_irbid")}</option>
                      <option>{t("context.checkout.text_zarqa")}</option>
                      <option>{t("context.checkout.text_aqaba")}</option>
                      <option>{t("context.checkout.text_mafraq")}</option>
                      <option>{t("context.checkout.text_balqa")}</option>
                      <option>{t("context.checkout.text_karak")}</option>
                      <option>{t("context.checkout.text_tafilah")}</option>
                      <option>{t("context.checkout.text_maan")}</option>
                      <option>{t("context.checkout.text_ajloun")}</option>
                      <option>{t("context.checkout.text_madaba")}</option>
                    </select>
                    <div className="invalid-feedback">
                      {t("context.checkout.text_please_select_a_region")}</div>
                  </div>

                  {/* Country */}
                  <div className="mb-3">
                    <label htmlFor="country" className={styles.fieldLabel}>
                      {t("context.checkout.text_country")}</label>
                    <input
                      type="text"
                      id="country"
                      className={`${styles.fieldInput} bg-light form-control`}
                      value="Jordan"
                      disabled
                      readOnly
                      tabIndex={-1}
                      autoComplete="country-name"
                    />
                  </div>
                  {/* Order Notes */}
                    <div className="mb-3">
                      <label htmlFor="notes" className={styles.fieldLabel}>
                        {t("context.checkout.text_order_notes")}<span style={{ fontWeight: 400, opacity: 0.6 }}>{t("context.checkout.text_optional")}</span>
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        className={`${styles.fieldInput} form-control`}
                        rows={3}
                        placeholder={t("context.checkout.placeholder_any_special_instructions_or_delivery_notes")}
                      />
                    </div>
                </form>
              </div>
              

              {/* Payment Method */}
              <div className={styles.card}>
                <h2 className={styles.cardTitle}>{t("context.checkout.text_payment_method")}</h2>
                <hr className={styles.cardDivider} />

                <div className={`${styles.paymentOptions} mt-3`}>
                  {(["cash", "cliq", "paypal"] as PaymentMethod[]).map(
                    (method) => (
                      <label
                        key={method}
                        className={`${styles.paymentOption} ${paymentMethod === method ? styles.paymentOptionSelected : ""}`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          id={method}
                          value={method}
                          checked={paymentMethod === method}
                          onChange={() => setPaymentMethod(method)}
                          className={styles.radioInput}
                        />
                        <span className={styles.radioCircle} />
                        <span className={styles.paymentLabel}>
                          {method === "cash" && "Cash"}
                          {method === "cliq" && "Cliq"}
                          {method === "paypal" && "PayPal"}
                        </span>
                      </label>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN — unchanged except the Place Order button */}
            <div className="col-12 col-lg-5 d-flex flex-column gap-4">
              {/* Order Summary */}
              <div className={styles.card}>
                <h2 className={styles.cardTitle}>{t("context.checkout.text_order_summary")}</h2>
                <hr className={styles.cardDivider} />

                <div className={`${styles.orderItems} mt-3`}>
                  {cart.length === 0 ? (
                    <p className={styles.emptyCart}>{t("context.checkout.text_your_cart_is_empty")}</p>
                  ) : (
                    cart.map((item) => (
                      <div
                        key={item.id}
                        className={`d-flex align-items-center justify-content-between gap-3 ${styles.orderItem}`}
                      >
                        {/* LEFT: Image + Title */}
                        <div className="d-flex align-items-center gap-3 flex-grow-2">
                          <img
                            src={item.image}
                            alt={item.imageAlt}
                            className={styles.orderItemImg}
                          />
                          <p
                            className={`${styles.orderItemTitle} mb-0 text-wrap flex-grow-1`}
                          >
                            {item.title}
                            {item.subtitle && ` ${item.subtitle}`}
                          </p>
                        </div>

                        {/* MIDDLE: Quantity
                        <span className={styles.orderItemQty}>
                          {item.quantity}
                        </span> */}

                        {/* RIGHT: Price */}
                        <span className={styles.orderItemPrice}>
                          {(item.price || 0) * item.quantity} JOD
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Order Subtotal */}
              <div className={styles.card}>
                <h2 className={`${styles.cardTitle} ${styles.cardTitleSm}`}>
                  {t("context.checkout.text_order_subtotal")}</h2>
                <hr className={styles.cardDivider} />

                <div className={`${styles.subtotalRows} mt-3`}>
                  <div
                    className={`d-flex justify-content-between ${styles.subtotalRow}`}
                  >
                    <span className={styles.subtotalLabel}>{t("context.checkout.text_subtotal")}</span>
                    <span className={styles.subtotalValue}>
                      {totalPrice} JD
                    </span>
                  </div>
                  <div
                    className={`d-flex justify-content-between ${styles.subtotalRow}`}
                  >
                    <span className={styles.subtotalLabel}>{t("context.checkout.text_delivery")}</span>
                    <span className={styles.subtotalValue}>
                      {DELIVERY_FEE} JD
                    </span>
                  </div>

                  <hr className={styles.subtotalInnerDivider} />

                  <div
                    className={`d-flex justify-content-between ${styles.subtotalRow}`}
                  >
                    <span
                      className={`${styles.subtotalLabel} ${styles.totalLabel}`}
                    >
                      {t("context.checkout.text_total")}</span>
                    <span
                      className={`${styles.subtotalValue} ${styles.totalValue}`}
                    >
                      {totalPrice + DELIVERY_FEE} JD
                    </span>
                  </div>
                </div>
              </div>
              {/* Place Order */}
              <button
                type="submit"
                form="shippingForm"
                className={`${styles.placeOrderBtn} w-100 mt-4`}
                disabled={cart.length === 0}
              >
                Place Order &nbsp;→
              </button>

              <button
                type="button"
                className={`${styles.continueBtn} w-100 mt-3`}
                onClick={() => navigate("/publications")}
              >
                ← &nbsp;Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}
export default Checkout;
