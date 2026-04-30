import "bootstrap";
import styles from "../navbar/navbar.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useShop } from "../../context/shopcontext";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";

const SHOP_ROUTES = ["/publications", "/wishlist", "/cart"];

function NavBar() {
  const { wishlistCount, cartCount } = useShop();
  const { pathname } = useLocation();

  const showShopIcons =
    SHOP_ROUTES.some((route) => pathname === route) ||
    pathname.startsWith("/publications/");

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  return (
    <>
      {/* ── Navbar ── */}
      <nav className={`navbar navbar-expand-xl`} id={styles.navBar} style={{ backgroundColor: "transparent" }}>
        <div className="container">
          {/* ── Mobile Header (max 767px) ── */}
          <div
            className={`d-flex d-md-none justify-content-between align-items-center w-100 ${styles.mobileHeader}`}
          >
            <NavLink className="navbar-brand mb-0" to="/">
              <img
                src="/assets/images/logos/horizontalLogo.png"
                alt="Deewan Institute Logo"
                id={styles.mainLogo}
              />
            </NavLink>

            <div className={styles.mobileRightGroup}>
              {/* Shop Icons on Mobile */}
              {showShopIcons && (
                <div className={styles.shopIconsInline}>
                  <NavLink
                    className="position-relative"
                    to="/wishlist"
                    aria-label="Wishlist"
                  >
                    <img
                      src="/assets/images/icons/heart_brown.png"
                      alt="Wishlist"
                      id={styles.wishlistIcon}
                    />
                    {wishlistCount > 0 && (
                      <span className={styles.badge}>{wishlistCount}</span>
                    )}
                  </NavLink>

                  <NavLink
                    className="position-relative"
                    to="/cart"
                    aria-label="Cart"
                  >
                    <img
                      src="/assets/images/icons/cart_brown.png"
                      alt="Cart"
                      id={styles.cartIcon}
                    />
                    {cartCount > 0 && (
                      <span className={styles.badge}>{cartCount}</span>
                    )}
                  </NavLink>
                </div>
              )}

              <button
                className={styles.toggler}
                onClick={() => setIsOverlayOpen(true)}
                aria-label="Open menu"
              >
                <RiMenu3Line className={styles.togglerIcon} />
              </button>
            </div>
          </div>

          {/* ── Tablet Header (768px - 1024px) ── */}

          <div
            className={`d-none d-md-flex d-xl-none align-items-center w-100 ${styles.tabletHeader}`}
          >
            {/* Invisible spacer to balance the toggler */}
            <div className={styles.tabletSpacer} />

            {/* Centered Logo */}
            <NavLink
              className={`navbar-brand mb-0 ${styles.tabletLogo}`}
              to="/"
            >
              <img
                src="/assets/images/logos/horizontalLogo.png"
                alt="Deewan Institute Logo"
                id={styles.mainLogo}
              />
            </NavLink>

            {/* Right side: shop icons + toggler */}
            <div className={styles.mobileRightGroup}>
              {showShopIcons && (
                <div className={styles.shopIconsInline}>
                  <NavLink
                    className="position-relative"
                    to="/wishlist"
                    aria-label="Wishlist"
                  >
                    <img
                      src="/assets/images/icons/heart_brown.png"
                      alt="Wishlist"
                      id={styles.wishlistIcon}
                    />
                    {wishlistCount > 0 && (
                      <span className={styles.badge}>{wishlistCount}</span>
                    )}
                  </NavLink>

                  <NavLink
                    className="position-relative"
                    to="/cart"
                    aria-label="Cart"
                  >
                    <img
                      src="/assets/images/icons/cart_brown.png"
                      alt="Cart"
                      id={styles.cartIcon}
                    />
                    {cartCount > 0 && (
                      <span className={styles.badge}>{cartCount}</span>
                    )}
                  </NavLink>
                </div>
              )}

              <button
                className={styles.toggler}
                onClick={() => setIsOverlayOpen(true)}
                aria-label="Open menu"
              >
                <RiMenu3Line className={styles.togglerIcon} />
              </button>
            </div>
          </div>

          {/* ── Desktop Menu (1025px+) ── */}
          <div className="collapse navbar-collapse d-none d-xl-flex justify-content-center align-items-center w-100">
            {/* Left Group */}
            <div className={`${styles.border} p-2`}>
              <ul className="navbar-nav" id={styles.navbarNav}>
                <li className="nav-item" id={styles.navitem}>
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item" id={styles.navitem}>
                  <NavLink className="nav-link" to="/about">
                    About Us
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Center Logo */}
            <NavLink className="navbar-brand" to="/">
              <img
                src="/assets/images/logos/nobgLogo.webp"
                alt="Deewan Institute Logo"
                id={styles.mainLogo}
              />
            </NavLink>

            {/* Right Group */}
            <div className={`${styles.border} p-2`}>
              <ul className="navbar-nav" id={styles.navbarNav}>
                <li className="nav-item" id={styles.navitem}>
                  <button
                    className={`nav-link btn btn-link ${styles.navitem}`}
                    onClick={() => setIsOverlayOpen(true)}
                  >
                    What We Offer
                  </button>
                </li>
                <li className="nav-item" id={styles.navitem}>
                  <NavLink className="nav-link" to="/contact">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* ── Shop Icons Desktop (inside nav, right side) ── */}
            {showShopIcons && (
              <div
                className={`d-flex align-items-center ${styles.shopIconsDesktop}`}
              >
                {" "}
                <NavLink
                  className="position-relative"
                  to="/wishlist"
                  aria-label="Wishlist"
                >
                  <img
                    src="/assets/images/icons/heart_brown.png"
                    alt="Wishlist"
                    id={styles.wishlistIcon}
                  />
                  {wishlistCount > 0 && (
                    <span className={styles.badge}>{wishlistCount}</span>
                  )}
                </NavLink>
                <NavLink
                  className="position-relative"
                  to="/cart"
                  aria-label="Cart"
                >
                  <img
                    src="/assets/images/icons/cart_brown.png"
                    alt="Cart"
                    id={styles.cartIcon}
                  />
                  {cartCount > 0 && (
                    <span className={styles.badge}>{cartCount}</span>
                  )}
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* ── Backdrop ── */}
      <div
        className={`${styles.backdrop} ${isOverlayOpen ? styles.backdropOpen : ""}`}
        onClick={() => setIsOverlayOpen(false)}
      />

      {/* ── Overlay ── */}
      <div
        className={`${styles.overlay} ${isOverlayOpen ? styles.overlayOpen : ""}`}
      >
        <div className={styles.overlayInner}>
          {/* Close Button */}
          <button
            className={styles.closeBtn}
            onClick={() => setIsOverlayOpen(false)}
          >
            ✕
          </button>

          {/* Logo */}
          <NavLink to="/" onClick={() => setIsOverlayOpen(false)}>
            <img
              src="/assets/images/logos/nobgLogo.webp"
              alt="Deewan Institute Logo"
              className={styles.overlayLogo}
            />
          </NavLink>

          {/* ── Links ── */}
          <div className={styles.overlayLinks}>
            {/* Mobile + Tablet Nav Links */}
            <div className={`d-xl-none ${styles.mobileLinks}`}>
              <NavLink
                to="/"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                Contact Us
              </NavLink>
              <div className={styles.divider} />
            </div>

            {/* Courses Column */}
            <div className={styles.overlayColumn}>
              <h3 className={styles.overlayTitle}>
                Arabic Language and Culture
              </h3>
              <NavLink
                to="/arabic-courses"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                Arabic Courses
              </NavLink>
              <NavLink
                to="/calculator"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                Arabic Calculator Price
              </NavLink>
              <NavLink
                to="/arabic-courses/arabi-talk"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                Arabi Talk
              </NavLink>
              <NavLink
                to="/arabic-courses/intensive-program"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                Intensive Summer and Fall Program
              </NavLink>
              <NavLink
                to="/bildungsurlaub"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                Bildungsurlaub Courses
              </NavLink>
              <NavLink
                to="/cultureEvents"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                Culture Events
              </NavLink>
            </div>

            {/* History Column */}
            <div className={styles.overlayColumn}>
              <h3 className={styles.overlayTitle}>Middle Eastern Studies</h3>
              <NavLink
                to="/middle-eastern-studies/history-of-the-middle-east"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                History of the Middle East
              </NavLink>
              <NavLink
                to="/middle-eastern-studies/modern-history-of-the-middle-east"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                Modern History of the Middle East
              </NavLink>
              <NavLink
                to="/middle-eastern-studies/the-zionist-project-in-palestine"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                The Zionist Project in Palestine
              </NavLink>
              <NavLink
                to="/middle-eastern-studies/people-of-the-middle-east"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                People of the Middle East
              </NavLink>
            </div>

            {/* Deewan Library Column */}
            <div className={styles.overlayColumn}>
              <h3 className={styles.overlayTitle}>Deewan Library</h3>
              <NavLink
                to="/publications"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                Publications
              </NavLink>
              <NavLink
                to="/podcasts"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                Podcasts
              </NavLink>
            </div>

            {/* Accommodation Column */}
            <div className={styles.overlayColumn}>
              <h3 className={styles.overlayTitle}>Accommodation</h3>
              <NavLink
                to="/accommodation-and-student-services/trips"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                Trips
              </NavLink>
              <NavLink
                to="/accommodation-and-student-services/visa"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                Visa
              </NavLink>
            </div>

            {/* Foreign Language Column */}
            <div className={styles.overlayColumn}>
              <h3 className={styles.overlayTitle}>Foreign Languages</h3>
              <NavLink
                to="/foreign-languages/french-course"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                French
              </NavLink>
              <NavLink
                to="/foreign-languages/german-course"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                German
              </NavLink>
              <NavLink
                to="/foreign-languages/spanish-course"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                Spanish
              </NavLink>
              <NavLink
                to="/foreign-languages/english-course"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                English
              </NavLink>
            </div>

            {/* Join Our Team Column */}
            <div className={styles.overlayColumn}>
              <h3 className={styles.overlayTitle}>Join Our Team</h3>
              <NavLink
                to="/careers"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                Careers
              </NavLink>
               <NavLink
                to="/internship"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                Internships
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
