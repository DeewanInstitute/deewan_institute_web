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
    learnMoreLink?: string;
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
        "is the everyday spoken Arabic used across Jordan, Palestine, Lebanon, and Syria. Learning this dialect helps learners communicate naturally in daily life and better understand the culture of the Levant.",
      
      listDescription:
        "This course is available in:",
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
      learnMoreButton: "Learn More",
      learnMoreLink: "/arabic-courses/colloquial-arabic",
    },
    // FUSHA (MSA, MEDIA AND CLASSICAL ARABIC)
    {
      arabicTitle: "العربية الفصحى",
      title: "FUSHA (MSA, MEDIA AND CLASSICAL ARABIC)",
      description:
        "is the formal, standardized form of Arabic used in education, media, literature, and professional communication throughout the Arab world. It provides a strong foundation for reading, writing, and formal communication.",
      listDescription:
        "This course is available in:",
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
      learnMoreButton: "Learn More",
      learnMoreLink: "/arabic-courses/modern-standard-arabic",
    },
    // MIXED ARABIC (COLLOQUIAL & FUSHA)
    {
      arabicTitle: "العربية المختلطة (العامية والفصحى)",
      title: "MIXED ARABIC (COLLOQUIAL & FUSHA)",
      description:
        "combines Modern Standard Arabic (MSA) with colloquial Arabic, reflecting how Arabic is naturally used in everyday life. This course helps learners switch confidently between formal and spoken Arabic in different contexts.",
      listDescription:
        "This course is available in:",
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
      learnMoreButton: "Learn More",
      learnMoreLink: "/arabic-courses/mixed-arabic",
    },
    // ArabiTalk
    {
      arabicTitle: "عربي توك",
      title: "ArabiTalk",
      description:
        "Whether you’re a beginner aiming to build confidence, or an advanced speaker looking to refine your fluency, ArabiTalk offers one–on–one sessions with experienced native–speaking coaches. Conversations are tailored to your level and interests — from everyday topics to academic or professional themes — offering the right balance between structure and spontaneity.",
      buttonText: "Sign Up",
      buttonLink: "https://docs.google.com/forms/u/1/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform",
      learnMoreButton: "Learn More",
      learnMoreLink: "/arabic-courses/arabi-talk",
    },
    //Arabic Program for Kids
    {
      arabicTitle: "برنامج اللغة العربية للأطفال",
      title: "Arabic Program for Kids",
      description:
        "The Deewan Institute offers a fun, interactive Kids' Arabic Program for young learners, teaching Modern Standard Arabic (MSA) and Colloquial Arabic. The program focuses on building essential skills like Reading, Writing, Speaking, and Listening, providing a natural, exciting, and rewarding way to learn Arabic.",
      buttonText: "Sign Up",
      buttonLink: "https://docs.google.com/forms/u/1/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform",
      learnMoreButton: "Learn More",
      learnMoreLink: "/arabic-courses/arabic-for-kids",
    },
    // MIDDLE EASTERN STUDIES
    {
      arabicTitle: "دراسات الشرق الأوسط",
      title: "MIDDLE EASTERN STUDIES",
      description:
        "Mixed Arabic, also known as 'Arabic Diglossia,' involves using both Modern Standard Arabic (MSA) and colloquial Arabic in the same conversation or text. This practice is common in Arabic-speaking countries, where people switch between MSA and their local dialect depending on the context and audience. This skill is essential for effective communication in Arabic-speaking countries.",
      buttonText: "Sign Up",
      buttonLink: "https://docs.google.com/forms/u/1/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform",
      learnMoreButton: "Learn More",
      learnMoreLink: "/arabic-courses/middle-eastern-studies",
      
    },
    // DIPLOMACY ARABIC
    {
      arabicTitle: "العربية الدبلوماسية",
      title: "DIPLOMACY ARABIC",
      description:
        "is a specialized form of Modern Standard Arabic (MSA) used in diplomacy, international relations, and official communication. This course focuses on the language, terminology, and communication skills needed for professional interactions between governments, diplomats, and international organizations.",
      buttonText: "Sign Up",
      buttonLink: "https://docs.google.com/forms/u/1/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform",
      learnMoreButton: "Learn More",
      learnMoreLink: "/arabic-courses/diplomacy-arabic",
    },
    // ARABIC JOURNALISM
    {
      arabicTitle: "العربية في الاعلام",
      title: "ARABIC JOURNALISM",
      description:
        "introduces students to journalistic writing, reporting, and editing in Arabic. The course covers news writing, feature articles, media analysis, and journalistic ethics, helping learners strengthen both their Arabic language proficiency and practical media skills through hands-on exercises and real-world applications.",
      buttonText: "Sign Up",
      buttonLink: "https://docs.google.com/forms/u/1/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform",
      learnMoreButton: "Learn More",
      learnMoreLink: "/arabic-courses/arabic-journalism",
    },
    // DEEWAN INTENSIVE SUMMER PROGRAM
    {
      arabicTitle: "برنامج ديوان الصيفي والخريفي المكثف",
      title: "DEEWAN INTENSIVE SUMMER AND FALL PROGRAM",
      description:
        "helps students make rapid progress in Arabic through intensive training in reading, writing, grammar, and conversation, while gaining valuable cultural insight",
      buttonText: "Sign Up",
      buttonLink: "https://docs.google.com/forms/u/1/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform",
      learnMoreButton: "Learn More",
      learnMoreLink: "/arabic-courses/intensive-program",
      
    },
    // OPI
    {
      arabicTitle: "مقابلة الكفاءة الشفوية وفق معايير ACTFL",
      title: "ACTFL Oral Proficiency Interview (OPI)",
      description:
        "The OPI at is a structured oral proficiency assessment designed to evaluate students’ spoken Arabic skills through interactive conversation. It measures fluency, comprehension, pronunciation, and communication ability, helping learners identify their level, track progress, and build confidence in using Arabic effectively.",
        
      buttonText: "Sign Up",
      buttonLink: "https://docs.google.com/forms/u/1/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform",
      // learnMoreButton: "Learn More",
      // learnMoreLink: "https://deewaninstitute.com/arabic-courses/opi",
    },
    //ArabiFlex
    {
      arabicTitle: "عربي فليكس للمحادثةالجماعية",
      title: "ArabiFlex Conversation Group Class",
      description:"A flexible Levantine Arabic conversation program focused on speaking, fluency, and real-life communication for B1+ learners.",
      buttonText: "Sign Up",
      buttonLink: "https://docs.google.com/forms/u/1/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform",
      // learnMoreButton: "Learn More",
      // learnMoreLink: "/arabic-courses/arabi-flex",
    },
    //Online ArabiCafe
    {
      arabicTitle: "عربي كافيه أونلاين",
      title: "Online ArabiCafe",
      description:"An interactive online conversation space where B1+ learners practice Levantine Arabic through discussions, cultural topics, and social interaction in a relaxed café-style environment.",
        buttonText: "Sign Up",
      buttonLink: "https://docs.google.com/forms/u/1/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform",
      learnMoreButton: "Learn More",
      learnMoreLink: "/arabic-courses/arabicafe",
      
    }
  ],
};

export default courseData;
