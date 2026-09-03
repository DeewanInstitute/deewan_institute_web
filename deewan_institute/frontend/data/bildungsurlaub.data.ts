export interface GermanStateCard {
  id: string;
  stateName: string;
  logoSrc: string;
  logoAlt: string;
  viewMoreLink: string;
}
export const bildungsurlaubContent = {
  en: {
    whatIsHeading: "What is Bildungsurlaub?",
    bodyText: `Bildungsurlaub (educational leave) is a legal entitlement in Germany that allows employees to take paid leave from work to participate in officially recognized educational programs.

The exact regulations vary by federal state, but in general, employees are entitled to several days per year for further education, provided the course is approved by the relevant state authority.

The Deewan Institute for Languages and Cultural Studies is officially recognized in Berlin, Lower Saxony, Rhineland, Saarland, Brandenburg, Hamburg, and Saxony-Anhalt as a provider of Bildungsurlaub programs. Our courses meet the required legal and quality standards in these states.

This means:

- Employees in these states can apply for paid educational leave to attend our courses.
- Our programs comply with official requirements regarding content, structure, and teaching hours.
- Participants receive all necessary documentation to submit to their employer.

Bildungsurlaub provides professionals with the opportunity to improve their language skills and intercultural competence while continuing to receive their salary.

For further information, please contact us at arabic@deewaninstitute.com.`,
  },
  de: {
    whatIsHeading: "Was ist Bildungsurlaub?",
    bodyText: `Bildungsurlaub ist ein gesetzlicher Anspruch in Deutschland, der Arbeitnehmerinnen und Arbeitnehmern erlaubt, bezahlten Urlaub für anerkannte Bildungsmaßnahmen zu nehmen.

Die genauen Regelungen variieren je nach Bundesland. Im Allgemeinen haben Beschäftigte Anspruch auf mehrere Tage pro Jahr, sofern der Kurs von der zuständigen Landesbehörde anerkannt ist.

Das ist in Berlin, Niedersachsen, Rheinland-Pfalz, Saarland, Brandenburg, Hamburg, und Sachsen-Anhalt offiziell anerkannt. Unsere Kurse erfüllen die gesetzlichen Qualitäts- und Inhaltsstandards in diesen Bundesländern.

Das bedeutet:

- Beschäftigte in diesen Bundesländern können Bildungsurlaub für unsere Kurse beantragen.
- Unsere Programme entsprechen den offiziellen Anforderungen an Inhalt, Struktur und Unterrichtsstunden.
- Teilnehmende erhalten alle notwendigen Unterlagen für ihren Arbeitgeber.

Für weitere Informationen wenden Sie sich bitte an arabic@deewaninstitute.com.`,
  },
  ar: {
    whatIsHeading: "ما هو Bildungsurlaub؟",
    bodyText: `Bildungsurlaub (الإجازة التعليمية) هو حق قانوني في ألمانيا يتيح للموظفين الحصول على إجازة مدفوعة الأجر من العمل للمشاركة في برامج تعليمية معترف بها رسميًا.

تختلف اللوائح الدقيقة باختلاف الولاية الفيدرالية، ولكن بشكل عام، يحق للموظفين الحصول على عدة أيام سنويًا لمواصلة التعليم، شريطة أن تكون الدورة معتمدة من قبل السلطة المختصة في الولاية.

معهد ديوان للغات والدراسات الثقافية معترف به رسميًا في برلين وساكسونيا السفلى والراينلاند وسارلاند وبراندنبورغ وهامبورغ وساكسونيا-أنهالت كمقدم لبرامج Bildungsurlaub. تلبي دوراتنا المعايير القانونية والنوعية المطلوبة في هذه الولايات.

هذا يعني:

- يمكن للموظفين في هذه الولايات التقدم بطلب للحصول على إجازة تعليمية مدفوعة الأجر لحضور دوراتنا.
- تتوافق برامجنا مع المتطلبات الرسمية المتعلقة بالمحتوى والهيكل وساعات التدريس.
- يحصل المشاركون على جميع الوثائق اللازمة لتقديمها إلى صاحب العمل.

يوفر Bildungsurlaub للمهنيين فرصة تحسين مهاراتهم اللغوية وكفاءتهم الثقافية مع الاستمرار في تلقي رواتبهم.

لمزيد من المعلومات، يرجى التواصل معنا عبر arabic@deewaninstitute.com.`,
  },
};
export const germanStateCards: GermanStateCard[] = [
  {
    id: "berlin",
    stateName: "Berlin",
    logoSrc: "/assets/images/logos/b_logo2.webp",
    logoAlt: "Berlin Bildungsurlaub Logo",
    viewMoreLink: "assets/pdf/bildungsurlaub/Berlin.pdf",
  },
  {
    id: "lower-saxony",
    stateName: "Lower Saxony",
    logoSrc: "/assets/images/logos/b_logo3.webp",
    logoAlt: "Lower Saxony AEWB Logo",
    viewMoreLink: "assets/pdf/bildungsurlaub/LowerSaxonyPDF.pdf",
  },
  {
    id: "Hamburg",
    stateName: "Hamburg",
    logoSrc: "/assets/images/logos/b_logo4.webp",
    logoAlt: "Hamburg Bildungsurlaub Logo",
    viewMoreLink: "assets/pdf/bildungsurlaub/Hamburg.pdf",
  },
  {
    id: "rhineland",
    stateName: "Rhineland",
    logoSrc: "/assets/images/logos/b_logo5.webp",
    logoAlt: "Rhineland Bildungsurlaub Logo",
    viewMoreLink: "assets/pdf/bildungsurlaub/Rhineland.pdf",
  },
  {
    id: "Saarland",
    stateName: "Saarland",
    logoSrc: "/assets/images/logos/b_logo6.webp",
    logoAlt: "Saarland Bildungsurlaub Logo",
    viewMoreLink: "assets/pdf/bildungsurlaub/Saarland.pdf",
  },
  {
    id: "Bradenburg",
    stateName: "Bradenburg",
    logoSrc: "/assets/images/logos/b_logo7.webp",
    logoAlt: "Bradenburg Bildungsurlaub Logo",
    viewMoreLink: "assets/pdf/bildungsurlaub/Brandenburg.pdf",
  },
  {
    id: "Saxony-Anhalt",
    stateName: "Saxony-Anhalt",
    logoSrc: "/assets/images/logos/b_logo8.webp",
    logoAlt: "Saxony-Anhalt Bildungsurlaub Logo",
    viewMoreLink: "/assets/pdf/bildungsurlaub/Saxony-Anhalt.pdf",
  },
];
