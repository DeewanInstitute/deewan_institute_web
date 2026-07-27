import { Fragment, useState, useEffect, useRef } from "react";
import styles from "./history.module.scss";
import "bootstrap";
import { useTranslation } from "react-i18next";

interface HistoryInfo {
    subTitle: string,
    bannerImg: string,
    info: Array<{
        id: string,
        title?: string,
        image?: string,
        label?: string,
        subtitle?: string,
        flag_one?: string,
        caption_one?: string,
        flag_two?: string,
        caption_two?: string,
        description: string
    }>
}

function HistoryLayout({ data, translationRoot }: { data: HistoryInfo; translationRoot: string }) {
    const { t } = useTranslation();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [activeId, setActiveId] = useState<string>("");
    const observerRef = useRef<IntersectionObserver | null>(null);

    // Track active section on scroll
    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter(e => e.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (visible.length > 0) {
                    setActiveId(visible[0].target.id);
                }
            },
            { rootMargin: "0px 0px -60% 0px", threshold: 0 }
        );

        data.info.forEach(item => {
            const el = document.getElementById(item.id);
            if (el) observerRef.current?.observe(el);
        });

        return () => observerRef.current?.disconnect();
    }, [data.info]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        setDrawerOpen(false);
    };

    const tocLinks = (
        <>
            {data.info.map((dataInfo) => (
                <ul className="nav flex-column" key={dataInfo.id}>
                    <li className="nav-item">
                        {dataInfo.title && (
                            <a
                                className={`nav-link text-decoration-none ${activeId === dataInfo.id ? styles.active : ""}`}
                                href={`#${dataInfo.id}`}
                                onClick={(e) => handleNavClick(e, dataInfo.id)}
                            >
                                {t(`${translationRoot}.items.${dataInfo.id}.title`)}
                            </a>
                        )}
                        {dataInfo.caption_one && (
                            <a
                                className={`nav-link text-decoration-none ${activeId === dataInfo.id ? styles.active : ""}`}
                                href={`#${dataInfo.id}`}
                                onClick={(e) => handleNavClick(e, dataInfo.id)}
                            >
                                {t(`${translationRoot}.items.${dataInfo.id}.captionOne`)}
                            </a>
                        )}
                        {dataInfo.caption_two && (
                            <a
                                className={`nav-link text-decoration-none ${activeId === dataInfo.id ? styles.active : ""}`}
                                href={`#${dataInfo.id}`}
                                onClick={(e) => handleNavClick(e, dataInfo.id)}
                            >
                                {t(`${translationRoot}.items.${dataInfo.id}.captionTwo`)}
                            </a>
                        )}
                    </li>
                </ul>
            ))}
        </>
    );

    return (
        <Fragment>
            {/* Mobile drawer */}
            <aside className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ""}`}>
                <div className={styles.drawerInner}>
                    <h5>{t("layout.historylayout.historyLayout.text_table_of_contents")}</h5>
                    {tocLinks}
                </div>
                <button
                    className={styles.drawerTab}
                    onClick={() => setDrawerOpen(!drawerOpen)}
                    aria-label={t("layout.historylayout.historyLayout.aria_label_toggle_table_of_contents")}
                >
                    <span className={styles.drawerTabIcon}>{drawerOpen ? "✕" : "☰"}</span>
                    <span className={styles.drawerTabText}>{t("layout.historylayout.historyLayout.text_contents")}</span>
                </button>
            </aside>

            {/* Banner */}
            <section className={`${styles.banner} d-flex flex-column py-5 align-items-center justify-content-center`}>
                <h5>{t("pages.arabiccourses.middleeastern.middleeasternstudies.title_middle_eastern_studies")}</h5>
                <h1 className="py-2">{t(`${translationRoot}.subtitle`)}</h1>
                <div className={styles.bannerImgWrapper}>
                    <img src={data.bannerImg} alt={data.subTitle} className={styles.bannerImg} />
                </div>
            </section>

            {/* Articles */}
            <section className={styles.article}>
                <div className="container-fluid px-5 mx-auto">
                    <div className="row">

                        {/* DESKTOP sidebar */}
                        <div className="col-md-3 d-none d-md-block">
                            <nav className={`${styles.sidebar} p-3`} style={{ position: 'sticky', top: 0, height: '100vh', overflowY: 'auto' }}>
                                <h5>{t("layout.historylayout.historyLayout.text_table_of_contents")}</h5>
                                {tocLinks}
                            </nav>
                        </div>

                        {/* Main reading area */}
                        <div className="col-md-9 col-12">
                            {data.info.map((articleInfo) => (
                                <div className={`${styles.content} p-3`} key={articleInfo.id}>
                                    <p className={`${styles.title} mb-4 pt-3`} id={articleInfo.id}>
                                        {articleInfo.title && t(`${translationRoot}.items.${articleInfo.id}.title`)}
                                    </p>
                                    <p className={`${styles.subTitle} text-center`}>
                                        {articleInfo.subtitle && t(`${translationRoot}.items.${articleInfo.id}.subtitle`)}
                                    </p>
                                    {articleInfo.flag_one && (
                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                            <img className={styles.flagImg} src={articleInfo.flag_one} alt={articleInfo.caption_one} />
                                            <span className={styles.subheading}>{t(`${translationRoot}.items.${articleInfo.id}.captionOne`)}</span>
                                        </div>
                                    )}
                                    {articleInfo.id === "modernNations" && (
                                        <p className={`${styles.para} text-center`}>
                                            {t("ui.click_for_a")}{' '}
                                            <a
                                                className="text-decoration-none"
                                                href="./the-zionist-project-in-palestine"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {t("layout.historylayout.historyLayout.text_detailed_history")}</a>
                                        </p>
                                    )}
                                    {articleInfo.flag_two && articleInfo.caption_two && (
                                        <div className="d-flex flex-column justify-content-center align-items-center py-5">
                                            <img className={styles.flagImg} src={articleInfo.flag_two} alt={articleInfo.caption_two} />
                                            <span className={styles.subheading}>{t(`${translationRoot}.items.${articleInfo.id}.captionTwo`)}</span>
                                        </div>
                                    )}
                                    <p
                                        className={styles.para}
                                        dangerouslySetInnerHTML={{
                                            __html: t(`${translationRoot}.items.${articleInfo.id}.description`).replace(/\n/g, "<br />"),
                                        }}
                                    />
                                    <div id={styles.images}>
                                        {articleInfo.image && (
                                            <>
                                                <img className="my-2" src={articleInfo.image} alt={articleInfo.title} />
                                                <span>{articleInfo.label && t(`${translationRoot}.items.${articleInfo.id}.label`)}</span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default HistoryLayout;
