import { useState, useRef, useCallback, Fragment, useEffect } from "react";
import styles from "./internshipform.module.scss";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import {
  SECTIONS,
  INTERNSHIP_AREAS,
  INTERNSHIP_OPTIONS,
  INTERNSHIP_DURATIONS,
  ACADEMIC_LEVELS,
  GENDER_OPTIONS,
  ENGLISH_LEVELS,
  ARABIC_LEVELS,
  SKILLS_LIST,
  HEARD_ABOUT_OPTIONS,
  YES_NO_MAYBE,
  YES_NO,
  DEFAULT_FORM_STATE,
  sectionValidators,
  buildFormData,
  isValidEmail,
  isValidPhone,
  type InternshipFormState,
} from "../../../data/internship.data";
import Banner from "../../components/banner/banner";
import FloatingActionButton from "../../components/floatingbutton/floatingactionbutton";
import FloatingActionButtonInstitute from "../../components/floatingbutton/floatingactionbuttoninstitute";
import { useTranslation } from "react-i18next";

type Status = "idle" | "submitting" | "success" | "error";

// Shared primitives

function Field({
  label,
  required,
  hint,
  children,
  error,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>
        {label}
        {required && <span className={styles.required}> *</span>}
        {hint && <span className={styles.hint}> — {hint}</span>}
      </label>
      {children}
      {error && <span className={styles.error_msg}>{error}</span>}
    </div>
  );
}

function RadioGroup({
  name,
  options,
  value,
  onChange,
}: {
  name: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className={styles.radio_group}>
      {options.map((opt) => (
        <label
          key={opt}
          className={`${styles.radio_pill} ${value === opt ? styles.radio_pill_active : ""}`}
        >
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={() => onChange(opt)}
            className={styles.sr_only}
          />
          <span className={styles.radio_dot} />
          {opt}
        </label>
      ))}
    </div>
  );
}

function CheckGroup({
  options,
  selected,
  onChange,
}: {
  options: readonly string[];
  selected: string[];
  onChange: (v: string[]) => void;
}) {
  const toggle = (opt: string) =>
    onChange(
      selected.includes(opt)
        ? selected.filter((s) => s !== opt)
        : [...selected, opt],
    );
  return (
    <div className={styles.check_group}>
      {options.map((opt) => (
        <label
          key={opt}
          className={`${styles.check_tag} ${selected.includes(opt) ? styles.check_tag_active : ""}`}
        >
          <input
            type="checkbox"
            checked={selected.includes(opt)}
            onChange={() => toggle(opt)}
            className={styles.sr_only}
          />
          <span className={styles.check_tick}>
            {selected.includes(opt) ? "✓ " : ""}
          </span>
          {opt}
        </label>
      ))}
    </div>
  );
}

function FileUpload({
  label,
  required,
  hint,
  file,
  onFile,
  accept = ".pdf,application/pdf",
}: {
  label: string;
  required?: boolean;
  hint?: string;
  file: File | null;
  onFile: (f: File | null) => void;
  accept?: string;
}) {
    const { t } = useTranslation();
  const ref = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  const acceptFile = useCallback(
    (f: File | null | undefined) => {
      if (f) onFile(f);
    },
    [onFile],
  );

  return (
    <Field label={label} required={required} hint={hint}>
      {file ? (
        <div className={styles.file_preview}>
          <span className={styles.file_icon}>📄</span>
          <span className={styles.file_name}>{file.name}</span>
          <span className={styles.file_size}>
            ({(file.size / 1024).toFixed(0)} KB)
          </span>
          <button
            type="button"
            className={styles.file_remove}
            aria-label={t("pages.internship.internshipform.aria_label_remove_file")}
            onClick={() => {
              onFile(null);
              if (ref.current) ref.current.value = "";
            }}
          >
            ✕
          </button>
        </div>
      ) : (
        <div
          className={`${styles.dropzone} ${dragging ? styles.dropzone_active : ""}`}
          onDrop={(e) => {
            e.preventDefault();
            setDragging(false);
            acceptFile(e.dataTransfer.files?.[0]);
          }}
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onClick={() => ref.current?.click()}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && ref.current?.click()}
          aria-label={`Upload ${label}`}
        >
          <span className={styles.dropzone_icon}>↑</span>
          <p className={styles.dropzone_text}>
            {t("pages.internship.internshipform.text_drag_and_drop_or")}<span className={styles.dropzone_link}>{t("pages.internship.internshipform.text_browse")}</span>
          </p>
          <p className={styles.dropzone_hint}>{t("pages.internship.internshipform.text_pdf_up_to_10_mb")}</p>
        </div>
      )}
      <input
        ref={ref}
        type="file"
        accept={accept}
        onChange={(e) => acceptFile(e.target.files?.[0])}
        className={styles.sr_only}
        aria-hidden
        tabIndex={-1}
      />
    </Field>
  );
}

// Accordion section shell

function AccordionSection({
  index,
  open,
  locked,
  complete,
  onToggle,
  children,
}: {
  index: number;
  open: boolean;
  locked: boolean;
  complete: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
    const { t } = useTranslation();
  const { title, arabicNumeral, description } = SECTIONS[index];

  return (
    <div
      className={`${styles.section} ${open ? styles.section_open : ""} ${locked ? styles.section_locked : ""} ${complete && !open ? styles.section_done : ""}`}
    >
      <button
        type="button"
        className={styles.section_header}
        onClick={onToggle}
        disabled={locked}
        aria-expanded={open}
      >
        <div className={styles.section_left}>
          <span className={styles.numeral}>{arabicNumeral}</span>
          <div className={styles.section_titles}>
            <span className={styles.section_title}>{title}</span>
            {!open && (
              <span className={styles.section_desc}>{description}</span>
            )}
          </div>
        </div>
        <div className={styles.section_right}>
          {complete && !open && <span className={styles.done_badge}>✓</span>}
          {locked && (
            <span className={styles.lock_icon} aria-label={t("pages.internship.internshipform.aria_label_locked")}>
              🔒
            </span>
          )}
          <span
            className={`${styles.chevron} ${open ? styles.chevron_open : ""}`}
          >
            ›
          </span>
        </div>
      </button>

      {open && <div className={styles.section_body}>{children}</div>}
    </div>
  );
}

function ContinueBtn({
  disabled,
  onClick,
}: {
  disabled: boolean;
  onClick: () => void;
}) {
    const { t } = useTranslation();
  return (
    <div className={styles.continue_row}>
      <button
        type="button"
        className={styles.continue_btn}
        disabled={disabled}
        onClick={onClick}
      >
        {t("pages.internship.internshipform.text_continue")}<span className={styles.arrow}>→</span>
      </button>
    </div>
  );
}
//Success Modal

function SuccessModal() {
    const { t } = useTranslation();
  const [secondsLeft, setSecondsLeft] = useState(8);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(interval);
          window.location.href = "/";
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const circumference = 2 * Math.PI * 20; // r=20
  const progress = ((8 - secondsLeft) / 8) * circumference;

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_card}>
        <div className={styles.success_icon}>
          <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="32"
              cy="32"
              r="30"
              stroke="currentColor"
              strokeWidth="2"
              className={styles.success_circle}
            />
            <path
              d="M20 32l9 9 15-18"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.success_check}
            />
          </svg>
        </div>
        <p className={styles.success_eyebrow}>{t("pages.internship.internshipform.text_application_received")}</p>
        <h2 className={styles.success_title}>{t("pages.internship.internshipform.text_3")}</h2>
        <p className={styles.success_text}>
          {t("pages.internship.internshipform.text_thank_you_for_applying_to_the_deewan_institute_int")}</p>
        <div className={styles.countdown_wrap}>
          <svg className={styles.countdown_ring} viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" className={styles.countdown_track} />
            <circle
              cx="24"
              cy="24"
              r="20"
              className={styles.countdown_arc}
              strokeDasharray={circumference}
              strokeDashoffset={circumference - progress}
            />
          </svg>
          <span className={styles.countdown_num}>{secondsLeft}</span>
        </div>
        <p className={styles.countdown_label}>Redirecting ... {secondsLeft}s</p>
      </div>
    </div>
  );
}
// Main form

function InternshipForm() {
    const { t } = useTranslation();
  const [openSection, setOpenSection] = useState<number>(0);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState<InternshipFormState>(DEFAULT_FORM_STATE);

  const completions = sectionValidators.map((fn) => fn(form));
  const isLocked = (i: number) => i > 0 && !completions[i - 1];

  // Warm up the backend as soon as the form loads — the API server spins
  // down when idle, and this long form usually gives it plenty of time to
  // wake up before the applicant reaches the submit button.
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/health`).catch(() => {});
  }, []);

  const handleToggle = (i: number) => {
    if (isLocked(i)) return;
    setOpenSection(openSection === i ? -1 : i);
  };

  const next = (current: number) => {
    if (current + 1 < SECTIONS.length) setOpenSection(current + 1);
  };

  const setPersonal = (patch: Partial<typeof form.personal>) =>
    setForm((f) => ({ ...f, personal: { ...f.personal, ...patch } }));
  const setPrefs = (patch: Partial<typeof form.preferences>) =>
    setForm((f) => ({ ...f, preferences: { ...f.preferences, ...patch } }));
  const setAreas = (patch: Partial<typeof form.areas>) =>
    setForm((f) => ({ ...f, areas: { ...f.areas, ...patch } }));
  const setSkills = (patch: Partial<typeof form.skills>) =>
    setForm((f) => ({ ...f, skills: { ...f.skills, ...patch } }));
  const setLanguages = (patch: Partial<typeof form.languages>) =>
    setForm((f) => ({ ...f, languages: { ...f.languages, ...patch } }));
  const setMotivation = (patch: Partial<typeof form.motivation>) =>
    setForm((f) => ({ ...f, motivation: { ...f.motivation, ...patch } }));
  const setAccomm = (patch: Partial<typeof form.accommodation>) =>
    setForm((f) => ({ ...f, accommodation: { ...f.accommodation, ...patch } }));
  const setAvail = (patch: Partial<typeof form.availability>) =>
    setForm((f) => ({ ...f, availability: { ...f.availability, ...patch } }));
  const setDocs = (patch: Partial<typeof form.documents>) =>
    setForm((f) => ({ ...f, documents: { ...f.documents, ...patch } }));
  const setDecl = (patch: Partial<typeof form.declaration>) =>
    setForm((f) => ({ ...f, declaration: { ...f.declaration, ...patch } }));

  const handleSubmit = async () => {
    if (!completions.every(Boolean)) return;
    setStatus("submitting");
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/internship`,
        {
          method: "POST",
          body: buildFormData(form),
        },
      );
      if (!response.ok) {
        const body = await response.text().catch(() => "");
        throw new Error(`Request failed (${response.status}): ${body}`);
      }
      setStatus("success");
    } catch (err) {
      console.error("Internship submission failed:", err);
      setStatus("error");
    }
  };

  const {
    personal: p,
    preferences: pref,
    areas,
    skills,
    languages,
    motivation,
    accommodation,
    availability,
    documents,
    declaration,
  } = form;

  return (
    <Fragment>
      <NavBar />
      <FloatingActionButton />
      <FloatingActionButtonInstitute />

      <Banner
        data={{
          title: t("pages.internship.internshipform.title_internship_application"),
          description: t("pages.internship.internshipform.description_complete_each_section_to_unlock_the_next_we"),
          backgroundImg: "../../assets/images/banner/intern_banner.webp",
        }}
      />
      <div className={styles.form_wrapper}>
        <div className={styles.form_header}>
          <div className={styles.progress_track}>
            <div
              className={styles.progress_fill}
              style={{
                width: `${(completions.filter(Boolean).length / SECTIONS.length) * 100}%`,
              }}
            />
          </div>
          <div>
            <p>
              {t("pages.internship.internshipform.text_please_complete_the_internship_form_carefully_and_")}</p>

            <p>
              If you have any questions, please contact us at{" "}
              <a href="mailto:arabic@deewaninstitute.com">
                {t("pages.internship.internshipform.text_arabic_deewaninstitute_com")}</a>
              .
            </p>
          </div>

          <span className={styles.progress_label}>
            {completions.filter(Boolean).length} of {SECTIONS.length} sections
            complete
          </span>
        </div>

        {status === "error" && (
          <div className={styles.error_banner}>
            {t("pages.internship.internshipform.text_something_went_wrong_please_try_again")}</div>
        )}

        <div className={styles.accordion}>
          {/* 1 — Personal Information */}
          <AccordionSection
            index={0}
            open={openSection === 0}
            locked={isLocked(0)}
            complete={completions[0]}
            onToggle={() => handleToggle(0)}
          >
            <div className={styles.grid_2}>
              <Field label={t("pages.internship.internshipform.label_full_name")} required>
                <input
                  className={styles.input}
                  type="text"
                  value={p.fullName}
                  autoComplete="name"
                  placeholder={t("pages.internship.internshipform.placeholder_your_full_name_here")}
                  onChange={(e) => setPersonal({ fullName: e.target.value })}
                />
              </Field>
              <Field label={t("pages.internship.internshipform.label_gender")}>
                <RadioGroup
                  name="gender"
                  options={GENDER_OPTIONS}
                  value={p.gender}
                  onChange={(v) => setPersonal({ gender: v })}
                />
              </Field>
            </div>
            <div className={styles.grid_2}>
              <Field label={t("pages.internship.internshipform.label_date_of_birth")} required>
                <input
                  className={styles.input}
                  type="date"
                  value={p.dateOfBirth}
                  onChange={(e) => setPersonal({ dateOfBirth: e.target.value })}
                />
              </Field>
              <Field label={t("pages.internship.internshipform.label_nationality")} required>
                <input
                  className={styles.input}
                  type="text"
                  value={p.nationality}
                  placeholder={t("pages.internship.internshipform.placeholder_e_g_german")}
                  onChange={(e) => setPersonal({ nationality: e.target.value })}
                />
              </Field>
            </div>
            <Field label={t("pages.internship.internshipform.label_current_city_and_country_of_residence")} required>
              <input
                className={styles.input}
                type="text"
                value={p.residence}
                placeholder={t("pages.internship.internshipform.placeholder_e_g_berlin_germany")}
                onChange={(e) => setPersonal({ residence: e.target.value })}
              />
            </Field>
            <div className={styles.grid_2}>
              <Field
                label={t("pages.internship.internshipform.label_email_address")}
                required
                error={
                  p.email && !isValidEmail(p.email)
                    ? "Please enter a valid email address."
                    : undefined
                }
              >
                <input
                  className={styles.input}
                  type="email"
                  value={p.email}
                  autoComplete="email"
                  placeholder={t("pages.internship.internshipform.placeholder_you_example_com")}
                  onChange={(e) => setPersonal({ email: e.target.value })}
                />
              </Field>
              <Field
                label={t("pages.internship.internshipform.label_phone_whatsapp")}
                required
                error={
                  p.phone && !isValidPhone(p.phone)
                    ? "Please enter a valid phone number."
                    : undefined
                }
              >
                <input
                  className={styles.input}
                  type="tel"
                  value={p.phone}
                  autoComplete="tel"
                  placeholder={t("pages.internship.internshipform.placeholder_962_790_0000000")}
                  onChange={(e) => setPersonal({ phone: e.target.value })}
                />
              </Field>
            </div>
            <div className={styles.grid_2}>
              <Field label={t("pages.internship.internshipform.label_university_institution")} required>
                <input
                  className={styles.input}
                  type="text"
                  value={p.university}
                  placeholder={t("pages.internship.internshipform.placeholder_humboldt_university")}
                  onChange={(e) => setPersonal({ university: e.target.value })}
                />
              </Field>
              <Field label={t("pages.internship.internshipform.label_field_of_study_major")} required>
                <input
                  className={styles.input}
                  type="text"
                  value={p.fieldOfStudy}
                  placeholder={t("pages.arabiccourses.middleeastern.middleeasternstudies.title_middle_eastern_studies")}
                  onChange={(e) =>
                    setPersonal({ fieldOfStudy: e.target.value })
                  }
                />
              </Field>
            </div>
            <Field label={t("pages.internship.internshipform.label_current_academic_level")} required>
              <RadioGroup
                name="academicLevel"
                options={ACADEMIC_LEVELS}
                value={p.academicLevel}
                onChange={(v) => setPersonal({ academicLevel: v })}
              />
            </Field>
            <ContinueBtn disabled={!completions[0]} onClick={() => next(0)} />
          </AccordionSection>

          {/* 2 — Internship Preferences */}
          <AccordionSection
            index={1}
            open={openSection === 1}
            locked={isLocked(1)}
            complete={completions[1]}
            onToggle={() => handleToggle(1)}
          >
            <Field
              label={t("pages.internship.internshipform.label_which_internship_option_are_you_applying_for")}
              required
            >
              <RadioGroup
                name="option"
                options={INTERNSHIP_OPTIONS}
                value={pref.option}
                onChange={(v) => setPrefs({ option: v })}
              />
            </Field>
            <Field label={t("pages.internship.internshipform.label_preferred_internship_duration")} required>
              <RadioGroup
                name="duration"
                options={INTERNSHIP_DURATIONS}
                value={pref.duration}
                onChange={(v) => setPrefs({ duration: v })}
              />
            </Field>
            <div className={styles.grid_2}>
              <Field label={t("pages.internship.internshipform.label_preferred_start_date")} required>
                <input
                  className={styles.input}
                  type="date"
                  value={pref.startDate}
                  onChange={(e) => setPrefs({ startDate: e.target.value })}
                />
              </Field>
              <Field label={t("pages.internship.internshipform.label_preferred_end_date")} required>
                <input
                  className={styles.input}
                  type="date"
                  value={pref.endDate}
                  onChange={(e) => setPrefs({ endDate: e.target.value })}
                />
              </Field>
            </div>
            <Field label={t("pages.internship.internshipform.label_are_your_dates_flexible")} required>
              <RadioGroup
                name="flex"
                options={YES_NO}
                value={pref.datesFlexible}
                onChange={(v) => setPrefs({ datesFlexible: v })}
              />
            </Field>
            <ContinueBtn disabled={!completions[1]} onClick={() => next(1)} />
          </AccordionSection>

          {/* 3 — Areas of Interest */}
          <AccordionSection
            index={2}
            open={openSection === 2}
            locked={isLocked(2)}
            complete={completions[2]}
            onToggle={() => handleToggle(2)}
          >
            <Field
              label={t("pages.internship.internshipform.label_which_internship_area_s_are_you_interested_in")}
              required
            >
              <CheckGroup
                options={INTERNSHIP_AREAS}
                selected={areas.areas}
                onChange={(v) => setAreas({ areas: v })}
              />
            </Field>
            <Field label={t("pages.internship.internshipform.label_which_area_is_your_first_preference")} required>
              <RadioGroup
                name="first_pref"
                options={INTERNSHIP_AREAS}
                value={areas.firstPreference}
                onChange={(v) => setAreas({ firstPreference: v })}
              />
            </Field>
            <Field label={t("pages.internship.internshipform.label_which_area_is_your_second_preference")}>
              <select
                className={styles.select}
                value={areas.secondPreference}
                onChange={(e) => setAreas({ secondPreference: e.target.value })}
              >
                <option value="">{t("pages.internship.internshipform.text_none")}</option>
                {INTERNSHIP_AREAS.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </Field>
            <ContinueBtn disabled={!completions[2]} onClick={() => next(2)} />
          </AccordionSection>

          {/* 4 — Skills & Experience */}
          <AccordionSection
            index={3}
            open={openSection === 3}
            locked={isLocked(3)}
            complete={completions[3]}
            onToggle={() => handleToggle(3)}
          >
            <Field
              label={t("pages.internship.internshipform.label_describe_your_academic_or_professional_background")}
              required
            >
              <textarea
                className={styles.textarea}
                rows={4}
                value={skills.background}
                placeholder={t("pages.internship.internshipform.placeholder_share_your_studies_projects_and_relevant_ex")}
                onChange={(e) => setSkills({ background: e.target.value })}
              />
            </Field>
            <Field
              label={t("pages.internship.internshipform.label_do_you_have_previous_internship_or_work_experienc")}
              required
            >
              <RadioGroup
                name="prev_exp"
                options={YES_NO}
                value={skills.hasPreviousExperience}
                onChange={(v) => setSkills({ hasPreviousExperience: v })}
              />
            </Field>
            {skills.hasPreviousExperience === "Yes" && (
              <Field label={t("pages.internship.internshipform.label_please_describe_your_previous_experience")}>
                <textarea
                  className={styles.textarea}
                  rows={3}
                  value={skills.previousExperience}
                  placeholder={t("pages.internship.internshipform.placeholder_organisation_role_duration_key_responsibili")}
                  onChange={(e) =>
                    setSkills({ previousExperience: e.target.value })
                  }
                />
              </Field>
            )}
            <Field label={t("pages.internship.internshipform.label_which_of_the_following_skills_do_you_have")}>
              <CheckGroup
                options={SKILLS_LIST}
                selected={skills.skills}
                onChange={(v) => setSkills({ skills: v })}
              />
            </Field>
            <Field
              label={t("pages.internship.internshipform.label_software_design_tools_or_technical_tools_you_know")}
              hint="e.g. Canva, Figma, WordPress, Excel"
            >
              <textarea
                className={styles.textarea}
                rows={2}
                value={skills.tools}
                onChange={(e) => setSkills({ tools: e.target.value })}
              />
            </Field>
            <ContinueBtn disabled={!completions[3]} onClick={() => next(3)} />
          </AccordionSection>

          {/* 5 — Language Skills */}
          <AccordionSection
            index={4}
            open={openSection === 4}
            locked={isLocked(4)}
            complete={completions[4]}
            onToggle={() => handleToggle(4)}
          >
            <Field label={t("pages.internship.internshipform.label_english_level")} required>
              <RadioGroup
                name="english"
                options={ENGLISH_LEVELS}
                value={languages.english}
                onChange={(v) => setLanguages({ english: v })}
              />
            </Field>
            <Field label={t("pages.internship.internshipform.label_arabic_level")} required>
              <RadioGroup
                name="arabic"
                options={ARABIC_LEVELS}
                value={languages.arabic}
                onChange={(v) => setLanguages({ arabic: v })}
              />
            </Field>
            <Field label={t("pages.internship.internshipform.label_do_you_speak_any_other_languages")}>
              <input
                className={styles.input}
                type="text"
                value={languages.otherLanguages}
                placeholder={t("pages.internship.internshipform.placeholder_french_spanish_german")}
                onChange={(e) =>
                  setLanguages({ otherLanguages: e.target.value })
                }
              />
            </Field>
            <ContinueBtn disabled={!completions[4]} onClick={() => next(4)} />
          </AccordionSection>

          {/* 6 — Motivation */}
          <AccordionSection
            index={5}
            open={openSection === 5}
            locked={isLocked(5)}
            complete={completions[5]}
            onToggle={() => handleToggle(5)}
          >
            <Field
              label={t("pages.internship.internshipform.label_why_do_you_want_to_do_an_internship_with_deewan_i")}
              required
            >
              <textarea
                className={styles.textarea}
                rows={5}
                value={motivation.why}
                placeholder={t("pages.internship.internshipform.placeholder_what_draws_you_to_deewans_mission_and_env")}
                onChange={(e) => setMotivation({ why: e.target.value })}
              />
            </Field>
            <Field
              label={t("pages.internship.internshipform.label_what_do_you_hope_to_learn_from_this_internship")}
              required
            >
              <textarea
                className={styles.textarea}
                rows={4}
                value={motivation.learn}
                placeholder={t("pages.internship.internshipform.placeholder_skills_knowledge_experiences_youre_hopin")}
                onChange={(e) => setMotivation({ learn: e.target.value })}
              />
            </Field>
            <Field label={t("pages.internship.internshipform.label_why_are_you_interested_in_jordan_and_arabic_langu")}>
              <textarea
                className={styles.textarea}
                rows={3}
                value={motivation.jordan}
                onChange={(e) => setMotivation({ jordan: e.target.value })}
              />
            </Field>
            <ContinueBtn disabled={!completions[5]} onClick={() => next(5)} />
          </AccordionSection>

          {/* 7 — Accommodation & Classes */}
          <AccordionSection
            index={6}
            open={openSection === 6}
            locked={isLocked(6)}
            complete={completions[6]}
            onToggle={() => handleToggle(6)}
          >
            <Field label={t("pages.internship.internshipform.label_will_you_need_accommodation_through_deewan")} required>
              <RadioGroup
                name="accom"
                options={YES_NO_MAYBE}
                value={accommodation.needAccommodation}
                onChange={(v) => setAccomm({ needAccommodation: v })}
              />
            </Field>
            <Field
              label={t("pages.internship.internshipform.label_are_you_interested_in_taking_arabic_classes_durin")}
              required
            >
              <RadioGroup
                name="arabic_class"
                options={YES_NO_MAYBE}
                value={accommodation.arabicClasses}
                onChange={(v) => setAccomm({ arabicClasses: v })}
              />
            </Field>
            <Field label={t("pages.internship.internshipform.label_are_you_interested_in_joining_cultural_activities")}>
              <RadioGroup
                name="cultural"
                options={YES_NO_MAYBE}
                value={accommodation.culturalActivities}
                onChange={(v) => setAccomm({ culturalActivities: v })}
              />
            </Field>
            <ContinueBtn disabled={!completions[6]} onClick={() => next(6)} />
          </AccordionSection>

          {/* 8 — Availability & Commitment */}
          <AccordionSection
            index={7}
            open={openSection === 7}
            locked={isLocked(7)}
            complete={completions[7]}
            onToggle={() => handleToggle(7)}
          >
            <Field
              label={t("pages.internship.internshipform.label_are_you_able_to_commit_to_the_selected_internship")}
              required
            >
              <RadioGroup
                name="commit"
                options={YES_NO}
                value={availability.canCommit}
                onChange={(v) => setAvail({ canCommit: v })}
              />
            </Field>
            <Field label={t("pages.internship.internshipform.label_do_you_have_any_special_scheduling_limitations")}>
              <textarea
                className={styles.textarea}
                rows={2}
                value={availability.schedulingLimitations}
                onChange={(e) =>
                  setAvail({ schedulingLimitations: e.target.value })
                }
              />
            </Field>
            <Field
              label={t("pages.internship.internshipform.label_are_you_applying_through_a_university_program_or_")}
              required
            >
              <RadioGroup
                name="apply_via"
                options={["Through a university program", "Independently"]}
                value={availability.applyingThrough}
                onChange={(v) => setAvail({ applyingThrough: v })}
              />
            </Field>
            {availability.applyingThrough ===
              "Through a university program" && (
              <Field label="University coordinator's name and email">
                <input
                  className={styles.input}
                  type="text"
                  value={availability.coordinatorInfo}
                  placeholder={t("pages.internship.internshipform.placeholder_dr_jane_smith_j_smith_university_edu")}
                  onChange={(e) =>
                    setAvail({ coordinatorInfo: e.target.value })
                  }
                />
              </Field>
            )}
            <ContinueBtn disabled={!completions[7]} onClick={() => next(7)} />
          </AccordionSection>

          {/* 9 — Documents */}
          <AccordionSection
            index={8}
            open={openSection === 8}
            locked={isLocked(8)}
            complete={completions[8]}
            onToggle={() => handleToggle(8)}
          >
            <FileUpload
              label={t("pages.internship.internshipform.label_cv_resume")}
              required
              file={documents.cv}
              onFile={(f) => setDocs({ cv: f })}
            />
            <FileUpload
              label={t("pages.internship.internshipform.label_motivation_letter")}
              hint="optional but recommended"
              file={documents.motivationLetter}
              onFile={(f) => setDocs({ motivationLetter: f })}
            />
            <FileUpload
              label={t("pages.internship.internshipform.label_portfolio_or_work_samples")}
              hint="for Design, Media, IT, or Marketing applicants"
              file={documents.portfolio}
              onFile={(f) => setDocs({ portfolio: f })}
              accept=".pdf,.zip,application/pdf,application/zip"
            />
            <ContinueBtn disabled={!completions[8]} onClick={() => next(8)} />
          </AccordionSection>

          {/* 10 — Final Declaration */}
          <AccordionSection
            index={9}
            open={openSection === 9}
            locked={isLocked(9)}
            complete={completions[9]}
            onToggle={() => handleToggle(9)}
          >
            <Field label={t("pages.internship.internshipform.label_how_did_you_hear_about_deewan_institute")} required>
              <RadioGroup
                name="heard"
                options={HEARD_ABOUT_OPTIONS}
                value={declaration.heardAbout}
                onChange={(v) => setDecl({ heardAbout: v })}
              />
            </Field>
            <Field label={t("pages.internship.internshipform.label_is_there_anything_else_you_would_like_us_to_know")}>
              <textarea
                className={styles.textarea}
                rows={3}
                value={declaration.anythingElse}
                onChange={(e) => setDecl({ anythingElse: e.target.value })}
              />
            </Field>
            <label className={styles.declaration_check}>
              <input
                type="checkbox"
                className={styles.sr_only}
                checked={declaration.confirmed}
                onChange={(e) => setDecl({ confirmed: e.target.checked })}
              />
              <span
                className={`${styles.check_box} ${declaration.confirmed ? styles.check_box_active : ""}`}
              />
              <span>
                {t("pages.internship.internshipform.text_i_confirm_that_the_information_i_provided_is_accur")}</span>
            </label>
            <button
              type="button"
              className={styles.submit_btn}
              disabled={!completions.every(Boolean) || status === "submitting"}
              onClick={handleSubmit}
            >
              {status === "submitting" ? (
                <>
                  <span className={styles.spinner} /> {t("pages.internship.internshipform.text_submitting")}</>
              ) : (
                "Submit Application"
              )}
            </button>
          </AccordionSection>
        </div>
      </div>
      <Footer />
      {status === "success" && <SuccessModal />}
    </Fragment>
  );
}

export default InternshipForm;
