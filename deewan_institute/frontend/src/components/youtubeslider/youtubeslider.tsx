import { Fragment, useState, useCallback } from "react";
import "bootstrap";
import style from "./youtubeslider.module.scss";
import { youTubeData } from "../../../data/youTube";
import { useTranslation } from "react-i18next";

interface YouTubeVideo {
  id: string;
  image: string;
  alt: string;
}

function YouTubeSlider() {
    const { t } = useTranslation();
  // State for active video ID
  const [activeVideoId, setActiveVideoId] = useState<string>("DggbkLylq0I"); // Default to first video

  // Handle thumbnail click
  const handleThumbnailClick = useCallback((videoId: string) => {
    setActiveVideoId(videoId);
  }, []);

  // Get active class conditionally
  const getVideoClassName = (videoId: string) => {
    return activeVideoId === videoId
      ? `${style.video_option} active`
      : style.video_option;
  };

  return (
    <Fragment>
      {/* Title */}
      <section className={style.testimonials}>
        <div
          className={`${style.title} title mt-5 mx-auto align-items-center scroll-section`}
        >
          <span>{t("components.youtubeslider.youtubeslider.text_our_testimonials")}</span>
        </div>
        {/* Paragraph */}
        <p className="text-center my-5 scroll-section" id={style.para}>
          {t("components.youtubeslider.youtubeslider.text_deewan_institute_has_students_from_all_over_the_wo")}</p>
        <div className="video-player text-center mt-3 scroll-section">
          <iframe
            id={style.main_video}
            width={1100}
            height={500}
            src={`https://www.youtube.com/embed/${activeVideoId}`}
            title={t("components.youtubeslider.youtubeslider.title_youtube_video_player")}
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div
          className="carousel d-flex flex-row gap-1 align-items-center justify-content-center scroll-section"
          id={style.carousel}
        >
          {youTubeData.map((data: YouTubeVideo) => (
            <div
              key={data.id} // Added key prop
              className={getVideoClassName(data.id)}
              data-video-id={data.id}
              onClick={() => handleThumbnailClick(data.id)}
              role="button"
              tabIndex={0}
              style={{ cursor: "pointer" }}
              title={`Play ${data.alt}`}
            >
              <img src={data.image} alt={data.alt} />
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
}

export default YouTubeSlider;
