import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './cart.module.scss';
import { useShop } from './shopcontext';
import NavBar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import FloatingActionButton from '../components/floatingbutton/floatingactionbutton';
import FloatingActionButtonInstitute from '../components/floatingbutton/floatingactionbuttoninstitute';
import { useTranslation } from "react-i18next";

function Cart() {
    const { t } = useTranslation();
    const { cart, updateQuantity, removeFromCart, totalPrice } = useShop();
    const navigate = useNavigate();
    const DELEVERY_FEE = 3;

    
    return (
        <Fragment>
            <NavBar />
            <FloatingActionButton />
            <FloatingActionButtonInstitute />
            <section className={`${styles.cart} py-3 mt-2 mb-5`}>
                <div className={styles.title}>
                    <h2>{t("context.cart.text_your_cart")}</h2>
                </div>

                {cart.length === 0 ? (
                    <div className={styles.emptyState}>
                        <p>{t("context.cart.text_your_cart_is_currently_empty")}</p>
                        <button className={styles.browseBtn} onClick={() => navigate('/publications')}>
                            {t("context.wishlist.text_browse_publications")}</button>
                    </div>
                ) : (
                    <>
                        {cart.map((item) => (
                            <div key={item.id} className={`row justify-content-center align-items-center py-4 mx-0 ${styles.cartRow}`}>

                                {/* Book Cover */}
                                <div className="col-12 col-md-3 d-flex justify-content-center align-items-center mb-3 mb-md-0">
                                    <img src={item.image} alt={item.imageAlt} className={styles.bookCover} />
                                </div>

                                <div className={`d-none d-md-block ${styles.verticalLine}`}></div>

                                {/* Title + Quantity */}
                                <div className="col-12 col-md-3 d-flex flex-column justify-content-center align-items-center mb-3 mb-md-0">
                                    <h4 className={styles.bookTitle}>{item.title}</h4>
                                    {item.subtitle && <h4 className={styles.bookTitle}>{item.subtitle}</h4>}
                                    <div className={`d-flex flex-row justify-content-center align-items-center mt-3 ${styles.counter}`}>
                                        <button className={styles.qtyBtn} onClick={() => updateQuantity(item.id, -1)}>
                                            <img src="/assets/images/icons/minusbutton.webp" alt="Minus" />
                                        </button>
                                        <p className={styles.quantity}>{item.quantity}</p>
                                        <button className={styles.qtyBtn} onClick={() => updateQuantity(item.id, 1)}>
                                            <img src="/assets/images/icons/plusbutton.webp" alt="Plus" />
                                        </button>
                                    </div>
                                </div>

                                <div className={`d-none d-md-block ${styles.verticalLine}`}></div>

                                {/* Price + Remove */}
                                <div className="col-12 col-md-2 d-flex justify-content-center align-items-center">
                                    <p className={styles.price}>{((item.price ?? 0) * item.quantity).toFixed(2)} JD</p>
                                    <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>✕</button>
                                </div>

                                <hr className={styles.divider} />
                            </div>
                        ))}

                        {/* Cart Total */}
                        <div className="row justify-content-end mx-0">
                            <div className={`col-12 col-md-6 col-lg-4 ${styles.cartTotal}`}>
                                <div className={styles.totalInfo}>
                                    <div className="d-flex flex-row justify-content-between">
                                        <span className={styles.bold}>{t("context.checkout.text_subtotal")}</span>
                                        <p className={styles.leadText}>{totalPrice.toFixed(2)} JD</p>
                                    </div>
                                    <div className="d-flex flex-row justify-content-between w-100">
                                        <span className={styles.bold}>{t("context.checkout.text_delivery")}</span>
                                        <p className={styles.leadText}>{DELEVERY_FEE} JD</p>
                                    </div>
                                    <hr className={styles.divider} />
                                    <div className="d-flex flex-row justify-content-between w-100">
                                        <span className={styles.bold}>{t("pages.calculator.calculator.text_total_cost")}</span>
                                        <p className={styles.leadText}>{(totalPrice + DELEVERY_FEE).toFixed(2)} JD</p>
                                    </div>
                                    <button
                                        className={styles.checkoutBtn}
                                        onClick={() => navigate('/checkout')}
                                    >
                                        {t("context.cart.text_checkout")}</button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                <div className="row justify-content-center">
                <button
                className={styles.backBtn}
                onClick={() => navigate('/publications')}
            >
                {t("context.wishlist.text_back_to_publications")}</button>
            </div>
            </section>
            
            <Footer />
        </Fragment>
    );
}

export default Cart;