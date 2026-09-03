export interface Episode {
    id: number;
    titleKey: string;
    audioUrl?: string;
}

export interface Season {
    seasonNumber: number | string;
    hostedByKey: string;
    episodes: Episode[];
    bookCover: string;
    bookAltKey: string;
    reverse: boolean;
    bookLink?: string;
}

export interface SeasonCard {
    season: number | string;
    hostKey: string;
    image: string;
    seasonNumber: number | string;
}

// Season Cards (top row)

export const seasonCards: SeasonCard[] = [
    { season: 1, hostKey: 'data.podcasts.data.host_mohammad_ayaseh', image: '/assets/images/podcast/card.webp', seasonNumber: 1 },
    { season: 2, hostKey: 'data.podcasts.data.host_sara_al_zyoud',   image: '/assets/images/podcast/card.webp', seasonNumber: 2 },
    { season: 3, hostKey: 'data.podcasts.data.host_angela_dudley',   image: '/assets/images/podcast/card.webp', seasonNumber: 3 },
    { season: 4, hostKey: 'data.podcasts.data.host_duha_hamad',      image: '/assets/images/podcast/card.webp', seasonNumber: 4 },
    { season: 5, hostKey: 'data.podcasts.data.host_raghad_dabbour',  image: '/assets/images/podcast/card.webp', seasonNumber: 5 },
];

// Season 1

const season1Episodes: Episode[] = [
    { id: 1,  titleKey: 'data.podcasts.data.title_episode_1_introduction_to_season_1',      audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%201%2FEpisode1.mp3?alt=media&token=c05b88a1-5d79-48f0-9de1-f3d9df0d6e8a' },
    { id: 2,  titleKey: 'data.podcasts.data.title_episode_2_my_life_in_jordan',              audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%201%2FEpisode2.mp3?alt=media&token=59b7b0e8-d147-4017-848c-303ea94e56a9' },
    { id: 3,  titleKey: 'data.podcasts.data.title_episode_3_my_story_in_arabic',             audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%201%2FEpisode3.mp3?alt=media&token=cd047026-fe6a-46df-9edc-c16514dd68e7' },
    { id: 4,  titleKey: 'data.podcasts.data.title_episode_4_my_studies_and_arabic',          audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%201%2FEpisode4.mp3?alt=media&token=36585ff2-16ca-41b1-b3d3-db5f70e78ec9' },
    { id: 5,  titleKey: 'data.podcasts.data.title_episode_5_racism',                         audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%201%2FEpisode5.mp3?alt=media&token=186a078c-c12f-4e24-8df8-66567075d007' },
    { id: 6,  titleKey: 'data.podcasts.data.title_episode_6_my_routine',                     audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%201%2FEpisode6.mp3?alt=media&token=9bb26a09-c1aa-46c0-a4bb-dee9ac743abf' },
    { id: 7,  titleKey: 'data.podcasts.data.title_episode_7_having_a_dog_in_jordan',         audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%201%2FEpisode7.mp3?alt=media&token=f2ea5340-77b3-4f33-bf85-06e21c7e3920' },
    { id: 8,  titleKey: 'data.podcasts.data.title_episode_8_cooking_is_not_my_thing',        audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%201%2FEpisode8.mp3?alt=media&token=e90e9e48-5901-4313-94dc-1225d467768e' },
    { id: 9,  titleKey: 'data.podcasts.data.title_episode_9_the_jordanian_heritage',         audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%201%2FEpisode9.mp3?alt=media&token=4618f221-2951-41b5-a090-1ed7dc149eeb' },
    { id: 10, titleKey: 'data.podcasts.data.title_episode_10_a_latina_and_arabic',           audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%201%2FEpisode10.mp3?alt=media&token=c25a4df3-f1b5-4860-9d1b-149d27573de1' },
    { id: 11, titleKey: 'data.podcasts.data.title_episode_11_refugees_situation_in_europe',  audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%201%2FEpisode11.mp3?alt=media&token=67cc4bf1-8ae5-4be4-a186-cfdf290915ff' },
];

// Season 2

const season2Episodes: Episode[] = [
    { id: 1,  titleKey: 'data.podcasts.data.title_episode_1_introduction_to_season_2',              audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%202%2FEpisode1.mp3?alt=media&token=b8fa84b3-676e-4c14-b52b-c3bc2767a762' },
    { id: 2,  titleKey: 'data.podcasts.data.title_episode_2_how_to_be_vegetarian_in_jordan',         audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%202%2FEpisode2.mp3?alt=media&token=d87a4ca4-db2d-48aa-817b-b7b05ff196ef' },
    { id: 3,  titleKey: 'data.podcasts.data.title_episode_3_to_palestine_with_love',                 audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%202%2FEpisode3.mp3?alt=media&token=4efe7b0f-61ae-4403-a4e4-10d6fb0ef513' },
    { id: 4,  titleKey: 'data.podcasts.data.title_episode_4_cross_continental_conversations',        audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%202%2FEpisode4.mp3?alt=media&token=edef57b6-f49c-42fd-9e2f-ebc1bb43796e' },
    { id: 5,  titleKey: 'data.podcasts.data.title_episode_5_fitness_not_so_first',                   audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%202%2FEpisode5.mp3?alt=media&token=b5ab23d8-a2ad-42bd-b196-8e9abbc5810d' },
    { id: 6,  titleKey: 'data.podcasts.data.title_episode_6_ready_for_take_off',                     audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%202%2FEpisode6.mp3?alt=media&token=e4560c37-e990-4a1b-88ca-4dda7e6cb029' },
    { id: 7,  titleKey: 'data.podcasts.data.title_episode_7_culture_vs_culture',                     audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%202%2FEpisode7.mp3?alt=media&token=c9be9aa0-5bee-4760-9042-7e8fb57097b7' },
    { id: 8,  titleKey: 'data.podcasts.data.title_episode_8_tango',                                  audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%202%2FEpisode8.mp3?alt=media&token=10d9bfb9-b54c-438f-9f92-f269fe368708' },
    { id: 9,  titleKey: 'data.podcasts.data.title_episode_9_arabic_religion_and_the_middle_east',    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%202%2FEpisode9.mp3?alt=media&token=7eb488ee-7ca9-4ac8-baec-0c045a747d31' },
    { id: 10, titleKey: 'data.podcasts.data.title_episode_10_retired_but_not_tired',                 audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%202%2FEpisode10.mp3?alt=media&token=10f17efd-db61-475f-b3ae-2cf8fea588b4' },
    { id: 11, titleKey: 'data.podcasts.data.title_episode_11_one_race_human',                        audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%202%2FEpisode11.mp3?alt=media&token=ec44738c-6443-457a-afc3-6428f67788aa' },
];

// Season 3

const season3Episodes: Episode[] = [
    { id: 1,  titleKey: 'data.podcasts.data.title_episode_1_introduction_to_season_3',        audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%203%2FEpisode1.mp3?alt=media&token=af71d54c-9b12-4a9a-b3c1-a207281d493a' },
    { id: 2,  titleKey: 'data.podcasts.data.title_episode_2_the_real_rugby_spirit',            audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%203%2FEpisode2.mp3?alt=media&token=dff4619c-c348-4766-b928-51edcba51156' },
    { id: 3,  titleKey: 'data.podcasts.data.title_episode_3_minutes_with_a_doctor',            audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%203%2FEpisode3.mp3?alt=media&token=110b6b86-edbe-4c54-85d5-eaa26a37a8f8' },
    { id: 4,  titleKey: 'data.podcasts.data.title_episode_4_difference_is_beautiful',          audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%203%2FEpisode4.mp3?alt=media&token=da5353a0-49f3-47a3-a0a8-29f27c6312d5' },
    { id: 5,  titleKey: 'data.podcasts.data.title_episode_5_ramadan_mubarak_eat_less_think_more', audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%203%2FEpisode5.mp3?alt=media&token=7a4cc12d-f436-4b2b-85f5-73ad8898d219' },
    { id: 6,  titleKey: 'data.podcasts.data.title_episode_6_bint_battuta',                     audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%203%2FEpisode6.mp3?alt=media&token=db651f0c-f63b-490d-b029-26cdc060fc31' },
    { id: 7,  titleKey: 'data.podcasts.data.title_episode_7_bunch_of_love',                    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%203%2FEpisode7.mp3?alt=media&token=8733d689-7f77-49a9-8ced-0e788785816f' },
    { id: 8,  titleKey: 'data.podcasts.data.title_episode_8_tatreez_palestinian_embroidery',   audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%203%2FEpisode8.mp3?alt=media&token=630cd586-1eda-498b-a910-f84eb1a8cb2e' },
    { id: 9,  titleKey: 'data.podcasts.data.title_episode_9_feels_like_home',                  audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%203%2FEpisode9.mp3?alt=media&token=e4ea9028-3108-4f87-a715-a68215776c0d' },
    { id: 10, titleKey: 'data.podcasts.data.title_episode_10_pierro_the_teacher_and_student',  audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%203%2FEpisode10.mp3?alt=media&token=66657c75-65b2-4a62-a295-e3ab4ec29032' },
    { id: 11, titleKey: 'data.podcasts.data.title_episode_11_get_to_know_a_jordanian',         audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%203%2FEpisode11.mp3?alt=media&token=b868a0ba-e704-45fb-8a4f-6106ef716407' },
];

// Season 4

const season4Episodes: Episode[] = [
    { id: 1, titleKey: 'data.podcasts.data.title_episode_1_in_the_vegetable_shop',        audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%204%2FEpisode1.mp3?alt=media&token=320d530d-88af-4ad2-a5eb-9fa638fafca5' },
    { id: 2, titleKey: 'data.podcasts.data.title_episode_2_language_and_society',         audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%204%2FEpisode2.mp3?alt=media&token=04030944-e91c-4df5-acf6-9aecfd5ba784' },
    { id: 3, titleKey: 'data.podcasts.data.title_episode_3_my_best_friends',              audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%204%2FEpisode3.mp3?alt=media&token=a3978daf-7994-4efc-8399-68b560e1f237' },
    { id: 4, titleKey: 'data.podcasts.data.title_episode_4_integration_in_arab_societies', audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%204%2FEpisode4.mp3?alt=media&token=a3bd15ad-6e3e-4264-afa7-70c61b79df20' },
];

// Season 5

const season5Episodes: Episode[] = [
    { id: 1,  titleKey: 'data.podcasts.data.title_episode_1_self_introduction',          audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%205%2FEpisode1.mp3?alt=media&token=34c3d0f3-a7de-4fa9-bf98-0a100bccdef0' },
    { id: 2,  titleKey: 'data.podcasts.data.title_episode_2_friends_and_family',         audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%205%2FEpisode2.mp3?alt=media&token=0f0aa50f-c0ec-4853-aa63-4d9e99698c85' },
    { id: 3,  titleKey: 'data.podcasts.data.title_episode_3_daily_routine_and_hobbies',  audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%205%2FEpisode3.mp3?alt=media&token=44954035-f1e5-4096-99a0-3efe39a56c33' },
    { id: 4,  titleKey: 'data.podcasts.data.title_episode_4_my_vacation',                audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%205%2FEpisode4.mp3?alt=media&token=044ba56a-cc9b-4400-ac66-cb1aae69520a' },
    { id: 5,  titleKey: 'data.podcasts.data.title_episode_5_talking_about_work',         audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%205%2FEpisode5.mp3?alt=media&token=5e926aac-6975-4f3c-96bd-7b1f4a08b5cf' },
    { id: 6,  titleKey: 'data.podcasts.data.title_episode_6_house_tours',                audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%205%2FEpisode6.mp3?alt=media&token=e0fefeea-5d27-469c-ab36-cfe1e5caf852' },
    { id: 7,  titleKey: 'data.podcasts.data.title_episode_7_my_favorite_restaurant',     audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%205%2FEpisode7.mp3?alt=media&token=0831c8e9-0dcc-4fa5-b98c-7f3a8f317c32' },
    { id: 8,  titleKey: 'data.podcasts.data.title_episode_8_my_cat_simsim',              audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%205%2FEpisode8.mp3?alt=media&token=171024a5-5931-40c9-b1c6-1ee675295673' },
    { id: 9,  titleKey: 'data.podcasts.data.title_episode_9_jabal_al_weibdeh',           audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%205%2FEpisode9.mp3?alt=media&token=0bf5731b-41ec-4dc8-b5f5-3f809d4cb099' },
    { id: 10, titleKey: 'data.podcasts.data.title_episode_10_friendship',                audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%205%2FEpisode10.mp3?alt=media&token=34eaa230-d1d6-4eff-939d-c2a8f4f43d1b' },
];

// Seasons array

export const seasons: Season[] = [
    {
        seasonNumber: 1,
        hostedByKey: 'data.podcasts.data.hostedby_mohammad_k_ayaseh',
        episodes: season1Episodes,
        bookCover: '/assets/images/books/podcasts/podcast1.webp',
        bookAltKey: 'data.podcasts.data.bookalt_guide_to_deewan_podcast_season_1_book_cover',
        reverse: false,
        bookLink: '/books/podcasts/season-1',

    },
    {
        seasonNumber: 2,
        hostedByKey: 'data.podcasts.data.hostedby_sara_al_zyoud',
        episodes: season2Episodes,
        bookCover: '/assets/images/books/podcasts/podcast2.webp',
        bookAltKey: 'data.podcasts.data.bookalt_guide_to_deewan_podcast_season_2_book_cover',
        reverse: true,
        bookLink: '/books/podcasts/season-2',
    },
    {
        seasonNumber: 3,
        hostedByKey: 'data.podcasts.data.hostedby_angela_dudley',
        episodes: season3Episodes,
        bookCover: '/assets/images/books/podcasts/podcast3.webp',
        bookAltKey: 'data.podcasts.data.bookalt_guide_to_deewan_podcast_season_3_book_cover',
        reverse: false,
        bookLink: '/books/podcasts/season-3',
    },
    {
        seasonNumber: 4,
        hostedByKey: 'data.podcasts.data.hostedby_duha_hamad',
        episodes: season4Episodes,
        bookCover: '/assets/images/books/podcasts/podcast4.webp',
        bookAltKey: 'data.podcasts.data.bookalt_guide_to_deewan_podcast_season_4_book_cover',
        reverse: true,
        bookLink: '/books/podcasts/season-4',
    },
    {
        seasonNumber: 5,
        hostedByKey: 'data.podcasts.data.hostedby_raghad_dabbour',
        episodes: season5Episodes,
        bookCover: '/assets/images/books/podcasts/podcast5.webp',
        bookAltKey: 'data.podcasts.data.bookalt_guide_to_deewan_podcast_season_5_book_cover',
        reverse: false,
        bookLink: '/books/podcasts/season-5',
    },
];
