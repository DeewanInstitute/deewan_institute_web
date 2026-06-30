export type NewsletterEdition = {
  id: string;
  label: string;
  tag: string;
  title: string;
  format: "rectangular" | "instagram";
  aspectRatio: number;
  src: string;
  href: string;
  description: string;
};

export const EDITIONS: NewsletterEdition[] = [

  {
    id: "july",
    label: "July 2026",
    tag: "Latest Issue",
    title: "July Deewan Newsletter",
    format: "rectangular",
    aspectRatio: 56.25,
    src: "https://www.canva.com/design/DAHN2j4SP-s/3joS_FTSBteJea8n76rv3A/view?embed",
    href: "https://www.canva.com/design/DAHN2j4SP-s/3joS_FTSBteJea8n76rv3A/view",
    description:
      "Dive into Arabic language milestones, cultural highlights from Al-Weibdeh, and upcoming events at Deewan Institute.",

  },
   {
    id: "June",
    label: "June 2026",
    tag: "Latest Issue",
    title: "June Deewan Newsletter",
    format: "rectangular",
    aspectRatio: 56.25,
    src: "https://www.canva.com/design/DAHLOMdwkGE/U1TXbgkcx_a5hQMFTo4_AA/view?embed",
    href: "https://www.canva.com/design/DAHLOMdwkGE/U1TXbgkcx_a5hQMFTo4_AA/view",
    description:
      "Dive into Arabic language milestones, cultural highlights from Al-Weibdeh, and upcoming events at Deewan Institute.",
  },
  {
    id: "may",
    label: "May 2026",
    tag: "Previous Issue",
    title: "May Deewan Newsletter",
    format: "rectangular",
    aspectRatio: 56.25,
    src: "https://www.canva.com/design/DAHIP7u24OQ/iQmKE5kNkWEgT0J5eLx2IA/view?embed",
    href: "https://www.canva.com/design/DAHIP7u24OQ/iQmKE5kNkWEgT0J5eLx2IA/view",
    description:
      "Dive into Arabic language milestones, cultural highlights from Al-Weibdeh, and upcoming events at Deewan Institute.",
  },
  {
    id: "april",
    label: "April 2026",
    tag: "Previous Issue",
    title: "April Deewan Newsletter",
    format: "rectangular",
    aspectRatio: 56.25,
    src: "https://www.canva.com/design/DAHFUmbMzL4/2mzaMuqfdSG10IRrTHKKOw/view?embed",
    href: "https://www.canva.com/design/DAHFUmbMzL4/2mzaMuqfdSG10IRrTHKKOw/view",
    description:
      "A visual journey through Deewan's April programming — language, culture, and community in every frame.",
  },
    {
    id: "March",
    label: "March 2026",
    tag: "Previous Issue",
    title: "March Deewan Newsletter",
    format: "rectangular",
    aspectRatio: 56.25,
    src: "https://www.canva.com/design/DAHCU4sR-yY/1F7S0L_zN7_O_drRPPYHyQ/view?embed",
    href: "https://www.canva.com/design/DAHCU4sR-yY/1F7S0L_zN7_O_drRPPYHyQ/view",
    description:
      "A visual journey through Deewan's March programming — language, culture, and community in every frame.",
  },
      {
    id: "February",
    label: "February 2026",
    tag: "Previous Issue",
    title: "February Deewan Newsletter",
    format: "rectangular",
    aspectRatio: 56.25,
    src: "https://www.canva.com/design/DAG_mKcDzyg/uWrKO7WD3lDXuJnwr9A7eQ/view?embed",
    href: "https://www.canva.com/design/DAG_mKcDzyg/uWrKO7WD3lDXuJnwr9A7eQ/view",
    description:
      "A visual journey through Deewan's February programming — language, culture, and community in every frame.",
  },
        {
    id: "January",
    label: "January 2026",
    tag: "Previous Issue",
    title: "January Deewan Newsletter",
    format: "rectangular",
    aspectRatio: 56.25,
    src: "https://www.canva.com/design/DAHIsnVajck/4TWLozNDh4fCaWCJ5A2yBg/view?embed",
    href: "https://www.canva.com/design/DAHIsnVajck/4TWLozNDh4fCaWCJ5A2yBg/view",
    description:
      "A visual journey through Deewan's January programming — language, culture, and community in every frame.",
  },
  
];
