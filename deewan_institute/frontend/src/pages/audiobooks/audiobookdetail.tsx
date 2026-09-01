import { Fragment, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import FloatingActionButton from "../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../components/floatingbutton/floatingactionbuttoninstitute";
import { useScrollAnimation } from "../../../hooks/scrollAnimations";
import styles from "./audiobookdetail.module.scss";
import "../../style/animation.scss";
import { fushaBook, ammiyehCollection, getAudioBookContent } from "../../../data";
import type { AudioSection } from "../../../data";

const idiomsBookId = "main-book-everyday-idioms";
const culinaryBookId = "audio-culinary-guide";

interface AudioBookMeta {
  image: string;
  translationKey?: string;
}

function buildCatalog(): Record<string, AudioBookMeta> {
  const catalog: Record<string, AudioBookMeta> = {
    [fushaBook.id]: {
      image: "/assets/images/books/poster/msa.webp",
      translationKey: `content.books.fusha.${fushaBook.id}.title`,
    },
    [idiomsBookId]: {
      image: "/assets/images/books/poster/idioms.webp",
      translationKey: `content.books.main.${idiomsBookId}.title`,
    },
    [culinaryBookId]: {
      image: "/assets/images/books/poster/cookbook.webp",
      //deewan_institute\frontend\public\assets\images\books\poster\cookbook.webp
    },
  };

  ammiyehCollection.forEach((book) => {
    catalog[book.id] = {
      image: book.image,
      translationKey: `content.books.ammiyeh.${book.id}.title`,
    };
  });

  return catalog;
}

const audioCatalog = buildCatalog();

function YoutubeIcon() {
  return (
    <svg width="39" height="28" viewBox="0 0 39 28" aria-hidden="true">
      <rect width="39" height="28" rx="8" fill="#FF0000" />
      <path d="M16 8.5L27 14L16 19.5V8.5Z" fill="#fff" />
    </svg>
  );
}

function OneDriveIcon() {
  return (
    <svg width="42" height="30" viewBox="0 0 48 34" aria-hidden="true">
      <path
        d="M17 8a11 11 0 0 1 10.4 7.4A8.5 8.5 0 0 1 37.5 20a7 7 0 0 1-.5 14H14a9 9 0 0 1-1-17.94A11 11 0 0 1 17 8Z"
        fill="#0364B8"
      />
      <path
        d="M17 8a11 11 0 0 1 10.4 7.4 8.5 8.5 0 0 1 3.86 1.1L15.7 27.9A9 9 0 0 1 13 26.9 9 9 0 0 1 13 9.1 11 11 0 0 1 17 8Z"
        fill="#0078D4"
        opacity="0.85"
      />
    </svg>
  );
}

function PlayIcon({ playing }: { playing: boolean }) {
  return playing ? (
    <svg width="14" height="16" viewBox="0 0 16 18" aria-hidden="true">
      <rect x="1" width="5" height="18" rx="1.5" fill="currentColor" />
      <rect x="10" width="5" height="18" rx="1.5" fill="currentColor" />
    </svg>
  ) : (
    <svg width="16" height="18" viewBox="0 0 18 20" aria-hidden="true">
      <path d="M1 1.5L17 10L1 18.5V1.5Z" fill="currentColor" />
    </svg>
  );
}

function SkipIcon({ direction }: { direction: "back" | "forward" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={direction === "back" ? { transform: "scaleX(-1)" } : undefined}
    >
      <path d="M3 12L11 6V18L3 12Z" fill="currentColor" />
      <path d="M12 12L20 6V18L12 12Z" fill="currentColor" />
    </svg>
  );
}

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function ChevronIcon({ open, small }: { open: boolean; small?: boolean }) {
  return (
    <svg
      width={small ? 14 : 18}
      height={small ? 9 : 12}
      viewBox="0 0 18 12"
      aria-hidden="true"
      className={`${styles.chevronIcon} ${open ? styles.chevronOpen : ""}`}
    >
      <path
        d="M1 1.5L9 9.5L17 1.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function AudioBookDetail() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  useScrollAnimation();

  const bookMeta = id ? audioCatalog[id] : undefined;
  const bookContent = id ? getAudioBookContent(id) : undefined;

  const [openChapterId, setOpenChapterId] = useState<string | null>(
    bookContent?.chapters[0]?.id ?? null
  );
  const [openLessonId, setOpenLessonId] = useState<string | null>(null);
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    document.title = "Audio Book";
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setOpenChapterId(bookContent?.chapters[0]?.id ?? null);
    setOpenLessonId(null);
    setActiveSectionId(null);
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
  }, [id]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration || 0);
    const onEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const toggleChapter = (chapterId: string) => {
    setOpenChapterId((prev) => (prev === chapterId ? null : chapterId));
    setOpenLessonId(null);
  };

  const toggleLesson = (lessonId: string) => {
    setOpenLessonId((prev) => (prev === lessonId ? null : lessonId));
  };

  const playSection = (section: AudioSection) => {
    if (!section.audioUrl) return;
    const audio = audioRef.current;
    if (!audio) return;

    if (activeSectionId === section.id) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      return;
    }

    audio.src = section.audioUrl;
    setCurrentTime(0);
    setDuration(0);
    setActiveSectionId(section.id);
    audio.play();
  };

  const skip = (deltaSeconds: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    const max = duration || audio.duration || Infinity;
    audio.currentTime = Math.min(Math.max(audio.currentTime + deltaSeconds, 0), max);
  };

  const seekTo = (seconds: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = seconds;
    setCurrentTime(seconds);
  };

  if (!bookMeta || !bookContent) {
    return (
      <Fragment>
        <NavBar />
        <FloatingActionButton />
        <FloatingActionButtonInstitute />
        <section className={styles.notFound}>
          <h1>{t("pages.audiobooks.audiobookdetail.text_not_found")}</h1>
          <Link to="/audiobooks" className={styles.backLink}>
            {t("pages.audiobooks.audiobookdetail.text_back_to_library")}
          </Link>
        </section>
        <Footer />
      </Fragment>
    );
  }

  const title = bookMeta.translationKey
    ? t(bookMeta.translationKey)
    : t("pages.audiobooks.audiobooks.text_culinary_guide_title");

  const renderSectionRow = (section: AudioSection) => {
    const isActive = activeSectionId === section.id;
    const sectionIsPlaying = isActive && isPlaying;
    return (
      <div
        key={section.id}
        className={`${styles.sectionRow} ${isActive ? styles.sectionRowActive : ""}`}
      >
        <div className={styles.sectionRowTop}>
          <span>{section.title}</span>
          <button
            className={`${styles.playBadge} ${
              !section.audioUrl ? styles.playBadgeDisabled : ""
            }`}
            onClick={() => playSection(section)}
            disabled={!section.audioUrl}
            aria-label={
              section.audioUrl
                ? sectionIsPlaying
                  ? "Pause"
                  : "Play"
                : t("components.podcastblocks.episodelist.text_coming_soon")
            }
            title={
              section.audioUrl
                ? undefined
                : t("components.podcastblocks.episodelist.text_coming_soon")
            }
          >
            <PlayIcon playing={sectionIsPlaying} />
          </button>
        </div>

        {isActive && (
          <div className={styles.playerControls}>
            <button
              type="button"
              className={styles.skipBtn}
              onClick={() => skip(-10)}
              aria-label="Rewind 10 seconds"
            >
              <SkipIcon direction="forward" />
              <span>10</span>
            </button>

            <div className={styles.seekArea}>
              <input
                type="range"
                className={styles.seekBar}
                min={0}
                max={duration || 0}
                step={0.1}
                value={Math.min(currentTime, duration || currentTime)}
                onChange={(e) => seekTo(Number(e.target.value))}
                aria-label="Seek"
                style={
                  {
                    "--progress": `${duration ? (currentTime / duration) * 100 : 0}%`,
                  } as CSSProperties
                }
              />
              <div className={styles.timeRow}>
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            <button
              type="button"
              className={styles.skipBtn}
              onClick={() => skip(10)}
              aria-label="Forward 10 seconds"
            >
              <SkipIcon direction="back" />
              <span>10</span>
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <Fragment>
      <NavBar />
      <FloatingActionButton />
      <FloatingActionButtonInstitute />

      <audio ref={audioRef} className={styles.hiddenAudio} />

      <section className={styles.detail}>
       
        <div className={`container ${styles.detailContent}`}>
          <div className="row g-4 g-lg-5">
            {/* Cover column */}
            <div className="col-12 col-lg-5">
              <div className={styles.coverCol}>
                {bookMeta.image ? (
                  <img className={styles.cover} src={bookMeta.image} alt={title} />
                ) : (
                  <div className={styles.coverPlaceholder}>
                    <span>{t("pages.audiobooks.audiobooks.text_cover_coming_soon")}</span>
                  </div>
                )}
                <h2 className={styles.bookTitle}>{title}</h2>
                <div className={styles.platforms}>
                  {bookContent.youtubeUrl && (
                    <a
                      href={bookContent.youtubeUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="YouTube"
                    >
                      <YoutubeIcon />
                    </a>
                  )}
                  {bookContent.oneDriveUrl && (
                    <a
                      href={bookContent.oneDriveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="OneDrive"
                    >
                      <OneDriveIcon />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Chapters column */}
            <div className="col-12 col-lg-7">
              <div className={styles.chapters}>
                {bookContent.chapters.map((chapter) => {
                  const isChapterOpen = openChapterId === chapter.id;
                  return (
                    <div key={chapter.id} className={styles.chapterBlock}>
                      <button
                        className={styles.chapterHeader}
                        onClick={() => toggleChapter(chapter.id)}
                        aria-expanded={isChapterOpen}
                      >
                        <span>{chapter.title}</span>
                        <span className={styles.chevronBadge}>
                          <ChevronIcon open={isChapterOpen} />
                        </span>
                      </button>

                      {isChapterOpen && (
                        <div className={styles.chapterBody}>
                          {chapter.lessons ? (
                            chapter.lessons.map((lesson) => {
                              const isLessonOpen = openLessonId === lesson.id;
                              return (
                                <div key={lesson.id} className={styles.lessonBlock}>
                                  <button
                                    className={styles.lessonHeader}
                                    onClick={() => toggleLesson(lesson.id)}
                                    aria-expanded={isLessonOpen}
                                  >
                                    <span>{lesson.title}</span>
                                    <span className={styles.chevronBadgeSm}>
                                      <ChevronIcon open={isLessonOpen} small />
                                    </span>
                                  </button>

                                  {isLessonOpen && (
                                    <div className={styles.sectionList}>
                                      {lesson.sections.map(renderSectionRow)}
                                    </div>
                                  )}
                                </div>
                              );
                            })
                          ) : (
                            <div className={styles.sectionList}>
                              {(chapter.sections ?? []).map(renderSectionRow)}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Fragment>
  );
}

export default AudioBookDetail;
