interface arabicCourse {
  title: string;
  courses: Array<{
    arabicTitle: string;
    title: string;
    description: string;
    buttonText?: string;
    listDescription?: string;
    buttonLink?: string;
    learnMoreButton?: string;
    list?: Array<{
      type: string;
    }>;
  }>;
}

export const courseData: arabicCourse = {
  title: "Arabic Courses",
  courses: [
    // COLLOQUIAL LEVANTINE ARABIC
    {
      arabicTitle: "العربية العامية",
      title: "COLLOQUIAL LEVANTINE ARABIC",
      description:
        "Colloquial Levantine Arabic is a group of Arabic dialects spoken in the Levant region, which includes countries including Syria, Lebanon, Jordan, and Palestine. This dialect group is characterized by several features that distinguish it from Modern Standard Arabic, including pronunciation, grammar, and vocabulary.",
      
      listDescription:
        "This course can be offered in various formats, Including:",
      list: [
        {
          type: "One-to-One Classes",
        },
        // {
        //   type: "Hop-On Hop-Off",
        // },
        {
          type: "Group Classes",
        },
        
      ],
      buttonText: "Sign Up",
      buttonLink: "https://docs.google.com/forms/u/1/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform",
    },
    // FUSHA (MSA, MEDIA AND CLASSICAL ARABIC)
    {
      arabicTitle: "العربية الفصحى",
      title: "FUSHA (MSA, MEDIA AND CLASSICAL ARABIC)",
      description:
        "FusHa, also known as Modern Standard Arabic (MSA), is the standardized literary form of the Arabic language, used in formal communication, academic settings, media, and literature across the Arab world, and is the language of instruction in schools and universities.",
      listDescription:
        "This course can be offered in various formats, Including:",
      list: [
        {
          type: "One-to-One Classes",
        },
        // {
        //   type: "Hop-On Hop-Off",
        // },
        {
          type: "Group Classes",
        },
      ],
      buttonText: "Sign Up",
      buttonLink: "https://docs.google.com/forms/u/1/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform",
    },
    // MIXED ARABIC (COLLOQUIAL & FUSHA)
    {
      arabicTitle: "العربية المختلطة (العامية والفصحى)",
      title: "MIXED ARABIC (COLLOQUIAL & FUSHA)",
      description:
        "Mixed Arabic, or “Arabic Diglossia,” blends Modern Standard Arabic (MSA) with colloquial Arabic in the same conversation or text. Speakers across the Arab world switch between the two depending on the context and audience, making this skill essential for natural and effective communication.",
      listDescription:
        "This course can be offered in various formats, including:",
      list: [
        {
          type: "One-to-One Classes",
        },
        // {
        //   type: "Hop-On Hop-Off",
        // },
        {
          type: "Group Classes",
        },
      ],
      buttonText: "Sign Up",
      buttonLink: "https://docs.google.com/forms/u/1/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform",
    },
    // ArabiTalk
    {
      arabicTitle: "عربي توك",
      title: "ArabiTalk",
      description:
        "Whether you’re a beginner aiming to build confidence, or an advanced speaker looking to refine your fluency, ArabiTalk offers one–on–one sessions with experienced native–speaking coaches. Conversations are tailored to your level and interests — from everyday topics to academic or professional themes — offering the right balance between structure and spontaneity.",
      learnMoreButton: "Learn More",
      buttonLink: "https://deewaninstitute.com/arabic-courses/arabi-talk",
    },
    //Arabic Program for Kids
    {
      arabicTitle: "برنامج اللغة العربية للأطفال",
      title: "Arabic Program for Kids",
      description:
        "The Deewan Institute offers a fun, interactive Kids' Arabic Program for young learners, teaching Modern Standard Arabic (MSA) and Colloquial Arabic. The program focuses on building essential skills like Reading, Writing, Speaking, and Listening, providing a natural, exciting, and rewarding way to learn Arabic.",
      buttonText: "Sign Up",
      buttonLink: "https://docs.google.com/forms/u/1/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform",
    },
    // MIDDLE EASTERN STUDIES
    {
      arabicTitle: "دراسات الشرق الأوسط",
      title: "MIDDLE EASTERN STUDIES",
      description:
        "Mixed Arabic, also known as 'Arabic Diglossia,' involves using both Modern Standard Arabic (MSA) and colloquial Arabic in the same conversation or text. This practice is common in Arabic-speaking countries, where people switch between MSA and their local dialect depending on the context and audience. This skill is essential for effective communication in Arabic-speaking countries.",
      learnMoreButton: "Learn More",
      buttonLink: "https://deewaninstitute.com/arabic-courses/middle-eastern-studies",
    },
    // DIPLOMACY ARABIC
    {
      arabicTitle: "العربية الدبلوماسية",
      title: "DIPLOMACY ARABIC",
      description:
        "This is a specialized form of Arabic used in diplomatic communication between Arabic- speaking countries and international organizations.It is a variant of Modern Standard Arabic(MSA) and is used to communicate official and formal messages between governments, diplomats, and international organizations.Diplomacy Arabic uses a specific set of vocabulary, grammar, and expressions that are unique to diplomatic communication.It requires a high level of proficiency in MSA, as well as knowledge of political and cultural issues relevant to the region.",
      learnMoreButton: "Learn More",
      buttonLink: "https://deewaninstitute.com/arabic-courses/diplomacy-arabic",
    },
    // ARABIC JOURNALISM
    {
      arabicTitle: "العربية في الاعلام",
      title: "ARABIC JOURNALISM",
      description:
        "Immerses students in the principles of journalistic writing, reporting, and editing in the Arabic language. Covering news gathering, feature writing, and ethical considerations, this course is ideal for those pursuing a career in Arabic journalism or seeking a deeper understanding of media in the Arab world. Join us to enhance your language proficiency and journalistic skills with experienced instructors and practical exercises.",
      learnMoreButton: "Learn More",
      buttonLink: "https://deewaninstitute.com/arabic-courses/arabic-journalism",
    },
    // DEEWAN INTENSIVE SUMMER PROGRAM
    {
      arabicTitle: "برنامج ديوان الصيفي والخريفي المكثف",
      title: "DEEWAN INTENSIVE SUMMER AND FALL PROGRAM",
      description:
        "Deewan's Intensive Summer and Fall Program is a rigorous language learning program that helps students improve their Arabic skills noticably. With focus on all aspects of the language, including grammar, vocabulary, reading, writing, and conversation, this program is taught by experienced instructors using interactive teaching methods. Different study plans are available, and students of all levels can benefit from the program to accelerate their Arabic learning and deepen their cultural understanding.",
      learnMoreButton: "Learn More",
      buttonLink: "https://deewaninstitute.com/arabic-courses/intensive-program",
      
    },
    // OPI
    {
      arabicTitle: "مقابلة الكفاءة الشفوية وفق معايير ACTFL",
      title: "ACTFL Oral Proficiency Interview (OPI)",
      description:
        "The OPI at is a structured oral proficiency assessment designed to evaluate students’ spoken Arabic skills through interactive conversation. It measures fluency, comprehension, pronunciation, and communication ability, helping learners identify their level, track progress, and build confidence in using Arabic effectively.",
      buttonText: "Sign Up",
      buttonLink: "https://docs.google.com/forms/u/1/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform",
    },
    //ArabiFlex
    {
      arabicTitle: "عربي فليكس للمحادثةالجماعية",
      title: "ArabiFlex Conversation Group Class",
      description:"A flexible Levantine Arabic conversation program focused on speaking, fluency, and real-life communication for B1+ learners.",
      buttonText: "Sign Up",
      buttonLink: "https://docs.google.com/forms/u/1/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform",
    },
    //Online ArabiCafe
    {
      arabicTitle: "عربي كافيه أونلاين",
      title: "Online ArabiCafe",
      description:"An interactive online conversation space where B1+ learners practice Levantine Arabic through discussions, cultural topics, and social interaction in a relaxed café-style environment.",
      buttonText: "Learn More",
      buttonLink: "https://deewaninstitute.com/arabic-courses/arabicafe",
    },
  ],
};

export default courseData;
