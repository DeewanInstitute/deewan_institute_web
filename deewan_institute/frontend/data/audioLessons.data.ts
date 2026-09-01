export interface AudioSection {
  id: string;
  title: string;
  // Paste the Firebase Storage download URL here once the file is uploaded.
  // Leave empty ("") for sections that aren't recorded/uploaded yet — the
  // detail page shows a "Coming soon" state instead of a play button.
  audioUrl: string;
}

export interface AudioLesson {
  id: string;
  title: string;
  sections: AudioSection[];
}

export interface AudioChapter {
  id: string;
  title: string;
  // A normal chapter has nested Lesson folders — use `lessons`.
  lessons?: AudioLesson[];
  sections?: AudioSection[];
}

export interface AudioBookContent {
  bookId: string;
  youtubeUrl?: string;
  oneDriveUrl?: string;
  chapters: AudioChapter[];
}

// One entry per audio book id (must match the book ids used on the
// /audiobooks listing page, e.g. fushaBook.id, ammiyehCollection[].id,
// "main-book-everyday-idioms", "audio-culinary-guide").
export const audioBookContents: AudioBookContent[] = [
  {
    bookId: "fusha-msa-guide",
    youtubeUrl: "https://www.youtube.com/@thecomprehensiveguidetomod5488/playlists",
    oneDriveUrl: "https://1drv.ms/f/c/1bd9cb9d551010be/IgC-EBBVncvZIIAbBRMCAAAAAWFO3HMg9aGrtfcMVs9778o?e=xoE029",
chapters: [
  {
    id: "chapter-1",
    title: "Chapter 1",
    lessons: [
      {
        id: "1.1",
        title: "Lesson 1",
        sections: [
          { id: "1.1", title: "Section 1.1 — Pg. 4-7", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%201%2FLesson%201%2FSection%201.1%20p.%204-7.mp3?alt=media&token=9ae3b5d1-3a8a-491d-8655-3b1682dbc39a" },
          { id: "1.2", title: "Section 1.2 — Pg. 8", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%201%2FLesson%201%2FSection%201.2%20p.%208.mp3?alt=media&token=8af17262-0065-499f-a20c-6bbcf404689d" },
          { id: "1.3", title: "Section 1.3 — Pg. 12", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%201%2FLesson%201%2FSection%201.3%20p.%2012.mp3?alt=media&token=340c0bef-7d16-4a52-818b-fbbb51a79625" },
          { id: "1.4", title: "Section 1.4 — Pg. 13" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%201%2FLesson%201%2FSection%201.4%20p.%2013.mp3?alt=media&token=91a10e96-8d2b-418b-9e52-c279938d150b"},
        ],
      },
      {
        id: "1.2",
        title: "Lesson 2",
        sections: [
          { id: "2.1.1", title: "Section 2.1 — Pg. 16", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%201%2FLesson%202%2FSection%202.1%20p.%2016.mp3?alt=media&token=8a9b0acc-fc59-4bca-bd66-de1ae03c3fa1" },
          { id: "2.1.2", title: "Section 2.1 — Pg. 17", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%201%2FLesson%202%2FSection%202.1%20p.%2017.mp3?alt=media&token=7bdee39b-8563-4c68-9d88-35004074a5cb" },
          { id: "2.1.3", title: "Section 2.1 — Pg. 18", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%201%2FLesson%202%2FSection%202.1%20p.%2018.mp3?alt=media&token=f0355f0f-16a4-4710-92a9-e9e672897fbe" },
          { id: "2.2.1", title: "Section 2.2 — Pg. 19", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%201%2FLesson%202%2FSection%202.2%20p.%2019.mp3?alt=media&token=80978e24-e84e-4531-a394-6835481f5912" },
          { id: "2.2.2", title: "Section 2.2 — Pg. 20", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%201%2FLesson%202%2FSection%202.2%20p.%2020.mp3?alt=media&token=1486608b-0e36-4e71-be64-926115c36bfd" },
          { id: "2.3", title: "Section 2.3 — Pg. 21-24", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%201%2FLesson%202%2FSection%202.3%20p.%2021%20-%2024(1).mp3?alt=media&token=4df209bc-c5e5-4a20-8a47-23b494b0c134" },
          { id: "2.4", title: "Section 2.4 — Pg. 26" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%201%2FLesson%202%2FSection%202.4%20p.%2026.mp3?alt=media&token=e216ac67-39dd-4b40-9dec-0ea333ec741d"},
        ],
      },
      {
        id: "1.3",
        title: "Lesson 3",
        sections: [
          { id: "3.1", title: "Section 3.2 — Pg. 31", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%201%2FLesson%203%2FSection%203.2%20p.%2031.mp3?alt=media&token=c5c9c679-79f5-4d07-a5ea-9e8fb612bf08" },
          { id: "3.2", title: "Section 3.3 — Pg. 32", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%201%2FLesson%203%2FSection%203.3%20p.%2032.mp3?alt=media&token=08adabb2-66cd-44fe-a5a3-989372eedf10" },
          { id: "3.3", title: "Section 3.5 — Pg. 35", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%201%2FLesson%203%2FSection%203.5%20p.%2035.mp3?alt=media&token=edc4eca7-4926-4363-b230-c16af3bf2293" },
        ],
      },
      {
        id: "1.4",
        title: "Lesson 4",
        sections: [
          { id: "4.1", title: "Section 4.2 — Pg. 39-40", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%201%2FLesson%204%2FSection%204.2%20p.%2039-40.mp3?alt=media&token=faa81458-d6e0-48db-8553-a8193f4d7493" },
          { id: "4.2", title: "Section 4.3 — Pg. 42", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%201%2FLesson%204%2FSection%204.3%20.%2042.mp3?alt=media&token=63db8431-f003-4641-8bf3-f357a83974c4" },
        ],
      },      
      // {
      //   id: "1.2",
      //   title: "Lesson 2: Greetings",
      //   sections: [
      //     { id: "1.2.1", title: "Episode 1: Hello & Goodbye — Pg. 14-15", audioUrl: "" },
      //     // just one section here — that's fine
      //   ],
      // },
      // only 2 lessons in this chapter — that's fine too
    ],
  },
  {
    id: "chapter-2",
    title: "Chapter 2",
    lessons: [
      {
        id: "1.5",
        title: "Lesson 5",
        sections: [
          { id: "5.1.1", title: "Section 5.1 — Pg. 46", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%205%2FSection-5.1-p.-46.mp3?alt=media&token=4b2a29d0-6f14-4c58-874a-addb64932c5f" },
          { id: "5.1.2", title: "Section 5.1 — Pg. 47", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%205%2FSection-5.1-p.-47.mp3?alt=media&token=c4c10caf-736c-42dc-bd72-d277facf9aab" },
          { id: "5.1.3", title: "Section 5.1 — Pg. 48", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%205%2FSection-5.1-p.-48.mp3?alt=media&token=a97ad61e-d80b-4846-8556-3c7152eff3be" },
          { id: "5.2", title: "Section 5.2 — Pg. 50-51", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%205%2FSection-5.2-p.-50-51.mp3?alt=media&token=931e9263-6e4c-4086-8c2d-d440ade2da18" },
          { id: "5.3", title: "Section 5.3 — Pg. 52-54", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%205%2FSection-5.3-p.-52-54.mp3?alt=media&token=33264e3c-6d50-4b9b-8b35-13d8f6c78c6e" },
          { id: "5.4.1", title: "Section 5.4 — Pg. 57-58", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%205%2FSection-5.4-p.-57-58.mp3?alt=media&token=3e7ebc76-c39d-4b6c-9fdc-74a08733788c" },
          { id: "5.4.2", title: "Section 5.4 — Pg. 59-60", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%205%2FSection%205.4%20p.%2059-60.mp3?alt=media&token=4613ec08-51be-40d3-822f-ffa86c4669e1" },
          { id: "5.4.3", title: "Section 5.4— Pg. 60", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%205%2FSection%205.4%20p.%2060.mp3?alt=media&token=52a904f2-d689-4b65-b08b-7722b0073c0c" },
          { id: "5.5", title: "Section 5.5 — Pg. 61-62" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%205%2FSection%205.5%20p.%2061-62.mp3?alt=media&token=9dd91609-d8f8-4ae5-9633-f3cd2d4ac276"},
        ],
      },
      {
        id: "1.6",
        title: "Lesson 6",
        sections: [
          { id: "6.1.1", title: "Section 6.1 — Pg. 65", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%206%2FSection%206.1%20p.%2065.mp3?alt=media&token=202912b0-d362-4ab3-a18a-b026cc6094cd" },
          { id: "6.1.2", title: "Section 6.1 — Pg. 66", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%206%2FSection%206.1%20p.%2066.mp3?alt=media&token=e8b4547f-401d-4b7d-a52a-9105673beecf" },
          { id: "6.1.3", title: "Section 6.1 — Pg. 67", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%206%2FSection%206.1%20p.%2067.mp3?alt=media&token=dd948e53-70ff-41af-aa28-79ddef06f637" },
          { id: "6.1.4", title: "Section 6.1 — Pg. 68", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%206%2FSection%206.1%20p.%2068.mp3?alt=media&token=cd8f1c05-a1fb-4453-bce2-e3ec9657ad32" },
          { id: "6.1.5", title: "Section 6.1 — Pg. 69", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%206%2FSection%206.1%20p.%2069.mp3?alt=media&token=e6c6579e-6357-449f-9c65-3c650d095720" },
          { id: "6.1.6", title: "Section 6.1 — Pg. 70", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%206%2FSection%206.1%20p.%2070.mp3?alt=media&token=2a02d955-ddde-468f-8df1-b37796a560e2" },
          { id: "6.2.1", title: "Section 6.2 — Pg. 71" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%206%2FSection%206.2%20p.%2071.mp3?alt=media&token=289a0428-f17c-4540-b907-30ec6e8bab8c"},
          { id: "6.2.2", title: "Section 6.2 — Pg. 72" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%206%2FSection%206.2%20p.%2072.mp3?alt=media&token=7d665737-476e-4efc-b6c4-05f2f77ec527"},
          { id: "6.2.3", title: "Section 6.2 — Pg. 73" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%206%2FSection%206.2%20p.%2073.mp3?alt=media&token=f99a322e-5199-43c5-8516-19b6e6518ffa"},
          { id: "6.2.4", title: "Section 6.2 — Pg. 74" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%206%2FSection%206.2%20p.%2074.mp3?alt=media&token=04e59820-1073-4c56-a4a5-64666f1d32a8"},
          { id: "6.3.1", title: "Section 6.3 — Pg. 75" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%206%2FSection%206.3%20p.%2075(1).mp3?alt=media&token=e3957236-3455-4186-8855-eb71863372d1"},
          { id: "6.3.2", title: "Section 6.3 — Pg. 76" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%206%2FSection%206.3%20p.%2076.mp3?alt=media&token=7d27240c-d201-42fa-af5c-daac6894ed44"},
          { id: "6.5.1", title: "Section 6.5 — Pg. 81-82" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%206%2FSection%206.5%20p.%2081-82.mp3?alt=media&token=988f9660-2000-44b8-bea4-e81ff0c2b504"},
          { id: "6.5.2", title: "Section 6.5 — Pg. 83-84" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%206%2FSection%206.5%20p.%2083-84.mp3?alt=media&token=17cef0f6-94ef-4af3-80a6-5538543f16ec"},
          { id: "6.5.3", title: "Section 6.5 — Pg. 84" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%206%2FSection%206.5%20p.%2084.mp3?alt=media&token=33d9638b-fc13-457f-aeeb-aef60e127111"},
          { id: "6.6", title: "Section 6.6 — Pg. 85-86" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%206%2FSection%206.6%20p.%2085-86.mp3?alt=media&token=a8020c90-33d1-4f44-9075-aec1e93f282d"},

        ],
      },
      {
        id: "1.7",
        title: "Lesson 7",
        sections: [
          { id: "7.1.1", title: "Section 7.1 — Pg. 89-91", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%207%2FSection%207.1%20p.%2089-91.mp3?alt=media&token=3511f507-9bda-42d6-ad6e-42aadf1a4777" },
          { id: "7.1.2", title: "Section 7.1 — Pg. 91", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%207%2FSection%207.1%20p.%2091%20b.mp3?alt=media&token=78bd1a91-bf0b-400a-af0c-35bda056187f" },
          { id: "7.2", title: "Section 7.2 — Pg. 92", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%207%2FSection%207.2%20p.%2092.mp3?alt=media&token=0449fcfb-8c0d-4606-af0f-ab83613d92a0" },
          { id: "7.3.1", title: "Section 7.3 — Pg. 94-95", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%207%2FSection%207.3%20p.%2094-95.mp3?alt=media&token=732c390a-883c-4849-8869-b23c1d6ca987" },
          { id: "7.3.2", title: "Section 7.3 — Pg. 96-97", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%207%2FSection%207.3%20p.%2096-97.mp3?alt=media&token=0f54dfda-8d03-48af-8337-92e9d40bffb3" },
          { id: "7.3.3", title: "Section 7.3 — Pg. 97", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%207%2FSection%207.3%20p.%2097.mp3?alt=media&token=8bc6c301-2f15-41e2-9b7f-b8f9f530afe1" },
          { id: "7.4", title: "Section 7.4 — Pg. 98", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%207%2FSection%207.4%20p.%2098.mp3?alt=media&token=a4c7901e-7894-401b-be39-76aa7381cf18" },

        ],
      },
      {
        id: "1.8",
        title: "Lesson 8",
        sections: [
          { id: "8.1", title: "Section 8.1 — Pg. 101", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%208%2FSection%208.1%20p.%20101.mp3?alt=media&token=af79d908-b50c-46fc-a2cb-3aecd6d78b4a" },
          { id: "8.2", title: "Section 8.2 — Pg. 102", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%208%2FSection%208.2%20p.%20102.mp3?alt=media&token=cdca3024-1841-49f1-84d4-4bca34b3bce6" },
          { id: "8.3", title: "Section 8.3 — Pg. 103", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%208%2FSection%208.3%20p.%20103.mp3?alt=media&token=7d4afbbc-b3c2-4a98-a4d3-c3550db12285" },
          { id: "8.4", title: "Section 8.4 — Pg. 104", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%208%2FSection%208.4%20p.%20104.mp3?alt=media&token=93cb7833-c02f-44b5-a31b-c19e04d4df75" },
          { id: "8.5.1", title: "Section 8.5 — Pg. 105-106", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%208%2FSection%208.5%20p.%20105-106.mp3?alt=media&token=279d0e05-b898-43dc-8dc8-a55401c78621" },
          { id: "8.5.2", title: "Section 8.5 — Pg. 107-108", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%208%2FSection%208.5%20p.%20107-108.mp3?alt=media&token=60332d1d-0c88-4f8d-8a48-a2a506b3bf50" },
          { id: "8.5.3", title: "Section 8.5 — Pg. 108", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%202%2FLesson%208%2FSection%208.5%20p.%20108.mp3?alt=media&token=b1321ab6-b7c8-4494-9c5f-59b106ed0cd3" },

        ],
      },      
    ],
  },
    {
    id: "chapter-3",
    title: "Chapter 3",
    lessons: [
      {
        id: "1.9",
        title: "Lesson 9",
        sections: [
          { id: "9.2.1", title: "Section 9.2 — Pg. 112-114", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%209%2FSection%209.2%20p.%20112-114.mp3?alt=media&token=504869fb-b87c-4e8b-a205-20a89fc7c447" },
          { id: "9.2.2", title: "Section 9.2 — Pg. 115", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%209%2FSection%209.2%20p.%20115.mp3?alt=media&token=ecbc9b8a-94a1-4677-8e6c-d2f5ed106529" },
          { id: "9.2.3", title: "Section 9.2 — Pg. 116", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%209%2FSection%209.2%20p.%20116.mp3?alt=media&token=c89b5168-87e5-45cd-9167-1e612a8aba3e" },
          { id: "9.2.4", title: "Section 9.2 — Pg. 117", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%209%2FSection%209.2%20p.%20117.mp3?alt=media&token=ec0bbd31-2ee3-40dc-82f9-4a55bea788a3" },
          { id: "9.2.5", title: "Section 9.2 — Pg. 118", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%209%2FSection%209.2%20p.%20118.mp3?alt=media&token=56c34e58-c38e-4617-8be8-ca4380e11ca6" },
          { id: "9.3", title: "Section 9.3 — Pg. 119", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%209%2FSection%209.3%20p.%20119.mp3?alt=media&token=8a703314-42ed-4729-9af6-fcf71eb59891" },
          { id: "9.4.1", title: "Section 9.4 — Pg. 122-124", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%209%2FSection%209.4%20p.%20122-124.mp3?alt=media&token=60c58d54-9543-4b2d-a19f-5400c427df4b" },
          { id: "9.4.2", title: "Section 9.4— Pg. 126", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%209%2FSection%209.4%20p.%20125-126.mp3?alt=media&token=18456e3c-b5b3-4906-9205-da09013a6ed1" },
          { id: "9.4.3", title: "Section 9.4 — Pg. 127-128" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%209%2FSection%209.4%20p.%20126.mp3?alt=media&token=054aaaab-fcb6-46b7-ad18-f98f921212b7"},
          { id: "9.5", title: "Section 9.5 — Pg. 127-128" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%209%2FSection%209.5%20p.%20127-128.mp3?alt=media&token=e9638862-1af3-486b-b4dc-92fea14b7190"},

        ],
      },
      {
        id: "1.10",
        title: "Lesson 10",
        sections: [
          { id: "10.1", title: "Section 10.1 — Pg. 131", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%2010%2FSection%2010.1%20p.%20131.mp3?alt=media&token=44c6bd3a-ae2c-4cf1-85f2-aa0d95b6e454" },
          { id: "10.2.1", title: "Section 10.2 — Pg. 132", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%2010%2FSection%2010.2%20p.%20132.mp3?alt=media&token=47c8f317-3646-45fd-8ffd-3df92abcc9b7" },
          { id: "10.2.2", title: "Section 10.2 — Pg. 133", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%2010%2FSection%2010.2%20p.%20133.mp3?alt=media&token=921fe0ec-5651-45e7-888f-c003260b4014" },
          { id: "10.3.1", title: "Section 10.3 — Pg. 135-136", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%2010%2FSection%2010.3%20p.%20135-136.mp3?alt=media&token=346708e7-387b-42ae-9268-0f54bb9e0b6d" },
          { id: "10.3.2", title: "Section 10.3 — Pg. 136", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%2010%2FSection%2010.3%20p%20136.mp3?alt=media&token=22b4bff0-6750-45a1-985b-b9f6f3ad49bd" },
          { id: "10.3.3", title: "Section 10.3 — Pg. 137-138", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%2010%2FSection%2010.3%20p.%20137-138.mp3?alt=media&token=cf09c2d2-2d65-41b2-82fb-696611f0b239" },
          { id: "10.3.4", title: "Section 10.3 — Pg. 138", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%2010%2FSection%2010.3%20p.%20138.mp3?alt=media&token=31b97a4f-44df-4ed0-9791-6b452511f56b" },
          { id: "10.4", title: "Section 10.4 — Pg. 139-140", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%2010%2FSection%2010.4%20p.%20139-140.mp3?alt=media&token=3027adc0-ce34-462f-af88-0995bce560c4" },
        ],
      },
      {
        id: "1.11",
        title: "Lesson 11",
        sections: [
          { id: "11.1.1", title: "Section 11.1 — Pg. 143", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%2011%2FSection%2011.1%20p.%20143.mp3?alt=media&token=00637083-f631-456c-8bad-0d8997b59ee0" },
          { id: "11.1.2", title: "Section 11.1 — Pg. 144", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%2011%2FSection%2011.1%20p.%20144.mp3?alt=media&token=c690e788-2867-44bf-903b-24169388494b" },
          { id: "11.2", title: "Section 11.2 — Pg. 145", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%2011%2FSection%2011.2%20p.%20145.mp3?alt=media&token=23cc3364-2ee6-464f-a477-3afc5790b21f" },
          { id: "11.3", title: "Section 11.3 — Pg. 146", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%2011%2FSection%2011.3%20p.%20146.mp3?alt=media&token=61fe6c12-c623-426e-8afa-36a1ee09811f" },
          { id: "11.4.1", title: "Section 11.4 — Pg. 147", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%2011%2FSection%2011.4%20p.%20147.mp3?alt=media&token=e5f628fc-0612-41e3-9fa0-fc185ae286b9" },
          { id: "11.4.2", title: "Section 11.4 — Pg. 148", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%2011%2FSection%2011.4%20p.%20148.mp3?alt=media&token=6cbe6daf-fc95-4f92-b12f-1402be5e737e" },
          { id: "11.5.1", title: "Section 11.5 — Pg. 150-151", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%2011%2FSection%2011.5%20p.%20150-151.mp3?alt=media&token=86b01dd1-bc44-4a01-a939-41cfc29a036b" },
          { id: "11.5.2", title: "Section 11.5 — Pg. 152-153", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%2011%2FSection%2011.5%20p.%20152-153.mp3?alt=media&token=4dbfe880-e498-4f71-a735-a186fb9bd528" },
          { id: "11.5.3", title: "Section 11.5 — Pg. 153", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%2011%2FSection%2011.5%20p.%20153.mp3?alt=media&token=f0292082-f955-4165-97af-876861dd8241" },
          { id: "11.6.1", title: "Section 11.6 — Pg. 154", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%2011%2FSection%2011.6%20p.%20154.mp3?alt=media&token=86007600-339e-4238-8e85-1d10fd9d5c61" },
          { id: "11.6.2", title: "Section 11.6 — Pg. 155", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%2011%2FSection%2011.6%20p.%20155.mp3?alt=media&token=ea40f267-217d-480f-9316-1ddd57841bc7" },

        ],
      },
      {
        id: "1.12",
        title: "Lesson 12",
        sections: [
          { id: "12.1.1", title: "Section 12.1 — Pg. 158-159", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%2012%2FSection%2012.1%20p.%20158-159.mp3?alt=media&token=bf6ccc4e-515e-4b86-9811-119da1e41076" },
          { id: "12.1.2", title: "Section 12.1 — Pg. 160", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%2012%2FSection%2012.1%20p.%20160.mp3?alt=media&token=ae7807e4-e8ed-4f10-ba77-494cac455d42" },
          { id: "12.2", title: "Section 12.2 — Pg. 161", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%2012%2FSection%2012.2%20p.%20161.mp3?alt=media&token=70a440ea-1f26-46fb-b42d-e663023f22d5" },
          { id: "12.3.1", title: "Section 12.3 — Pg. 164-165", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%2012%2FSection%2012.3%20p.%20164-165.mp3?alt=media&token=1570947c-c7e0-48d4-bd3d-d1301cce9839" },
          { id: "12.3.2", title: "Section 12.3 — Pg. 167", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%2012%2FSection%2012.3%20p.%20167.mp3?alt=media&token=ce24ea04-386d-44e6-8e98-7ca7b68030dc" },
          { id: "12.4.1", title: "Section 12.4 — Pg. 168", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%2012%2FSection%2012.4%20p.%20168.mp3?alt=media&token=421bb5f1-17fc-4051-8f73-3b9fbbbca0d8" },
          { id: "12.4.2", title: "Section 12.4 — Pg. 169", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%203%2FLesson%2012%2FSection%2012.4%20p.%20169.mp3?alt=media&token=16fd1698-43a7-4992-8005-7309823c2fcb" },


        ],
      },      
    ],
  },
   {
    id: "chapter-4",
    title: "Chapter 4",
    lessons: [
      {
        id: "1.13",
        title: "Lesson 13",
        sections: [
          { id: "13.1", title: "Section 13.1 — Pg. 173-175", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2013%2FSection%2013.1%20p.%20173-175.mp3?alt=media&token=af5f819b-eb40-47d9-81fb-024e9a075692" },
          { id: "13.3", title: "Section 13.3 — Pg. 178-179", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2013%2FSection%2013.3%20p.%20178-179(1).mp3?alt=media&token=cd440e7b-6905-4a23-9fff-62f398915b5b" },
          { id: "13.4.1", title: "Section 13.4 — Pg. 184-185", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2013%2FSection%2013.4%20p.%20184-185.mp3?alt=media&token=62ef95a8-14e3-405a-868e-fc663100b65a" },
          { id: "13.4.2", title: "Section 13.4 — Pg. 185", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2013%2FSection%2013.4%20p.%20185.mp3?alt=media&token=1d0dd66a-b73e-4ac2-9dc2-07a9bc097642" },
          { id: "13.5.1", title: "Section 13.5 — Pg. 186", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2013%2FSection%2013.5%20p.%20186.mp3?alt=media&token=6f1f35f9-5e30-4e9b-a195-942bc5e7a1ca" },
          { id: "13.5.2", title: "Section 13.5 — Pg. 187", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2013%2FSection%2013.5%20p.%20187.mp3?alt=media&token=856e83b0-c3e6-451d-99eb-003ec164ffbd" },


        ],
      },
      {
        id: "1.14",
        title: "Lesson 14",
        sections: [
          { id: "14.1.1", title: "Section 14.1 — Pg. 190", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2014%2FSection%2014.1%20p.%20190.mp3?alt=media&token=1987effd-f523-4e36-8b65-a85bbf9938ba" },
          { id: "14.1.2", title: "Section 14.1 — Pg. 191", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2014%2FSection%2014.1%20p.%20191.mp3?alt=media&token=55808260-10d8-459b-9b76-acb8ad1a3dba" },
          { id: "14.1.3", title: "Section 14.1 — Pg. 192", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2014%2FSection%2014.1%20p.%20192.mp3?alt=media&token=5dee01dc-a5b1-478f-b286-7f8560ec03f1" },
          { id: "14.2.1", title: "Section 14.2 — Pg. 197-198", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2014%2FSection%2014.2%20p.%20197-198.mp3?alt=media&token=76ce1fa7-e91e-477f-81f5-7134df26415c" },
          { id: "14.2.2", title: "Section 14.2 — Pg. 198", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2014%2FSection%2014.2%20p.%20198.mp3?alt=media&token=7b78371e-8416-4e70-87f7-38cb0b807e1e" },
          { id: "14.4.1", title: "Section 14.4 — Pg. 199", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2014%2FSection%2014.4%20p.%20199.mp3?alt=media&token=21c4c84b-997c-420f-abab-01abe8cc4921" },
          { id: "14.4.2", title: "Section 14.4 — Pg. 200", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2014%2FSection%2014.4%20p.%20200.mp3?alt=media&token=7b6a0d1d-1ec0-48b3-be3a-0188228c8d74" },

        ],
      },
      {
        id: "1.15",
        title: "Lesson 15",
        sections: [
          { id: "15.1", title: "Section 15.1 — Pg. 203", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2015%2FSection%2015.1%20p.%20203.mp3?alt=media&token=f2540409-49d8-437e-8b22-27ea67f9d861" },
          { id: "15.2.1", title: "Section 15.2 — Pg. 204", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2015%2FSection%2015.2%20p.%20204.mp3?alt=media&token=82d47849-c1be-4ef9-a73b-3afc822dd60c" },
          { id: "15.2.2", title: "Section 15.2 — Pg. 205", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2015%2FSection%2015.2%20p.%20205.mp3?alt=media&token=222b46a6-64a8-4157-afcd-77ba50eaf530" },
          { id: "15.2.3", title: "Section 15.2 — Pg. 206", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2015%2FSection%2015.2%20p.%20206.mp3?alt=media&token=deeb45b1-4999-4f38-bd10-fb732eef4941" },
          { id: "15.2.4", title: "Section 15.2 — Pg. 207", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2015%2FSection%2015.2%20p.%20207.mp3?alt=media&token=be60b492-175c-425c-8cf3-c01d9327a341" },
          { id: "15.2.5", title: "Section 15.2 — Pg. 208", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2015%2FSection%2015.2%20p.%20208.mp3?alt=media&token=21540feb-d8b8-452a-bed2-48182c309432" },
          { id: "15.2.6", title: "Section 15.2 — Pg. 209", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2015%2FSection%2015.2%20p.%20209.mp3?alt=media&token=248b298c-fa60-443d-b80b-6d625f2b9119" },
          { id: "15.3.1", title: "Section 15.3 — Pg. 213-215", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2015%2FSection%2015.3%20p.%20213-215.mp3?alt=media&token=7924ef53-1a8d-4fd7-9dcd-c2ce84527a6e" },
          { id: "15.3.2", title: "Section 15.3 — Pg. 216", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2015%2FSection%2015.3%20p.%20216.mp3?alt=media&token=d235c1ec-ba4f-4b94-b76e-a34d66a93f12" },
          { id: "15.3.3", title: "Section 15.3 — Pg. 217", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2015%2FSection%2015.3%20p.%20217.mp3?alt=media&token=46e3a2be-935c-4c52-b10c-930af5928de6" },
          { id: "15.3.4", title: "Section 15.3 — Pg. 218-219", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2015%2FSection%2015.3%20p.%20218-219.mp3?alt=media&token=dd19ab8b-35a7-49c4-8c35-6f25e236330a" },
          { id: "15.3.5", title: "Section 15.3 — Pg. 219", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2015%2FSection%2015.3%20p%20219.mp3?alt=media&token=ff6958bd-08e5-4839-9008-cc54245e255f" },


        ],
      },
      {
        id: "1.16",
        title: "Lesson 16",
        sections: [
          { id: "16.1", title: "Section 16.1 — Pg. 222", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2016%2FSection%2016.1%20p.%20222.mp3?alt=media&token=5873cddf-444a-44ac-ac3a-78d20d3786ed" },
          { id: "16.2", title: "Section 16.2 — Pg. 222", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2016%2FSection%2016.2%20p.%20223.mp3?alt=media&token=92620d2c-3d1e-4370-82ba-6a1cc935be19" },
          { id: "16.3", title: "Section 16.3 — Pg. 222", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2016%2FSection%2016.3%20P.%20224.mp3?alt=media&token=f9a3f75b-3075-415f-9455-bc0cb1d31817" },
          { id: "16.4.1", title: "Section 16.4 — Pg. 222", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2016%2FSection%2016.4%20p.%20227-228.mp3?alt=media&token=5e9dd532-e1f1-419f-820b-ecd3b9e452ad" },
          { id: "16.4.2", title: "Section 16.4 — Pg. 222", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2016%2FSection%2016.4%20p.%20229-230.mp3?alt=media&token=771a6f21-722a-4cb8-a654-76069dd677ee" },
          { id: "16.4.3", title: "Section 16.4 — Pg. 222", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2016%2FSection%2016.4%20p.%20230.mp3?alt=media&token=1bd7ee43-9aa5-4b26-8c2a-5f340a6470c2" },
          { id: "16.5", title: "Section 16.5 — Pg. 222", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2016%2FSection%2016.5%20P.%20231-233.mp3?alt=media&token=cd3cc29f-04bc-49e2-a58e-bf064eb577fc" },
        ],
      },      
      {
        id: "1.17",
        title: "Lesson 17",
        sections: [
          { id: "17.1", title: "Section 17.1 — Pg. 236", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2017%2FSection%2017.1%20p.%20236.mp3?alt=media&token=d69eb0a4-3da5-4b7a-ab22-30cef3372f5c" },
          { id: "17.2", title: "Section 17.2 — Pg. 239", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2017%2FSection%2017.2%20P.%20239.mp3?alt=media&token=9ea2e500-0e3c-45f7-bacd-d21956a0ada1" },
          { id: "17.3.1", title: "Section 17.3 — Pg. 242-244", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2017%2FSection%2017.3%20P.%20242-244.mp3?alt=media&token=89f2f65a-ce17-46b7-aa97-7d03f9646dfd" },
          { id: "17.3.2", title: "Section 17.3 — Pg. 245-246", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2017%2FSection%2017.4%20P.%20245-246.mp3?alt=media&token=2e54df00-75f5-45b6-9c73-ca14ff3071fb" },
          { id: "17.4.1", title: "Section 17.4 — Pg. 246", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2017%2FSection%2017.3%20p.%20246.mp3?alt=media&token=14634e18-1309-4f19-aa11-348b11a0666e" },
          { id: "17.4.2", title: "Section 17.4 — Pg. 247-248", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FChapter%204%2FLesson%2017%2FSection%2017.4%20P.%20247-248.mp3?alt=media&token=b19c316d-3884-47e3-8dc5-f99c7713ef5f" },
 
        ],
      },      
    ],
  },
  
  {
    id: "expressions-msa",
    title: "Glossary of Expressions",
    sections: [
      { id: "g1", title: "Glossary of Expressions - Pg 296", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Expressions%2FG.E%20296.mp3?alt=media&token=ee9e97b4-b9f0-43ca-8423-4ed3be52ff0b"},
      { id: "g2", title: "Glossary of Expressions - Pg 297", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Expressions%2FG.E%20297.mp3?alt=media&token=4aa05121-9da1-4916-bc3f-ddfffb23270b"}
    ],
  },
  {
    id: "verbs-msa",
    title: "Glossary of Verbs",
    sections: [
      { id: "v1", title: "Glossary of Verbs - Pg 302", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Verbs%2FG.V%20302.mp3?alt=media&token=fa2fbde7-abd5-4afa-9bcc-f62c8e60a254"},
      { id: "v2", title: "Glossary of Verbs - Pg 303", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Verbs%2FG.V%20303.mp3?alt=media&token=4dd02ee3-bfca-4ee1-ba20-f12f3c80d203"},
      { id: "v3", title: "Glossary of Verbs - Pg 304", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Verbs%2FG.V%20304.mp3?alt=media&token=7781f502-7aaf-4c22-a11b-881f77252678"},
      { id: "v4", title: "Glossary of Verbs - Pg 305", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Verbs%2FG.V%20305.mp3?alt=media&token=513b5c7e-244d-448d-935f-9d72e7c40326"},
      { id: "v5", title: "Glossary of Verbs - Pg 306", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Verbs%2FG.V%20306.mp3?alt=media&token=582700b0-e52c-411a-9aee-f7f290aab2fc"},
      { id: "v6", title: "Glossary of Verbs - Pg 307", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Verbs%2FG.V%20307.mp3?alt=media&token=c24f5d60-663a-4d6a-b6ab-a102d62b7600"},
    ],
  },
  {
    id: "words-msa",
    title: "Glossary of Words",
    sections: [
      { id: "w1", title: "Glossary of Words - Pg 262", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Words%2FG.w%20262.mp3?alt=media&token=16d16f72-c5a2-486c-a8c5-762db28fe5ee"},
      { id: "w2", title: "Glossary of Words - Pg 263", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Words%2FG.w%20263.mp3?alt=media&token=813bad99-2168-46d2-95f4-ef9f9eb03d3e"},
      { id: "w3", title: "Glossary of Words - Pg 264", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Words%2FG.W%20264.mp3?alt=media&token=e7b7f2a9-f911-4247-b9b6-1c82032b8733"},
      { id: "w4", title: "Glossary of Words - Pg 265", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Words%2FG.W%20265.mp3?alt=media&token=fd9ace9d-75c9-4aad-990a-b536d83524e5"},
      { id: "w5", title: "Glossary of Words - Pg 266", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Words%2FG.W%20266.mp3?alt=media&token=a45fa97f-9a88-4902-b5ce-c10ba80238d7"},
      { id: "w6", title: "Glossary of Words - Pg 267", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Words%2FG.W%20267.mp3?alt=media&token=4109a8d0-aeaf-4405-8973-31e87f4ec671"},
      { id: "w7", title: "Glossary of Words - Pg 268", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Words%2FG.W%20268.mp3?alt=media&token=63a4c688-ac77-4e7e-be37-c521582a5059"},
      { id: "w8", title: "Glossary of Words - Pg 269", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Words%2FG.W%20269.mp3?alt=media&token=7029443f-2e6a-4ff9-95b2-8194f24d8132"},
      { id: "w9", title: "Glossary of Words - Pg 270", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Words%2FG.W%20270.mp3?alt=media&token=5a96cc9f-0f10-4c6b-9ba6-a146baf89b8c"},
      { id: "w10", title: "Glossary of Words - Pg 271", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Words%2FG.W%20271.mp3?alt=media&token=7765828d-b9b7-4442-ab24-72b6138f09ed"},
      { id: "w11", title: "Glossary of Words - Pg 272", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Words%2FG.W%20272.mp3?alt=media&token=1689b2fd-d3c9-488c-bc67-fd4fed450812"},
      { id: "w12", title: "Glossary of Words - Pg 273", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Words%2FG.W%20273.mp3?alt=media&token=e1bed94c-2aef-453b-901a-34d4425f7f98"},
      { id: "w13", title: "Glossary of Words - Pg 274", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Words%2FG.W%20274.mp3?alt=media&token=c01b05f5-d094-4481-b56d-8a85fd6538e6"},
      { id: "w14", title: "Glossary of Words - Pg 275", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Words%2FG.W%20275.mp3?alt=media&token=67725631-f1d7-43ec-b852-80db21b0282e"},
      { id: "w15", title: "Glossary of Words - Pg 276", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Words%2FG.W%20276.mp3?alt=media&token=3fa55be6-4dac-4fdf-b9e4-5a2818d96f76"},
      { id: "w16", title: "Glossary of Words - Pg 277", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Words%2FG.W%20277.mp3?alt=media&token=3bb54f6d-402f-48ea-9cdc-388fd02f24ff"},
      { id: "w17", title: "Glossary of Words - Pg 278", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Words%2FG.W%20278.mp3?alt=media&token=864ad410-952a-4d26-a484-31b17d1cbed5"},
      { id: "w18", title: "Glossary of Words - Pg 279", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Words%2FG.W%20279.mp3?alt=media&token=d675a5f8-6348-4175-964d-6e2b47ce4051"},
      { id: "w19", title: "Glossary of Words - Pg 280", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Words%2FG.W%20280.mp3?alt=media&token=752837af-ab8a-409c-83ba-48e65cb69946"},
      { id: "w20", title: "Glossary of Words - Pg 281", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Words%2FG.W%20281.mp3?alt=media&token=e78fb659-c7a5-4146-9edd-bcc565831f62"},
      { id: "w21", title: "Glossary of Words - Pg 282", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Words%2FG.W%20282.mp3?alt=media&token=3d90a761-91ce-4780-b018-f4d09b055a81"},
      { id: "w22", title: "Glossary of Words - Pg 283", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Words%2FG.W%20283.mp3?alt=media&token=600f9079-3a85-408f-9e65-f3509d26aec0"},
      { id: "w23", title: "Glossary of Words - Pg 284", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Words%2FG.W%20284.mp3?alt=media&token=18ee691a-756e-4363-a330-9c68590d1be9"},
      { id: "w24", title: "Glossary of Words - Pg 285", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Words%2FG.W%20285.mp3?alt=media&token=14cf9b14-43c1-49a7-93bf-2db440a89f33"},
      { id: "w25", title: "Glossary of Words - Pg 286", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Words%2FG.W%20286.mp3?alt=media&token=99aea806-f797-47fc-a6a9-66d3d4b15855"},
      { id: "w26", title: "Glossary of Words - Pg 287", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Words%2FG.W%20287.mp3?alt=media&token=2d9d65c7-d896-4dcf-b5d7-e43eb56b5cce"},
      { id: "w27", title: "Glossary of Words - Pg 288", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Words%2FG.W%20288.mp3?alt=media&token=f38f34a1-cbd4-4c76-9620-d97c7caf14cd"},
      { id: "w28", title: "Glossary of Words - Pg 289", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Words%2FG.W%20289.mp3?alt=media&token=fa74e1ea-4e4a-4df8-af99-f1936e9b80f3"},
      { id: "w29", title: "Glossary of Words - Pg 290", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Words%2FG.W%20290.mp3?alt=media&token=dcb13abb-3989-4a2a-b8bb-167d9d01f005"},
      { id: "w30", title: "Glossary of Words - Pg 291", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Words%2FG.W%20291.mp3?alt=media&token=b7ce5aed-fe8d-4eda-9cda-25f084e8fe44"},
      { id: "w31", title: "Glossary of Words - Pg 292", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Words%2FG.W%20292.mp3?alt=media&token=7b393015-0721-4dfa-9dd4-4c70c02476f2"},
      { id: "w32", title: "Glossary of Words - Pg 293", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Words%2FG.W%20293.mp3?alt=media&token=7dee47d6-d44e-4528-9728-0b096d90efaf"},
      { id: "w33", title: "Glossary of Words - Pg 294-295", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Comprehensive%20Guide%20to%20Modern%20Standard%20Arabic%20Audios%2FGlossary%20of%20Words%2FG.W%20294-295.mp3?alt=media&token=f9d1ffd6-0530-4735-9d01-57561c92ea41"},

    ],
  },
],
  },
  //------------------------------------AMMIYEH BEGINNER -------------------------------------------------------
  {
    bookId: "ammiyeh-beginner",
    youtubeUrl: "https://www.youtube.com/@thecomprehensiveguidetolev6425",
    oneDriveUrl: "https://onedrive.live.com/?id=%2Fpersonal%2F1bd9cb9d551010be%2FDocuments%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20%28New%20Version%20Audio%29&listurl=%2Fpersonal%2F1bd9cb9d551010be%2FDocuments&ithint=folder&e=cHdH9t&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy8xYmQ5Y2I5ZDU1MTAxMGJlL0lnQy1FQkJWbmN2WklJQWItLWdBQUFBQUFkZVFBMmlub2Y3NUs5dzcyb1BrbWVJP2U9Y0hkSDl0&ga=1",
    chapters: [
       {
    id: "chapter-1",
    title: "Chapter 1",
    lessons: [
      {
        id: "1.1",
        title: "Lesson 1",
        sections: [
          { id: "1.1", title: "Section 1.1 — Pg. 4-7", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%201%2FLesson%201%2FSection%201.1%20p.%204-7.mp3?alt=media&token=6246cc94-eb63-497a-99e2-7f181f5eddf0" },
          { id: "1.2", title: "Section 1.2 — Pg. 8", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%201%2FLesson%201%2FSection%201.2%20p.%208.mp3?alt=media&token=6c166e6e-8eb5-4156-be75-e625c5b44887" },
          { id: "1.3.1", title: "Section 1.3 — Pg. 12", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%201%2FLesson%201%2FSection%201.3%20p.%2012.mp3?alt=media&token=446757bd-a16e-4617-9100-5abb89c057c0" },
          { id: "1.3.2", title: "Section 1.3 — Pg. 13" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%201%2FLesson%201%2FSection%201.3%20p.%2013.mp3?alt=media&token=c8e8f56d-30da-4013-875d-5ab569dbbaa2"},
          { id: "1.3.3", title: "Section 1.4 — Pg. 14" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%201%2FLesson%201%2FSection%201.4%20p.%2014.mp3?alt=media&token=fed76f80-3ee4-445e-ba08-a96b219683c3"},
          
        ],
      },
      {
        id: "1.2",
        title: "Lesson 2",
        sections: [
          { id: "2.1.1", title: "Section 2.1 — Pg. 17", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%201%2FLesson%202%2FSection%202.1%20p.17.mp3?alt=media&token=4dced7fb-9e6a-43c1-a69b-1e0f73bfe822" },
          { id: "2.1.2", title: "Section 2.1 — Pg. 18", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%201%2FLesson%202%2FSection%202.1%20p.18.mp3?alt=media&token=4fa55945-9b82-4a1b-8491-51a16ecd5652" },
          { id: "2.1.3", title: "Section 2.1 — Pg. 19", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%201%2FLesson%202%2FSection%202.1%20p.19.mp3?alt=media&token=489aa238-cc86-4c81-8927-a6718508812c" },
          { id: "2.2.1", title: "Section 2.2 — Pg. 20", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%201%2FLesson%202%2FSection%202.2%20p.20.mp3?alt=media&token=740e1703-6037-4e01-ab54-900b11f4001b" },
          { id: "2.2.2", title: "Section 2.2 — Pg. 21", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%201%2FLesson%202%2FSection%202.2%20p.21.mp3?alt=media&token=3e9e1368-47cb-4b47-b5f0-e2f68f0cad49" },
          { id: "2.3", title: "Section 2.3 — Pg. 22-25", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%201%2FLesson%202%2FSection%202.3%20p.22-25.mp3?alt=media&token=7d36d112-e2ce-4b07-a116-76e0889f401e" },
          { id: "2.4", title: "Section 2.4 — Pg. 27" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%201%2FLesson%202%2FSection%202.4%20p.27.mp3?alt=media&token=e9c43eaa-4145-4127-be10-cc19ff9ad4a7"},
          { id: "2.5", title: "Exercise one -  Pg 26" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%201%2FLesson%202%2FExercise%20one%20p.%2026.mp3?alt=media&token=8781e7d3-c4d0-404d-87c6-e4901aba4e68"},
       
        ],
      },
      {
        id: "1.3",
        title: "Lesson 3",
        sections: [
          { id: "3.2", title: "Section 3.2 — Pg. 32", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%201%2FLesson%203%2FSection%203.2%20p.%2032.mp3?alt=media&token=c4d2c580-7865-4289-99a1-9fc57932ed1a" },
          { id: "3.3", title: "Section 3.3 — Pg. 33", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%201%2FLesson%203%2FSection%203.3%20p.33.mp3?alt=media&token=2a771d02-dfd9-46de-93ca-850456be1ac9" },
          { id: "3.5", title: "Section 3.5 — Pg. 36", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%201%2FLesson%203%2FSection%203.5%20p.%2036.mp3?alt=media&token=b13b84a8-729b-48c9-8bd2-db3fdf525f93" },
        ],
      },
      {
        id: "1.4",
        title: "Lesson 4",
        sections: [
          { id: "4.1", title: "Section 4.1 — Pg. 39", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%201%2FLesson%204%2FSection%204.1%20p.39.mp3?alt=media&token=bc479e7d-f438-494b-a056-94995c0adf65" },
          { id: "4.2.1", title: "Section 4.2 — Pg. 40", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%201%2FLesson%204%2FSection%204.2%20p.40.mp3?alt=media&token=89a57ef1-7c6f-4992-8c10-284947fd429f" },
          { id: "4.2.2", title: "Section 4.2 — Pg. 42", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%201%2FLesson%204%2FSection%204.2%20p.42.mp3?alt=media&token=1e15779e-d44a-4adf-8e11-65d58dc65375" },

        ],
      },      
    ],
  },
  {
    id: "chapter-2",
    title: "Chapter 2",
    lessons: [
      {
        id: "1.5",
        title: "Lesson 5",
        sections: [
          { id: "5.1.1", title: "Section 5.1 — Pg. 46", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%205%2FSection%205.1%20p.46.mp3?alt=media&token=d5bd3f9a-d948-4ef2-b382-f0568b4474d9" },
          { id: "5.1.2", title: "Section 5.1 — Pg. 47", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%205%2FSection%205.1%20p.47.mp3?alt=media&token=b048a563-1e27-4a51-af6d-0b72490d5ccb" },
          { id: "5.1.3", title: "Section 5.1 — Pg. 48", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%205%2FSection%205.1%20p.48.mp3?alt=media&token=e3991384-e6bb-4e3d-acb1-7ca4b038f25b" },
          { id: "5.2.1", title: "Section 5.2 — Pg. 50", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%205%2FSection%205.2%20p.50.mp3?alt=media&token=cd7eee04-3fe0-47b8-ae39-e6cfa6f6e6d9" },
          { id: "5.2.2", title: "Section 5.2 — Pg. 51", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%205%2FSection%205.2%20p.51.mp3?alt=media&token=33869caf-4343-45ba-9a9c-dd3a74932b3c" },

          { id: "5.3", title: "Section 5.3 — Pg. 52-54", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%205%2FSection%205.3%20p.52-54.mp3?alt=media&token=5b043d60-ee60-4da7-8be3-92688e2b7366" },
          { id: "5.4.1", title: "Section 5.4 — Pg. 57-58", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%205%2FSection%205.4%20p.57-58.mp3?alt=media&token=b2586afb-f0d1-4123-8d46-75e6d5a060aa" },
          { id: "5.4.2", title: "Section 5.4 — Pg. 59-60", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%205%2FSection%205.4%20p.59-60.mp3?alt=media&token=908928da-6c1c-4647-97fd-ccde9947a8ca" },
          { id: "5.5.1", title: "Section 5.5 — Pg. 61", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%205%2FSection%205.5%20p.61.mp3?alt=media&token=126aa88c-a650-4c0a-8e09-2007b94e17dc" },
          { id: "5.5.2", title: "Section 5.5 — Pg. 62" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%205%2FSection%205.5%20p.62.mp3?alt=media&token=4f6ce3d3-8b26-4738-baeb-6f2e76639122"},
        ],
      },
      {
        id: "1.6",
        title: "Lesson 6",
        sections: [
          { id: "6.1.1", title: "Section 6.1 — Pg. 65", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%206%2FSection%206.1%20pg%2065.mp3?alt=media&token=0caf5b9c-d904-4829-a44b-82467d4a19f7" },
          { id: "6.1.2", title: "Section 6.1 — Pg. 66", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%206%2FSection%206.1%20pg%2066.mp3?alt=media&token=b4fc3ce8-4a85-4d58-a636-7219546d3284" },
          { id: "6.1.3", title: "Section 6.1 — Pg. 67", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%206%2FSection%206.1%20pg%2067.mp3?alt=media&token=11b52b04-c74c-4742-826b-ec0bb24e0292" },
          { id: "6.1.4", title: "Section 6.1 — Pg. 68", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%206%2FSection%206.1%20pg%2068.mp3?alt=media&token=87080748-6057-4ff4-a7c2-c8b0efb4739f" },
          { id: "6.1.5", title: "Section 6.1 — Pg. 69", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%206%2FSection%206.1%20pg%2069-70.mp3?alt=media&token=b85eb5fe-72d2-4942-92b0-3d7d98f55a8e" },
          { id: "6.1.6", title: "Section 6.1 — Pg. 70", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%206%2FSection%206.1%20pg%2071%20Millions%20%26%20Billions.mp3?alt=media&token=f2770f03-395a-4420-bc37-24651bc036ec" },
          { id: "6.2.1", title: "Section 6.2 — Pg. 71" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%206%2FSection%206.1%20pg%2071.mp3?alt=media&token=0c9aac11-4fbb-428b-a194-e0fb6a8262e6"},
          { id: "6.2.2", title: "Section 6.2 — Pg. 72" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%206%2FSection%206.2%20pg%2072.mp3?alt=media&token=4baae77c-06b9-4527-a83c-8bce872ea0e1"},
          { id: "6.2.3", title: "Section 6.2 — Pg. 73" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%206%2FSection%206.2%20pg%2073.mp3?alt=media&token=de7325c8-7078-4897-a301-3f21c69ed698"},
          { id: "6.2.4", title: "Section 6.2 — Pg. 74" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%206%2FSection%206.2%20pg%2074.mp3?alt=media&token=1c113416-7a82-48b7-a384-74bf2b87dddc"},
          { id: "6.3.1", title: "Section 6.3 — Pg. 75" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%206%2FSection%206.4%20pg%2077.mp3?alt=media&token=a2856b16-dbbf-4675-a262-95d7b5c85899"},
          { id: "6.3.2", title: "Section 6.3 — Pg. 76" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%206%2FSection%206.5%20pg%2075%2676.mp3?alt=media&token=9484e31e-7823-4bbe-8a66-93b4ccd348d7"},
          { id: "6.5.1", title: "Section 6.5 — Pg. 81-82" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%206%2FSection%206.5%20pg%2080%2681.mp3?alt=media&token=ff04e42b-cc76-4915-b047-723be5d03060"},
          { id: "6.5.2", title: "Section 6.5 — Pg. 83-84" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%206%2FSection%206.5%20pg%2082-83.mp3?alt=media&token=98776600-1bb7-492a-a0ca-36e7dab89430"},
          { id: "6.5.3", title: "Section 6.5 — Pg. 84" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%206%2FSection%206.6%20pg%2084.mp3?alt=media&token=e980ebf9-3d94-4a74-a789-807115cfa6cf"},
          { id: "6.6", title: "Section 6.6 — Pg. 85-86" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%206%2FSection%206.6%20pg%2085.mp3?alt=media&token=2e774679-66ab-4390-920a-758c7939f66c"},

        ],
      },
      {
        id: "1.7",
        title: "Lesson 7",
        sections: [
          { id: "7.1.1", title: "Section 7.1 — Pg. 89-90", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%207%2FSection%207.1%20p.%2088-90.mp3?alt=media&token=d13ecda0-cf87-4fa5-aaf5-55410c89f377" },
          { id: "7.1.2", title: "Section 7.1 — Pg. 90", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%207%2FSection%207.1%20p.%2090.mp3?alt=media&token=ac8a96b4-0dab-4aca-bc8d-e6d758c74eea" },
          { id: "7.2", title: "Section 7.2 — Pg. 91", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%207%2FSection%207.2%20p.%2091.mp3?alt=media&token=c232f37a-dc7e-4f5f-8c2b-9775130d3c9c" },
          { id: "7.3.1", title: "Section 7.3 — Pg. 93-94", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%207%2FSection%207.3%20p.%2093-94.mp3?alt=media&token=119310fd-b1f2-4c5e-b924-9a744210b990" },
          { id: "7.3.2", title: "Section 7.3 — Pg. 95-96", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%207%2FSection%207.3%20p.%2095-96.mp3?alt=media&token=16adc44c-b269-45f0-ac41-965ae4df6333" },
          { id: "7.4.1", title: "Section 7.4 — Pg. 97", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%207%2FSection%207.4%20p.%2097.mp3?alt=media&token=8dcd7e07-bf52-4f47-95aa-9a5ef2f278a3" },
          { id: "7.4.2", title: "Section 7.4 — Pg. 98", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%207%2FSection%207.4%20p.%2098.mp3?alt=media&token=858dac7b-a8ed-45f5-8083-894103940324" },

        ],
      },
      {
        id: "1.8",
        title: "Lesson 8",
        sections: [
          { id: "8.1", title: "Section 8.1 — Pg. 100", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%208%2FSection%208.1%20p.%20100.mp3?alt=media&token=d89bac76-57bf-42e8-9ff0-9f191ddabc59" },
          { id: "8.2", title: "Section 8.2 — Pg. 101", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%208%2FSection%208.2%20p.%20101.mp3?alt=media&token=2f06ff03-caaf-4814-9f21-ad2f0622bb2c" },
          { id: "8.3", title: "Section 8.3 — Pg. 102", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%208%2FSection%208.3%20p.%20102.mp3?alt=media&token=4c97272c-da08-499e-a46b-0d15e829c71a" },
          { id: "8.4", title: "Section 8.4 — Pg. 103", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%208%2FSection%208.4%20p.%20103.mp3?alt=media&token=ad2c6c8e-7a52-492f-be40-ce8904043b63" },
          { id: "8.5.1", title: "Section 8.5 — Pg. 104-105", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%208%2FSection%208.5%20p.%20104-105.mp3?alt=media&token=27d04737-90be-4e2b-803d-57bd867acb94" },
          { id: "8.5.2", title: "Section 8.5 — Pg. 106-107", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%202%2FLesson%208%2FSection%208.5%20p.%20106-107.mp3?alt=media&token=cf34c0ca-ce54-4f57-aae2-8d64f2d1457d" },
        ],
      },      
    ],
  },
    {
    id: "chapter-3",
    title: "Chapter 3",
    lessons: [
      {
        id: "1.9",
        title: "Lesson 9",
        sections: [
          { id: "9.1", title: "Section 9.1 — Pg. 111-113", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%203%2FLesson%209%2FSection%209.1%20p.%20111-113.mp3?alt=media&token=17b32f88-61c0-477d-ab1a-493d8679bdfa" },
          { id: "9.2.1", title: "Section 9.2 — Pg. 114-115", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%203%2FLesson%209%2FSection%209.2%20p.%20114-115.mp3?alt=media&token=9cbd7475-c609-4d7a-abad-41d2032ca7eb" },
          { id: "9.2.2", title: "Section 9.2 — Pg. 116", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%203%2FLesson%209%2FSection%209.2%20p.%20116.mp3?alt=media&token=2c139acc-ee05-40a4-8e54-267df4d2a3ae" },
          { id: "9.2.3", title: "Section 9.2 — Pg. 117", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%203%2FLesson%209%2FSection%209.2%20p.%20117.mp3?alt=media&token=b0ad8315-9241-4355-95b4-e3d08875dfd6" },
          { id: "9.3", title: "Section 9.3 — Pg. 118", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%203%2FLesson%209%2FSection%209.3%20p.%20118.mp3?alt=media&token=7e5aa819-f403-4c73-b56d-dee91c0de9ee" },
          { id: "9.4.1", title: "Section 9.4 — Pg. 121-123", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%203%2FLesson%209%2FSection%209.4%20p.%20121-123.mp3?alt=media&token=57cc7334-99dc-4ca8-b7fa-ec4794aeb348" },
          { id: "9.4.2", title: "Section 9.4 — Pg. 124-125", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%203%2FLesson%209%2FSection%209.4%20p.%20124-125.mp3?alt=media&token=036df280-2e08-4cd0-82e9-ffbeddeae5d3" },
          { id: "9.5.1", title: "Section 9.5— Pg. 126", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%203%2FLesson%209%2FSection%209.5%20p.%20126.mp3?alt=media&token=5476f8d2-042f-4df3-a766-9bfcafbbd78d" },
          { id: "9.5.2", title: "Section 9.5 — Pg. 127" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%203%2FLesson%209%2FSection%209.5%20p127.mp3?alt=media&token=976d6573-7c8c-4983-9bd6-d2e07ab64c5d"},

        ],
      },
      {
        id: "1.10",
        title: "Lesson 10",
        sections: [
          { id: "10.1", title: "Section 10.1 — Pg. 130", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%203%2FLesson%2010%2FSection%2010.1%20p.%20130.mp3?alt=media&token=f5e2fe2e-164d-4cef-a0ff-ecb4d064c7f3" },
          { id: "10.2.1", title: "Section 10.2 — Pg. 131", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%203%2FLesson%2010%2FSection%2010.2%20p.%20131.mp3?alt=media&token=b087de57-2dd7-40fe-a42b-95b58a25e133" },
          { id: "10.2.2", title: "Section 10.2 — Pg. 132-133", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%203%2FLesson%2010%2FSection%2010.2%20p.%20132-133.mp3?alt=media&token=012af34d-59b1-4118-9023-216319939e20" },
          { id: "10.2.3", title: "Section 10.2 — Pg. 134", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%203%2FLesson%2010%2FSection%2010.2%20p.%20134.mp3?alt=media&token=8a70e9c0-5e3f-4efe-89b9-0e3b1c78016e" },
          { id: "10.3.1", title: "Section 10.3 — Pg. 136-137", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%203%2FLesson%2010%2FSection%2010.3%20p.%20136-137.mp3?alt=media&token=abca60d2-3588-4533-a632-d142325a44e2" },
          { id: "10.3.2", title: "Section 10.3 — Pg. 138-139", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%203%2FLesson%2010%2FSection%2010.3%20p.%20138-139.mp3?alt=media&token=af3a669a-5e0c-4d52-83e2-3ec0b8c6ea57" },
          { id: "10.4.1", title: "Section 10.4 — Pg. 140", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%203%2FLesson%2010%2FSection%2010.4%20p.%20140.mp3?alt=media&token=a5456d01-028c-45df-9b35-8ab389be93c2" },
          { id: "10.4.2", title: "Section 10.4 — Pg. 141", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%203%2FLesson%2010%2FSection%2010.4%20p.%20141.mp3?alt=media&token=3f40078c-f1f2-4d7d-a17a-9a43540bb1b4" },
        ],
      },
      {
        id: "1.11",
        title: "Lesson 11",
        sections: [
          { id: "11.1.1", title: "Section 11.1 — Pg. 144", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%203%2FLesson%2011%2FSection%2011.1%20p.%20144.mp3?alt=media&token=ea718e42-f13a-4904-b3ed-fc7ecf7bf570" },
          { id: "11.1.2", title: "Section 11.1 — Pg. 145", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%203%2FLesson%2011%2FSection%2011.1%20p.%20145.mp3?alt=media&token=95a24ff0-0d9a-455c-aaca-52154943b73b" },
          { id: "11.2", title: "Section 11.2 — Pg. 146", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%203%2FLesson%2011%2FSection%2011.2%20p.%20146.mp3?alt=media&token=61d45f72-15b4-42e2-8c6b-2bf54b6b7d98" },
          { id: "11.3", title: "Section 11.3 — Pg. 147", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%203%2FLesson%2011%2FSection%2011.3%20p.%20147.mp3?alt=media&token=66bfd13a-388b-4a68-90ec-bc438d4a3400" },
          { id: "11.4.1", title: "Section 11.4 — Pg. 148", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%203%2FLesson%2011%2FSection%2011.4%20p.%20148.mp3?alt=media&token=1fcff636-88f7-43f2-9805-68b921d04af5" },
          { id: "11.4.2", title: "Section 11.4 — Pg. 149", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%203%2FLesson%2011%2FSection%2011.4%20p.%20149.mp3?alt=media&token=14281429-84fe-42c8-b272-a0b7033464e9" },
          { id: "11.5.1", title: "Section 11.5 — Pg. 151-152", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%203%2FLesson%2011%2FSection%2011.5%20p.%20151-152.mp3?alt=media&token=f02a9695-9a44-4727-aba0-f0952edb3951" },
          { id: "11.5.2", title: "Section 11.5 — Pg. 153-154", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%203%2FLesson%2011%2FSection%2011.5%20p.%20153-154.mp3?alt=media&token=b45f521c-f48e-4afe-9abf-8b2e2da7b8a8" },
          { id: "11.6.1", title: "Section 11.6 — Pg. 155", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%203%2FLesson%2011%2FSection%2011.6%20p.%20155.mp3?alt=media&token=ad3dd060-9b38-49c9-9aa1-676b68b39ded" },
          { id: "11.6.2", title: "Section 11.6 — Pg. 156", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%203%2FLesson%2011%2FSection%2011.6%20p.156.mp3?alt=media&token=3eee8ffc-540a-412b-9f6e-0ca779d8ca16" },

        ],
      },
      {
        id: "1.12",
        title: "Lesson 12",
        sections: [
          { id: "12.1", title: "Section 12.1 — Pg. 159-161", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%203%2FLesson%2012%2FSection%2012.1%20p.%20159-161.mp3?alt=media&token=0f497e8d-32f7-4089-82fb-14480396a434" },
          { id: "12.2", title: "Section 12.2 — Pg. 162", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%203%2FLesson%2012%2FSection%2012.2%20p.%20162.mp3?alt=media&token=bbd2915f-6cc3-4414-9bfe-5219322b0e2e" },
          { id: "12.3.1", title: "Section 12.3 — Pg. 165-166", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%203%2FLesson%2012%2FSection%2012.3%20p.%20165-166.mp3?alt=media&token=f5e17dd0-0320-4305-97d0-cfc17a06107d" },
          { id: "12.3.2", title: "Section 12.3 — Pg. 167-168", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%203%2FLesson%2012%2FSection%2012.3%20p.%20167-168.mp3?alt=media&token=13f4a395-1f9c-440e-996e-5d9a6dc907ab" },
          { id: "12.4.1", title: "Section 12.4 — Pg. 169", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%203%2FLesson%2012%2FSection%2012.4%20p.%20169.mp3?alt=media&token=1e4464d9-ea1d-4396-a4ab-4d61f03ec0d6" },
          { id: "12.4.2", title: "Section 12.4 — Pg. 170", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%203%2FLesson%2012%2FSection%2012.4%20p.%20170.mp3?alt=media&token=8464cb77-a476-4eec-a7ce-4d1a42802fce" },


        ],
      },      
    ],
  },
   {
    id: "chapter-4",
    title: "Chapter 4",
    lessons: [
      {
        id: "1.13",
        title: "Lesson 13",
        sections: [
          { id: "13.1", title: "Section 13.1 — Pg. 174-176", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2013%2FSection%2013.1%20p.%20174-176.mp3?alt=media&token=bb1bb80a-8c2b-4de4-b2a2-7823e8715361" },
          { id: "13.2", title: "Section 13.3 — Pg. 179-180", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2013%2FSection%2013.2%20p.%20179-180.mp3?alt=media&token=faafc67f-29b3-4fae-a35e-94cb6a7111e0" },
          { id: "13.3.1", title: "Section 13.4 — Pg. 181-182", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2013%2FSection%2013.3%20p.%20181-182.mp3?alt=media&token=c1a3db9b-793f-4cff-bd15-1801bae6a98b" },
          { id: "13.3.2", title: "Section 13.4 — Pg. 184", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2013%2FSection%2013.3%20p.%20184.mp3?alt=media&token=14980c86-6ec5-4460-a4a9-9356f1e890c3" },
          { id: "13.4.1", title: "Section 13.4 — Pg. 185-186", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2013%2FSection%2013.4%20p.%20185-186.mp3?alt=media&token=721fd0cc-e09a-4f80-9265-357c6b30fed4" },
          { id: "13.4.2", title: "Section 13.5 — Pg. 187-188", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2013%2FSection%2013.4%20p.%20187-188.mp3?alt=media&token=c723a059-3670-4183-96a8-2714721897a6" },
          { id: "13.5.1", title: "Section 13.5 — Pg. 189", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2013%2FSection%2013.5%20p.%20189.mp3?alt=media&token=23563f62-518c-4a96-8f99-78e4942717fa" },
          { id: "13.5.2", title: "Section 13.5 — Pg. 190", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2013%2FSection%2013.5%20p.%20190.mp3?alt=media&token=c4c891ad-a11e-4889-9b15-1fd9763e65e9" },

        ],
      },
      {
        id: "1.14",
        title: "Lesson 14",
        sections: [
          { id: "14.1.1", title: "Section 14.1 — Pg. 193", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2014%2FSection%2014.1%20p.%20193.mp3?alt=media&token=dfc2c613-2d47-4442-996b-5f8fd504fbf5" },
          { id: "14.1.2", title: "Section 14.1 — Pg. 194-196", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2014%2FSection%2014.1%20p.%20194-196.mp3?alt=media&token=928e4648-1d6a-42f6-b9b5-7ff8cc261f5b" },
          { id: "14.2.1", title: "Section 14.1 — Pg. 199-200", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2014%2FSection%2014.2%20p.%20199-200.mp3?alt=media&token=4ef0c982-f27b-4f66-9ae0-602913be8b3a" },
          { id: "14.2.2", title: "Section 14.2 — Pg. 201-202", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2014%2FSection%2014.2%20p.%20201-202.mp3?alt=media&token=904d891a-295b-4bc1-891b-cf2824830b40" },
          { id: "14.3.1", title: "Section 14.3 — Pg. 203", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2014%2FSection%2014.3%20p.%20203.mp3?alt=media&token=c71faf8f-179e-442d-aa1a-1badc2f25e96" },
          { id: "14.3.2", title: "Section 14.3 — Pg. 204", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2014%2FSection%2014.3%20p.204.mp3?alt=media&token=29d98267-538f-4dd3-b609-003523d56e61" },

        ],
      },
      {
        id: "1.15",
        title: "Lesson 15",
        sections: [
          { id: "15.1", title: "Section 15.1 — Pg. 207", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2015%2FSection%2015.1%20p.%20207.mp3?alt=media&token=44869200-da7c-48fe-9d70-548046c01257" },
          { id: "15.2.1", title: "Section 15.2 — Pg. 208", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2015%2FSection%2015.2%20p.%20208.mp3?alt=media&token=701073e1-75b9-4bba-9422-7400d8b0d687" },
          { id: "15.2.2", title: "Section 15.2 — Pg. 209", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2015%2FSection%2015.2%20p.%20209.mp3?alt=media&token=d7e9144a-600c-4e53-a9fc-9bb2b4989526" },
          { id: "15.2.3", title: "Section 15.2 — Pg. 210", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2015%2FSection%2015.2%20p.%20210.mp3?alt=media&token=1a008766-5612-46c0-b0a6-c899403b30f7" },
          { id: "15.2.4", title: "Section 15.2 — Pg. 211", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2015%2FSection%2015.2%20p.%20211.mp3?alt=media&token=a64c873e-bf71-4825-a5ba-54e31a07a206" },
          { id: "15.2.5", title: "Section 15.2 — Pg. 212", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2015%2Fsection%2015.2%20p.%20212.mp3?alt=media&token=01eef812-d720-4212-9381-b6ae111738c5" },
          { id: "15.2.6", title: "Section 15.2 — Pg. 213", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2015%2FSection%2015.2%20p.%20213.mp3?alt=media&token=9e050231-788b-46f8-bc6a-a99bd537f313" },
          { id: "15.3.1", title: "Section 15.3 — Pg. 217-219", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2015%2FSection%2015.3%20p.%20217-219.mp3?alt=media&token=49dae8f7-46f0-4616-9d44-07998dd69bc3" },
          { id: "15.3.2", title: "Section 15.3 — Pg. 220-221", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2015%2FSection%2015.3%20p.%20220-221.mp3?alt=media&token=51e5e31c-6603-4834-83e2-ee39a1f37351" },
          { id: "15.3.3", title: "Section 15.3 — Pg. 222-223", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2015%2FSection%2015.3%20p.%20222-223.mp3?alt=media&token=cb096f77-8c32-4cc9-8298-48feeee3b6af" },


        ],
      },
      {
        id: "1.16",
        title: "Lesson 16",
        sections: [
          { id: "16.1", title: "Section 16.1 — Pg. 226", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2016%2FSection%2016.1%20p.%20226.mp3?alt=media&token=0dcf1536-8b5b-42af-8999-78e77fbdfe34" },
          { id: "16.2", title: "Section 16.2 — Pg. 227", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2016%2FSection%2016.2%20p.%20227.mp3?alt=media&token=4bbc930b-0e9e-4c09-baa7-c482ba3d17b9" },
          { id: "16.3", title: "Section 16.3 — Pg. 228", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2016%2FSection%2016.3%20p.%20228.mp3?alt=media&token=58657510-a790-4af8-873f-aa75cf50adc7" },
          { id: "16.4.1", title: "Section 16.4 — Pg. 231-232", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2016%2FSection%2016.4%20p.231-232.mp3?alt=media&token=d5e66040-16b6-4bdf-83b6-945aabf1c446" },
          { id: "16.4.2", title: "Section 16.4 — Pg. 233-234", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2016%2FSection%2016.4%20p.%20233-234.mp3?alt=media&token=355f82aa-c3d3-4bdb-8be5-3eb04eaa8b44" },
          { id: "16.5.1", title: "Section 16.5 — Pg. 235-236", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2016%2FSection%2016.5%20p.%20235-236.mp3?alt=media&token=972e883c-b877-48c9-9deb-b3440d9ef4c0" },
          { id: "16.5.2", title: "Section 16.5 — Pg. 237", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2016%2FSection%2016.5%20p.%20237.mp3?alt=media&token=43fdbddf-a471-408b-9bac-9b3b8d3ce336" },
        ],
      },      
      {
        id: "1.17",
        title: "Lesson 17",
        sections: [
          { id: "17.1.1", title: "Section 17.1 — Pg. 240", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2017%2FSection%2017.1%20p.%20240.mp3?alt=media&token=85440608-7a50-4b84-8487-4e7056bd81c4" },
          { id: "17.1.2", title: "Section 17.1 — Pg. 241-242", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2017%2FSection%2017.1%20p.%20241-242.mp3?alt=media&token=1cd3e6a6-cf4d-4075-ab47-fca4212665ea" },
          { id: "17.2", title: "Section 17.2 — Pg. 243", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2017%2FSection%2017.2%20p.%20243.mp3?alt=media&token=33c451f7-6dd4-4d08-96c9-3cf8cbfee581" },
          { id: "17.3.1", title: "Section 17.3 — Pg. 247-248", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2017%2FSection%2017.3%20p.%20247-248.mp3?alt=media&token=393af6dc-77e1-432e-af5c-e5552364bf7a" },
          { id: "17.3.2", title: "Section 17.3 — Pg. 249-250", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2017%2FSection%2017.3%20p.%20249-250.mp3?alt=media&token=ba3dc1fe-47d7-4c19-89bf-f038d94baa90" },
          { id: "17.4.1", title: "Section 17.4 — Pg. 251", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2017%2FSection%2017.4%20p.%20251.mp3?alt=media&token=e6e0b9f6-ded2-4e41-afcd-4c661416b292" },
          { id: "17.4.2", title: "Section 17.4 — Pg. 252", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FChapter%204%2FLesson%2017%2FSection%2017.4%20p.%20252%20copy.mp3?alt=media&token=1269c6b2-d182-4dad-9096-fd82c689f44c" },

        ],
      },      
    ],
  },
  
  {
    id: "expressions-levantine",
    title: "Glossary of Expressions",
    sections: [
      { id: "g1", title: "Glossary of Expressions - Pg 300", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Expressions%2FG.Ex%20p.%20300.mp3?alt=media&token=f792493b-2da1-4e7c-b3a1-b5431e74721e"},
      { id: "g2", title: "Glossary of Expressions - Pg 301", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Expressions%2FG.Ex%20p.%20301.mp3?alt=media&token=b1fc62f9-9917-4395-bca6-e835143e2149"},
      { id: "g3", title: "Glossary of Expressions - Pg 302", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Expressions%2FG.Ex%20p.%20302.mp3?alt=media&token=325500a4-5f0e-467c-b254-44324a2dbbaa"},
      { id: "g4", title: "Glossary of Expressions - Pg 303", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Expressions%2FG.Ex%20p.%20303.mp3?alt=media&token=9b644553-721b-4682-8129-eea1a63a0b66"},
      { id: "g5", title: "Glossary of Expressions - Pg 304", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Expressions%2FG.Ex%20p.%20304.mp3?alt=media&token=28f092bb-f3f2-48f1-9b6b-86031dcf36ed"},
      { id: "g6", title: "Glossary of Expressions - Pg 305", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Expressions%2FG.Ex%20p.%20305.mp3?alt=media&token=36dd665b-a9df-4469-aec5-1aa74b37bb15"},
      { id: "g7", title: "Glossary of Expressions - Pg 306", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Expressions%2FG.Ex%20p.%20306.mp3?alt=media&token=cb10b43b-82fb-42f6-bd90-77557a31d633"},
      { id: "g8", title: "Glossary of Expressions - Pg 307", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Expressions%2FG.Ex%20p.%20307.mp3?alt=media&token=a892b3eb-5fa8-46b2-91bc-4cba20981055"},
      { id: "g9", title: "Glossary of Expressions - Pg 308", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Expressions%2FG.Ex%20p.%20308.mp3?alt=media&token=7c079b1b-ccb2-4bf7-a84c-fbb5e91010d3"},
      { id: "g10", title: "Glossary of Expressions - Pg 309", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Expressions%2FG.Ex%20p.%20309.mp3?alt=media&token=19bae80a-fc00-4b27-877f-242fd30fdeb1"}

    ],
  },
  {
    id: "verbs-levantine",
    title: "Glossary of Verbs",
    sections: [
      { id: "v1", title: "Glossary of Verbs - Pg 310", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Verbs%2FG.V%20p.%20310.mp3?alt=media&token=6e723193-6bac-44d5-b49b-d5f23ac77e97"},
      { id: "v2", title: "Glossary of Verbs - Pg 311", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Verbs%2FG.V%20p.%20311.mp3?alt=media&token=ee533174-6dad-459d-aa0c-d748dfe0998e"},
      { id: "v3", title: "Glossary of Verbs - Pg 312", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Verbs%2FG.V%20p.%20312.mp3?alt=media&token=0c571a4a-3d22-48e7-928b-8e12d83265ff"},
      { id: "v4", title: "Glossary of Verbs - Pg 313", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Verbs%2FG.V%20p.%20313.mp3?alt=media&token=35ac2aa9-d323-4f73-868a-665e7da8a728"},
      { id: "v5", title: "Glossary of Verbs - Pg 314", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Verbs%2FG.V%20p.%20314.mp3?alt=media&token=fafbd4b0-8f3d-4a71-9d61-2d6bdada9f47"},
      { id: "v6", title: "Glossary of Verbs - Pg 315", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Verbs%2FG.V%20p.%20315.mp3?alt=media&token=92d76c3c-a537-4578-8c34-fce0678f4af6"},
    ],
  },
  {
    id: "words-msa",
    title: "Glossary of Words",
    sections: [
      { id: "w1", title: "Glossary of Words - Pg 266", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.266.mp3?alt=media&token=d99827eb-8b93-4298-98e4-6ee2471ff8c1"},
      { id: "w2", title: "Glossary of Words - Pg 267", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.267.mp3?alt=media&token=bf185a4c-6b68-4baa-8709-7fea6ebbbfc9"},
      { id: "w3", title: "Glossary of Words - Pg 268", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.268.mp3?alt=media&token=e51989a4-a02b-4ece-afb0-ce95e992a2c5"},
      { id: "w4", title: "Glossary of Words - Pg 269", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.269.mp3?alt=media&token=a26268f1-69fc-4703-ab9b-051c5aec57a4"},
      { id: "w5", title: "Glossary of Words - Pg 270", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.270.mp3?alt=media&token=80e7e842-b3b9-4e74-81a9-60fe85d7945f"},
      { id: "w6", title: "Glossary of Words - Pg 271", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.271.mp3?alt=media&token=ef690116-eee3-46b3-9a4c-00f691af80e6"},
      { id: "w7", title: "Glossary of Words - Pg 272", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.272.mp3?alt=media&token=b09f0f13-4bab-49d7-b7ad-2c31287e1573"},
      { id: "w8", title: "Glossary of Words - Pg 273", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.273.mp3?alt=media&token=d427e04a-3a41-4b4a-8351-43ebb37a5906"},
      { id: "w9", title: "Glossary of Words - Pg 274", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.274.mp3?alt=media&token=fb44599e-7612-47f5-8b17-0ebc51cc6811"},
      { id: "w10", title: "Glossary of Words - Pg 275", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.275.mp3?alt=media&token=c5171917-e40e-4324-a89b-ed22d099f4f0"},
      { id: "w11", title: "Glossary of Words - Pg 276", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.276.mp3?alt=media&token=f2bd4e91-7cec-4851-a9b4-94d1ed6ec818"},
      { id: "w12", title: "Glossary of Words - Pg 277", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.277.mp3?alt=media&token=d394893b-0cbc-4197-b75c-4165db85eb05"},
      { id: "w13", title: "Glossary of Words - Pg 278", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.278.mp3?alt=media&token=d53fcc8b-07cc-466e-b84c-e297627e6141"},
      { id: "w14", title: "Glossary of Words - Pg 279", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.279.mp3?alt=media&token=3f5b85dd-8a0d-4487-8cbb-eafd317d9533"},
      { id: "w15", title: "Glossary of Words - Pg 280", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.280.mp3?alt=media&token=2c449895-e246-4db7-acdf-e1d54fb62565"},
      { id: "w16", title: "Glossary of Words - Pg 281", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.281.mp3?alt=media&token=5def2330-8bbf-4079-a76b-96e2c1f40940"},
      { id: "w17", title: "Glossary of Words - Pg 282", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.282.mp3?alt=media&token=13df4095-6cc7-4139-95b8-f8d22e880ab6"},
      { id: "w18", title: "Glossary of Words - Pg 283", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.283.mp3?alt=media&token=d5e5896d-b0b6-4b78-b549-33b7c52a2ff3"},
      { id: "w19", title: "Glossary of Words - Pg 284", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.284.mp3?alt=media&token=006ed41f-4348-477f-8882-3312ed46674f"},
      { id: "w20", title: "Glossary of Words - Pg 285", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.285.mp3?alt=media&token=7603f29e-de11-48ca-9fb6-e17b3d2bea00"},
      { id: "w21", title: "Glossary of Words - Pg 286", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.286.mp3?alt=media&token=bb9057e4-7a2f-44db-9c76-468b1412fcd6"},
      { id: "w22", title: "Glossary of Words - Pg 287", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.287.mp3?alt=media&token=a2644763-5d0a-48cd-94bc-4abaad60adfe"},
      { id: "w23", title: "Glossary of Words - Pg 288", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.288.mp3?alt=media&token=46a44be7-6304-4733-8a53-bae0d43de579"},
      { id: "w24", title: "Glossary of Words - Pg 289", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.289.mp3?alt=media&token=0995bcf9-642f-4de9-ad2f-0fc6573d9aa6"},
      { id: "w25", title: "Glossary of Words - Pg 290", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.290.mp3?alt=media&token=2d4ec9f7-eb72-4ef4-9842-a1fa669f3b5e"},
      { id: "w26", title: "Glossary of Words - Pg 291", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.291.mp3?alt=media&token=4ab466c6-6daa-4ddf-9728-e8ee5869b1a0"},
      { id: "w27", title: "Glossary of Words - Pg 292", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.292.mp3?alt=media&token=c00446b1-7800-4597-99a9-34ba403a033b"},
      { id: "w28", title: "Glossary of Words - Pg 293", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.293.mp3?alt=media&token=0053d2c9-2cf9-41b1-a95d-00875971efb2"},
      { id: "w29", title: "Glossary of Words - Pg 294", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.294.mp3?alt=media&token=656344ee-37c0-4fcd-8248-553976ee9a7d"},
      { id: "w30", title: "Glossary of Words - Pg 295", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.295.mp3?alt=media&token=3269ea38-0d9a-4bc8-8b57-92eb6e7c08c8"},
      { id: "w31", title: "Glossary of Words - Pg 296", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.296.mp3?alt=media&token=93523b9a-09d2-4aed-9693-86e5ebe3e014"},
      { id: "w32", title: "Glossary of Words - Pg 297", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.297.mp3?alt=media&token=4546ab18-caee-446d-ac57-7c7289d0cc86"},
      { id: "w33", title: "Glossary of Words - Pg 298", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.298.mp3?alt=media&token=7e43d78c-1d63-4d86-9417-e5971d9d5317"},
      { id: "w34", title: "Glossary of Words - Pg 299", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(New%20Version%20Audio)%2FGlossary%20of%20Words%2FG.W%20p.299.mp3?alt=media&token=11ffb57e-c6c3-4066-a675-8fdd70ffcdcf"},

    ],
  },
    ],
  },
  // ------------------------------------------PRACTICE BOOK ----------------------------------------------------
  {
    bookId: "ammiyeh-practice-book",
    youtubeUrl: "https://www.youtube.com/playlist?list=PLFZyUNFAHcKEMlbIkDRIybJwu_MmD_uwZ",
    oneDriveUrl: "https://1drv.ms/f/c/1bd9cb9d551010be/IgC-EBBVncvZIIAb5xICAAAAAYgC3PDQW2B4b5YnF9_uUJw?e=PpXb9d",
    chapters: [
      {
        id: "practice-book",
        title: "Lessons",
        sections: [
      { id: "l1", title: "Lesson 5 - Conversation", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FPRACTISE%20BOOK%20(The%20Comprehensive%20Guide%20to%20Levantine%20Arabic)%2FL5-Conv.m4a?alt=media&token=bbcf115d-90d3-4b28-a20d-3166c19b48b0"},
      { id: "l2", title: "Lesson 5 - Text", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FPRACTISE%20BOOK%20(The%20Comprehensive%20Guide%20to%20Levantine%20Arabic)%2FL5-Txt%20.m4a?alt=media&token=7ed002c1-51fb-43f6-8000-24bb899a376f"},
      { id: "l3", title: "Lesson 6 - Conversation", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FPRACTISE%20BOOK%20(The%20Comprehensive%20Guide%20to%20Levantine%20Arabic)%2FL6-Conv.m4a?alt=media&token=ddaa681e-6b83-4534-87df-ee4349334f0c"},
      { id: "l4", title: "Lesson 6 - Text", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FPRACTISE%20BOOK%20(The%20Comprehensive%20Guide%20to%20Levantine%20Arabic)%2FL6-Txt.m4a?alt=media&token=816b2188-63d6-438c-bbf2-3888ba04a81d"},
      { id: "l5", title: "Lesson 7 - Conversation", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FPRACTISE%20BOOK%20(The%20Comprehensive%20Guide%20to%20Levantine%20Arabic)%2FL7-Conv.m4a?alt=media&token=4c28abf6-190c-4f2b-90cf-be4c9627ace8"},
      { id: "l6", title: "Lesson 7 - Text", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FPRACTISE%20BOOK%20(The%20Comprehensive%20Guide%20to%20Levantine%20Arabic)%2FL7-Txt.m4a?alt=media&token=292550b1-5bc3-487f-ab98-bfbfb5c629a9"},
      { id: "l7", title: "Lesson 8 - Conversation", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FPRACTISE%20BOOK%20(The%20Comprehensive%20Guide%20to%20Levantine%20Arabic)%2FL8-Conv.m4a?alt=media&token=27033b1f-feb7-441b-b807-7f315bafb470"},
      { id: "l8", title: "Lesson 8 - Text", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FPRACTISE%20BOOK%20(The%20Comprehensive%20Guide%20to%20Levantine%20Arabic)%2FL8-Txt.m4a?alt=media&token=db0be489-3a5d-44b8-b40a-d1caf3de9b13"},
      { id: "l9", title: "Lesson 9 - Conversation", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FPRACTISE%20BOOK%20(The%20Comprehensive%20Guide%20to%20Levantine%20Arabic)%2FL9-Conv.m4a?alt=media&token=314fc249-801f-4808-a71c-cf0c324e1002"},
      { id: "l10", title: "Lesson 9 - Text", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FPRACTISE%20BOOK%20(The%20Comprehensive%20Guide%20to%20Levantine%20Arabic)%2FL9-Txt.m4a?alt=media&token=7e2bfaaf-062f-49bd-98e0-fe4b681f56ae"},
      { id: "l11", title: "Lesson 10 - Conversation", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FPRACTISE%20BOOK%20(The%20Comprehensive%20Guide%20to%20Levantine%20Arabic)%2FL10-Conv.m4a?alt=media&token=58ae338c-b092-43f6-8539-9c4266c9d377"},
      { id: "l12", title: "Lesson 10 - Text", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FPRACTISE%20BOOK%20(The%20Comprehensive%20Guide%20to%20Levantine%20Arabic)%2FL10-Txt.m4a?alt=media&token=bb8436c5-1478-4fb8-9187-b02a4ae55b54"},
      { id: "l13", title: "Lesson 11 - Conversation", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FPRACTISE%20BOOK%20(The%20Comprehensive%20Guide%20to%20Levantine%20Arabic)%2FL11-Conv.m4a?alt=media&token=24208f40-e3c8-42b9-8034-06265171eff3"},
      { id: "l14", title: "Lesson 11 - Text", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FPRACTISE%20BOOK%20(The%20Comprehensive%20Guide%20to%20Levantine%20Arabic)%2FL11-Txt.m4a?alt=media&token=5dce6de2-5c88-43b7-84d0-851fd89dcd11"},
      { id: "l15", title: "Lesson 12 - Conversation", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FPRACTISE%20BOOK%20(The%20Comprehensive%20Guide%20to%20Levantine%20Arabic)%2FL12-Conv.m4a?alt=media&token=6dcf29fd-1d12-4180-a91b-55a916700472"},
      { id: "l16", title: "Lesson 12 - Text", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FPRACTISE%20BOOK%20(The%20Comprehensive%20Guide%20to%20Levantine%20Arabic)%2FL12-Txt.m4a?alt=media&token=7f0488d6-cb9c-4f2f-ad07-26b2aad9c3c7"},
      { id: "l17", title: "Lesson 13 - Conversation", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FPRACTISE%20BOOK%20(The%20Comprehensive%20Guide%20to%20Levantine%20Arabic)%2FL13-Conv.m4a?alt=media&token=599c8a5b-34f3-4850-ad28-390b3fd93b51"},
      { id: "l18", title: "Lesson 13 - Text", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FPRACTISE%20BOOK%20(The%20Comprehensive%20Guide%20to%20Levantine%20Arabic)%2FL13-Txt.m4a?alt=media&token=f15e0b22-d903-4e3f-9e8e-15a641dc161b"},
      { id: "l19", title: "Lesson 14 - Conversation", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FPRACTISE%20BOOK%20(The%20Comprehensive%20Guide%20to%20Levantine%20Arabic)%2FL14-Conv.m4a?alt=media&token=0e381c4c-a47b-4312-b02c-de51f78ae90c"},
      { id: "l20", title: "Lesson 14 - Text", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FPRACTISE%20BOOK%20(The%20Comprehensive%20Guide%20to%20Levantine%20Arabic)%2FL14-Txt.m4a?alt=media&token=af1b0790-721e-4e7c-ac11-bbbba2565d1f"},
      { id: "l21", title: "Lesson 15 - Conversation", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FPRACTISE%20BOOK%20(The%20Comprehensive%20Guide%20to%20Levantine%20Arabic)%2FL15-Conv.m4a?alt=media&token=8abfdc53-eb5f-4bd4-b227-e3d273cad875"},
      { id: "l22", title: "Lesson 15 - Text", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FPRACTISE%20BOOK%20(The%20Comprehensive%20Guide%20to%20Levantine%20Arabic)%2FL15-Txt.m4a?alt=media&token=3698a051-c5cc-4b77-bc31-c49a31ea6e1d"},
      { id: "l23", title: "Lesson 16 - Conversation", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FPRACTISE%20BOOK%20(The%20Comprehensive%20Guide%20to%20Levantine%20Arabic)%2FL16-Conv.m4a?alt=media&token=4fa940e4-523a-406e-8ad3-0b9dc6dc46fd"},
      { id: "l24", title: "Lesson 16 - Text", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FPRACTISE%20BOOK%20(The%20Comprehensive%20Guide%20to%20Levantine%20Arabic)%2FL16-Txt.m4a?alt=media&token=5f87d777-d301-4a5b-b661-0d4d6ee7a5d2"},
      { id: "l25", title: "Lesson 17 - Conversation", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FPRACTISE%20BOOK%20(The%20Comprehensive%20Guide%20to%20Levantine%20Arabic)%2FL17-Conv.m4a?alt=media&token=014599f3-03e5-479f-969a-62cb42a73fa2"},
      { id: "l26", title: "Lesson 17 - Text", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FPRACTISE%20BOOK%20(The%20Comprehensive%20Guide%20to%20Levantine%20Arabic)%2FL17-Txt.m4a?alt=media&token=c152c86d-8a05-47ba-834e-7c789f657fe2"},    
    ],
      },
    ],
  },
  {
    // ---------------------------AMMIYEH INTERMEDIATE ----------------------------------------------------------
    bookId: "ammiyeh-intermediate",
    youtubeUrl: "https://www.youtube.com/@thecomprehensiveguideLvl2",
    oneDriveUrl: "https://1drv.ms/f/c/1bd9cb9d551010be/IgDSre75w93ESbSmyIKnJRvwAdEKIZh1TXgNDoBb3Yf_SDQ?e=yRhhbn",
    chapters: [
            {
    id: "chapter-1",
    title: "Chapter 1",
    lessons: [
      {
        id: "1.1",
        title: "Lesson 1",
        sections: [
          { id: "1.1", title: "Lesson 1.1 — Pg. 24 - 25", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%201%2FLesson%201%2FLesson%201%20Pg%2024%20-%2025.mp3?alt=media&token=94fbfedf-bc08-4a03-a08f-12340ce651ef" },
          { id: "1.2", title: "Lesson 1.2 — Pg. 26 - 27", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%201%2FLesson%201%2FLesson%201%20Pg%2026%20-%2027.mp3?alt=media&token=27d0fe0e-515b-4228-a5b5-bd36b3efda55" },
          { id: "1.3", title: "Lesson 1.3 — Pg. 28 - 29", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%201%2FLesson%201%2FLesson%201%20Pg%2028%20-%2029.mp3?alt=media&token=2bb0ea16-b553-45e6-bd25-774b17ff0765" },
          
        ],
      },
      {
        id: "1.2",
        title: "Lesson 2",
        sections: [
          { id: "2.1", title: "Lesson 2.1 — Pg. 49 - 50", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%201%2FLesson%202%2FLesson%202%20Pg%2049%20-%2050.mp3?alt=media&token=d89ec780-af90-4ed4-b06a-8ecf52b09076" },
          { id: "2.2", title: "Lesson 2.2 — Pg. 51 - 52", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%201%2FLesson%202%2FLesson%202%20Pg%2051%20-%2052.mp3?alt=media&token=150e51af-a693-4ba5-99b6-398d96639425" },
          { id: "2.3", title: "Lesson 2.3 — Pg. 53 - 54", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%201%2FLesson%202%2FLesson%202%20Pg%2053%20-%2054.mp3?alt=media&token=ad3c916f-f7b7-41ad-a850-22cf262929bb" },
       
        ],
      },
      {
        id: "1.3",
        title: "Lesson 3",
        sections: [
          { id: "3.1", title: "Lesson 3.1 — Pg. 70", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%201%2FLesson%203%2FLesson%203%20Pg%2070.mp3?alt=media&token=885f07f5-4957-480d-86b6-cb9e81d7017b" },
          { id: "3.2", title: "Lesson 3.2 — Pg. 71 - 72", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%201%2FLesson%203%2FLesson%203%20Pg%2071%20-%2072.mp3?alt=media&token=279b03c6-1386-4895-a16d-d977ce747759" },
          { id: "3.3", title: "Lesson 3.3 — Pg. 73 - 74", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%201%2FLesson%203%2FLesson%203%20Pg%2073%20-%2074.mp3?alt=media&token=9c32bf98-2874-429a-95d0-ad8f82503f21" },
          { id: "3.4", title: "Lesson 3.4 — Pg. 75 - 76", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%201%2FLesson%203%2FLesson%203%20Pg%2075%20-%2076.mp3?alt=media&token=88b4be2c-a42e-4e77-aa4f-1d5c81a79179" }

        ],
      },
      {
        id: "1.4",
        title: "Lesson 4",
        sections: [
          { id: "4.1", title: "Lesson 4.1 — Pg. 85 - 86", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%201%2FLesson%204%2FLesson%204%20Pg%2045%20-%2046.mp3?alt=media&token=5968e48f-ad47-4e48-863b-ed61c06aea6f" },
          { id: "4.2", title: "Lesson 4.2 — Pg. 87 - 88", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%201%2FLesson%204%2FLesson%204%20Pg%2087%20-%2088.mp3?alt=media&token=088bf39d-e7a9-42f1-a815-21750852cb2a" },
          { id: "4.3", title: "Lesson 4.3 — Pg. 89", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%201%2FLesson%204%2FLesson%204%20Pg%2089.mp3?alt=media&token=46ba0f4b-a5cf-4077-8ac9-ea703fa8896b" },

        ],
      },      
      {
        id: "1.5",
        title: "Lesson 5",
        sections: [
          { id: "5.1", title: "Lesson 5.1 — Pg. 112", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%201%2FLesson%205%2FLesson%205%20Pg%20112.mp3?alt=media&token=6603459d-5bc1-48e4-ba2b-0b58468e6df6" },
          { id: "5.2", title: "Lesson 5.2 — Pg. 114 - 115", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%201%2FLesson%205%2FLesson%205%20Pg%20114%20-%20115.mp3?alt=media&token=adef4f9d-4c89-424e-a36e-52bd493012a5" },
          { id: "5.3", title: "Lesson 5.3 — Pg. 116 - 117", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%201%2FLesson%205%2FLesson%205%20Pg%20116%20-%20117.mp3?alt=media&token=09a16b37-bb35-4162-8aa8-a0d5faa9f1d6" },
          { id: "5.4", title: "Lesson 5.4 — Pg. 118 - 119", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%201%2FLesson%205%2FLesson%205%20Pg%20118%20-%20119.mp3?alt=media&token=12893ff0-1deb-4a04-8143-060c66a3a493" },

        ],
      },      
    ],
  },
  {
    id: "chapter-2",
    title: "Chapter 2",
    lessons: [
      {
        id: "1.6",
        title: "Lesson 6",
        sections: [
          { id: "6.1", title: "Lesson 6.1 — Pg. 134 - 135", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%202%2FLesson%206%2FLesson%206%20Pg%20134%20-%20135.mp3?alt=media&token=fac284b6-85f2-4b44-b3c1-849695647a8f" },
          { id: "6.2", title: "Lesson 6.2 — Pg. 136 - 137", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%202%2FLesson%206%2FLesson%206%20Pg%20136%20-%20137.mp3?alt=media&token=ffcc416e-c49b-4847-9fc4-7c01b7ccf638" },
          { id: "6.3", title: "Lesson 6.3 — Pg. 138 - 139", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%202%2FLesson%206%2FLesson%206%20Pg%20138%20-%20139.mp3?alt=media&token=eaba1a5b-8db3-4e4e-a2ab-37d0f69b9899" },

        ],
      },
      {
        id: "1.7",
        title: "Lesson 7",
        sections: [
          { id: "7.1", title: "Lesson 7.1 — Pg. 154 - 155", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%202%2FLesson%207%2FLesson%207%20Pg%20154%20-%20155.mp3?alt=media&token=0b3d3473-4077-4afe-ae8e-0926d5cc18e2" },
          { id: "7.2", title: "Lesson 7.2 — Pg. 156 - 157", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%202%2FLesson%207%2FLesson%207%20Pg%20156%20-%20157.mp3?alt=media&token=96126d2f-86c4-464f-92ec-3e953053667e" },
          { id: "7.3", title: "Lesson 7.3 — Pg. 158 - 159", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%202%2FLesson%207%2FLesson%207%20Pg%20158%20-%20159.mp3?alt=media&token=50952794-69f7-4ce0-890b-e182e78ab212" },

        ],
      },
      {
        id: "1.8",
        title: "Lesson 8",
        sections: [
          { id: "8.1", title: "Lesson 8.1 — Pg. 164", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%202%2FLesson%208%2FLesson%208%20Pg%20164.mp3?alt=media&token=eaf8ab5c-6996-4a06-b807-b42d5a604675" },
          { id: "8.2", title: "Lesson 8.2 — Pg. 174", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%202%2FLesson%208%2FLesson%208%20Pg%20174.mp3?alt=media&token=6e11ee5f-43a4-480e-9b09-bb2c9dc65e14" },
          { id: "8.3", title: "Lesson 8.3 — Pg. 177", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%202%2FLesson%208%2FLesson%208%20Pg%20177.mp3?alt=media&token=c245e2f2-adcc-4393-9f81-0f95f17f19b2" },
          { id: "8.4", title: "Lesson 8.4 — Pg. 181", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%202%2FLesson%208%2FLesson%208%20Pg%20181.mp3?alt=media&token=6546bdc2-0fd6-40aa-b938-8cad4295f1ee" },
          { id: "8.5", title: "Lesson 8.5 — Pg. 185 - 186", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%202%2FLesson%208%2FLesson%208%20Pg%20185%20-%20186.mp3?alt=media&token=e28a90e6-c953-4cab-869b-88a340386d37" },
          { id: "8.6", title: "Lesson 8.6 — Pg. 187 - 188", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%202%2FLesson%208%2FLesson%208%20Pg%20187%20-%20188.mp3?alt=media&token=134da42f-57c3-44f2-a373-81d5b33bce6a" },
          { id: "8.7", title: "Lesson 8.7 — Pg. 189 - 190", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%202%2FLesson%208%2FLesson%208%20Pg%20189%20-%20190.mp3?alt=media&token=fa45be60-9d97-4a02-962c-34d81400adf9" },

        ],
      },
      {
        id: "1.9",
        title: "Lesson 9",
        sections: [
          { id: "9.1", title: "Lesson 9.1 — Pg. 200 - 201", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%202%2FLesson%209%2FLesson%209%20Pg%20200%20-%20201.mp3?alt=media&token=e5a96b53-72ae-48fa-bb2b-dda83082d84d" },
          { id: "9.2", title: "Lesson 9.2 — Pg. 202 - 203", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%202%2FLesson%209%2FLesson%209%20Pg%20202%20-%20203.mp3?alt=media&token=5c3225b9-2c57-4158-b077-dc582602f477" },
          { id: "9.3", title: "Lesson 9.3 — Pg. 204 - 205", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%202%2FLesson%209%2FLesson%209%20Pg%20204%20-%20205.mp3?alt=media&token=3320bb61-35d2-43ec-9851-71f939071f65" },
        ],
      },    
            {
        id: "1.10",
        title: "Lesson 10",
        sections: [
          { id: "10.1", title: "Lesson 10.1 — Pg. 218 - 219", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%202%2FLesson%2010%2FLesson%2010%20Pg%20218%20-%20219.mp3?alt=media&token=bec46bc1-2e5c-46b2-9bd1-3f5616e6bc69" },
          { id: "10.2", title: "Lesson 10.2 — Pg. 220 - 221", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%202%2FLesson%2010%2FLesson%2010%20Pg%20220%20-%20221.mp3?alt=media&token=00b37a61-6fb4-409b-ba02-c662e4f99fdd" },
          { id: "10.3", title: "Lesson 10.3 — Pg. 222 - 223", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%202%2FLesson%2010%2FLesson%2010%20Pg%20222%20-%20223.mp3?alt=media&token=cdba1dcb-c52c-4151-a61d-902a7d6aeb20" },
        ],
      },       
    ],
  },
    {
    id: "chapter-3",
    title: "Chapter 3",
    lessons: [
      {
        id: "1.11",
        title: "Lesson 11",
        sections: [
          { id: "11.1", title: "Lesson 11.1 — Pg. 237 - 238", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%203%2FLesson%2011%2FLesson%2011%20Pg%20237%20-%20238.mp3?alt=media&token=ef7009f6-dfd2-46e8-90b5-fd989dd0e612" },
          { id: "11.2", title: "Lesson 11.2 — Pg. 239 - 240", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%203%2FLesson%2011%2FLesson%2011%20Pg%20239%20-%20240.mp3?alt=media&token=3ef5e755-75ac-407c-bfe5-cafd97b18dc3" },
          { id: "11.3", title: "Lesson 11.3 — Pg. 241 - 242", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%203%2FLesson%2011%2FLesson%2011%20Pg%20241%20-%20242.mp3?alt=media&token=b7cf1abe-9417-4085-b2e3-e083c4d030a5" },

        ],
      },
      {
        id: "1.12",
        title: "Lesson 12",
        sections: [
          { id: "12.1", title: "Lesson 12.1 — Pg. 250", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%203%2FLesson%2012%2FLesson%2012%20Pg%20250.mp3?alt=media&token=9acdce51-3340-4e5a-aae8-bf07fbe2feb4" },
          { id: "12.2", title: "Lesson 12.2 — Pg. 254", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%203%2FLesson%2012%2FLesson%2012%20Pg%20254.mp3?alt=media&token=669122c3-7a89-4c24-b343-098cdf10f8d9" },
          { id: "12.3", title: "Lesson 12.3 — Pg. 257 - 258", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%203%2FLesson%2012%2FLesson%2012%20Pg%20257%20-%20258.mp3?alt=media&token=355f0b30-116c-43db-b104-881f5636d8b2" },
          { id: "12.4", title: "Lesson 12.4 — Pg. 259 - 260", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%203%2FLesson%2012%2FLesson%2012%20Pg%20259%20-%20260.mp3?alt=media&token=ae564e01-7cb0-4408-801c-807a15a540e6" },
          { id: "12.5", title: "Lesson 12.5 — Pg. 261 - 262", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%203%2FLesson%2012%2FLesson%2012%20Pg%20261%20-%20262.mp3?alt=media&token=7c1149ee-09bd-4cf2-98e8-f3aa2b1500ab" },
        ],
      },
      {
        id: "1.13",
        title: "Lesson 13",
        sections: [
          { id: "13.1", title: "Lesson 13.1 — Pg. 273 - 274", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%203%2FLesson%2013%2FLesson%2013%20Pg%20273%20-%20274.mp3?alt=media&token=7860ebd7-2fe3-4637-8deb-98fe947bfe53" },
          { id: "13.2", title: "Lesson 13.2 — Pg. 275 - 276", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%203%2FLesson%2013%2FLesson%2013%20Pg%20275%20-%20276.mp3?alt=media&token=ec64ba13-3501-4dbd-8292-91da61f7c8e6" },
          { id: "13.3", title: "Lesson 13.3 — Pg. 277 - 278", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%203%2FLesson%2013%2FLesson%2013%20Pg%20277%20-%20278.mp3?alt=media&token=4eca6a23-64aa-42ac-b017-a14e215477a2" },

        ],
      },
      {
        id: "1.14",
        title: "Lesson 14",
        sections: [
          { id: "14.1", title: "Lesson 14.1 — Pg. 291 - 292", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%203%2FLesson%2014%2FLesson%2014%20Pg%20291%20-%20292.mp3?alt=media&token=aabe2114-60fe-4fd0-86e7-eb6e3b1a8e58" },
          { id: "14.2", title: "Lesson 14.2 — Pg. 293 - 294", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%203%2FLesson%2014%2FLesson%2014%20Pg%20293%20-%20294.mp3?alt=media&token=4fd086cc-27b0-4857-9be5-b0b056ff3cba" },
          { id: "14.3", title: "Lesson 14.3 — Pg. 295 - 296", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%203%2FLesson%2014%2FLesson%2014%20Pg%20295%20-%20296.mp3?alt=media&token=5ddc4fdf-f474-4ec0-b1a6-54b2d7507e64" },

        ],
      },      
      {
        id: "1.15",
        title: "Lesson 15",
        sections: [
          { id: "15.1", title: "Lesson 15.1 — Pg. 314 - 315", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%203%2FLesson%2015%2FLesson%2015%20Pg%20314%20-%20315.mp3?alt=media&token=aad172b5-faff-45a6-acce-20feac64d4a8" },
          { id: "15.2", title: "Lesson 15.2 — Pg. 316 - 317", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%203%2FLesson%2015%2FLesson%2015%20Pg%20316%20-%20317.mp3?alt=media&token=441fe90a-4ae8-4e2e-b5a1-b1ece074c5b8" },
          { id: "15.3", title: "Lesson 15.3 — Pg. 318 - 319", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FChapter%203%2FLesson%2015%2FLesson%2015%20Pg%20318%20-%20319.mp3?alt=media&token=58d8c808-5a37-44d3-93e2-e01b42e0f2d0" },

        ],
      },        
    ],
  },
  
  {
    id: "expressions-levantine-intermediate",
    title: "Glossary of Expressions",
    sections: [
      { id: "g1", title: "Glossary of Expressions ", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FGlossary%20of%20Expressions%2FGlossary%20of%20Expressions.mp3?alt=media&token=2dd880ba-d8ba-48ee-af73-1a99b3094f3d"},

    ],
  },
  {
    id: "verbs-levantine-intermediate",
    title: "Glossary of Verbs",
    sections: [
      { id: "v1", title: "Glossary of Verbs", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FGlossary%20of%20Verbs%2FGlossary%20of%20Verbs.mp3?alt=media&token=33c099fe-0fd8-4701-b637-abecec93e08f"},
    ],
  },
  {
    id: "words-levantine-intermediate",
    title: "Glossary of Words",
    sections: [
      { id: "w1", title: "Glossary of Words", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FTHE%20COMPREHENSIVE%20GUIDE%20TO%20LEVANTINE%20ARABIC%20(Intermediate%20level)%2FGlossary%20of%20Words%2FGlossary%20of%20Words.mp3?alt=media&token=89ef233c-2c8d-4bc3-b2db-8074f7b35e11"},
    ],
  },
    ],
  },
  {
    bookId: "ammiyeh-french",
    youtubeUrl: "https://www.youtube.com/@MANUELCOMPLETDARABELEVAN-rd1eq/playlists",
    oneDriveUrl: "https://1drv.ms/f/c/1bd9cb9d551010be/IgC-EBBVncvZIIAbrCUBAAAAAV7pcQ7l3OFOQ1GOmn2g0RE?e=tb5CFK",
    chapters: [
      {
    id: "chapter-1",
    title: "Chapitre 1",
    lessons: [
      {
        id: "1.1",
        title: "Module 1",
        sections: [
          { id: "1.1", title: "Partie 1.1 — Pg. 4-7", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%201%2FModule%201%2FPartie%201.1%20-%20p.4-7.mp3?alt=media&token=b43ece22-af8a-45ae-bf92-3ce7a4f96eb5" },
          { id: "1.2", title: "Partie 1.2 — Pg. 8", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%201%2FModule%201%2FPartie%201.2%20-%20p.8.mp3?alt=media&token=4a09b24d-b01a-4213-bbc8-4a750662e913" },
          { id: "1.3.1", title: "Partie 1.3 — Pg. 12", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%201%2FModule%201%2FPartie%201.3%20-%20p.12.mp3?alt=media&token=be461c1c-a2e2-4b1d-ade3-a4d770b4e3e2" },
          { id: "1.3.2", title: "Partie 1.3 — Pg. 13" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%201%2FModule%201%2FPartie%201.3%20-%20p.13.mp3?alt=media&token=65c959cc-123e-435f-a1dd-c1e641ef8a80"},
          { id: "1.3", title: "Partie 1.4 — Pg. 14" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%201%2FModule%201%2FPartie%201.4%20-%20p.14.mp3?alt=media&token=4529000b-abfe-4eb9-be51-49bb6a3bc662"},
          
        ],
      },
      {
        id: "1.2",
        title: "Module 2",
        sections: [
          { id: "2.1.1", title: "Partie 2.1 — Pg. 17", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%201%2FModule%202%2FPartie%202.1%20-%20p.17.mp3?alt=media&token=d3861079-e80b-47df-bd06-e507e1dc1834" },
          { id: "2.1.2", title: "Partie 2.1 — Pg. 18", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%201%2FModule%202%2FPartie%202.1%20-%20p.18.mp3?alt=media&token=1872d0ac-8b59-4edb-b722-2b0115c108ca" },
          { id: "2.1.3", title: "Partie 2.1 — Pg. 19", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%201%2FModule%202%2FPartie%202.1%20-%20p.19.mp3?alt=media&token=2fe449e3-9cb5-4b7d-961b-bc788d21216d" },
          { id: "2.2.1", title: "Partie 2.2 — Pg. 20", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%201%2FModule%202%2FPartie%202.2%20-%20p.20.mp3?alt=media&token=e22265aa-1df9-4a15-bdb6-c7f688c3b32c" },
          { id: "2.3.1", title: "Partie 2.3 — Pg. 21", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%201%2FModule%202%2FPartie%202.3%20p.%2021.mp3?alt=media&token=5b135ba8-7d86-4aad-b2d1-8a6a2fb7040e" },
          { id: "2.3.2", title: "Partie 2.3 — Pg. 22-25", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%201%2FModule%202%2FPartie%202.3%20-%20p.22%20-%2025.mp3?alt=media&token=bfdb674a-f0f7-4d2e-abc7-7f3765828284" },
          { id: "2.3.3", title: "Partie 2.3 — Pg. 26" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%201%2FModule%202%2FPartie%202.3%20-%20p.26.mp3?alt=media&token=50441e07-8a81-4fbf-949f-af530bb8f968"},
          { id: "2.4", title: " Partie 2.4-  Pg 27" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%201%2FModule%202%2FPartie%202.4%20-%20p.27.mp3?alt=media&token=413ecf86-1780-433a-90aa-6c289cfc6148"},
       
        ],
      },
      {
        id: "1.3",
        title: "Module 3",
        sections: [
          { id: "3.2", title: "Partie 3.2 — Pg. 32", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%201%2FModule%203%2FPartie%202.1%20-%20p.32.mp3?alt=media&token=2cd479f6-290a-458d-b567-073fcc81e083" },
          { id: "3.3", title: "Partie 3.3 — Pg. 33", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%201%2FModule%203%2FPartie%202.2%20-%20p.33.mp3?alt=media&token=4e902533-9678-4cde-9c63-4b65229d7b47" },
          { id: "3.5", title: "Partie 3.5 — Pg. 36", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%201%2FModule%203%2FPartie%203.5%20-%20p.36.mp3?alt=media&token=007dde5b-3056-428f-8ab6-52fca43e2f77" },
        ],
      },
      {
        id: "1.4",
        title: "Module 4",
        sections: [
          { id: "4.1", title: "Partie 4.1 — Pg. 39", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%201%2FModule%204%2FPartie%204.1%20-%20p.39.mp3?alt=media&token=8db0d74c-2368-4b13-b480-af492c2ae800"},
          { id: "4.2.1", title: "Partie 4.2 — Pg. 40", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%201%2FModule%204%2FPartie%204.2%20-%20p.40.mp3?alt=media&token=e5910255-5a63-4135-8a6e-138df031d7a6"},
          { id: "4.2.2", title: "Partie 4.2 — Pg. 42", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%201%2FModule%204%2FPartie%204.3-%20p.42.mp3?alt=media&token=602d04a4-aebc-4de6-97fd-df8d1c524521"},

        ],
      },      
    ],
  },
  {
    id: "chapter-2",
    title: "Chapitre 2",
    lessons: [
      {
        id: "1.5",
        title: "Module 5",
        sections: [
          { id: "5.1.1", title: "Partie 5.1 — Pg. 46 - 47", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%202%2FModule%205%2FPartie%205.1%20-%20p.46%20-%2047.mp3?alt=media&token=5eab2835-4297-47a3-9ebb-abdc98a159df" },
          { id: "5.1.2", title: "Partie 5.1 — Pg. 48", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%202%2FModule%205%2FPartie%205.1%20-%20p.48.mp3?alt=media&token=4696329c-82bd-4631-8830-7d5693a1ba99" },
          { id: "5.2", title: "Partie 5.2 — Pg. 50 - 51", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%202%2FModule%205%2FPartie%205.2%20-%20p.50%20-%2051.mp3?alt=media&token=8bb81d16-299b-47e1-add4-62f2419707b0" },
          { id: "5.3", title: "Partie 5.3 — Pg. 52 - 54", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%202%2FModule%205%2FPartie%205.3%20-%20p.52%20-%2054.mp3?alt=media&token=81179127-c5c8-4797-b044-7a841eeafc4c" },
          { id: "5.4.1", title: "Partie 5.4 — Pg. 57 - 58", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%202%2FModule%205%2FPartie%205.4%20-%20p.57%20-%2058.mp3?alt=media&token=b630b603-d3d2-4291-a032-ff605481c188" },

          { id: "5.4.2", title: "Partie 5.4 — Pg. 59 - 60", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%202%2FModule%205%2FPartie%205.4%20-%20p.59%20-%2060.mp3?alt=media&token=5c01f58a-11ed-49a6-b6a2-55f4d911b80f" },
          { id: "5.5.1", title: "Partie 5.5 — Pg. 61", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%202%2FModule%205%2FPartie%205.5%20-%20p.61.mp3?alt=media&token=fb8bde60-1ab5-4ad1-ad34-acdb5964cfc3" },
          { id: "5.5.2", title: "Partie 5.5 — Pg. 62", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%202%2FModule%205%2FPartie%205.5%20-%20p.62.mp3?alt=media&token=416a37cb-5072-4017-979e-1786fbaad969" },
        ],
      },
      {
        id: "1.6",
        title: "Module 6",
        sections: [
          { id: "6.1.1", title: "Partie 6.1 — Pg. 65 - 71", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%202%2FModule%206%2Fpartie%206.1%20p.65-71.mp3?alt=media&token=0e79bc78-04da-4539-ac13-7e7b8c8af45f" },
          { id: "6.1.2", title: "Partie 6.1 — Pg. 72 - 73", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%202%2FModule%206%2FPartie%206.1%20-%20p.72%20-73.mp3?alt=media&token=5ef391e3-247f-46dd-96f8-002038ea2ef4" },
          { id: "6.1.3", title: "Partie 6.1 — Pg. 74", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%202%2FModule%206%2FPartie%206.1%20-%20p.74.mp3?alt=media&token=145e5c0b-4f10-47bd-929f-cb086a7dafcf" },
          { id: "6.3.1", title: "Partie 6.2 — Pg. 75 - 76", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%202%2FModule%206%2FPartie%206.3%20-%20p.75%20-%2076.mp3?alt=media&token=b4b32ace-5f04-474f-8a62-4b6463f2865d" },
          { id: "6.3.2", title: "Partie 6.3 — Pg. 77", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%202%2FModule%206%2FPartie%206.3%20-%20p.77.mp3?alt=media&token=d4d15b8e-3603-4092-8cbf-4adabd6e0079" },
          { id: "6.5.1", title: "Partie 6.5 — Pg. 80 - 81", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%202%2FModule%206%2FPartie%206.5%20-%20p.80%20-%2081.mp3?alt=media&token=826288f8-73a5-41b0-a33d-f469d126078e" },
          { id: "6.5.2", title: "Partie 6.5 — Pg. 82 - 83" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%202%2FModule%206%2FPartie%206.5%20-%20p.82%20-%2083.mp3?alt=media&token=f6f2e574-6b4e-4808-8822-19716d31f5a6"},
          { id: "6.5.3", title: "Partie 6.5 — Pg. 84 - 85" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%202%2FModule%206%2FPartie%206.5%20-%20p.84%20-%2085.mp3?alt=media&token=3df11ae1-d033-4ba6-8b39-5276a5c95af9"},
          
        ],
      },
      {
        id: "1.7",
        title: "Module 7",
        sections: [
          { id: "7.1.1", title: "Partie 7.1 — Pg. 88-90", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%202%2FModule%207%2FPartie%207.1%20-%20p.88%20-%2090.mp3?alt=media&token=51e1e344-7b2c-4fa1-ac9c-68c82a1ee4b3" },
          { id: "7.1.2", title: "Partie 7.1 — Pg. 90", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%202%2FModule%207%2FPartie%207.1%20-%20p.90.mp3?alt=media&token=7be2a4d1-332f-4f44-a68a-a04bd34a7769" },
          { id: "7.2", title: "Partie 7.2 — Pg. 91", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%202%2FModule%207%2FPartie%207.2%20-%20p.91.mp3?alt=media&token=ea5fb70e-1a8a-49ec-bd58-438e387844f5" },
          { id: "7.3.1", title: "Partie 7.3 — Pg. 93-94", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%202%2FModule%207%2FPartie%207.3%20-%20p.93%20-%2094.mp3?alt=media&token=82a59e6b-cb01-4187-ae6d-f5af244f075d" },
          { id: "7.3.2", title: "Partie 7.3 — Pg. 95-96", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%202%2FModule%207%2FPartie%207.3%20-%20p.95%20-%2096.mp3?alt=media&token=ffd12746-5491-488f-975d-7481687d8381" },
          { id: "7.4.1", title: "Partie 7.4 — Pg. 97", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%202%2FModule%207%2FPartie%207.4%20-%20p.97.mp3?alt=media&token=8c40be5f-28c2-4877-82be-f8ca385f4648" },
        ],
      },
      {
        id: "1.8",
        title: "Module 8",
        sections: [
          { id: "8.1", title: "Partie 8.1 — Pg. 100", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%202%2FModule%208%2FPartie%208.1-%20p.100.mp3?alt=media&token=8c552220-07e9-4ed5-ab14-71fa2e7309f7" },
          { id: "8.2", title: "Partie 8.2 — Pg. 101", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%202%2FModule%208%2FPartie%208.2%20-%20p.101.mp3?alt=media&token=cc81a43b-13f1-4c7c-a1fa-2fc6f99212d4" },
          { id: "8.3", title: "Partie 8.3 — Pg. 102", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%202%2FModule%208%2FPartie%208.3%20-%20p.102.mp3?alt=media&token=693f6182-6d96-41c2-81b5-044d132808b8" },
          { id: "8.4", title: "Partie 8.4 — Pg. 103", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%202%2FModule%208%2FPartie%208.4%20-%20p.103.mp3?alt=media&token=df81411b-78d8-4e29-8f71-465712f87fb5" },
          { id: "8.5.1", title: "Partie 8.5 — Pg. 104-105", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%202%2FModule%208%2FPartie%208.5%20-%20p.104%20-105.mp3?alt=media&token=14a19d8c-b428-4fb9-b485-dc82869b18ae" },
          { id: "8.5.2", title: "Partie 8.5 — Pg. 106-107", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%202%2FModule%208%2FPartie%208.5%20-%20p.106%20-107.mp3?alt=media&token=7c8a5844-5de1-46d4-b773-4a9ff509ea0c" },
        ],
      },      
    ],
  },
    {
    id: "chapter-3",
    title: "Chapitre 3",
    lessons: [
      {
        id: "1.9",
        title: "Module 9",
        sections: [
          { id: "9.1", title: "Partie 9.1 — Pg. 111 - 113", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%203%2FModule%209%2FPartie%209.1%20-%20p.111%20-113.mp3?alt=media&token=3eec10e3-6329-409f-85cb-cdf474018491" },
          { id: "9.2.1", title: "Partie 9.2 — Pg. 114 - 115", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%203%2FModule%209%2FPartie%209.2%20-%20p.114%20-%20115.mp3?alt=media&token=72e9f6d1-77f9-455c-8c18-119017f74880" },
          { id: "9.2.2", title: "Partie 9.2 — Pg. 116 - 117", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%203%2FModule%209%2FPartie%209.2%20-%20p.116%20-%20117.mp3?alt=media&token=1a586e8e-6834-49a0-8559-1e2216d6ff09" },
          { id: "9.3", title: "Partie 9.3 — Pg. 118", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%203%2FModule%209%2FPartie%209.3%20-%20p.118.mp3?alt=media&token=a9cdb866-f51c-4a07-a4e9-d92c8fef602f" },
          { id: "9.4.1", title: "Partie 9.4 — Pg. 121 - 123", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%203%2FModule%209%2FPartie%209.4%20-%20p.121%20-%20123.mp3?alt=media&token=02ec7e7b-92c7-4dd6-880c-e5e691ba0fca" },
          { id: "9.4.2", title: "Partie 9.4 — Pg. 124 - 125", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%203%2FModule%209%2FPartie%209.4%20-%20p.124%20-%20145.mp3?alt=media&token=bcb4b99b-31bc-4eeb-8935-2b8fb3a9d9a0" },
          { id: "9.5", title: "Partie 9.5 — Pg. 126 - 127", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%203%2FModule%209%2FPartie%209.5%20-%20p.126%20-%20127.mp3?alt=media&token=0a4ca729-f395-443d-b6c1-8ac33c7d4f5f" },

        ],
      },
      {
        id: "1.10",
        title: "Module 10",
        sections: [
          { id: "10.1", title: "Partie 10.1 — Pg. 130", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%203%2FModule%2010%2FPartie%2010.1%20-%20p.130.mp3?alt=media&token=1ff90e35-1ddd-4ab3-8ebf-14678545a371" },
          { id: "10.2.1", title: "Partie 10.2 — Pg. 131", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%203%2FModule%2010%2FPartie%2010.2%20-%20p.131.mp3?alt=media&token=d13e0f32-61cc-4b68-8402-4062bdd65d2d" },
          { id: "10.2.2", title: "Partie 10.2 — Pg. 132 - 133", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%203%2FModule%2010%2FPartie%2010.2%20-%20p.132%20-%20133.mp3?alt=media&token=cff1d371-4510-486b-99b1-2c8da3951cc9" },
          { id: "10.2.3", title: "Partie 10.2 — Pg. 134", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%203%2FModule%2010%2FPartie%2010.2%20-%20p.134.mp3?alt=media&token=a94720bc-a918-4043-b1f6-83eeaef2ead0" },
          { id: "10.3.1", title: "Partie 10.3 — Pg. 136 - 137", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%203%2FModule%2010%2FPartie%2010.3%20-%20p.136%20-%20137.mp3?alt=media&token=444902a3-366a-409a-a701-c47c48dd2c56" },
          { id: "10.3.2", title: "Partie 10.3 — Pg. 138 - 139", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%203%2FModule%2010%2FPartie%2010.3%20-%20p.138%20-%20139.mp3?alt=media&token=c0bd7410-94e0-40a2-842a-539a6ab64a74" },
          { id: "10.4", title: "Partie 10.4 — Pg. 140 - 141", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%203%2FModule%2010%2FPartie%2010.4%20-%20p.140%20-%20141.mp3?alt=media&token=90ffe675-94ca-4de1-a6ec-aa24b618b35e" },
        ],
      },
      {
        id: "1.11",
        title: "Module 11",
        sections: [
          { id: "11.1", title: "Partie 11.1 — Pg. 144 - 145", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%203%2FModule%2011%2FPartie%2011.1%20-%20p.144%20-%20145.mp3?alt=media&token=1b9ef047-c0d9-4a24-b82b-8267a6586f2b" },
          { id: "11.2", title: "Partie 11.2 — Pg. 146", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%203%2FModule%2011%2FPartie%2011.2%20-%20p.146.mp3?alt=media&token=17b43421-c990-48ba-9a87-7c16a228145f" },
          { id: "11.3", title: "Partie 11.3 — Pg. 147", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%203%2FModule%2011%2F147.mp3?alt=media&token=cf42366a-5719-4025-bd05-18b376d105e9" },
          { id: "11.4", title: "Partie 11.4 — Pg. 148 - 149", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%203%2FModule%2011%2FPartie%2011.4%20-%20p.148%20-%20149.mp3?alt=media&token=f7ad9923-f250-4721-b3f9-3a6f77678e0e" },
          { id: "11.5.1", title: "Partie 11.5 — Pg. 151 - 152", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%203%2FModule%2011%2FPartie%2011.5%20-%20p.151%20-%20152.mp3?alt=media&token=89b73313-bbcf-4911-b958-92236c23c44b" },
          { id: "11.5.2", title: "Partie 11.5 — Pg. 153 - 154", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%203%2FModule%2011%2FPartie%2011.5%20-%20p.153%20-%20154.mp3?alt=media&token=ead4446b-59cf-4574-98b0-db3d73a41516" },
          { id: "11.6", title: "Partie 11.6 — Pg. 155 - 156", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%203%2FModule%2011%2FPartie%2011.6%20-%20p.155%20-%20156.mp3?alt=media&token=17766102-ee83-43e8-ad7b-180dbab1519b" },

        ],
      },
      {
        id: "1.12",
        title: "Module 12",
        sections: [
          { id: "12.1", title: "Partie 12.1 — Pg. 159 - 161", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%203%2FModule%2012%2FPartie%2012.1%20-%20p.159%20-%20161.mp3?alt=media&token=d2dee421-8fa5-4781-8bcb-725105af0e1f" },
          { id: "12.2", title: "Partie 12.2 — Pg. 162", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%203%2FModule%2012%2FPartie%2012.2%20-%20p.162.mp3?alt=media&token=3fe6795f-239f-48eb-9801-9c3a7c3812f7" },
          { id: "12.3.1", title: "Partie 12.3 — Pg. 165 - 166", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%203%2FModule%2012%2FPartie%2012.3%20-%20p.165%20-%20166.mp3?alt=media&token=bd1db3c8-489f-4122-8a12-5bd3a643b868" },
          { id: "12.3.2", title: "Partie 12.3 — Pg. 167 - 168", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%203%2FModule%2012%2FPartie%2012.3%20-%20p.167%20-%20168.mp3?alt=media&token=ce7f3421-5568-4e86-ac3a-56b7d585abfa" },
          { id: "12.4", title: "Partie 12.4 — Pg. 169", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%203%2FModule%2012%2FPartie%2012.4%20-%20p.169%20-%20170.mp3?alt=media&token=5f2989e8-0618-4e12-8862-ef5ced5571cc" },


        ],
      },      
    ],
  },
   {
    id: "chapter-4",
    title: "Chapitre 4",
    lessons: [
      {
        id: "1.13",
        title: "Module 13",
        sections: [
          { id: "13.1", title: "Partie 13.1 — Pg. 174 - 176", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%204%2FModule%2013%2FPartie%2013.1%20-%20p.174%20-%20176.mp3?alt=media&token=28912b61-2930-4fa8-a4fb-454d837002ac" },
          { id: "13.2.1", title: "Partie 13.2 — Pg. 179", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%204%2FModule%2013%2FPartie%2013.2%20-%20p.179.mp3?alt=media&token=79d7e704-9c60-4249-8fee-fb264bc0cdd4" },
          { id: "13.2.2", title: "Partie 13.2 — Pg. 180", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%204%2FModule%2013%2FPartie%2013.2%20-%20p.180.mp3?alt=media&token=1cf95536-dc66-4a47-b6a0-5037b0aab82e" },
          { id: "13.4.1", title: "Partie 13.4 — Pg. 184", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%204%2FModule%2013%2FPartie%2013.4%20-%20p.184.mp3?alt=media&token=bf22b631-1d71-4d40-88a9-bcc349761637" },
          { id: "13.4.2", title: "Partie 13.4 — Pg. 185 - 186", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%204%2FModule%2013%2FPartie%2013.4%20-%20p.185%20-%20186.mp3?alt=media&token=65839588-f972-4750-b19d-a91b7d0e2bbc" },
          { id: "13.4.3", title: "Partie 13.4 — Pg. 187 - 188", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%204%2FModule%2013%2FPartie%2013.4%20-%20p.187%20-%20188.mp3?alt=media&token=1c6d85b9-7b2e-438d-8ef5-a9a98ec2426f" },
          { id: "13.5", title: "Partie 13.5 — Pg. 189 - 190", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%204%2FModule%2013%2FPartie%2013.5%20-%20p.189%20-%20190.mp3?alt=media&token=af35bb5f-d7e2-479b-acc3-85798b7db256" },

        ],
      },
      {
        id: "1.14",
        title: "Module 14",
        sections: [
          { id: "14.1.1", title: "Partie 14.1 — Pg. 193", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%204%2FModule%2014%2FPartie%2014.1%20-%20p.193.mp3?alt=media&token=7b102d16-7e4c-4961-983e-e8e790f3d0aa" },
          { id: "14.1.2", title: "Partie 14.1 — Pg. 194 - 196", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%204%2FModule%2014%2FPartie%2014.1%20-%20p.194%20-%20196.mp3?alt=media&token=dfaa6c10-b649-4688-ba48-4a30cbded270" },
          { id: "14.2.1", title: "Partie 14.1 — Pg. 199 - 200", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%204%2FModule%2014%2FPartie%2014.2%20-%20p.199%20-%20200.mp3?alt=media&token=54dc0913-d3d5-4d55-ab22-9d47be3f119d" },
          { id: "14.2.2", title: "Partie 14.2 — Pg. 201 - 202", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%204%2FModule%2014%2FPartie%2014.2%20-%20p.201%20-202.mp3?alt=media&token=54ce12bd-17b6-4594-921b-46a3adab69e5" },
          { id: "14.3", title: "Partie 14.3 — Pg. 203 - 204", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%204%2FModule%2014%2FPartie%2014.3%20-%20p.203%20-204.mp3?alt=media&token=ff3157a4-dfc5-4a53-a384-47ce2be7deb9" },

        ],
      },
      {
        id: "1.15",
        title: "Module 15",
        sections: [
          { id: "15.1", title: "Partie 15.1 — Pg. 207", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%204%2FModule%2015%2FPartie%2015.1%20-%20p.207.mp3?alt=media&token=42cc2c5c-d363-4fbf-8ebb-f17a9b84a546" },
          { id: "15.2.1", title: "Partie 15.2 — Pg. 208", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%204%2FModule%2015%2FPartie%2015.2%20-%20p.208.mp3?alt=media&token=ea086dcd-a294-401c-9516-b5bb0f927dc2" },
          { id: "15.2.2", title: "Partie 15.2 — Pg. 209 - 210", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%204%2FModule%2015%2FPartie%2015.2%20-%20p.209%20-%20210.mp3?alt=media&token=672b54fd-ce97-4636-9fde-4761bf5a1fe5" },
          { id: "15.2.3", title: "Partie 15.2 — Pg. 211  213", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%204%2FModule%2015%2FPartie%2015.2%20-%20p.211%20-%20213.mp3?alt=media&token=cdb7a149-bd62-4860-84c9-9a6c2dbbfa4d" },
          { id: "15.3.1", title: "Partie 15.3 — Pg. 217 - 219", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%204%2FModule%2015%2FPartie%2015.3%20-%20p.217%20-%20219.mp3?alt=media&token=3816193b-eae9-4022-b5e4-690eb50f70d2" },
          { id: "15.3.2", title: "Partie 15.3 — Pg. 220 - 221", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%204%2FModule%2015%2FPartie%2015.3%20-%20p.220%20-%20221.mp3?alt=media&token=24033b8e-d1f1-4e7c-9c08-99f036dbfbae" },


        ],
      },
      {
        id: "1.16",
        title: "Module 16",
        sections: [
          { id: "16.1", title: "Partie 16.1 — Pg. 226", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%204%2FModule%2016%2FPartie%2016.1%20-%20p.226.mp3?alt=media&token=7eb3b4fe-c166-4029-823a-d21b25974476" },
          { id: "16.2", title: "Partie 16.2 — Pg. 227", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%204%2FModule%2016%2FPartie%2016.2%20-%20p.227.mp3?alt=media&token=1b06d4ca-0b06-4050-914f-0799e0d7e4a7" },
          { id: "16.3", title: "Partie 16.3 — Pg. 228", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%204%2FModule%2016%2FPartie%2016.3%20-%20p.228.mp3?alt=media&token=4095bcad-387d-412b-994f-32d7b34b4b31" },
          { id: "16.4.1", title: "Partie 16.4 — Pg. 231-232", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%204%2FModule%2016%2FPartie%2016.4%20-%20p.231%20-%20232.mp3?alt=media&token=56a700de-8dc7-4f23-a7bc-125f2f135378" },
          { id: "16.4.2", title: "Partie 16.4 — Pg. 233-234", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%204%2FModule%2016%2FPartie%2016.4%20-%20p.233%20-%20234.mp3?alt=media&token=43ce6c12-c933-448c-94a2-db9563a75e8f" },
          { id: "16.5", title: "Partie 16.5 — Pg. 235-237", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%204%2FModule%2016%2FPartie%2016.5%20-%20p.235%20-%20237.mp3?alt=media&token=daf54746-912b-448b-b478-94edcea6e95f" },
        ],
      },      
      {
        id: "1.17",
        title: "Module 17",
        sections: [
          { id: "17.1", title: "Partie 17.1 — Pg. 240 - 242", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%204%2FModule%2017%2FPartie%2017.1%20-%20p.240%20-%20242.mp3?alt=media&token=9295392f-0f9f-4460-ad34-1bb60f9acdf4" },
          { id: "17.2", title: "Partie 17.2 — Pg. 243", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%204%2FModule%2017%2FPartie%2017.2%20-%20p.243.mp3?alt=media&token=992eb08c-342d-4d1d-859e-31b4a8d88fae" },
          { id: "17.3.1", title: "Partie 17.3 — Pg. 246 - 248", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%204%2FModule%2017%2FPartie%2017.3%20-%20p.246%20-%20248.mp3?alt=media&token=de8a6a10-6352-4096-8589-c3625c401633" },
          { id: "17.3.2", title: "Partie 17.3 — Pg. 249 - 250", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%204%2FModule%2017%2FPartie%2017.3%20-%20p.249%20-%20250.mp3?alt=media&token=cdb9dad1-c166-41fe-b871-7a78cb0f0ed0" },
          { id: "17.4", title: "Partie 17.4 — Pg. 251 - 252", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%204%2FModule%2017%2FPartie%2017.4%20-%20p.251%20-%20252.mp3?alt=media&token=0a821261-46ea-422b-802e-f6337644d174" },

        ],
      },      
    ],
  },
  
  {
    id: "expressions-french",
    title: "Glossaire Des Expressions",
    sections: [
      { id: "g1", title: "Glossaire des expressions - Pg 300", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20expressions%2FGlossaire%20des%20expressions%20p.%20300.mp3?alt=media&token=5914560f-6018-41c5-a8a1-30515902f66e"},
      { id: "g2", title: "Glossaire des expressions - Pg 301", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20expressions%2FGlossaire%20des%20expressions%20p.301.mp3?alt=media&token=a3f92689-3b81-4879-b2f3-512537db0c8e"},
      { id: "g3", title: "Glossaire des expressions- Pg 302", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20expressions%2FGlossaire%20des%20expressions%20p.302.mp3?alt=media&token=b7ab3dcd-1a3f-4eeb-940e-4c76147b9b4e"},
      { id: "g4", title: "Glossaire des expressions - Pg 303", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20expressions%2FGlossaire%20des%20expressions%20p.303.mp3?alt=media&token=379d3e2b-537e-4858-888b-22cc367649a3"},
      { id: "g5", title: "Glossaire des expressions - Pg 304", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20expressions%2FGlossaire%20des%20expressions%20p.%20304.mp3?alt=media&token=bc5f7013-83a7-45af-a52b-e3f9212f44cc"},
      { id: "g6", title: "Glossaire des expressions - Pg 305", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20expressions%2FGlossaire%20des%20expressions%20p.305.mp3?alt=media&token=3ef1b5fb-79da-4d3b-b595-7e4d580fddff"},
      { id: "g7", title: "Glossaire des expressions - Pg 306", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20expressions%2FGlossaire%20des%20expressions%20p.306.mp3?alt=media&token=a32fe3fc-739c-4560-aa78-2ebd32443e4c"},
      { id: "g8", title: "Glossaire des expressions - Pg 307", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20expressions%2FGlossaire%20des%20expressions%20p.%20307.mp3?alt=media&token=e1154146-da1b-4527-af95-d151e5c5bce1"},
      { id: "g9", title: "Glossaire des expressions- Pg 308", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20expressions%2FGlossaire%20des%20expressions%20p.%20308.mp3?alt=media&token=da4c4970-bd7d-4aa2-ad5f-ce4d2368a667"},
      { id: "g10", title: "Glossaire des expressions - Pg 309", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20expressions%2FGlossaire%20des%20expressions%20p.309.mp3?alt=media&token=f3cc42b8-ec8a-46a5-8faf-f65ddfdb09bf"},
      { id: "g11", title: "Glossaire des expressions - Pg 310", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20expressions%2FGlossaire%20des%20expressions%20p.%20310.mp3?alt=media&token=07b487fa-a2e4-406d-88a8-0353ea62776f"}

    ],
  },
  {
    id: "verbs-french",
    title: "Glossaire Des Verbes",
    sections: [
      { id: "v1", title: "Glossaire des verbes - Pg 311", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20verbes%2FGlossaire%20des%20verbes%20p.311.mp3?alt=media&token=7680232f-4b68-4e0e-88cd-f9be537a331d"},
      { id: "v2", title: "Glossaire des verbes - Pg 312", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20verbes%2FGlossaire%20des%20verbes%20p.%20312.mp3?alt=media&token=7dbf5936-a8d2-4a10-9415-fa6dac6f2497"},
      { id: "v3", title: "Glossaire des verbes - Pg 313", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20verbes%2FGlossaire%20des%20verbes%20p.%20313.mp3?alt=media&token=b7cc2577-744a-456c-99e0-bd60bc7560bd"},
      { id: "v4", title: "Glossaire des verbes - Pg 314", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20verbes%2FGlossaire%20des%20verbes%20p.314.mp3?alt=media&token=76dd97ff-e914-4f04-ae12-83faeaf9977f"},
      { id: "v5", title: "Glossaire des verbes - Pg 315", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20verbes%2FGlossaire%20des%20verbes%20.315.mp3?alt=media&token=7b42e010-a891-49a3-bdf4-210eb73d597d"},
      { id: "v6", title: "Glossaire des verbes - Pg 316", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20verbes%2FGlossaire%20des%20verbes%20p.%20316.mp3?alt=media&token=2d12ae89-748d-41d9-b1cf-08f8962ba6d7"},
    ],
  },
  {
    id: "words-french",
    title: "Glossaire des mots",
    sections: [
      { id: "w1", title: "Glossaire des mots - Pg 266", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20de%20mot%20p.266.mp3?alt=media&token=e9c205cb-151b-4cc8-a54d-0a5edcd5c262"},
      { id: "w2", title: "Glossaire des mots - Pg 267", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20de%20mot%20p.267.mp3?alt=media&token=18d1edb1-a97d-4af3-8d7c-ca9657d93fba"},
      { id: "w3", title: "Glossaire des mots - Pg 268", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20de%20mot%20p.268.mp3?alt=media&token=876900c3-0c7b-4104-b16b-4112620962d1"},
      { id: "w4", title: "Glossaire des mots - Pg 269", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20de%20mot%20p.269.mp3?alt=media&token=c24749e9-6d9d-4d87-844f-7c4c873220ec"},
      { id: "w5", title: "Glossaire des mots - Pg 270", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20de%20mot%20p.%20270.mp3?alt=media&token=a47f41aa-a884-452c-ac0c-aae2fee12804"},
      { id: "w6", title: "Glossaire des mots - Pg 271", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20de%20mot%20p.271.mp3?alt=media&token=f345e1cb-4b88-44f7-8c11-749beaaf7b1a"},
      { id: "w7", title: "Glossaire des mots - Pg 272", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20de%20mot%20p.272.mp3?alt=media&token=51eccc4c-6dc2-4017-b237-d6b58a1b37bb"},
      { id: "w8", title: "Glossaire des mots - Pg 273", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20de%20mot%20p.273.mp3?alt=media&token=f6ff0ca1-9185-4eda-91a7-4aae14aa3676"},
      { id: "w9", title: "Glossaire des mots- Pg 274", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20de%20mot%20.p274.mp3?alt=media&token=9320db1c-e817-47d4-8d89-c1731e35f72f"},
      { id: "w10", title: "Glossaire des mots - Pg 275", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20de%20mot%20.p275.mp3?alt=media&token=d5b82ece-46fe-4bd9-8f57-6c2a4b578a0e"},
      { id: "w11", title: "Glossaire des mots - Pg 276", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20de%20mot%20p.276.mp3?alt=media&token=6b72a700-d10a-4fc0-972b-f8a3d765a01e"},
      { id: "w12", title: "Glossaire des mots - Pg 277", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20de%20mot%20p.%20277.mp3?alt=media&token=6a8fc290-3a79-403f-9237-031d401f3897"},
      { id: "w13", title: "Glossaire des mots - Pg 278", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20de%20mot%20p.278.mp3?alt=media&token=0f8a3438-a851-4a7d-8c6b-1fa160912869"},
      { id: "w14", title: "Glossaire des mots - Pg 279", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20de%20mot%20.p279.mp3?alt=media&token=0491da2a-32e6-4314-89b7-4b9570f2ef43"},
      { id: "w15", title: "Glossaire des mots - Pg 280", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20de%20mot%20p.%20280.mp3?alt=media&token=1d2d8084-9086-46fd-ba7f-7f199208706b"},
      { id: "w16", title: "Glossaire des mots - Pg 281", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20de%20mot%20p.281.mp3?alt=media&token=f9230dd4-d5d9-4539-8d8f-e0764a7dd88b"},
      { id: "w17", title: "Glossaire des mots - Pg 282", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20de%20mot%20p.282.mp3?alt=media&token=caf1ad22-7b93-4cf0-9010-e12732579a18"},
      { id: "w18", title: "Glossaire des mots - Pg 283", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20de%20mot%20p.%20283.mp3?alt=media&token=c8b9eee8-bf25-4beb-a9a3-aa4e41881a99"},
      { id: "w19", title: "Glossaire des mots - Pg 284", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20de%20mot%20p.284.mp3?alt=media&token=83439f3f-8ccb-4fc3-8c0c-df37ac0cd6c3"},
      { id: "w20", title: "Glossaire des mots - Pg 285", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20de%20mot%20p.%20285.mp3?alt=media&token=e5f90391-76c4-4bfa-b33b-15eaa593be7b"},
      { id: "w21", title: "Glossaire des mots - Pg 286", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20de%20mot%20p.%20286.mp3?alt=media&token=cdbaf56e-984c-4179-b2b3-aefd7705bbbd"},
      { id: "w22", title: "Glossaire des mots - Pg 287", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20de%20mot%20p.287.mp3?alt=media&token=16dbe528-e8dc-40c6-86c7-df3c5722c493"},
      { id: "w23", title: "Glossaire des mots - Pg 288", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20de%20mot%20p.288.mp3?alt=media&token=99e392cb-b524-4549-b397-59683b1c4718"},
      { id: "w24", title: "Glossaire des mots- Pg 289", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20de%20mot%20p.%20289.mp3?alt=media&token=622b3184-e34c-48b3-8e3e-869d1a889e91"},
      { id: "w25", title: "Glossaire des mots - Pg 290", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20de%20mot%20p.%20290.mp3?alt=media&token=dae1cfd6-49c6-4a99-b976-68f2b1b52777"},
      { id: "w26", title: "Glossaire des mots - Pg 291", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20de%20mot%20p.291.mp3?alt=media&token=6bd13be6-02b8-4c79-9bed-877153ccc82f"},
      { id: "w27", title: "Glossaire des mots - Pg 292", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20de%20mot%20p.%20292.mp3?alt=media&token=435cc829-3cce-4e41-b482-f22a2e938188"},
      { id: "w28", title: "Glossaire des mots - Pg 293", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20de%20mot%20p.%20293.mp3?alt=media&token=18b485bb-a6c6-47fc-b716-acbe4a1ceb30"},
      { id: "w29", title: "Glossaire des mots - Pg 294", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20des%20mots%20p.%20294.mp3?alt=media&token=ae543adc-aa0f-4f97-a374-40e8aea73583"},
      { id: "w30", title: "Glossaire des mots - Pg 295", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20des%20mots%20p.295.mp3?alt=media&token=61927777-dfa2-4287-965a-0bd4490b05a9"},
      { id: "w31", title: "Glossaire des mots- Pg 296", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20des%20mots%20p.296.mp3?alt=media&token=807c99b7-43c8-4277-95a8-a52dac5d19cf"},
      { id: "w32", title: "Glossaire des mots - Pg 297", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20des%20mots%20p.297.mp3?alt=media&token=7c59812e-9dad-4036-9c14-08a087bb1027"},
      { id: "w33", title: "Glossaire des mots - Pg 298", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20des%20mots%20p.298.mp3?alt=media&token=2e354ca9-d504-4cc6-a48d-549676495a50"},
      { id: "w34", title: "Glossaire des mots - Pg 299", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FGlossaire%20des%20mots%2FGlossaire%20des%20mots%20p.%20299.mp3?alt=media&token=b759eb74-1f9d-409b-b2e0-5a1481410fea"},

    ],
  },
    ],
  },
  {
   
    bookId: "ammiyeh-spanish",
    youtubeUrl: "https://www.youtube.com/@LAGUIACOMPLETADEARABELEV-rp8cv/playlists",
    oneDriveUrl: "https://onedrive.live.com/?id=%2Fpersonal%2F1bd9cb9d551010be%2FDocuments%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO&listurl=%2Fpersonal%2F1bd9cb9d551010be%2FDocuments&ithint=folder&e=MHcoQL&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy8xYmQ5Y2I5ZDU1MTAxMGJlL0lnQy1FQkJWbmN2WklJQWJfUkFCQUFBQUFiZWxoU2xPZVFtZWZDVlVvM1d6eWo0P2U9TUhjb1FM&ga=1",
    chapters: [
            {
    id: "chapter-1",
    title: "Capítulo 1",
    lessons: [
      {
        id: "1.1",
        title: "Lección 1",
        sections: [
          { id: "1.1", title: "Lección 1 Sección 1.1 — Pg. 4-7", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%201%2FLecci%C3%B3n%201%2FLecci%C3%B3n%201%20Secci%C3%B3n%201.1%20p3-7.mp3?alt=media&token=94735258-5084-4ca5-8cbc-eaab4f8a12e8" },
          { id: "1.2", title: "Lección 1 Sección 1.2 — Pg. 8", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%201%2FLecci%C3%B3n%201%2FLecci%C3%B3n%201%20secci%C3%B3n%201.2%20p8.mp3?alt=media&token=effae94e-ff16-4d9f-9444-4b764e03fc47" },
          { id: "1.3.1", title: "Lección 1 Sección 1.3 — Pg. 12", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%201%2FLecci%C3%B3n%201%2FLecci%C3%B3n%201%20secci%C3%B3n%201.3%20p12.mp3?alt=media&token=acbd6140-f130-49f3-b60f-f11f7537f02d" },
          { id: "1.3.2", title: "Lección 1 Sección 1.3 — Pg. 13" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%201%2FLecci%C3%B3n%201%2FLecci%C3%B3n%201%20secci%C3%B3n%201.3%20p13.mp3?alt=media&token=731a8177-ed82-407c-8b3e-511b834db70a"},
          { id: "1.4", title: "Lección 1 Sección 1.4 — Pg. 14" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%201%2FLecci%C3%B3n%201%2FLecci%C3%B3n%201%20secci%C3%B3n%201.4%20p14.mp3?alt=media&token=0714a7bd-0391-4dbe-b8df-a13b2b142eb5"},
          
        ],
      },
      {
        id: "1.2",
        title: "Lección 2",
        sections: [
          { id: "2.1.1", title: "Lección 2 Sección 2.1 — Pg. 17", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%201%2FLecci%C3%B3n%202%2FLecci%C3%B3n%202%20secci%C3%B3n%202.1%20p17.mp3?alt=media&token=37d8c612-7230-4bbc-bcc8-866690e64e66" },
          { id: "2.1.2", title: "Lección 2 Sección 2.1 — Pg. 18", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%201%2FLecci%C3%B3n%202%2FLecci%C3%B3n%202%20secci%C3%B3n%202.1%20p18.mp3?alt=media&token=963653e1-b4c1-425b-9f0f-949d5384dce7" },
          { id: "2.1.3", title: "Lección 2 Sección 2.1 — Pg. 19", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%201%2FLecci%C3%B3n%202%2FLecci%C3%B3n%202%20secci%C3%B3n%202.1%20p19.mp3?alt=media&token=75358600-b236-4751-8abb-123c629737ab" },
          { id: "2.2.1", title: "Lección 2 Sección 2.2 — Pg. 20", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%201%2FLecci%C3%B3n%202%2FLecci%C3%B3n%202%20secci%C3%B3n%202.2%20p20.mp3?alt=media&token=d59c0d92-e73f-4eb8-9355-f506ccca32cd" },
          { id: "2.2.2", title: "Lección 2 Sección 2.2 — Pg. 21", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%201%2FLecci%C3%B3n%202%2FLecci%C3%B3n%202%20secci%C3%B3n%202.2%20p21.mp3?alt=media&token=ed4e932a-345d-448c-9120-bb880d140b00" },
          { id: "2.2.3", title: "Lección 2 Sección 2.2 — Pg. 22-25", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%201%2FLecci%C3%B3n%202%2FLecci%C3%B3n%202%20secci%C3%B3n%202.2%20p22-25.mp3?alt=media&token=4adc1e3f-140c-4088-93bf-0659db495e20" },
          { id: "2.4.1", title: "Lección 2 Sección 2.4 — Pg. 26" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%201%2FLecci%C3%B3n%202%2FLecci%C3%B3n%202%20secci%C3%B3n%202.4%20p26.mp3?alt=media&token=ea8e4e3f-bea6-4842-885e-e3837b0824ac"},
          { id: "2.4.2", title: "Lección 2 Sección 2.4-  Pg 27" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%201%2FLecci%C3%B3n%202%2FLecci%C3%B3n%202%20secci%C3%B3n%202.4%20p27.mp3?alt=media&token=2a8c5edd-11c3-4d14-a4f5-d6133d926136"},
       
        ],
      },
      {
        id: "1.3",
        title: "Lección 3",
        sections: [
          { id: "3.2", title: "Lección 3 Sección 3.2 — Pg. 32", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%201%2FLecci%C3%B3n%203%2FLesson%203%20section%203.2%20p%2032.mp3?alt=media&token=6cbcb819-ec66-499f-ba9f-476704db8274" },
          { id: "3.3", title: "Lección 3 Sección 3.3 — Pg. 33", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%201%2FLecci%C3%B3n%203%2FLecci%C3%B3n%203%20secci%C3%B3n%203.3%20p33.mp3?alt=media&token=533dfae3-38e2-4224-803e-f291e557e39a" },
          { id: "3.5", title: "Lección 3 Sección 3.5 — Pg. 36", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%201%2FLecci%C3%B3n%203%2FLecci%C3%B3n%203%20%20secci%C3%B3n%203.5%20p36%20mixdown.mp3?alt=media&token=d6414fec-c8b1-4fe7-b11a-bf6ca4f99986" },
        ],
      },
      {
        id: "1.4",
        title: "Lección 4",
        sections: [
          { id: "4.1", title: "Lección 4 Sección 4.1 — Pg. 39", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%201%2FLecci%C3%B3n%204%2FLecci%C3%B3n%204%20secci%C3%B3n%204.1%20p39.mp3?alt=media&token=5dc6e296-d4f7-4adc-8103-66b620b01327"},
          { id: "4.2.1", title: "Lección 4 Sección 4.2 — Pg. 40", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%201%2FLecci%C3%B3n%204%2FLecci%C3%B3n%204%20secci%C3%B3n%204.2%20p40.mp3?alt=media&token=cde78e4e-e1c0-4ac3-97ad-ce3f918ac23b"},
          { id: "4.2.2", title: "Lección 4 Sección 4.2 — Pg. 42", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%201%2FLecci%C3%B3n%204%2FLecci%C3%B3n%204%20secci%C3%B3ns%204.3%20p42.mp3?alt=media&token=3b9b6180-d975-432a-bab5-35f40729f948"},

        ],
      },      
    ],
  },
  {
    id: "chapter-2",
    title: "Capítulo 2",
    lessons: [
      {
        id: "1.5",
        title: "Lección 5",
        sections: [
          { id: "5.1.1", title: "Lección 5 Sección 5.1 — Pg. 46", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%205%2FLecci%C3%B3n%205%20secci%C3%B3n%205.1%20p%2046.mp3?alt=media&token=90e595e5-418d-4b11-a3e5-4f5327f090e2" },
          { id: "5.1.2", title: "Lección 5 Sección 5.1 — Pg. 47", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%205%2FLecci%C3%B3n%205%20secci%C3%B3n%205.1%20p47.mp3?alt=media&token=2ab31562-b650-4b59-99a9-d60bc767b059" },
          { id: "5.1.3", title: "Lección 5 Sección 5.1 — Pg. 48", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%205%2FLecci%C3%B3n%205%20secci%C3%B3n%205.1%20p48.mp3?alt=media&token=0f886010-ca25-44c2-b126-b00d8e096fe0" },
          { id: "5.2.1", title: "Lección 5 Sección 5.2 — Pg. 50", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%205%2FLecci%C3%B3n%205%20secci%C3%B3n%205.2%20p50.mp3?alt=media&token=2b244e14-4ad5-4b8c-b6d0-bde66d350719" },
          { id: "5.2.2", title: "Lección 5 Sección 5.2 — Pg. 51", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%205%2FLecci%C3%B3n%205%20secci%C3%B3n%205.2%20p51.mp3?alt=media&token=21408fb8-ce52-42e5-81cd-195e9a0904b3" },

          { id: "5.3", title: "Lección 5 Sección 5.3 — Pg. 52", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%205%2FLecci%C3%B3n%205%20secci%C3%B3n%205.3%20p52.mp3?alt=media&token=362e8444-8050-49e1-8dae-2a3815f4087a" },
          { id: "5.4.1", title: "Lección 5 Sección 5.4 — Pg. 57 - 58", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%205%2FLecci%C3%B3n%205%20secci%C3%B3n%205.4%20%20p57-58.mp3?alt=media&token=6d29109d-f8a6-4f23-93b3-81dda2112ff6" },
          { id: "5.4.2", title: "Lección 5 Sección 5.4 — Pg. 60", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%205%2FLecci%C3%B3n%205%20secci%C3%B3n%205.4%20p60.mp3?alt=media&token=b83029ec-4600-4df7-a9ca-ad3f7362a4e9" },
          { id: "5.5.1", title: "Lección 5 Sección 5.5 — Pg. 61", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%205%2FLecci%C3%B3n%205%20secci%C3%B3n%205.5%20p%2061.mp3?alt=media&token=6652de0f-c9e1-499e-b745-df78ed779ae9" },
          { id: "5.5.2", title: "Lección 5 Sección 5.5 — Pg. 62", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%205%2FLecci%C3%B3n%205%20secci%C3%B3n%205.5%20p62.mp3?alt=media&token=84977592-1520-4166-a543-38b1611aba05" },

        ],
      },
      {
        id: "1.6",
        title: "Lección 6",
        sections: [
          { id: "6.1", title: "Lección 6 Sección 6.1 — Pg. 65 - 66", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%206%2FLecci%C3%B3n%206%20secci%C3%B3n%206.1%20p65-66.mp3?alt=media&token=22dad3a7-2365-4e47-ae0f-42fc139e578c" },
          { id: "6.2.1", title: "Lección 6 Sección 6.2 — Pg. 67", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%206%2FLecci%C3%B3n%206%20secci%C3%B3n%206.2%20p67.mp3?alt=media&token=ec160264-8a49-4465-8be7-28ced07f1229" },
          { id: "6.2.2", title: "Lección 6 Sección 6.2 — Pg. 68", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%206%2FLecci%C3%B3n%206%20secci%C3%B3n%206.2%20p68.mp3?alt=media&token=b93318e0-88d4-40c3-a27f-cb8dca1ddff1" },
          { id: "6.2.3", title: "Lección 6 Sección 6.2 — Pg. 69 - 70", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%206%2FLecci%C3%B3n%206%20secci%C3%B3n%206.2%20p69-70.mp3?alt=media&token=7fd81411-41de-4f2b-a9de-76d1efd655a9" },
          { id: "6.2.4", title: "Lección 6 Sección 6.2 — Pg. 71", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%206%2FLecci%C3%B3n%206%20secci%C3%B3n%206.2%20p71.mp3?alt=media&token=54ba8d33-f9a8-49d5-9a77-37d769b1d5a0" },
          { id: "6.2.5", title: "Lección 6 Sección 6.2 — Pg. 72", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%206%2FLecci%C3%B3n%206%20secci%C3%B3n%206.2%20p72.mp3?alt=media&token=8e43db44-0958-4988-a9db-f9964c4d74d2" },
          { id: "6.2.6", title: "Lección 6 Sección 6.2 — Pg. 73" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%206%2FLecci%C3%B3n%206%20secci%C3%B3n%206.2%20p73.mp3?alt=media&token=cd2386b1-00d3-47cd-a167-bdb1f0b0fdf3"},
          { id: "6.2.7", title: "Lección 6 Sección 6.2 — Pg. 74" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%206%2FLecci%C3%B3n%206%20secci%C3%B3n%206.2%20p74.mp3?alt=media&token=faa93c3c-83a2-46a8-b891-1d895dc15901"},
          { id: "6.3", title: "Lección 6 Sección 6.3 — Pg. 75 - 76" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%206%2FLecci%C3%B3n%206%20secci%C3%B3n%206.3%20p75-76.mp3?alt=media&token=64e8dcac-21d0-412b-9a12-d4815d5b9d13"},
          { id: "6.4", title: "Lección 6 Sección 6.4 — Pg. 77" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%206%2FLecci%C3%B3n%206%20secci%C3%B3n%206.4%20p77.mp3?alt=media&token=1ba019ee-1a05-43b9-b824-58244ae8714b"},
          { id: "6.5.1", title: "Lección 6 Sección 6.5 — Pg. 80 - 81" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%206%2FLecci%C3%B3n%206%20secci%C3%B3n%206.5%20p80-81.mp3?alt=media&token=24346a64-4ad7-4c2f-a0c3-09f11cda5b53"},
          { id: "6.5.2", title: "Lección 6 Sección 6.5 — Pg. 82 - 83" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%206%2FLecci%C3%B3n%206%20secci%C3%B3n%206.5%20p82-83.mp3?alt=media&token=e93f3b43-4ab2-4a21-bc91-056b6c662b04"},
          { id: "6.6.1", title: "Lección 6 Sección 6.6 — Pg. 84" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%206%2FLecci%C3%B3n%206%20secci%C3%B3n%206.6%20p84.mp3?alt=media&token=92806c3a-cdda-49b0-930e-692b9d5d3f58"},
          { id: "6.6.2", title: "Lección 6 Sección 6.6 — Pg. 85" , audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%206%2FLecci%C3%B3n%206%20section%206.6%20p85.mp3?alt=media&token=7ad7ced7-d52a-4677-9442-7d89e31882e4"},
          
        ],
      },
      {
        id: "1.7",
        title: "Lección 7",
        sections: [
          { id: "7.1", title: "Lección 7 Sección 7.1 — Pg. 88-90", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%207%2FLecci%C3%B3n%207%20secci%C3%B3n7.1%20p88-90.mp3?alt=media&token=c5c24c0c-1a44-474c-8cbf-b66b5975d2e9https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FMANUEL%20COMPLET%20D'ARABE%20LEVANTIN%2FChapitre%202%2FModule%207%2FPartie%207.1%20-%20p.88%20-%2090.mp3?alt=media&token=51e1e344-7b2c-4fa1-ac9c-68c82a1ee4b3" },
          { id: "7.2.1", title: "Lección 7 Sección 7.2 — Pg. 90", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%207%2FLecci%C3%B3n%207%20secci%C3%B3n7.2%20p90.mp3?alt=media&token=9dd709c8-2551-4b6f-bac8-39af7f701f6a" },
          { id: "7.2.2", title: "Lección 7 Sección 7.2 — Pg. 91", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%207%2FLecci%C3%B3n%207%20secci%C3%B3n7.2%20p91.mp3?alt=media&token=01107ec6-1ba4-4e73-8693-bd4f753d62d0" },
          { id: "7.2.3", title: "Lección 7 Sección 7.2 — Pg. 93-94", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%207%2FLecci%C3%B3n%207%20secci%C3%B3n7.2%20p93-94.mp3?alt=media&token=adabfa52-ee77-4385-98cc-a329e50b18c9" },
          { id: "7.3", title: "Lección 7 Sección 7.3 — Pg. 95-96", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%207%2FLecci%C3%B3n%207%20secci%C3%B3n7.3%20p95-96.mp3?alt=media&token=00cead2a-c765-462a-a901-87fdb5ad59d8" },
          { id: "7.4", title: "Lección 7  Sección 7.4 — Pg. 97", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%207%2FLecci%C3%B3n%207%20secci%C3%B3n7.4%20p97.mp3?alt=media&token=5d716ac6-118b-444d-95f4-61e3d799f739" },
        ],
      },
      {
        id: "1.8",
        title: "Lección 8",
        sections: [
          { id: "8.1", title: "Lección 8 Sección 8.1 — Pg. 100", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%208%2FLecci%C3%B3n%208%20secci%C3%B3n8.1%20p100.mp3?alt=media&token=0a966dc3-4132-485f-b912-6ec355d4b24e" },
          { id: "8.2", title: "Lección 8 Sección 8.2 — Pg. 101", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%208%2FLecci%C3%B3n%208%20secci%C3%B3n8.2%20p101.mp3?alt=media&token=bd8109bf-10b6-431b-a90a-755c42f78266" },
          { id: "8.3", title: "Lección 8 Sección 8.3 — Pg. 102", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%208%2FLecci%C3%B3n%208%20secci%C3%B3n8.3%20p102.mp3?alt=media&token=ae4d6247-2e58-43ac-9630-da9bad29286e" },
          { id: "8.4", title: "Lección 8 Sección 8.4 — Pg. 103", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%208%2FLecci%C3%B3n%208%20seccion8.4%20p103.mp3?alt=media&token=50075583-23e0-4a09-8d99-0dce38481900" },
          { id: "8.5.1", title: "Lección 8 Sección 8.5 — Pg. 104-105", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%208%2FLecci%C3%B3n%208%20secci%C3%B3n8.5%20p104-105.mp3?alt=media&token=1aba1343-8afe-4840-ae43-28f3e21984c5" },
          { id: "8.5.2", title: "Lección 8 Sección 8.5 — Pg. 106-107", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%202%2FLecci%C3%B3n%208%2FLecci%C3%B3n%208%20secci%C3%B3n8.5%20p106-107.mp3?alt=media&token=96fef63a-70ca-4259-a0a7-ff561a875ece" },
        ],
      },      
    ],
  },
    {
    id: "chapter-3",
    title: "Capítulo 3",
    lessons: [
      {
        id: "1.9",
        title: "Lección 9",
        sections: [
          { id: "9.1", title: "Lección 9 Sección 9.1 — Pg. 111 - 113", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%203%2FLecci%C3%B3n%209%2FLecci%C3%B3n%209%20secci%C3%B3n9.1%20p111-113.mp3?alt=media&token=eef5b95f-b19b-4182-b02b-863505bd119e" },
          { id: "9.2.1", title: "Lección 9 Sección 9.2 — Pg. 114 - 115", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%203%2FLecci%C3%B3n%209%2FLecci%C3%B3n%209%20secci%C3%B3n9.2%20p114-115.mp3?alt=media&token=548cbdff-2f9b-4a4f-8a03-e6b91f43059b" },
          { id: "9.2.2", title: "Lección 9 Sección 9.2 — Pg. 116", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%203%2FLecci%C3%B3n%209%2FLecci%C3%B3n%209%20secci%C3%B3n9.2%20p116.mp3?alt=media&token=9f025889-28b5-4b70-8108-0a32fcdaa0e6" },
          { id: "9.2.3", title: "Lección 9 Sección 9.2 — Pg. 117", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%203%2FLecci%C3%B3n%209%2FLecci%C3%B3n%209%20secci%C3%B3n9.2%20p117.mp3?alt=media&token=20a3588f-6ad9-4d37-b253-5c2bd435da68" },
          { id: "9.3", title: "Lección 9 Sección 9.3 — Pg. 118", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%203%2FLecci%C3%B3n%209%2FLecci%C3%B3n%209%20secci%C3%B3n9.3%20p118.mp3?alt=media&token=d85d4af1-31f0-4354-aef7-335713bf9c58" },
          { id: "9.4.1", title: "Lección 9 Sección 9.4 — Pg. 121 - 123", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%203%2FLecci%C3%B3n%209%2FLecci%C3%B3n%209%20secci%C3%B3n9.4%20p121-123.mp3?alt=media&token=40ec7188-3ecf-4268-865a-226126ce9548" },
          { id: "9.4.2", title: "Lección 9 Sección 9.4 — Pg. 124 - 125", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%203%2FLecci%C3%B3n%209%2FLecci%C3%B3n%209%20secci%C3%B3n9.4%20p124-125.mp3?alt=media&token=8693e06e-2fb8-4da6-9cad-6b357f6bdaf0" },
          { id: "9.5", title: "Lección 9 Sección 9.5 — Pg. 126 - 127", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%203%2FLecci%C3%B3n%209%2FLecci%C3%B3n%209%20secci%C3%B3n9.5%20p126-127%20copy.mp3?alt=media&token=e043b525-3897-4f6b-805c-f3b016f3e5f8" },
        ],
      },
      {
        id: "1.10",
        title: "Lección 10",
        sections: [
          { id: "10.1", title: "Lección 10 Sección 10.1 — Pg. 130", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%203%2FLecci%C3%B3n%2010%2FLecci%C3%B3n%2010%20secci%C3%B3n10.1%20p130.mp3?alt=media&token=cbd69a83-2c47-4a46-a941-5d309e479410" },
          { id: "10.2.1", title: "Lección 10 Sección 10.2 — Pg. 131", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%203%2FLecci%C3%B3n%2010%2FLecci%C3%B3n%2010%20secci%C3%B3n10.2%20p131.mp3?alt=media&token=872fecd0-f2e0-4d08-9225-1bce0098ff15" },
          { id: "10.2.2", title: "Lección 10 Sección 10.2 — Pg. 132 - 133", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%203%2FLecci%C3%B3n%2010%2FLecci%C3%B3n%2010%20secci%C3%B3n10.2%20p132-133.mp3?alt=media&token=b673c4df-30f9-4180-b060-8d1ccc2802f2" },
          { id: "10.2.3", title: "Lección 10 Sección 10.2 — Pg. 133 - 134", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%203%2FLecci%C3%B3n%2010%2FLecci%C3%B3n%2010%20secci%C3%B3n10.2%20p133-134.mp3?alt=media&token=d7f385f7-dd19-40a6-b130-40b2d9f2bbce" },
          { id: "10.3", title: "Lección 10 Sección 10.3 — Pg. 136 - 137", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%203%2FLecci%C3%B3n%2010%2FLecci%C3%B3n%2010%20secci%C3%B3n10.3%20p136-137.mp3?alt=media&token=94a43957-e921-4dd4-8b5b-f4ddb325b3b5" },
          { id: "10.4.1", title: "Lección 10 Sección 10.4 — Pg. 138 - 139", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%203%2FLecci%C3%B3n%2010%2FLecci%C3%B3n%2010%20secci%C3%B3n10.4%20p138-139.mp3?alt=media&token=da8c7e98-7137-4743-931b-ffa8dd9476d7" },
          { id: "10.4.2", title: "Lección 10 Sección 10.4 — Pg. 140 - 141", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%203%2FLecci%C3%B3n%2010%2FLecci%C3%B3n%2011%20secci%C3%B3n%2010.4%20p%20140-141.mp3?alt=media&token=9fc52725-016f-47e3-be5d-88f27c2ae3c8" },
        ],
      },
      {
        id: "1.11",
        title: "Lección 11",
        sections: [
          { id: "11.1", title: "Lección 11 Sección 11.1 — Pg. 144 - 145", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%203%2FLecci%C3%B3n%2011%2FLecci%C3%B3n%2011%20secci%C3%B3n11.1%20p144-145.mp3?alt=media&token=dfa9365d-bcf0-4893-8904-4f360eb88772" },
          { id: "11.2", title: "Lección 11 Sección 11.2 — Pg. 146", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%203%2FLecci%C3%B3n%2011%2FLecci%C3%B3n%2011%20secci%C3%B3n11.2%20p146.mp3?alt=media&token=df2325af-1e02-4d91-a487-3ef63b2b514f" },
          { id: "11.3", title: "Lección 11 Sección 11.3 — Pg. 147", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%203%2FLecci%C3%B3n%2011%2FLecci%C3%B3n%2011%20secci%C3%B3n11.3%20p147.mp3?alt=media&token=93836dad-18e4-43c0-88ba-64b44dfa59d5" },
          { id: "11.4", title: "Lección 11 Sección 11.4 — Pg. 148 - 149", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%203%2FLecci%C3%B3n%2011%2FLecci%C3%B3n%2011%20secci%C3%B3n11.4%20p148-149.mp3?alt=media&token=8892a1d3-8c9c-432d-85f0-056518c80bb0" },
          { id: "11.5.1", title: "Lección 11 Sección 11.5 — Pg. 151 - 152", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%203%2FLecci%C3%B3n%2011%2FLecci%C3%B3n%2011%20secci%C3%B3n11.5%20p151-152.mp3?alt=media&token=52d89495-ca87-44d9-b927-fee505a6083e" },
          { id: "11.5.2", title: "Lección 11 Sección 11.5 — Pg. 153 - 154", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%203%2FLecci%C3%B3n%2011%2FLecci%C3%B3n%2011%20secci%C3%B3n11.5%20p153-154.mp3?alt=media&token=827c180e-eed9-4b0c-a098-cb675058e714" },
          { id: "11.6", title: "Lección 11 Sección 11.6 — Pg. 155 - 156", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%203%2FLecci%C3%B3n%2011%2FLecci%C3%B3n%2011%20secci%C3%B3n11.6%20p155-156.mp3?alt=media&token=dfb88cad-633c-49b4-9ec3-0b7cfcd1f36a" },

        ],
      },
      {
        id: "1.12",
        title: "Lección 12",
        sections: [
          { id: "12.1.1", title: "Lección 12 Sección 12.1 — Pg. 159", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%203%2FLecci%C3%B3n%2012%2FLecci%C3%B3n%2012%20secci%C3%B3n12.1%20p159.mp3?alt=media&token=2fcdfdbd-3627-4335-ba5c-ae0420799698" },
          { id: "12.1.2", title: "Lección 12 Sección 12.1 — Pg. 160 - 161", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%203%2FLecci%C3%B3n%2012%2FLecci%C3%B3n%2012%20secci%C3%B3n12.1%20p160-161.mp3?alt=media&token=3404a0d5-7ec2-4df1-b119-b02c6ff6730e" },
          { id: "12.1.3", title: "Lección 12 Sección 12.1 — Pg. 161", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%203%2FLecci%C3%B3n%2012%2FLecci%C3%B3n%2012%20secci%C3%B3n12.1%20p161.mp3?alt=media&token=7980e3ea-a2bd-4cb6-a861-d29336a1af48" },
          { id: "12.2", title: "Lección 12 Sección 12.2 — Pg. 162", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%203%2FLecci%C3%B3n%2012%2FLecci%C3%B3n%2012%20secci%C3%B3n12.2%20p162.mp3?alt=media&token=d198bcb6-52dd-498c-b257-d36e1ef73e06" },
          { id: "12.3.1", title: "Lección 12 Sección 12.3 — Pg. 165 - 166", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%203%2FLecci%C3%B3n%2012%2FLecci%C3%B3n%2012%20secci%C3%B3n12.3%20p165-166.mp3?alt=media&token=5796a1ec-8f7c-480e-b10b-af1768a95bd6" },
          { id: "12.3.2", title: "Lección 12 Sección 12.3 — Pg. 167 - 168", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%203%2FLecci%C3%B3n%2012%2FLecci%C3%B3n%2012%20secci%C3%B3n12.3%20p167-168.mp3?alt=media&token=1703f27e-9e9c-4fbc-aa6d-2975195f1010" },
          { id: "12.4", title: "Lección 12 Sección 12.4 — Pg. 169 - 170", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%203%2FLecci%C3%B3n%2012%2FLecci%C3%B3n%2012%20secci%C3%B3n12.4%20p169-170.mp3?alt=media&token=b270154f-738b-43e9-809d-c15c5291fa9d" },

        ],
      },      
    ],
  },
   {
    id: "chapter-4",
    title: "Capítulo 4",
    lessons: [
      {
        id: "1.13",
        title: "Lección 13",
        sections: [
          { id: "13.1", title: "Lección 13 Sección 13.1 — Pg. 174 - 176", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%204%2FLecci%C3%B3n%2013%2FLecci%C3%B3n%2013%20secci%C3%B3n13.1%20p174-176.mp3?alt=media&token=7093b868-18cf-459c-8ad6-4baf31d0594c" },
          { id: "13.2", title: "Lección 13 Sección 13.2 — Pg. 179 - 180", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%204%2FLecci%C3%B3n%2013%2FLecci%C3%B3n%2013%20secci%C3%B3n13.2%20p179-180.mp3?alt=media&token=60e05116-529b-4498-aaee-46abbacba950" },
          { id: "13.3.1", title: "Lección 13 Sección 13.3 — Pg. 181 - 182", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%204%2FLecci%C3%B3n%2013%2FLecci%C3%B3n%2013%20secci%C3%B3n13.3%20p181-182.mp3?alt=media&token=77dfdc52-b877-4630-85c8-0386707cef23" },
          { id: "13.3.2", title: "Lección 13 Sección 13.3 — Pg. 184", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%204%2FLecci%C3%B3n%2013%2FLecci%C3%B3n%2013%20secci%C3%B3n13.3%20p184.mp3?alt=media&token=a8f38573-99d2-449e-b95b-2e83151ace0c" },
          { id: "13.4.1", title: "Lección 13 Sección 13.4 — Pg. 185 - 186", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%204%2FLecci%C3%B3n%2013%2FLecci%C3%B3n%2013%20secci%C3%B3n13.4%20p185-186.mp3?alt=media&token=8331a867-fa36-421b-970f-aae1b6dd1dff" },
          { id: "13.4.2", title: "Lección 13 Sección 13.4 — Pg. 187 - 188", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%204%2FLecci%C3%B3n%2013%2FLecci%C3%B3n%2013%20secci%C3%B3n13.4%20p187-188.mp3?alt=media&token=4e825fc1-4688-45a3-aedd-4b609e57ef20" },
          { id: "13.5", title: "Lección 13 Sección 13.5 — Pg. 189 - 190", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%204%2FLecci%C3%B3n%2013%2FLecci%C3%B3n%2013%20secci%C3%B3n13.5%20p189-190.mp3?alt=media&token=939d4b19-f354-42b9-8591-16bcfb000681" },

        ],
      },
      {
        id: "1.14",
        title: "Lección 14",
        sections: [
          { id: "14.1.1", title: "Lección 14 Sección 14.1 — Pg. 193", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%204%2FLecci%C3%B3n%2014%2FLecci%C3%B3n%2014%20secci%C3%B3n14.1%20p193.mp3?alt=media&token=daf433e0-4405-4b10-842f-17139b59454b" },
          { id: "14.1.2", title: "Lección 14 Sección 14.1 — Pg. 196", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%204%2FLecci%C3%B3n%2014%2FLecci%C3%B3n%2014%20secci%C3%B3n14.1%20p196.mp3?alt=media&token=4d3ff3e2-656a-4ce2-baa8-93d3d65f0990" },
          { id: "14.2.1", title: "Lección 14 Sección 14.2 — Pg. 199 - 200", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%204%2FLecci%C3%B3n%2014%2FLecci%C3%B3n%2014%20secci%C3%B3n14.2%20p199-200.mp3?alt=media&token=597e8886-1b82-4fa1-9805-d2727b000fe3" },
          { id: "14.2.2", title: "Lección 14 Sección 14.2 — Pg. 201 - 202", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%204%2FLecci%C3%B3n%2014%2FLecci%C3%B3n%2014%20secci%C3%B3n14.2%20p201-202.mp3?alt=media&token=b3566834-bf0c-4059-bd08-a47a00cf5b40" },
          { id: "14.3", title: "Lección 14 Sección 14.3 — Pg. 203 - 204", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%204%2FLecci%C3%B3n%2014%2FLecci%C3%B3n%2014%20secci%C3%B3n14.3%20p203-204.mp3?alt=media&token=77f7ced0-b91f-4228-96f6-012862fdb853" },

        ],
      },
      {
        id: "1.15",
        title: "Lección 15",
        sections: [
          { id: "15.1", title: "Lección 15 Sección 15.1 — Pg. 207", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%204%2FLecci%C3%B3n%2015%2FLecci%C3%B3n%2015%20secci%C3%B3n%2015.1%20p207.mp3?alt=media&token=bd427a8f-d63c-4ef2-971f-a9a241aba1e8" },
          { id: "15.2.1", title: "Lección 15 Sección 15.2 — Pg. 208", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%204%2FLecci%C3%B3n%2015%2FLecci%C3%B3n%2015%20secci%C3%B3n14.2%20p208.mp3?alt=media&token=d7ed85ed-ba1a-436e-9098-af2ed010e09a" },
          { id: "15.2.2", title: "Lección 15 Sección 15.2 — Pg. 209 - 213", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%204%2FLecci%C3%B3n%2015%2FLecci%C3%B3n%2015%20secci%C3%B3n15.2%20p209-213.mp3?alt=media&token=31230854-f869-4680-9609-f373fa73d018" },
          { id: "15.3.1", title: "Lección 15 Sección 15.3 — Pg. 217  219", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%204%2FLecci%C3%B3n%2015%2FLecci%C3%B3n%2015%20secci%C3%B3n15.3%20p217-2019.mp3?alt=media&token=4cf7ceff-cada-4454-b516-4e6984316a8e" },
          { id: "15.3.2", title: "Lección 15 Sección 15.3 — Pg. 220 - 221", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%204%2FLecci%C3%B3n%2015%2FLecci%C3%B3n%2015%20secci%C3%B3n15.3%20p220-221.mp3?alt=media&token=1a35433f-9952-4ac3-aec9-bd4ec0d1fc9e" },
          { id: "15.3.3", title: "Lección 15 Sección 15.3 — Pg. 222 - 223", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%204%2FLecci%C3%B3n%2015%2FLecci%C3%B3n%2015%20secci%C3%B3n15.3%20p222-2023.mp3?alt=media&token=59d3be33-ea6c-4f4b-af02-521e9d47edcd" },


        ],
      },
      {
        id: "1.16",
        title: "Lección 16",
        sections: [
          { id: "16.1", title: "Lección 16 Sección 16.1 — Pg. 226", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%204%2FLecci%C3%B3n%2016%2FLecci%C3%B3n%2016%20secci%C3%B3n%2016.1%20p%20226.mp3?alt=media&token=8a23c610-4499-4a37-908f-af0e00392d5b" },
          { id: "16.2", title: "Lección 16 Sección 16.2 — Pg. 227", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%204%2FLecci%C3%B3n%2016%2FLecci%C3%B3n%2016%20secci%C3%B3n16.2%20p227.mp3?alt=media&token=b62ab841-836b-4d9d-b023-6bb7f5733682" },
          { id: "16.3", title: "Lección 16 Sección 16.3 — Pg. 228", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%204%2FLecci%C3%B3n%2016%2FLecci%C3%B3n%2016%20secci%C3%B3n16.3%20p228.mp3?alt=media&token=b5a7f76e-df82-4b0f-bb68-80e657e46648" },
          { id: "16.4.1", title: "Lección 16 Sección 16.4 — Pg. 231 - 232", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%204%2FLecci%C3%B3n%2016%2FLecci%C3%B3n%2016%20secci%C3%B3n16.4%20p231-232.mp3?alt=media&token=15a4bcce-73e4-40b4-8a09-9188490ef69e" },
          { id: "16.4.2", title: "Lección 16 Sección 16.4 — Pg. 233 - 234", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%204%2FLecci%C3%B3n%2016%2FLecci%C3%B3n%2016%20secci%C3%B3n16.4%20p233-234.mp3?alt=media&token=ca80d804-64be-4e91-afbf-1d7c0062f145" },
          { id: "16.5", title: "Lección 16 Sección 16.5 — Pg. 235 - 237", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%204%2FLecci%C3%B3n%2016%2FLecci%C3%B3n%2016%20secci%C3%B3n16.5%20p%20235-237.mp3?alt=media&token=de3acc6d-a9ee-4c43-938e-89eb81d8da8e" },
        ],
      },      
      {
        id: "1.17",
        title: "Lección 17",
        sections: [
          { id: "17.1.1", title: "Lección 17 Sección 17.1 — Pg. 240", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%204%2FLecci%C3%B3n%2017%2FLecci%C3%B3n%2017%20secci%C3%B3n%2017.1%20p240.mp3?alt=media&token=888e7a48-9296-45aa-9816-09a0bf398856" },
          { id: "17.1.2", title: "Lección 17 Sección 17.1 — Pg. 241 - 242", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%204%2FLecci%C3%B3n%2017%2FLecci%C3%B3n%2017%20secci%C3%B3n%2017.1%20p241-242.mp3?alt=media&token=d5288186-671f-4e68-834d-ce979e45ffd3" },
          { id: "17.2", title: "Lección 17 Sección 17.2 — Pg. 243", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%204%2FLecci%C3%B3n%2017%2FLecci%C3%B3n%2017%20secci%C3%B3n%2017.2%20p243.mp3?alt=media&token=6194febc-8fbb-4fed-b184-0b9ad9fecddf" },
          { id: "17.3.1", title: "Lección 17 Sección 17.3 — Pg. 247 - 248", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%204%2FLecci%C3%B3n%2017%2FLecci%C3%B3n%2017%20secci%C3%B3n%2017.3%20p247-248.mp3?alt=media&token=e0fd585d-f78e-47a4-9b46-5e00af4ea33f" },
          { id: "17.3.2", title: "Lección 17 Sección 17.3 — Pg. 249 - 250", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%204%2FLecci%C3%B3n%2017%2FLecci%C3%B3n%2017%20secci%C3%B3n%2017.3%20p249-250.mp3?alt=media&token=f1c48320-10d7-4210-aa6b-3f2598822237" },
          { id: "17.4", title: "Lección 17 Sección 17.4 — Pg. 251 - 252", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FCap%C3%ADtulo%204%2FLecci%C3%B3n%2017%2FLecci%C3%B3n%2017%20secci%C3%B3n%2017.4%20p251-252.mp3?alt=media&token=fae1f7c9-0742-479a-bdce-bf09ce1a31e1" },

        ],
      },      
    ],
  },
  
  {
    id: "expressions-spanish",
    title: "Glosario de expresiones",
    sections: [
      { id: "g1", title: "Glossaire des expressions - Pg 300", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20expresiones%2FGlosario%20de%20frases%20p300.mp3?alt=media&token=b23b2064-994c-4625-93cf-f710f4267092"},
      { id: "g2", title: "Glossaire des expressions - Pg 301", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20expresiones%2FGlosario%20de%20frases%20p301.mp3?alt=media&token=3692759b-22b2-4389-9398-a48f0717503d"},
      { id: "g3", title: "Glossaire des expressions- Pg 302", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20expresiones%2FGlosario%20de%20frases%20p302.mp3?alt=media&token=25a68e6e-d45f-4fe0-aa46-0b9a9cdf1f2c"},
      { id: "g4", title: "Glossaire des expressions - Pg 303", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20expresiones%2FGlosario%20de%20frases%20p303.mp3?alt=media&token=39b5f84e-88af-43c2-a86a-effea7e1d656"},
      { id: "g5", title: "Glossaire des expressions - Pg 304", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20expresiones%2FGlosario%20de%20frases%20p304.mp3?alt=media&token=f99d4f9b-9a52-4f94-bf33-97f31a236936"},
      { id: "g6", title: "Glossaire des expressions - Pg 305", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20expresiones%2FGlosario%20de%20frases%20p305.mp3?alt=media&token=848cc634-bc0e-420c-a9aa-89c2bf468dbf"},
      { id: "g7", title: "Glossaire des expressions - Pg 306", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20expresiones%2FGlosario%20de%20frases%20p306.mp3?alt=media&token=c9b9ee82-759a-4c64-95f5-cc9804a99045"},
      { id: "g8", title: "Glossaire des expressions - Pg 307", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20expresiones%2FGlosario%20de%20frases%20p307.mp3?alt=media&token=aec88294-f450-43c7-9453-84ea86d9cf86"},
      { id: "g9", title: "Glossaire des expressions- Pg 308 - 309", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20expresiones%2FGlosario%20de%20frases%20p308-309.mp3?alt=media&token=08e50c69-5435-48be-9690-716336b72c1e"},

    ],
  },
  {
    id: "verbs-spanish",
    title: "Glosario de verbos",
    sections: [
      { id: "v1", title: "Glosario de verbos - Pg 310", audioUrl: "https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Verbos%2FGlosario%20de%20verbos%20p310.mp3?alt=media&token=50a2e4f5-90f4-43f7-a353-db958d7a1eea"},
      { id: "v2", title: "Glosario de verbos - Pg 311", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Verbos%2FGlosario%20de%20verbos%20p311.mp3?alt=media&token=17a70024-6edf-471c-b977-9c207eb77871"},
      { id: "v3", title: "Glosario de verbos - Pg 312", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Verbos%2FGlosario%20de%20verbos%20p312.mp3?alt=media&token=b27b6b97-c114-441f-9328-2f4575f10454"},
      { id: "v4", title: "Glosario de verbos - Pg 313", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Verbos%2FGlosario%20de%20verbos%20p313.mp3?alt=media&token=c3aea501-4343-4715-b538-fcc22067713c"},
      { id: "v5", title: "Glosario de verbos - Pg 314", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Verbos%2FGlosario%20de%20verbos%20p314.mp3?alt=media&token=ef2c4d2f-dc59-4cd2-94aa-a81165bc78f1"},
      { id: "v6", title: "Glosario de verbos - Pg 315", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Verbos%2FGlosario%20de%20verbos%20p315.mp3?alt=media&token=e0e0f189-7f42-45b6-8ceb-258fd2a6771d"},
    ],
  },
  {
    id: "words-spanish",
    title: "Glosario de palabras",
    sections: [
      { id: "w1", title: "Glosario de palabras - Pg 266", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p266.mp3?alt=media&token=d8548efc-309f-4964-ad0b-f2de986f02a3"},
      { id: "w2", title: "Glosario de palabras - Pg 267", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p267.mp3?alt=media&token=a8d56ab2-d40f-425a-941e-a0259a1737f6"},
      { id: "w3", title: "Glosario de palabras - Pg 268", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p268.mp3?alt=media&token=b93c66ab-4266-426a-b91d-9ec3e2116914"},
      { id: "w4", title: "Glosario de palabras - Pg 269", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p269.mp3?alt=media&token=2d9cfa7c-a4cb-422c-a319-10d877d5dec2"},
      { id: "w5", title: "Glosario de palabras - Pg 270", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p270.mp3?alt=media&token=d0490fe3-6a18-46eb-8424-fc1557192937"},
      { id: "w6", title: "Glosario de palabras - Pg 271", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p271.mp3?alt=media&token=418627c4-4459-4495-b725-a14894883ec0"},
      { id: "w7", title: "Glosario de palabras - Pg 272", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p272.mp3?alt=media&token=fa724027-faa4-4092-b647-6044eebeece1"},
      { id: "w8", title: "Glosario de palabras - Pg 273", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p273.mp3?alt=media&token=3d040b89-95a0-4a16-80e5-1951db1217f3"},
      { id: "w9", title: "Glosario de palabras - Pg 274", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p274.mp3?alt=media&token=a398ecdc-a918-4646-a4d8-3106d6c1407e"},
      { id: "w10", title: "Glosario de palabras - Pg 275", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p275.mp3?alt=media&token=9770aca3-44b2-427e-a7b9-4cc986ad4e21"},
      { id: "w11", title: "Glosario de palabras - Pg 276", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p276.mp3?alt=media&token=b29a29ba-2748-409f-a530-9e255b18411a"},
      { id: "w12", title: "Glosario de palabras - Pg 277", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p277.mp3?alt=media&token=70f47fa6-0d17-4b7d-beb3-d9cb4a435318"},
      { id: "w13", title: "Glosario de palabras - Pg 278", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p278.mp3?alt=media&token=a9b67705-8920-43f1-85d7-812d9635c1da"},
      { id: "w14", title: "Glosario de palabras - Pg 279", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p279.mp3?alt=media&token=d0058e24-338e-4fd3-8dae-47a89b92c2de"},
      { id: "w15", title: "Glosario de palabras - Pg 280", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p280.mp3?alt=media&token=d325b481-d80c-4475-b6e5-c4be0b4220dc"},
      { id: "w16", title: "Glosario de palabras - Pg 281", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p281.mp3?alt=media&token=984c35bf-f27c-4500-ad8b-78125f35406d"},
      { id: "w17", title: "Glosario de palabras - Pg 282", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p282.mp3?alt=media&token=918f255c-6011-4389-94e7-0364df5beacd"},
      { id: "w18", title: "Glosario de palabras - Pg 283", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p283.mp3?alt=media&token=7d0ec60a-432e-4b4b-bf55-6a2d60e6559f"},
      { id: "w19", title: "Glosario de palabras - Pg 284", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p284.mp3?alt=media&token=a8228891-69d4-4e7c-bfe9-4fa5392d9be8"},
      { id: "w20", title: "Glosario de palabras - Pg 285", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p285.mp3?alt=media&token=12e1b6b2-b24a-440f-98f9-ef0de94ea225"},
      { id: "w21", title: "Glosario de palabras - Pg 286", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p286.mp3?alt=media&token=2aac4ac3-79fa-41d2-9a10-ec601aeb8032"},
      { id: "w22", title: "Glosario de palabras - Pg 287", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p287.mp3?alt=media&token=7f378933-9484-4871-a1a5-9d830c9672fd"},
      { id: "w23", title: "Glosario de palabras - Pg 288", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p288.mp3?alt=media&token=0c759e37-09c5-41d3-bdc6-4389b01243c1"},
      { id: "w24", title: "Glosario de palabras - Pg 289", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p289.mp3?alt=media&token=6c55b90f-49f2-4995-9340-089c1730e38e"},
      { id: "w25", title: "Glosario de palabras - Pg 290", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p290.mp3?alt=media&token=607baa8f-c796-4958-8657-aea065fafefa"},
      { id: "w26", title: "Glosario de palabras - Pg 291", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p291.mp3?alt=media&token=3df5f3cb-edbc-4117-92ee-c67ff2f51e31"},
      { id: "w27", title: "Glosario de palabras - Pg 292", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p292.mp3?alt=media&token=f3dc26d1-9fd5-4b94-8b04-31d1ca67628c"},
      { id: "w28", title: "Glosario de palabras - Pg 293", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p293.mp3?alt=media&token=f3d08570-f96d-4476-8e83-2cd86721f88c"},
      { id: "w29", title: "Glosario de palabras - Pg 294", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p294.mp3?alt=media&token=015481df-a6c8-47b8-a263-77781568b91c"},
      { id: "w30", title: "Glosario de palabras - Pg 295", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p295.mp3?alt=media&token=ac42f729-afc2-480c-bca3-a23cfd350737"},
      { id: "w31", title: "Glosario de palabras - Pg 296", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p296.mp3?alt=media&token=d58530a6-0bff-44c5-b1ca-ae17f714bf9e"},
      { id: "w32", title: "Glosario de palabras - Pg 297", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p297.mp3?alt=media&token=38d8fe09-8c9a-42dc-9194-19dd5947b3c2"},
      { id: "w33", title: "Glosario de palabras - Pg 298", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p298.mp3?alt=media&token=dab8deed-dc1a-435c-a134-34ea03581b69"},
      { id: "w34", title: "Glosario de palabras - Pg 299", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FLA%20GU%C3%8DA%20COMPLETA%20DE%20%C3%81RABE%20LEVANTINO%2FGlosario%20de%20Palabras%2FGlosario%20de%20palabras%20p299wav.mp3?alt=media&token=f5d23f2a-ff9b-4b96-bf0c-5845bf0ffd02"},

    ],
  },
    ],
  },
  {
    bookId: "main-book-everyday-idioms",
    youtubeUrl: "https://www.youtube.com/@everydayarabicidioms5417",
    oneDriveUrl: "https://1drv.ms/f/c/1bd9cb9d551010be/IgC-EBBVncvZIIAb_gcBAAAAAcoT2i5lZFi_F3wm_sZEVGc?e=d2obNm",
    chapters: [
      {
        id: "idioms",
        title: "Everyday Arabic Idioms",
        sections: [
      { id: "1.1", title: "Everyday Arabic Idioms - 7-8", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%207-8.mp3?alt=media&token=4b0e8549-5fc2-4d1e-9101-a74b0e15a410"},    
      { id: "1.2", title: "Everyday Arabic Idioms - 9-10", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%209-10.mp3?alt=media&token=8b70d0cd-b5f6-4e9d-8e98-8bbd337891fc"},    
      { id: "1", title: "Everyday Arabic Idioms - 11-12", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2011-12.mp3?alt=media&token=6fd9c42e-9602-41d7-aeeb-a878dfd586d9"},
      { id: "2", title: "Everyday Arabic Idioms - 13-14", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2013-14.mp3?alt=media&token=477058b5-901b-48b1-93f7-fd3babd98ea2"},
      { id: "3", title: "Everyday Arabic Idioms - 16", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2016.mp3?alt=media&token=2fd92e14-1658-46c6-b951-0fcb90fed05e"},
      { id: "4", title: "Everyday Arabic Idioms - 18-19", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2018-19.mp3?alt=media&token=8fc24373-18db-4a2d-b3be-fe6269091cd5"},
      { id: "5", title: "Everyday Arabic Idioms - 20-21", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2020-21.mp3?alt=media&token=247c4370-2de4-4896-af61-7d5b93bfdfbf"},
      { id: "6", title: "Everyday Arabic Idioms - 22-23", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2022-23.mp3?alt=media&token=d22215b5-9c05-49cc-90bd-740f18029336"},
      { id: "7", title: "Everyday Arabic Idioms - 24-25", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2024-23.mp3?alt=media&token=adb1053c-0990-4032-9926-e78eedfda300"},
      { id: "8", title: "Everyday Arabic Idioms - 26-27", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2026-27.mp3?alt=media&token=51bf5e5a-9da1-4c6a-bdf6-3d5e1dea6868"},
      { id: "8.1", title: "Everyday Arabic Idioms - 27-28", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2027-28.mp3?alt=media&token=5a768dea-d155-43e8-897b-a0d42721a844"},
      { id: "9", title: "Everyday Arabic Idioms - 29-30", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2029-30.mp3?alt=media&token=0ff7b23c-8884-497a-8213-5471c1c3f44b"},
      { id: "10", title: "Everyday Arabic Idioms - 31-32", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2031-32.mp3?alt=media&token=99842922-5091-441b-8a51-65b9c3e0ac62"},
      { id: "11", title: "Everyday Arabic Idioms - 33-34", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2033-34.mp3?alt=media&token=ed1bd07b-b3df-4435-a84c-b96fd440e9bb"},
      { id: "12", title: "Everyday Arabic Idioms - 35-36", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2035-36.mp3?alt=media&token=3b46f790-cf9a-48ac-bc1d-468e6cd44f12"},
      { id: "13", title: "Everyday Arabic Idioms - 37-38", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2037-38.mp3?alt=media&token=756e3c27-510f-4be2-97cb-c645eab72d9b"},
      { id: "14", title: "Everyday Arabic Idioms - 40", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2040.mp3?alt=media&token=376b8c5b-7b11-4999-be32-6e944cef603e"},
      { id: "15", title: "Everyday Arabic Idioms - 41-42", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2041-42.mp3?alt=media&token=a3d2b6ca-f1dc-4029-a144-904f25d336d9"},
      { id: "16", title: "Everyday Arabic Idioms - 43-44", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2043-44.mp3?alt=media&token=ec99e9bd-38e5-454b-ab3e-4bca22f9d7c1"},
      { id: "17", title: "Everyday Arabic Idioms - 45-46", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2045-46.mp3?alt=media&token=5f623600-0761-4a07-956b-332c526f6ec3"},
      { id: "18", title: "Everyday Arabic Idioms - 47-48", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2047-48.mp3?alt=media&token=f4bcd4e9-5569-4896-a95e-ba6d2b1e8c48"},
      { id: "19", title: "Everyday Arabic Idioms - 49-50", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2049-50.mp3?alt=media&token=a969a8b5-4696-45de-b36b-d282a0091a63"},
      { id: "20", title: "Everyday Arabic Idioms - 51-52", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2051-52.mp3?alt=media&token=7b9bccc9-e561-4621-8591-c13f95b6f5b9"},
      { id: "21", title: "Everyday Arabic Idioms - 53-54", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2053-54.mp3?alt=media&token=a873063d-1dc7-4cf1-9b65-e35b63db8534"},
      { id: "22", title: "Everyday Arabic Idioms - 55-56", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2055-56.mp3?alt=media&token=6a2831b8-b178-4eec-a4d9-5fffe668adcb"},
      { id: "23", title: "Everyday Arabic Idioms - 57-58", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2057-58.mp3?alt=media&token=78da73d6-b45b-4975-915a-2b10c9cdff8e"},
      { id: "24", title: "Everyday Arabic Idioms - 59-60", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2059-60.mp3?alt=media&token=74e8c168-6bbd-47e9-82be-437caeb24784"},
      { id: "25", title: "Everyday Arabic Idioms - 61-62", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2061-62.mp3?alt=media&token=4250d2d9-2950-421b-b667-0b90c5457181"},
      { id: "26", title: "Everyday Arabic Idioms - 63-64", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2063-64.mp3?alt=media&token=12dd1e16-401e-4e2e-a890-778859124a26"},    
      { id: "27", title: "Everyday Arabic Idioms - 65-66", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2065-66.mp3?alt=media&token=9a565386-3874-419c-bbb5-a4e9f2967a7a"},    
      { id: "28", title: "Everyday Arabic Idioms - 67-68", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2067-68.mp3?alt=media&token=5a081dcd-ad55-4ffe-8e69-5daa5a014685"},    
      { id: "29", title: "Everyday Arabic Idioms - 69-70", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2069-70.mp3?alt=media&token=02e6c8ed-c97e-4e6f-815a-abcb607a9656"},    
      { id: "30", title: "Everyday Arabic Idioms - 71-72", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2071-72.mp3?alt=media&token=f100cbca-d36c-4b3b-9739-e78e37658de7"},    
      { id: "31", title: "Everyday Arabic Idioms - 73-74", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2073-74.mp3?alt=media&token=3d75ef6e-f00c-42cb-9315-3edcc72e0e96"},    
      { id: "32", title: "Everyday Arabic Idioms - 75-76", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2075-76.mp3?alt=media&token=92b08df1-dff3-45d9-a5b3-9d99157deef6"},    
      { id: "33", title: "Everyday Arabic Idioms - 77-78", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2077-78.mp3?alt=media&token=2313bf55-b415-4c6f-83b0-52a3ad2de00c"},    
      { id: "34", title: "Everyday Arabic Idioms - 79-80", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2079-80..mp3?alt=media&token=163ef889-137f-47ef-aea6-90bcb08257a1"},    
      { id: "35", title: "Everyday Arabic Idioms - 81-82", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2081-82..mp3?alt=media&token=77d7dc27-0cd4-4224-bc73-4079d38fce66"},    
      { id: "36", title: "Everyday Arabic Idioms - 83-84", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2083-84.mp3?alt=media&token=52f0a3cb-646c-41d8-81b2-b5d0bce1c8d6"},    
      { id: "37", title: "Everyday Arabic Idioms - 85-86", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2085-86.mp3?alt=media&token=4811cb24-ea36-48e5-9c62-773fe5587636"},    
      { id: "38", title: "Everyday Arabic Idioms - 87-88", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2087-88.mp3?alt=media&token=02ebcc23-dc40-41af-9e72-f13454b4e3db"},    
      { id: "39", title: "Everyday Arabic Idioms - 89-90", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2089-90.mp3?alt=media&token=0f3a0590-59db-4901-9ba6-ada27c658a47"},    
      // { id: "40", title: "Everyday Arabic Idioms - 91-92", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FPRACTISE%20BOOK%20(The%20Comprehensive%20Guide%20to%20Levantine%20Arabic)%2FL17-Txt.m4a?alt=media&token=c152c86d-8a05-47ba-834e-7c789f657fe2"},    
      { id: "41", title: "Everyday Arabic Idioms - 93-94", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2093-94.mp3?alt=media&token=aab7b8df-aa1c-4d0c-8dc2-f306be3d0b51"},    
      { id: "42", title: "Everyday Arabic Idioms - 95-96", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FPRACTISE%20BOOK%20(The%20Comprehensive%20Guide%20to%20Levantine%20Arabic)%2FL17-Txt.m4a?alt=media&token=c152c86d-8a05-47ba-834e-7c789f657fe2"},    
      { id: "43", title: "Everyday Arabic Idioms - 97-98", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2097-98.mp3?alt=media&token=09419dea-6259-4180-838e-19da58aa6efc"},    
      { id: "44", title: "Everyday Arabic Idioms - 99-100", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%2099-100.mp3?alt=media&token=8bc8b492-8ea7-416f-b07d-9342fbf046cb"},    
      { id: "45", title: "Everyday Arabic Idioms - 101-102", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%20101-102.mp3?alt=media&token=2c6d1ad8-4906-4860-9c53-f29e1fb8fd37"},    
      { id: "46", title: "Everyday Arabic Idioms - 103-104", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%20103-104.mp3?alt=media&token=c52cf4df-822e-482c-9f0f-f512b69c5031"},    
      { id: "47", title: "Everyday Arabic Idioms - 105-106", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%20105-106.mp3?alt=media&token=84cfb7b4-2d8a-4779-a984-569deac71209"},    
      { id: "48", title: "Everyday Arabic Idioms - 107-108", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FEveryday%20Arabic%20Idioms%2FEveryday%20Arabic%20Idioms%20-%20107-108.mp3?alt=media&token=0a39ae8d-7914-46b8-8d10-24a3ba30be03"},    

    ],
      },

    ],
  },
  {
    bookId: "audio-culinary-guide",
    youtubeUrl: "https://www.youtube.com/playlist?list=PLFZyUNFAHcKEpbW80jCNol8BiUyGZkO4Y",
    oneDriveUrl: "https://1drv.ms/f/c/1bd9cb9d551010be/IgC-EBBVncvZIIAb2BMCAAAAAZESWM8hG4ihZmkzQNiNpoM?e=kef9iR",
        chapters: [
      {
        id: "breakfast",
        title: "Breakfast Recipes",
        sections: [
      { id: "l1", title: "قلاية بندورة Qallayet Bandora (P.10)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FBreakfast%20Recipes%2F%D9%82%D9%84%D8%A7%D9%8A%D8%A9%20%D8%A8%D9%86%D8%AF%D9%88%D8%B1%D8%A9%20Qallayet%20Bandora%20(P.10).mp3?alt=media&token=4d8f7489-30d6-44fe-b8d0-be9ac28b051b"},
      { id: "l2", title: "حمص Hummus (P.12)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FBreakfast%20Recipes%2F%D8%AD%D9%85%D8%B5%20Hummus%20(P.12).mp3?alt=media&token=01684453-549a-4ccf-81f6-83fa26b5cefa"},
      { id: "l3", title: "مناقيش زعتر Manaqeesh Zataar (P.14)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FBreakfast%20Recipes%2F%D9%85%D9%86%D8%A7%D9%82%D9%8A%D8%B4%20%D8%B2%D8%B9%D8%AA%D8%B1%20Manaqeesh%20Zataar%20(P.14).mp3?alt=media&token=d865b7b5-e2bc-4ccc-bcea-b3c174566f1b"},
      { id: "l4", title: " عجة البيض بالبقدونس Parsley Omelette (p.16)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FBreakfast%20Recipes%2FParsley%20Omelette%20(p.16)%20%D8%B9%D8%AC%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%B6%20%D8%A8%D8%A7%D9%84%D8%A8%D9%82%D8%AF%D9%88%D9%86%D8%B3.mp3?alt=media&token=fbbdf8cb-0eeb-4db2-828b-d387a54fd56d"},
      { id: "l5", title: "فلافل Falafel (P.18)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FBreakfast%20Recipes%2F%D9%81%D9%84%D8%A7%D9%81%D9%84%20Falafel%20(P.18).mp3?alt=media&token=84b66341-ab79-49bf-a26a-09a20bec1117"},
      { id: "l6", title: "مفركة بطاطا Potato Mufarakeh (P.20)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FBreakfast%20Recipes%2F%D9%85%D9%81%D8%B1%D9%83%D8%A9%20%D8%A8%D8%B7%D8%A7%D8%B7%D8%A7%20Potato%20Mufarakeh%20(P.20).mp3?alt=media&token=3a621d28-ff4e-44e3-9c73-1817e32ea8bd"},
      { id: "l7", title: "شكشوكة Shakshuka (P.22)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FBreakfast%20Recipes%2F%D8%B4%D9%83%D8%B4%D9%88%D9%83%D8%A9%20Shakshuka%20(P.22).mp3?alt=media&token=fb44bc8e-a6f3-45f8-9ea4-fdb1b5874639"},
      { id: "l8", title: "فول مدمس Ful Mudammas (P.24)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FBreakfast%20Recipes%2F%D9%81%D9%88%D9%84%20%D9%85%D8%AF%D9%85%D8%B3%20Ful%20Mudammas%20(P.24).mp3?alt=media&token=7cd3707a-dacc-45e6-bffb-4cc5de449850"},
      { id: "l9", title: "المعجنات Pastries (P.26)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FBreakfast%20Recipes%2F%D8%A7%D9%84%D9%85%D8%B9%D8%AC%D9%86%D8%A7%D8%AA%20Pastries%20(P.26).mp3?alt=media&token=02781b24-ee7a-431e-b373-259c41529422"},   
      { id: "l10", title: "كبة البرغل Kubbeh (P.28)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FBreakfast%20Recipes%2F%D9%83%D8%A8%D8%A9%20%D8%A7%D9%84%D8%A8%D8%B1%D8%BA%D9%84%20Kubbeh%20(P.28).mp3?alt=media&token=a002cdb9-4939-41bb-97dd-ddc592e66d6b"},
 
    ],
      },
      {
        id:"lunch",
        title: "Lunch Recipes",
        sections:[
      { id: "l11", title: "مقلوبة Maqlubeh (P.35)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FLunch%20Recipes%2F%D9%85%D9%82%D9%84%D9%88%D8%A8%D8%A9%20Maqlubeh%20(P.35).mp3?alt=media&token=51c3f1da-bdd4-4183-973e-12c0a007e5aa"},
      { id: "l12", title: "مفتول Maftoul (P.36)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FLunch%20Recipes%2F%D9%85%D9%81%D8%AA%D9%88%D9%84%20Maftoul%20(P.36).mp3?alt=media&token=395e53c2-9d78-4d8b-b120-ce02be1adfd8"},
      { id: "l13", title: "مسخن Musakhan (P.39)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FLunch%20Recipes%2F%D9%85%D8%B3%D8%AE%D9%86%20Musakhan%20(P.39).mp3?alt=media&token=57f4a91f-a1e6-42d1-a00a-c21b9c77b12d"},
      { id: "l14", title: "كوسا محشي Stuffed zucchini (P.41)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FLunch%20Recipes%2F%D9%83%D9%88%D8%B3%D8%A7%20%D9%85%D8%AD%D8%B4%D9%8A%20Stuffed%20zucchini%20(P.41).mp3?alt=media&token=1248f249-153f-4d53-b588-5448f15ae217"},
      { id: "l15", title: "ملوخية مع جاج Mlukhyeh (with chicken) (P.42)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FLunch%20Recipes%2F%D9%85%D9%84%D9%88%D8%AE%D9%8A%D8%A9%20%D9%85%D8%B9%20%D8%AC%D8%A7%D8%AC%20Mlukhyeh%20(with%20chicken)%20(P.34).mp3?alt=media&token=47011cf7-df3d-4206-8a61-d0f4ebdc650d"},
      { id: "l16", title: "الملفوف Stuffed cabbage (P.45)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FLunch%20Recipes%2F%D8%A7%D9%84%D9%85%D9%84%D9%81%D9%88%D9%81%20Stuffed%20cabbage%20(P.45).mp3?alt=media&token=eeaf2d23-4591-43d0-a0f8-bfecaa137810"},
      { id: "l17", title: "كفتة بالطحينية Kufta Tahini (P.47)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FLunch%20Recipes%2F%D9%83%D9%81%D8%AA%D8%A9%20%D8%A8%D8%A7%D9%84%D8%B7%D8%AD%D9%8A%D9%86%D9%8A%D8%A9%20Kufta%20Tahini%20(P.47).mp3?alt=media&token=577fc298-834b-4a83-920f-24cd848a5b7a"},
      { id: "l18", title: "ورق عنب Vine leaves (P.49)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FLunch%20Recipes%2F%D9%88%D8%B1%D9%82%20%D8%B9%D9%86%D8%A8%20Vine%20leaves%20(P.49).mp3?alt=media&token=45768fff-3901-452e-9421-cc9c13aa4e4c"},
      { id: "l19", title: "صينية بطاطا Potato tray (P.51)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FLunch%20Recipes%2F%D8%B5%D9%8A%D9%86%D9%8A%D8%A9%20%D8%A8%D8%B7%D8%A7%D8%B7%D8%A7%20Potato%20tray%20(P.51).mp3?alt=media&token=11f7476d-843a-46c1-aa11-6274e37d4086"},
      { id: "l20", title: "الشيشبرك Sheshbarak (P.53)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FLunch%20Recipes%2F%D8%A7%D9%84%D8%B4%D9%8A%D8%B4%D8%A8%D8%B1%D9%83%20Sheshbarak%20(P.53).mp3?alt=media&token=2682acad-0ea8-4823-84dd-fe09b55faf80"},
      { id: "l21", title: "المجدرة Mujadara (P.55)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FLunch%20Recipes%2F%D8%A7%D9%84%D9%85%D8%AC%D8%AF%D8%B1%D8%A9%20Mujadara%20(P.55).mp3?alt=media&token=645d6d48-5bf5-4020-a082-759b2506b9d4"},
        ]
      },
      {
        id:"dinner",
        title:"Dinner Recipes",
        sections:[
      { id: "l22", title: "بطاطا مهروسة Mashed Potatoes (P. 61)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FDinner%20Recipes%2F%D8%A8%D8%B7%D8%A7%D8%B7%D8%A7%20%D9%85%D9%87%D8%B1%D9%88%D8%B3%D8%A9%20Mashed%20Potatoes%20(P.%2061).mp3?alt=media&token=e20c2984-ad6b-499d-9fc0-7c32b389e1be"},
      { id: "l23", title: "مشاط الزهرة Cauliflower Omelette (P.62)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FDinner%20Recipes%2F%D9%85%D8%B4%D8%A7%D8%B7%20%D8%A7%D9%84%D8%B2%D9%87%D8%B1%D8%A9%20Cauliflower%20Omelette%20(P.62).mp3?alt=media&token=1f7996ef-0fc3-4fee-91ac-5bf5ad2c2193"},
      { id: "l24", title: "خبيزة Khobeiza (P.64)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FDinner%20Recipes%2F%D8%AE%D8%A8%D9%8A%D8%B2%D8%A9%20Khobeiza%20(P.64).mp3?alt=media&token=75fccc36-5d31-45e7-aa22-f21ca7634b6a"},
      { id: "l25", title: "كبدة بالبصل Liver with Onion (P.66)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FDinner%20Recipes%2F%D9%83%D8%A8%D8%AF%D8%A9%20%D8%A8%D8%A7%D9%84%D8%A8%D8%B5%D9%84%20Liver%20with%20Onion%20(P.66).mp3?alt=media&token=c2ce65c4-a8ae-4c95-be38-fc06f3a6dbd2"},
      { id: "l26", title: "بيتنجان باللبن  Eggplant with Yogurt (p.68)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FDinner%20Recipes%2F%D8%A8%D9%8A%D8%AA%D9%86%D8%AC%D8%A7%D9%86%20%D8%A8%D8%A7%D9%84%D9%84%D8%A8%D9%86%20%20(p.68)%20Eggplant%20with%20Yogurt.mp3?alt=media&token=f8694c0b-e59c-4461-a14a-5716ba8f6479"},
      { id: "l27", title: "متبل بيتنجان Mtabbal (P.71)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FDinner%20Recipes%2F%D9%85%D8%AA%D8%A8%D9%84%20%D8%A8%D9%8A%D8%AA%D9%86%D8%AC%D8%A7%D9%86%20Mtabbal%20(P.71).mp3?alt=media&token=4df3b62f-16e3-4399-8806-df838d9a8823"},
      { id: "l28", title: "فول أخضر مع بيض Green Beans with Eggs (P.73)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FDinner%20Recipes%2F%D9%81%D9%88%D9%84%20%D8%A3%D8%AE%D8%B6%D8%B1%20%D9%85%D8%B9%20%D8%A8%D9%8A%D8%B6%20Green%20Beans%20with%20Eggs%20(P.73).mp3?alt=media&token=350bb12b-6e86-4d6c-b24e-de5e85c3f94e"},
      { id: "l29", title: "سلطة بيتنجان Eggplant Salad (P.75)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FDinner%20Recipes%2F%D8%B3%D9%84%D8%B7%D8%A9%20%D8%A8%D9%8A%D8%AA%D9%86%D8%AC%D8%A7%D9%86%20Eggplant%20Salad%20(P.75).mp3?alt=media&token=0d00d55f-f2de-468b-b888-53c52f655a8c"},
      { id: "l30", title: "تبولة Tabouleh (P.77)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FDinner%20Recipes%2FTabouleh%20(P.77)%20%D8%AA%D8%A8%D9%88%D9%84%D8%A9.mp3?alt=media&token=69e51ec6-0eb4-4433-bb92-a01ce9564db9"},
        ]

      },
            {
        id:"dessert",
        title:"Dessert Recipes",
        sections:[
      { id: "l31", title: "عوامة Awwameh (P. 83)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FDessert%20Recipes%2FAwwameh%20(P.%2083)%20%D8%B9%D9%88%D8%A7%D9%85%D8%A9.mp3?alt=media&token=c3dcb28a-92c4-4ca5-bfd0-b6e100a0f0d6"},
      { id: "l32", title: " هريسة Harissa (P. 85)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FDessert%20Recipes%2FHarissa%20(P.%2085)%20%D9%87%D8%B1%D9%8A%D8%B3%D8%A9.mp3?alt=media&token=4ca0f2cd-ed23-4c1a-8ae8-642e6a7a7e27"},
      { id: "l33", title: "رز بحليب Rice with Milk (P. 87)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FDessert%20Recipes%2FRice%20with%20Milk%20(P.%2087)%20%D8%B1%D8%B2%20%D8%A8%D8%AD%D9%84%D9%8A%D8%A8.mp3?alt=media&token=c28ebef3-3652-48c7-845f-276a11c8f1c8"},
      { id: "l34", title: " معمول سميد Maamoul (P. 89)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FDessert%20Recipes%2FMaamoul%20(P.%2098)%20%D9%85%D8%B9%D9%85%D9%88%D9%84%20%D8%B3%D9%85%D9%8A%D8%AF.mp3?alt=media&token=a13ecb3c-ee04-434b-b1a5-f3f811bcbfdd"},
      { id: "l35", title: " كراكيش Karakeesh (P. 91)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FDessert%20Recipes%2FKarakeesh%20(P.%2091)%20%D9%83%D8%B1%D8%A7%D9%83%D9%8A%D8%B4.mp3?alt=media&token=2b2be43f-6803-41bd-9399-f31e6be6661d"},
      { id: "l36", title: " مهلبية Mhallabiyyeh (P. 93)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FDessert%20Recipes%2FMhallabiyyeh%20(P.%2093)%20%D9%85%D9%87%D9%84%D8%A8%D9%8A%D8%A9.mp3?alt=media&token=021cdff1-4c6d-4694-a57f-12671071445a"},
      { id: "l37", title: "حلاوة سميد Hallawet Smeed (P. 95)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FDessert%20Recipes%2FHallawet%20Smeed%20(P.%2095)%20%D8%AD%D9%84%D8%A7%D9%88%D8%A9%20%D8%B3%D9%85%D9%8A%D8%AF.mp3?alt=media&token=b4a7d71f-4a96-4f96-9b14-5372f57e16f6"},
      { id: "l38", title: "حلبة  Hilbeh (P. 97)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FDessert%20Recipes%2FHilbeh%20(P.%2097)%20%D8%AD%D9%84%D8%A8%D8%A9.mp3?alt=media&token=c7876908-122b-45f9-998b-c53a8242b800"},
      { id: "l39", title: "قطايف Qatayef (P. 101)", audioUrl:"https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/audio%20books%2FThe%20Arabic%20Culinary%20Language%20Guide%20(Audios)%2FDessert%20Recipes%2FQatayef%20(P.%20101)%20%D9%82%D8%B7%D8%A7%D9%8A%D9%81.mp3?alt=media&token=0f4f9a53-c2bf-44a7-ab30-044db3b26532"},
        ]

      },
    ],
  },
];

export function getAudioBookContent(bookId: string): AudioBookContent | undefined {
  return audioBookContents.find((b) => b.bookId === bookId);
}
