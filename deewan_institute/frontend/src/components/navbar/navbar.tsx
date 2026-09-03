import "bootstrap";
import styles from "../navbar/navbar.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useShop } from "../../context/shopcontext";
import { useState, useEffect, useRef } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../languageswitcher/languageswitcher";

const SHOP_ROUTES = ["/publications", "/wishlist", "/cart"];

const createOverlayColumns = (t: ReturnType<typeof useTranslation>["t"]) => [
  {
    id: "arabic",
    title: t("components.navbar.navbar.title_arabic_language_and_culture"),
    links: [
      { label: t("pages.arabiccourses.arabicCourses.title_arabic_courses"), to: "/arabic-courses" },
      { label: t("components.navbar.navbar.label_arabic_calculator_price"), to: "/calculator" },
      {
        label: (
          <>
            {t("components.navbar.navbar.text_intensive_summer")}<br />
            {t("components.navbar.navbar.text_and_fall_program")}</>
        ),
        to: "/arabic-courses/intensive-program",
      },
      { label: t("pages.bildungsurlaub.bildungsurlaub.text_bildungsurlaub_courses"), to: "/bildungsurlaub" },
      { label: t("components.navbar.navbar.label_culture_events"), to: "https://deewantourism.com/cultureevents" },
    ],
  },
  {
    id: "middle-east",
    title: t("pages.arabiccourses.middleeastern.middleeasternstudies.title_middle_eastern_studies"),
    links: [
      {
        label: (
          <>
            {t("components.navbar.navbar.text_history_of_the")}<br />
            {t("components.navbar.navbar.text_the_middle_east")}{" "}
          </>
        ),
        to: "/middle-eastern-studies/history-of-the-middle-east",
      },
      {
        label: (
          <>
            {t("components.navbar.navbar.text_modern_history_of")}<br />
            {t("components.navbar.navbar.text_the_middle_east")}</>
        ),
        to: "/middle-eastern-studies/modern-history-of-the-middle-east",
      },
      {
        label: (
          <>
            {t("components.navbar.navbar.text_the_zionist_project")}<br /> {t("components.navbar.navbar.text_in_palestine")}</>
        ),
        to: "/middle-eastern-studies/the-zionist-project-in-palestine",
      },
      {
        label: t("pages.history.peopleME.title_people_of_the_middle_east"),
        to: "/middle-eastern-studies/people-of-the-middle-east",
      },
    ],
  },
  {
    id: "learning-resources",
    title: t("components.navbar.navbar.title_learning_resources"),
    links: [
      { label: t("pages.books.publications.title_publications"), to: "/publications" },
      { label: t("pages.podcasts.podcasts.title_podcasts"), to: "/podcasts" },
      { label: t("pages.audiobooks.navbar.audio_books"), to:"/audiobooks"}
    ],
  },
  {
    id: "Student Services",
    title: t("components.navbar.navbar.title_student_services"),
    links: [
      { label: t("components.navbar.navbar.label_accommodation"), to: "https://deewantourism.com/accommodation" },
      { label: t("components.navbar.navbar.label_trips"), to: "https://deewantourism.com/trips" },
      { label: t("components.navbar.navbar.label_visa"), to: "https://deewantourism.com/visa" },
    ],
  },
  {
    id: "languages",
    title: t("components.navbar.navbar.title_foreign_languages"),
    links: [
      { label: t("components.navbar.navbar.label_french"), to: "/foreign-languages/french-course" },
      { label: t("pages.bildungsurlaub.bildungsurlaub.text_german"), to: "/foreign-languages/german-course" },
      { label: t("components.navbar.navbar.label_spanish"), to: "/foreign-languages/spanish-course" },
      { label: t("pages.bildungsurlaub.bildungsurlaub.text_english"), to: "/foreign-languages/english-course" },
    ],
  },
  {
    id: "team",
    title: t("components.navbar.navbar.title_join_our_team"),
    links: [
      { label: t("pages.careers.careers.title_careers"), to: "/careers" },
      { label: t("components.navbar.navbar.label_internships"), to: "/internship" },
      { label: <>
      {t("components.homenavbar.homenavbar.arabic_teacher")}
      <br /> 
      {t("components.homenavbar.homenavbar.training_course")}</> , to:"/training-course" },
    ],
  },
];

function HomeNavBar() {
  const { t } = useTranslation();
  const overlayColumns = createOverlayColumns(t);
  const { wishlistCount, cartCount } = useShop();
  const { pathname } = useLocation();

  const showShopIcons =
    SHOP_ROUTES.some((route) => pathname === route) ||
    pathname.startsWith("/publications/");

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const THRESHOLD = 60;
    const onScroll = () => setScrolled(window.scrollY > THRESHOLD);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      <nav
        ref={navRef}
        className={`navbar navbar-expand-xl ${scrolled ? styles.navScrolled : ""}`}
        id={styles.navBar}
        style={{ backgroundColor: "transparent" }}
      >
        <div className={`container ${scrolled ? styles.containerScrolled : ""}`}>
          {/* ── Mobile Header (max 767px) ── */}
          <div
            className={`d-flex d-md-none justify-content-between align-items-center w-100 ${styles.mobileHeader}`}
          >
            <NavLink className="navbar-brand mb-0" to="/">
              <img
                src="/assets/images/logos/horizontalLogo.webp"
                alt="Deewan Institute Logo"
                id={styles.mainLogo}
                className={scrolled ? styles.logoScrolled : ""}
              />
            </NavLink>

            <div className={styles.mobileRightGroup}>
              {showShopIcons && (
                <div className={styles.shopIconsInline}>
                  <NavLink
                    className="position-relative"
                    to="/wishlist"
                    aria-label={t("context.wishlist.text_wishlist")}
                  >
                    <img
                      src="/assets/images/icons/heart_brown.webp"
                      alt={t("context.wishlist.text_wishlist")}
                      id={styles.wishlistIcon}
                    />
                    {wishlistCount > 0 && (
                      <span className={styles.badge}>{wishlistCount}</span>
                    )}
                  </NavLink>
                  <NavLink
                    className="position-relative"
                    to="/cart"
                    aria-label={t("components.homenavbar.homenavbar.aria_label_cart")}
                  >
                    <img
                      src="/assets/images/icons/cart_brown.webp"
                      alt={t("components.homenavbar.homenavbar.aria_label_cart")}
                      id={styles.cartIcon}
                    />
                    {cartCount > 0 && (
                      <span className={styles.badge}>{cartCount}</span>
                    )}
                  </NavLink>
                </div>
              )}
              <LanguageSwitcher compact appearance="light" />
              <button
                className={styles.toggler}
                onClick={() => setIsOverlayOpen(true)}
                aria-label={t("components.navbar.navbar.aria_label_open_menu")}
              >
                <RiMenu3Line className={styles.togglerIcon} />
              </button>
            </div>
          </div>

          {/* ── Tablet Header (768px - 1279px) ── */}
          <div
            className={`d-none d-md-flex d-xl-none align-items-center w-100 ${styles.tabletHeader}`}
          >
            <div className={styles.tabletSpacer} />
            <NavLink
              className={`navbar-brand mb-0 ${styles.tabletLogo}`}
              to="/"
            >
              <img
                src="/assets/images/logos/horizontalLogo.webp"
                alt="Deewan Institute Logo"
                id={styles.mainLogo}
                className={scrolled ? styles.logoScrolled : ""}
              />
            </NavLink>
            <div className={styles.mobileRightGroup}>
              {showShopIcons && (
                <div className={styles.shopIconsInline}>
                  <NavLink
                    className="position-relative"
                    to="/wishlist"
                    aria-label={t("context.wishlist.text_wishlist")}
                  >
                    <img
                      src="/assets/images/icons/heart_brown.webp"
                      alt={t("context.wishlist.text_wishlist")}
                      id={styles.wishlistIcon}
                    />
                    {wishlistCount > 0 && (
                      <span className={styles.badge}>{wishlistCount}</span>
                    )}
                  </NavLink>
                  <NavLink
                    className="position-relative"
                    to="/cart"
                    aria-label={t("components.homenavbar.homenavbar.aria_label_cart")}
                  >
                    <img
                      src="/assets/images/icons/cart_brown.webp"
                      alt={t("components.homenavbar.homenavbar.aria_label_cart")}
                      id={styles.cartIcon}
                    />
                    {cartCount > 0 && (
                      <span className={styles.badge}>{cartCount}</span>
                    )}
                  </NavLink>
                </div>
              )}
              <LanguageSwitcher compact appearance="light" />
              <button
                className={styles.toggler}
                onClick={() => setIsOverlayOpen(true)}
                aria-label={t("components.navbar.navbar.aria_label_open_menu")}
              >
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
                  <NavLink className="nav-link" to="/">
                    {t("components.navbar.navbar.text_home")}</NavLink>
                </li>
                <li className="nav-item" id={styles.navitem}>
                  <NavLink className="nav-link" to="/about">
                    {t("pages.home.home.text_about_us")}</NavLink>
                </li>
              </ul>
            </div>

            {/* Center Logo */}
            <NavLink className="navbar-brand" to="/">
              <img
                src="/assets/images/logos/nobgLogo.webp"
                alt="Deewan Institute Logo"
                id={styles.mainLogo}
                className={scrolled ? styles.logoScrolled : ""}
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
                    {t("pages.arabiccourses.arabicjournalism.arabicjournalism.text_what_we_offer")}</button>
                </li>
                <li className="nav-item" id={styles.navitem}>
                  <NavLink className="nav-link" to="/contact">
                    {t("pages.contact.contact.text_contact_us")}</NavLink>
                </li>
              </ul>
            </div>

            {/* Shop Icons Desktop */}
            {showShopIcons && (
              <div
                className={`d-flex align-items-center ${styles.shopIconsDesktop}`}
              >
                <NavLink
                  className="position-relative"
                  to="/wishlist"
                  aria-label={t("context.wishlist.text_wishlist")}
                >
                  <img
                    src="/assets/images/icons/heart_brown.webp"
                    alt={t("context.wishlist.text_wishlist")}
                    id={styles.wishlistIcon}
                  />
                  {wishlistCount > 0 && (
                    <span className={styles.badge}>{wishlistCount}</span>
                  )}
                </NavLink>
                <NavLink
                  className="position-relative"
                  to="/cart"
                  aria-label={t("components.homenavbar.homenavbar.aria_label_cart")}
                >
                  <img
                    src="/assets/images/icons/cart_brown.webp"
                    alt={t("components.homenavbar.homenavbar.aria_label_cart")}
                    id={styles.cartIcon}
                  />
                  {cartCount > 0 && (
                    <span className={styles.badge}>{cartCount}</span>
                  )}
                </NavLink>
              </div>
            )}
            <div
              className={`${styles.desktopLanguageSwitcher} ${
                scrolled ? styles.desktopLanguageSwitcherHidden : ""
              }`}
            >
              <LanguageSwitcher appearance="light" />
            </div>
          </div>
        </div>

        {/* ── Scroll progress line ── */}
        <div className={`${styles.progressLine} ${scrolled ? styles.progressLineVisible : ""}`} />
      </nav>

      {/* ── Backdrop ── */}
      <div
        className={`${styles.backdrop} ${isOverlayOpen ? styles.backdropOpen : ""}`}
        onClick={closeAll}
      />

      {/* ── Overlay ── */}
      <div
        className={`${styles.overlay} ${isOverlayOpen ? styles.overlayOpen : ""}`}
      >
        <div className={styles.overlayInner}>
          {/* Close Button */}
          <button className={styles.closeBtn} onClick={closeAll}>
            ✕
          </button>

          {/* Logo */}
          <NavLink to="/" onClick={closeAll}>
            <img
              src="/assets/images/logos/institute-white.webp"
              alt="Deewan Institute Logo"
              className={styles.overlayLogo}
            />
          </NavLink>

          {/* ── Links ── */}
          <div className={styles.overlayLinks}>
            {/* ── Mobile + Tablet: flat links ── */}
            <div className={`d-xl-none ${styles.mobileLinks}`}>
              <NavLink to="/" className={styles.overlayLink} onClick={closeAll}>
                {t("components.navbar.navbar.text_home")}</NavLink>
              <NavLink
                to="/about"
                className={styles.overlayLink}
                onClick={closeAll}
              >
                {t("pages.home.home.text_about_us")}</NavLink>
              <NavLink
                to="/contact"
                className={styles.overlayLink}
                onClick={closeAll}
              >
                {t("pages.contact.contact.text_contact_us")}</NavLink>
              <NavLink
                to="/newsletter"
                className={styles.overlayLink}
                onClick={closeAll}
              >
                {t("pages.newsletter.newsletter.title_newsletter")}</NavLink>

              <div className={styles.divider} />
            </div>

            {/* ── Mobile + Tablet: columns flat ── */}
            <div className={`d-xl-none ${styles.mobileColumnsWrap}`}>
              {overlayColumns.map((col) => (
                <div key={col.id} className={styles.overlayColumn}>
                  <h3 className={styles.overlayTitle}>{col.title}</h3>
                  {col.links.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className={styles.overlayLink}
                      onClick={closeAll}
                    >
                      {link.label}
                    </NavLink>
                  ))}
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
                      <NavLink
                        key={link.to}
                        to={link.to}
                        className={styles.desktopDropdownLink}
                        onClick={closeAll}
                      >
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
              aria-label={t("components.navbar.navbar.aria_label_newsletter")}
            >
              <div className={styles.newsletterCardInner}>
                <img
                  src="/assets/images/others/news.webp"
                  alt="Deewan Newsletter"
                  className={styles.newsletterCardImg}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className={styles.newsletterCardOverlay}>
                  <div className={styles.newsletterCardBadge}>{t("pages.newsletter.newsletter.title_newsletter")}</div>
                  <p className={styles.newsletterCardTitle}>{t("components.navbar.navbar.text_stay_in_the_know")}</p>
                  <p className={styles.newsletterCardSub}>
                    {t("components.navbar.navbar.text_arabic_culture_events_and_stories_and_more")}</p>
                  <span className={styles.newsletterCardCta}>{t("components.navbar.navbar.text_see_more")}</span>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeNavBar;
