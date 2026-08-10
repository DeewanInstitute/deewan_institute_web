import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./wishlist.module.scss";
import { useShop } from "./shopcontext"; 
import { useScrollAnimation } from "../../hooks/scrollAnimations";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import FloatingActionButton from "../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../components/floatingbutton/floatingactionbuttoninstitute";
import { useTranslation } from "react-i18next";

function Wishlist() {
    const { t } = useTranslation();
  useScrollAnimation();

  const { wishlist, removeFromWishlist, addToCart } = useShop();
  const navigate = useNavigate();

  const handleCardClick = (item: any) => {
    const route =
      item.type === "podcast"
        ? `/publications/podcast/${item.id}`
        : `/publications/book/${item.id}`;
    navigate(route);
  };

  return (
    <Fragment>
      <NavBar />
      <FloatingActionButton />
      <FloatingActionButtonInstitute />
      <section className={`${styles.wishlist} py-3 mt-2 mb-5`}>
        {/* ── Title ── */}
        <div className={styles.titleWrapper}>
          <h2>{t("context.wishlist.text_wishlist")}</h2>
        </div>

        {/* ── Empty state ── */}
        {wishlist.length === 0 ? (
          <div className={styles.emptyState}>
            <span className={styles.emptyIcon}>♡</span>
            <p>{t("context.wishlist.text_your_wishlist_is_empty")}</p>
            <button
              className={styles.browseBtn}
              onClick={() => navigate("/publications")}
            >
              {t("context.wishlist.text_browse_publications")}</button>
          </div>
        ) : (
          <div className={`${styles.list} scroll-section`}>
            <div className="row justify-content-start" id={styles.row}>
              {wishlist.map((item) => (
                <div
                  key={item.id}
                  className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                >
                  <div className={styles.bookCard}>
                    {/* Cover — click navigates to detail */}
                    <img
                      src={item.image}
                      className={styles.bookCover}
                      alt={item.imageAlt}
                      onClick={() => handleCardClick(item)}
                    />

                    <div className={styles.bookDetails}>
                      <p
                        className={styles.bookTitle}
                        onClick={() => handleCardClick(item)}
                      >
                        {item.title}
                        {item.subtitle && (
                          <>
                            <br />
                            <span className={styles.bookSubtitle}>
                              {item.subtitle}
                            </span>
                          </>
                        )}
                      </p>

                      <div className={styles.bookActions}>

                        <button
                          onClick={() => addToCart(item)}
                          className={`${styles.iconBtn} ${styles.cart}`}
                          aria-label={t("context.wishlist.aria_label_add_to_cart")}
                          style={{ border: 'none', cursor: 'pointer', background: 'none' }}
                        >
                          <img src="/assets/images/icons/cart_brown.webp" alt="cart" />
                        </button>

                        {/* Remove from wishlist */}
                        <button
                          className={styles.removeBtn}
                          onClick={() => removeFromWishlist(item.id)}
                          aria-label={t("context.wishlist.aria_label_remove_from_wishlist")}
                          title={t("context.wishlist.title_remove")}
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}


            </div>
<div className="row justify-content-center">
  <div className="col-11 col-sm-8 col-md-6 col-lg-4"> 
    <button 
      className={`${styles.browseBtn} w-100`} 
      onClick={() => navigate("/publications")}
    >
      {t("context.wishlist.text_back_to_publications")}</button>
  </div>
</div>




          </div>
        )}
      </section>

      <Footer />
    </Fragment>
  );
}

export default Wishlist;
