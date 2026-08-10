import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import "bootstrap";
import style from "./error.module.scss";
import FloatingActionButton from "../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../components/floatingbutton/floatingactionbuttoninstitute";
import { useTranslation } from "react-i18next";

function NotFound() {
    const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Fragment>
      {/* Navigation Bar */}
      <NavBar />
      <FloatingActionButton />
      <FloatingActionButtonInstitute />
      {/* 404 Content */}
      <section className="d-flex flex-column align-items-center justify-content-center text-center mx-auto" id={style.errorPage} >
        <img id={style.image} className="mx-auto" src={"/assets/images/others/404.webp"} />  
        <h5>{t("pages.404_page.error.text_ooops_404")}</h5>
        <h1 className={style.h1}>{t("pages.404_page.error.text_we_cannot_find_the_page_you_re_looking_for")}</h1>
        <p className={`text-muted ${style.para}`}>{t("pages.404_page.error.text_the_page_you_are_looking_for_does_not_exist")}</p>
        <button
          className="btn mt-2"
          id={style.button}
          onClick={() => navigate("/")}
        >
          {t("pages.404_page.error.text_go_back_home")}</button>
      </section>
      {/* Footer */}
      <Footer />
    </Fragment>
  );
}

export default NotFound;