import "bootstrap";
import styles from "../navbar/navbar.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useShop } from "../../context/shopcontext";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";

const SHOP_ROUTES = ["/publications", "/wishlist", "/cart"];

const overlayColumns = [
  {
    id: "arabic",
    title: "Arabic Language & Culture",
    links: [
      { label: "Arabic Courses", to: "/arabic-courses" },
      { label: "Arabic Calculator Price", to: "/calculator" },
      { label: "Arabi Talk", to: "/arabic-courses/arabi-talk" },
      { label: "Intensive Summer and Fall Program", to: "/arabic-courses/intensive-program" },
      { label: "Bildungsurlaub Courses", to: "/bildungsurlaub" },
      { label: "Culture Events", to: "/cultureEvents" },
    ],
  },
  {
    id: "middle-east",
    title: "Middle Eastern Studies",
    links: [
      { label: "History of the Middle East", to: "/middle-eastern-studies/history-of-the-middle-east" },
      { label: "Modern History of the Middle East", to: "/middle-eastern-studies/modern-history-of-the-middle-east" },
      { label: "The Zionist Project in Palestine", to: "/middle-eastern-studies/the-zionist-project-in-palestine" },
      { label: "People of the Middle East", to: "/middle-eastern-studies/people-of-the-middle-east" },
    ],
  },
  {
    id: "library",
    title: "Deewan Library",
    links: [
      { label: "Publications", to: "/publications" },
      { label: "Podcasts", to: "/podcasts" },
    ],
  },
  {
    id: "accommodation",
    title: "Accommodation",
    links: [
      { label: "Trips", to: "/accommodation-and-student-services/trips" },
      { label: "Visa", to: "/accommodation-and-student-services/visa" },
    ],
  },
  {
    id: "languages",
    title: "Foreign Languages",
    links: [
      { label: "French", to: "/foreign-languages/french-course" },
      { label: "German", to: "/foreign-languages/german-course" },
      { label: "Spanish", to: "/foreign-languages/spanish-course" },
      { label: "English", to: "/foreign-languages/english-course" },
    ],
  },
  {
    id: "team",
    title: "Join Our Team",
    links: [
      { label: "Careers", to: "/careers" },
      { label: "Internships", to: "/internship" },
    ],
  },
    
];

function NavBar() {
  const { wishlistCount, cartCount } = useShop();
  const { pathname } = useLocation();

  const showShopIcons =
    SHOP_ROUTES.some((route) => pathname === route) ||
    pathname.startsWith("/publications/");

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (id: string) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  const closeAll = () => {
    setIsOverlayOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
      {/* ── Navbar ── */}
      <nav className={`navbar navbar-expand-xl`} id={styles.navBar} style={{ backgroundColor: "transparent" }}>
        <div className="container">
          {/* ── Mobile Header (max 767px) ── */}
          <div className={`d-flex d-md-none justify-content-between align-items-center w-100 ${styles.mobileHeader}`}>
            <NavLink className="navbar-brand mb-0" to="/">
              <img
                src="/assets/images/logos/horizontalLogo.png"
                alt="Deewan Institute Logo"
                id={styles.mainLogo}
              />
            </NavLink>

            <div className={styles.mobileRightGroup}>
              {showShopIcons && (
                <div className={styles.shopIconsInline}>
                  <NavLink className="position-relative" to="/wishlist" aria-label="Wishlist">
                    <img src="/assets/images/icons/heart_brown.png" alt="Wishlist" id={styles.wishlistIcon} />
                    {wishlistCount > 0 && <span className={styles.badge}>{wishlistCount}</span>}
                  </NavLink>
                  <NavLink className="position-relative" to="/cart" aria-label="Cart">
                    <img src="/assets/images/icons/cart_brown.png" alt="Cart" id={styles.cartIcon} />
                    {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
                  </NavLink>
                </div>
              )}
              <button className={styles.toggler} onClick={() => setIsOverlayOpen(true)} aria-label="Open menu">
                <RiMenu3Line className={styles.togglerIcon} />
              </button>
            </div>
          </div>

          {/* ── Tablet Header (768px - 1279px) ── */}
          <div className={`d-none d-md-flex d-xl-none align-items-center w-100 ${styles.tabletHeader}`}>
            <div className={styles.tabletSpacer} />
            <NavLink className={`navbar-brand mb-0 ${styles.tabletLogo}`} to="/">
              <img
                src="/assets/images/logos/horizontalLogo.png"
                alt="Deewan Institute Logo"
                id={styles.mainLogo}
              />
            </NavLink>
            <div className={styles.mobileRightGroup}>
              {showShopIcons && (
                <div className={styles.shopIconsInline}>
                  <NavLink className="position-relative" to="/wishlist" aria-label="Wishlist">
                    <img src="/assets/images/icons/heart_brown.png" alt="Wishlist" id={styles.wishlistIcon} />
                    {wishlistCount > 0 && <span className={styles.badge}>{wishlistCount}</span>}
                  </NavLink>
                  <NavLink className="position-relative" to="/cart" aria-label="Cart">
                    <img src="/assets/images/icons/cart_brown.png" alt="Cart" id={styles.cartIcon} />
                    {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
                  </NavLink>
                </div>
              )}
              <button className={styles.toggler} onClick={() => setIsOverlayOpen(true)} aria-label="Open menu">
                <RiMenu3Line className={styles.togglerIcon} />
              </button>
            </div>
          </div>

          {/* ── Desktop Menu (1280px+) ── */}
          <div className="collapse navbar-collapse d-none d-xl-flex justify-content-center align-items-center w-100">
            {/* Left Group */}
            <div className={`${styles.border} p-2`}>
              <ul className="navbar-nav" id={styles.navbarNav}>
                <li className="nav-item" id={styles.navitem}>
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item" id={styles.navitem}>
                  <NavLink className="nav-link" to="/about">About Us</NavLink>
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
                  <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                </li>
              </ul>
            </div>
            

            {/* Shop Icons Desktop */}
            {showShopIcons && (
              <div className={`d-flex align-items-center ${styles.shopIconsDesktop}`}>
                <NavLink className="position-relative" to="/wishlist" aria-label="Wishlist">
                  <img src="/assets/images/icons/heart_brown.png" alt="Wishlist" id={styles.wishlistIcon} />
                  {wishlistCount > 0 && <span className={styles.badge}>{wishlistCount}</span>}
                </NavLink>
                <NavLink className="position-relative" to="/cart" aria-label="Cart">
                  <img src="/assets/images/icons/cart_brown.png" alt="Cart" id={styles.cartIcon} />
                  {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* ── Backdrop ── */}
      <div
        className={`${styles.backdrop} ${isOverlayOpen ? styles.backdropOpen : ""}`}
        onClick={closeAll}
      />

      {/* ── Overlay ── */}
      <div className={`${styles.overlay} ${isOverlayOpen ? styles.overlayOpen : ""}`}>
        <div className={styles.overlayInner}>
          {/* Close Button */}
          <button className={styles.closeBtn} onClick={closeAll}>✕</button>

          {/* Logo */}
          <NavLink to="/" onClick={closeAll}>
            <img
              src="/assets/images/logos/nobgLogo.webp"
              alt="Deewan Institute Logo"
              className={styles.overlayLogo}
            />
          </NavLink>

          {/* ── Links ── */}
          <div className={styles.overlayLinks}>

            {/* ── Mobile + Tablet: flat links ── */}
            <div className={`d-xl-none ${styles.mobileLinks}`}>
              <NavLink to="/" className={styles.overlayLink} onClick={closeAll}>Home</NavLink>
              <NavLink to="/about" className={styles.overlayLink} onClick={closeAll}>About Us</NavLink>
              <NavLink to="/contact" className={styles.overlayLink} onClick={closeAll}>Contact Us</NavLink>
              <NavLink to="/newsletter" className={styles.overlayLink} onClick={closeAll}>Newsletter</NavLink>

              <div className={styles.divider} />
            </div>

            {/* ── Mobile + Tablet: columns flat (unchanged) ── */}
            <div className={`d-xl-none ${styles.mobileColumnsWrap}`}>
              {overlayColumns.map((col) => (
                <div key={col.id} className={styles.overlayColumn}>
                  <h3 className={styles.overlayTitle}>{col.title}</h3>
                  {col.links.map((link) => (
                    <NavLink key={link.to} to={link.to} className={styles.overlayLink} onClick={closeAll}>
                      {link.label}
                    </NavLink>
                  ))
                  }
                  
                </div>
                
              ))}

            </div>

            {/* ── Desktop only: dropdown accordion columns ── */}
            <div className={`d-none d-xl-flex ${styles.desktopDropdownsWrap}`}>
              {overlayColumns.map((col) => (
                <div
                  key={col.id}
                  className={`${styles.desktopDropdown} ${openDropdown === col.id ? styles.desktopDropdownOpen : ""}`}
                >
                  <button
                    className={styles.desktopDropdownTrigger}
                    onClick={() => toggleDropdown(col.id)}
                    aria-expanded={openDropdown === col.id}
                  >
                    <span>{col.title}</span>
                    <RiArrowDownSLine
                      className={`${styles.dropdownChevron} ${openDropdown === col.id ? styles.dropdownChevronOpen : ""}`}
                    />
                  </button>

                  <div className={styles.desktopDropdownPanel}>
                    {col.links.map((link) => (
                      <NavLink key={link.to} to={link.to} className={styles.desktopDropdownLink} onClick={closeAll}>
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* ── Desktop only: Newsletter Card ── */}
            <NavLink
              to="/newsletter"
              className={`d-none d-xl-flex ${styles.newsletterCard}`}
              onClick={closeAll}
              aria-label="newsletter"
            >
              <div className={styles.newsletterCardInner}>
                <img
                  src="/assets/images/others/news.png"
                  alt="Deewan Newsletter"
                  className={styles.newsletterCardImg}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className={styles.newsletterCardOverlay}>
                  <div className={styles.newsletterCardBadge}>Newsletter</div>
                  <p className={styles.newsletterCardTitle}>Stay in the know</p>
                  <p className={styles.newsletterCardSub}>
                    Arabic culture, events & stories and more.
                  </p>
                  <span className={styles.newsletterCardCta}>See More →</span>
                </div>
              </div>
            </NavLink>

          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;