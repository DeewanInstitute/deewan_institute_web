// ─── Internship Form Data ─────────────────────────────────────────────────────

export const INTERNSHIP_AREAS = [
  "Language & Education",
  "Tourism & Cultural Experiences",
  "Mobile Application / Technology / IT",
  "Graphic Design & Media",
  "Administration & Operations",
  "Marketing & Social Media",
] as const;

export type InternshipArea = (typeof INTERNSHIP_AREAS)[number];

export const INTERNSHIP_OPTIONS = [
  "Full-Time Internship (40 hours/week)",
  "Half-Day Internship (20 hours/week)",
  "Light Internship (10–18 hours/week)",
] as const;

export const INTERNSHIP_DURATIONS = [
  "1 month",
  "2 months",
  "3 months",
  "More than 3 months",
] as const;

export const ACADEMIC_LEVELS = [
  "Undergraduate student",
  "Master's student",
  "PhD student",
  "Recent graduate",
  "Other",
] as const;

export const GENDER_OPTIONS = [
  "Male",
  "Female",
  "Prefer not to say",
  "Other",
] as const;

export const ENGLISH_LEVELS = [
  "Beginner",
  "Intermediate",
  "Advanced",
  "Native / Fluent",
] as const;

export const ARABIC_LEVELS = [
  "No Arabic",
  "Beginner",
  "Intermediate",
  "Advanced",
  "Native speaker",
] as const;

export const SKILLS_LIST = [
  "Teaching / tutoring",
  "Communication with students or clients",
  "Customer service",
  "Tourism coordination",
  "Event organization",
  "Content writing",
  "Social media management",
  "Graphic design",
  "Video editing",
  "Photography",
  "Website management",
  "App testing",
  "IT support",
  "Administrative work",
  "Translation",
  "Research",
  "Other",
] as const;

export const HEARD_ABOUT_OPTIONS = [
  "University",
  "Friend / referral",
  "Social media",
  "Google search",
  "Website",
  "Previous student",
  "Other",
] as const;

export const YES_NO_MAYBE = ["Yes", "No", "Maybe"] as const;
export const YES_NO = ["Yes", "No"] as const;

// ─── Validation helpers ───────────────────────────────────────────────────────

export const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
export const isValidPhone = (v: string) => /^\+?[\d\s\-().]{7,20}$/.test(v.trim());
// ─── Section metadata ─────────────────────────────────────────────────────────

export interface SectionMeta {
  index: number;
  title: string;
  arabicNumeral: string;
  description: string;
}

export const SECTIONS: SectionMeta[] = [
  { index: 0, title: "Personal Information",      arabicNumeral: "١", description: "Tell us a little about yourself." },
  { index: 1, title: "Internship Preferences",    arabicNumeral: "٢", description: "What kind of internship are you looking for?" },
  { index: 2, title: "Areas of Interest",         arabicNumeral: "٣", description: "Which departments excite you most?" },
  { index: 3, title: "Skills & Experience",        arabicNumeral: "٤", description: "Share your background and abilities." },
  { index: 4, title: "Language Skills",            arabicNumeral: "٥", description: "Language proficiency helps us place you well." },
  { index: 5, title: "Motivation",                 arabicNumeral: "٦", description: "In your own words — why Deewan?" },
  { index: 6, title: "Accommodation & Classes",   arabicNumeral: "٧", description: "Let us know if you need extra support." },
  { index: 7, title: "Availability & Commitment", arabicNumeral: "٨", description: "Help us understand your schedule." },
  { index: 8, title: "Documents",                  arabicNumeral: "٩", description: "Upload your CV and any supporting materials." },
  { index: 9, title: "Final Declaration",          arabicNumeral: "١٠", description: "One last step before you submit." },
];

// ─── Form state types ─────────────────────────────────────────────────────────

export interface PersonalInfo {
  fullName: string;
  gender: string;
  dateOfBirth: string;
  nationality: string;
  residence: string;
  email: string;
  phone: string;
  university: string;
  fieldOfStudy: string;
  academicLevel: string;
}

export interface InternshipPreferences {
  option: string;
  duration: string;
  startDate: string;
  endDate: string;
  datesFlexible: string;
}

export interface AreaInterests {
  areas: string[];
  firstPreference: string;
  secondPreference: string;
}

export interface SkillsExperience {
  background: string;
  hasPreviousExperience: string;
  previousExperience: string;
  skills: string[];
  tools: string;
}

export interface LanguageSkills {
  english: string;
  arabic: string;
  otherLanguages: string;
}

export interface Motivation {
  why: string;
  learn: string;
  jordan: string;
}

export interface AccommodationClasses {
  needAccommodation: string;
  arabicClasses: string;
  culturalActivities: string;
}

export interface Availability {
  canCommit: string;
  schedulingLimitations: string;
  applyingThrough: string;
  coordinatorInfo: string;
}

export interface Documents {
  cv: File | null;
  motivationLetter: File | null;
  portfolio: File | null;
}

export interface FinalDeclaration {
  heardAbout: string;
  anythingElse: string;
  confirmed: boolean;
}

export interface InternshipFormState {
  personal: PersonalInfo;
  preferences: InternshipPreferences;
  areas: AreaInterests;
  skills: SkillsExperience;
  languages: LanguageSkills;
  motivation: Motivation;
  accommodation: AccommodationClasses;
  availability: Availability;
  documents: Documents;
  declaration: FinalDeclaration;
}

// ─── Default state ────────────────────────────────────────────────────────────

export const DEFAULT_FORM_STATE: InternshipFormState = {
  personal: {
    fullName: "", gender: "", dateOfBirth: "", nationality: "",
    residence: "", email: "", phone: "", university: "", fieldOfStudy: "", academicLevel: "",
  },
  preferences: {
    option: "", duration: "", startDate: "", endDate: "", datesFlexible: "",
  },
  areas: { areas: [], firstPreference: "", secondPreference: "" },
  skills: {
    background: "", hasPreviousExperience: "", previousExperience: "", skills: [], tools: "",
  },
  languages: { english: "", arabic: "", otherLanguages: "" },
  motivation: { why: "", learn: "", jordan: "" },
  accommodation: { needAccommodation: "", arabicClasses: "", culturalActivities: "" },
  availability: {
    canCommit: "", schedulingLimitations: "", applyingThrough: "", coordinatorInfo: "",
  },
  documents: { cv: null, motivationLetter: null, portfolio: null },
  declaration: { heardAbout: "", anythingElse: "", confirmed: false },
};

// ─── Completion validators ────────────────────────────────────────────────────

export const sectionValidators: Array<(state: InternshipFormState) => boolean> = [
  ({ personal: p }) =>
  !!(p.fullName && p.gender && p.dateOfBirth && p.nationality &&
     p.residence && p.email && p.phone && p.university && p.fieldOfStudy && p.academicLevel)
  && isValidEmail(p.email)
  && isValidPhone(p.phone),

  ({ preferences: p }) =>
    !!(p.option && p.duration && p.startDate && p.endDate && p.datesFlexible),

  ({ areas: a }) =>
    a.areas.length > 0 && !!a.firstPreference,

  ({ skills: s }) =>
    !!(s.background && s.hasPreviousExperience),

  ({ languages: l }) =>
    !!(l.english && l.arabic),

  ({ motivation: m }) =>
    !!(m.why && m.learn),

  ({ accommodation: a }) =>
    !!(a.needAccommodation && a.arabicClasses),

  ({ availability: a }) =>
    !!(a.canCommit && a.applyingThrough),

  ({ documents: d }) =>
    !!d.cv,

  ({ declaration: d }) =>
    !!(d.heardAbout && d.confirmed),
];

// ─── FormData builder ─────────────────────────────────────────────────────────

export function buildFormData(state: InternshipFormState): FormData {
  const data = new FormData();

  // Send each section as a JSON string
  data.append("personal", JSON.stringify(state.personal));
  data.append("preferences", JSON.stringify(state.preferences));
  data.append("areas", JSON.stringify(state.areas));
  data.append("skills", JSON.stringify(state.skills));
  data.append("languages", JSON.stringify(state.languages));
  data.append("motivation", JSON.stringify(state.motivation));
  data.append("accommodation", JSON.stringify(state.accommodation));
  data.append("availability", JSON.stringify(state.availability));
  data.append("declaration", JSON.stringify(state.declaration));

  // Files stay as-is
  if (state.documents.cv) data.append("cv", state.documents.cv);
  if (state.documents.motivationLetter) data.append("motivationLetter", state.documents.motivationLetter);
  if (state.documents.portfolio) data.append("portfolio", state.documents.portfolio);

  return data;
}