export interface Episode {
    id: number;
    titleKey: string;
    audioUrl?: string;
}

export interface Season {
    seasonNumber: number | string;
    hostedByKey?: string;
    developedByKey?: string;
    episodes: Episode[];
    bookCover: string;
    bookAltKey: string;
    reverse: boolean;
    bookLink?: string;
}

export interface SeasonCard {
    season: number | string;
    hostKey?: string;
    developedKey?: string;
    image: string;
    seasonNumber: number | string;
}

// Season Cards (top row)

export const seasonCards: SeasonCard[] = [
    { season: 1, hostKey: 'data.podcasts.data.host_mohammad_ayaseh', developedKey: 'data.podcasts.data.developed_by_mohammad_ayaseh', image: '/assets/images/podcast/card.webp', seasonNumber: 1 },
//     { season: 2, hostKey: 'data.podcasts.data.host_sara_al_zyoud',   image: '/assets/images/podcast/card.webp', seasonNumber: 2 },
//     { season: 3, hostKey: 'data.podcasts.data.host_angela_dudley',   image: '/assets/images/podcast/card.webp', seasonNumber: 3 },
//     { season: 4, hostKey: 'data.podcasts.data.host_duha_hamad',      image: '/assets/images/podcast/card.webp', seasonNumber: 4 },
//     { season: 5, hostKey: 'data.podcasts.data.host_raghad_dabbour',  image: '/assets/images/podcast/card.webp', seasonNumber: 5 },
];

// Season 1

const season1Episodes: Episode[] = [
    { id: 1,  titleKey: 'data.podcastfusha.title_episode_1_introduction_to_season_1_eng',     audioUrl: 'https://storage.googleapis.com/deewanweb.firebasestorage.app/fusha%20podcast/season%201/Noora%20Introduction%20English.MP3?GoogleAccessId=service-1064073135631@gcp-sa-firebasestorage.iam.gserviceaccount.com&Expires=1789903823&Signature=Q2FATXY/IDbe8Eyz4REKpT1GMaTYbc645lMUTfBLRn4Um5tjTPHupp2dLZJ0zesZk550UHXkeIm6wg511wyoCfQFzOu9bKRUZ63x%2Bfjk0sq7HvCCVKTIye0idWFzIJSiF9m8/vw%2B9MV3EVdRnrqDh4LUJpiwz/R1L6S5mRZSS01Qw6aGNGhHW0k/7MXyJgD4Lf8HQvoq16JPOk6VXScMh1LZbF2O4o8UP/raT9HXJ4E5dYvPzSGR8avI9Eg48admL96X8SRBc6E7OUjxaJn3AwmMZ56gq%2BIci%2B1qyxEppD0du61tut9vs8B2Ty/17uCnekHyN%2Bu8AyHFHpXxeWw6tg%3D%3D' },
    { id: 2,  titleKey: 'data.podcastfusha.title_episode_2_introduction_to_season_1_ar',      audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/fusha%20podcast%2Fseason%201%2FNoora%20Introduction.MP3?alt=media&token=3ce5121d-1e23-4904-ac8c-645f7ba86e91' },
    { id: 3,  titleKey: 'data.podcastfusha.title_episode_3_introducing_myself',               audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/fusha%20podcast%2Fseason%201%2F%D9%83%D9%8A%D9%81%20%D8%A7%D8%B9%D8%B1%D9%81%20%D8%B9%D9%86%20%D9%86%D9%81%D8%B3%D9%8A%20(%D9%85%D8%B9%D8%AF%D9%84).wav?alt=media&token=29789021-ac14-49bf-aaea-5dede17e9188' },
    { id: 4,  titleKey: 'data.podcastfusha.title_episode_4_my_friends_and_family',            audioUrl: 'https://storage.googleapis.com/deewanweb.firebasestorage.app/fusha%20podcast/season%201/%D8%B9%D8%A7%D8%A6%D9%84%D8%AA%D9%8A%20%D9%88%D8%A7%D8%B5%D8%AF%D9%82%D8%A7%D8%A6%D9%8A.wav?GoogleAccessId=service-1064073135631@gcp-sa-firebasestorage.iam.gserviceaccount.com&Expires=1789904803&Signature=EMMd%2Bhr4VyWOL3t/KfOZD3w9Ddi9Fq/eshsMiZWQPlcTS8M5XNUksUMvQCIsUCQOycMibMMQw0yxQHHFBfJAGgB6OMQLSafxFp3hxzMNxkCeOznPQu6C8eCa6qCYngsYJuJDR9G8OYCHG5lNlQj7b0nWgPn8aQhR4fxZDF%2Bl/Ihf0vHmC0pjTp8vtBd3QwJLsc09UlXCxHniOkTfuOWv7FRqEKa0yslTqBlmxIO/e6AXj3RGpCnFgCUcCLiduwIOTwR%2BYr81AlnpIFYqG9eRPQ0XvO4d1HtSjNTS%2B3ZPyBrQNju%2Bbjimmsr%2BWPVwjJKlcXD9a/BHFqeQfne7HD5Jiw%3D%3D' },
    { id: 5,  titleKey: 'data.podcastfusha.title_episode_5_my_life_and_hobbies',              audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/fusha%20podcast%2Fseason%201%2F%D8%AD%D9%8A%D8%A7%D8%AA%D9%8A%20%D9%88%D9%87%D9%88%D8%A7%D9%8A%D8%A7%D8%AA%D9%8A.wav?alt=media&token=bffc9270-1f64-46fb-b38d-57690f8dbd20' },
    { id: 6,  titleKey: 'data.podcastfusha.title_episode_6_vacation',                         audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/fusha%20podcast%2Fseason%201%2F%D8%A7%D9%84%D8%B9%D8%B7%D9%84%D8%A9.wav?alt=media&token=108eaca3-bed3-418d-ae38-b3514b2bfe72' },
    { id: 7,  titleKey: 'data.podcastfusha.title_episode_7_my_work',         audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/fusha%20podcast%2Fseason%201%2F%D8%B9%D9%85%D9%84%D9%8A.wav?alt=media&token=ec281f58-710b-4699-8720-9145349294fa' },
    { id: 8,  titleKey: 'data.podcastfusha.title_episode_8_a_tour_of_my_home',        audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/fusha%20podcast%2Fseason%201%2F%D8%AC%D9%88%D9%84%D8%A9%20%D9%81%D9%8A%20%D9%85%D9%86%D8%B2%D9%84%D9%8A.wav?alt=media&token=e82a72fd-dd86-4fac-b78d-7353f0877cb9' },
    { id: 9,  titleKey: 'data.podcastfusha.title_episode_9_my_favorite_restaurant',         audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/fusha%20podcast%2Fseason%201%2F%D9%85%D8%B7%D8%B9%D9%85%D9%8A%20%D8%A7%D9%84%D9%85%D9%81%D8%B6%D9%84.wav?alt=media&token=24a0dbdc-65a2-4d71-bc5e-116b8fac6bda' },
    { id: 10, titleKey: 'data.podcastfusha.title_episode_10_my_dog_zaatar',           audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/fusha%20podcast%2Fseason%201%2F%D9%83%D9%84%D8%A8%D9%8A%20%D8%B2%D8%B9%D8%AA%D8%B1.wav?alt=media&token=e640ee9f-1157-4e61-8bc9-69196d63a004' },
    { id: 11, titleKey: 'data.podcastfusha.title_episode_11_jabal_al_weibdeh',  audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/fusha%20podcast%2Fseason%201%2F%D8%AC%D8%A8%D9%84%20%D8%A7%D9%84%D9%88%D9%8A%D8%A8%D8%AF%D9%87.wav?alt=media&token=fdfe57fa-efc0-46fa-bc52-b2ef64740fc7' },
    { id: 12, titleKey: 'data.podcastfusha.title_episode_12_friendship',  audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/fusha%20podcast%2Fseason%201%2F%D8%A7%D9%84%D8%B5%D8%AF%D8%A7%D9%82%D8%A9%20(%D9%85%D8%B9%D8%AF%D9%84).wav?alt=media&token=2de69824-f93d-4002-a7b4-51ab5391694d' },
];

// Season 2

// const season2Episodes: Episode[] = [
//     { id: 1,  titleKey: 'data.podcasts.data.title_episode_1_introduction_to_season_2',              audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%202%2FEpisode1.mp3?alt=media&token=b8fa84b3-676e-4c14-b52b-c3bc2767a762' },
//     { id: 2,  titleKey: 'data.podcasts.data.title_episode_2_how_to_be_vegetarian_in_jordan',         audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%202%2FEpisode2.mp3?alt=media&token=d87a4ca4-db2d-48aa-817b-b7b05ff196ef' },
//     { id: 3,  titleKey: 'data.podcasts.data.title_episode_3_to_palestine_with_love',                 audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%202%2FEpisode3.mp3?alt=media&token=4efe7b0f-61ae-4403-a4e4-10d6fb0ef513' },
//     { id: 4,  titleKey: 'data.podcasts.data.title_episode_4_cross_continental_conversations',        audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%202%2FEpisode4.mp3?alt=media&token=edef57b6-f49c-42fd-9e2f-ebc1bb43796e' },
//     { id: 5,  titleKey: 'data.podcasts.data.title_episode_5_fitness_not_so_first',                   audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%202%2FEpisode5.mp3?alt=media&token=b5ab23d8-a2ad-42bd-b196-8e9abbc5810d' },
//     { id: 6,  titleKey: 'data.podcasts.data.title_episode_6_ready_for_take_off',                     audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%202%2FEpisode6.mp3?alt=media&token=e4560c37-e990-4a1b-88ca-4dda7e6cb029' },
//     { id: 7,  titleKey: 'data.podcasts.data.title_episode_7_culture_vs_culture',                     audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%202%2FEpisode7.mp3?alt=media&token=c9be9aa0-5bee-4760-9042-7e8fb57097b7' },
//     { id: 8,  titleKey: 'data.podcasts.data.title_episode_8_tango',                                  audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%202%2FEpisode8.mp3?alt=media&token=10d9bfb9-b54c-438f-9f92-f269fe368708' },
//     { id: 9,  titleKey: 'data.podcasts.data.title_episode_9_arabic_religion_and_the_middle_east',    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%202%2FEpisode9.mp3?alt=media&token=7eb488ee-7ca9-4ac8-baec-0c045a747d31' },
//     { id: 10, titleKey: 'data.podcasts.data.title_episode_10_retired_but_not_tired',                 audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%202%2FEpisode10.mp3?alt=media&token=10f17efd-db61-475f-b3ae-2cf8fea588b4' },
//     { id: 11, titleKey: 'data.podcasts.data.title_episode_11_one_race_human',                        audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%202%2FEpisode11.mp3?alt=media&token=ec44738c-6443-457a-afc3-6428f67788aa' },
// ];

// // Season 3

// const season3Episodes: Episode[] = [
//     { id: 1,  titleKey: 'data.podcasts.data.title_episode_1_introduction_to_season_3',        audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%203%2FEpisode1.mp3?alt=media&token=af71d54c-9b12-4a9a-b3c1-a207281d493a' },
//     { id: 2,  titleKey: 'data.podcasts.data.title_episode_2_the_real_rugby_spirit',            audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%203%2FEpisode2.mp3?alt=media&token=dff4619c-c348-4766-b928-51edcba51156' },
//     { id: 3,  titleKey: 'data.podcasts.data.title_episode_3_minutes_with_a_doctor',            audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%203%2FEpisode3.mp3?alt=media&token=110b6b86-edbe-4c54-85d5-eaa26a37a8f8' },
//     { id: 4,  titleKey: 'data.podcasts.data.title_episode_4_difference_is_beautiful',          audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%203%2FEpisode4.mp3?alt=media&token=da5353a0-49f3-47a3-a0a8-29f27c6312d5' },
//     { id: 5,  titleKey: 'data.podcasts.data.title_episode_5_ramadan_mubarak_eat_less_think_more', audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%203%2FEpisode5.mp3?alt=media&token=7a4cc12d-f436-4b2b-85f5-73ad8898d219' },
//     { id: 6,  titleKey: 'data.podcasts.data.title_episode_6_bint_battuta',                     audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%203%2FEpisode6.mp3?alt=media&token=db651f0c-f63b-490d-b029-26cdc060fc31' },
//     { id: 7,  titleKey: 'data.podcasts.data.title_episode_7_bunch_of_love',                    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%203%2FEpisode7.mp3?alt=media&token=8733d689-7f77-49a9-8ced-0e788785816f' },
//     { id: 8,  titleKey: 'data.podcasts.data.title_episode_8_tatreez_palestinian_embroidery',   audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%203%2FEpisode8.mp3?alt=media&token=630cd586-1eda-498b-a910-f84eb1a8cb2e' },
//     { id: 9,  titleKey: 'data.podcasts.data.title_episode_9_feels_like_home',                  audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%203%2FEpisode9.mp3?alt=media&token=e4ea9028-3108-4f87-a715-a68215776c0d' },
//     { id: 10, titleKey: 'data.podcasts.data.title_episode_10_pierro_the_teacher_and_student',  audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%203%2FEpisode10.mp3?alt=media&token=66657c75-65b2-4a62-a295-e3ab4ec29032' },
//     { id: 11, titleKey: 'data.podcasts.data.title_episode_11_get_to_know_a_jordanian',         audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%203%2FEpisode11.mp3?alt=media&token=b868a0ba-e704-45fb-8a4f-6106ef716407' },
// ];

// // Season 4

// const season4Episodes: Episode[] = [
//     { id: 1, titleKey: 'data.podcasts.data.title_episode_1_in_the_vegetable_shop',        audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%204%2FEpisode1.mp3?alt=media&token=320d530d-88af-4ad2-a5eb-9fa638fafca5' },
//     { id: 2, titleKey: 'data.podcasts.data.title_episode_2_language_and_society',         audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%204%2FEpisode2.mp3?alt=media&token=04030944-e91c-4df5-acf6-9aecfd5ba784' },
//     { id: 3, titleKey: 'data.podcasts.data.title_episode_3_my_best_friends',              audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%204%2FEpisode3.mp3?alt=media&token=a3978daf-7994-4efc-8399-68b560e1f237' },
//     { id: 4, titleKey: 'data.podcasts.data.title_episode_4_integration_in_arab_societies', audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%204%2FEpisode4.mp3?alt=media&token=a3bd15ad-6e3e-4264-afa7-70c61b79df20' },
// ];

// // Season 5

// const season5Episodes: Episode[] = [
//     { id: 1,  titleKey: 'data.podcasts.data.title_episode_1_self_introduction',          audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%205%2FEpisode1.mp3?alt=media&token=34c3d0f3-a7de-4fa9-bf98-0a100bccdef0' },
//     { id: 2,  titleKey: 'data.podcasts.data.title_episode_2_friends_and_family',         audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%205%2FEpisode2.mp3?alt=media&token=0f0aa50f-c0ec-4853-aa63-4d9e99698c85' },
//     { id: 3,  titleKey: 'data.podcasts.data.title_episode_3_daily_routine_and_hobbies',  audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%205%2FEpisode3.mp3?alt=media&token=44954035-f1e5-4096-99a0-3efe39a56c33' },
//     { id: 4,  titleKey: 'data.podcasts.data.title_episode_4_my_vacation',                audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%205%2FEpisode4.mp3?alt=media&token=044ba56a-cc9b-4400-ac66-cb1aae69520a' },
//     { id: 5,  titleKey: 'data.podcasts.data.title_episode_5_talking_about_work',         audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%205%2FEpisode5.mp3?alt=media&token=5e926aac-6975-4f3c-96bd-7b1f4a08b5cf' },
//     { id: 6,  titleKey: 'data.podcasts.data.title_episode_6_house_tours',                audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%205%2FEpisode6.mp3?alt=media&token=e0fefeea-5d27-469c-ab36-cfe1e5caf852' },
//     { id: 7,  titleKey: 'data.podcasts.data.title_episode_7_my_favorite_restaurant',     audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%205%2FEpisode7.mp3?alt=media&token=0831c8e9-0dcc-4fa5-b98c-7f3a8f317c32' },
//     { id: 8,  titleKey: 'data.podcasts.data.title_episode_8_my_cat_simsim',              audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%205%2FEpisode8.mp3?alt=media&token=171024a5-5931-40c9-b1c6-1ee675295673' },
//     { id: 9,  titleKey: 'data.podcasts.data.title_episode_9_jabal_al_weibdeh',           audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%205%2FEpisode9.mp3?alt=media&token=0bf5731b-41ec-4dc8-b5f5-3f809d4cb099' },
//     { id: 10, titleKey: 'data.podcasts.data.title_episode_10_friendship',                audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%205%2FEpisode10.mp3?alt=media&token=34eaa230-d1d6-4eff-939d-c2a8f4f43d1b' },
// ];

// Seasons array

export const seasons: Season[] = [
    {
        seasonNumber: 1,
        developedByKey: "data.podcastsfusha.content.developer_noora_mutaz",
        episodes: season1Episodes,
        bookCover: '/assets/images/podcast/fusha-cover.webp',
        bookAltKey: 'data.podcasts.data.bookalt_guide_to_deewan_podcast_season_1_book_cover',
        reverse: false,
        bookLink: '/books/podcasts/season-1',

    },
    // {
    //     seasonNumber: 2,
    //     hostedByKey: 'data.podcasts.data.hostedby_sara_al_zyoud',
    //     episodes: season2Episodes,
    //     bookCover: '/assets/images/books/podcasts/podcast2.webp',
    //     bookAltKey: 'data.podcasts.data.bookalt_guide_to_deewan_podcast_season_2_book_cover',
    //     reverse: true,
    //     bookLink: '/books/podcasts/season-2',
    // },
    // {
    //     seasonNumber: 3,
    //     hostedByKey: 'data.podcasts.data.hostedby_angela_dudley',
    //     episodes: season3Episodes,
    //     bookCover: '/assets/images/books/podcasts/podcast3.webp',
    //     bookAltKey: 'data.podcasts.data.bookalt_guide_to_deewan_podcast_season_3_book_cover',
    //     reverse: false,
    //     bookLink: '/books/podcasts/season-3',
    // },
    // {
    //     seasonNumber: 4,
    //     hostedByKey: 'data.podcasts.data.hostedby_duha_hamad',
    //     episodes: season4Episodes,
    //     bookCover: '/assets/images/books/podcasts/podcast4.webp',
    //     bookAltKey: 'data.podcasts.data.bookalt_guide_to_deewan_podcast_season_4_book_cover',
    //     reverse: true,
    //     bookLink: '/books/podcasts/season-4',
    // },
    // {
    //     seasonNumber: 5,
    //     hostedByKey: 'data.podcasts.data.hostedby_raghad_dabbour',
    //     episodes: season5Episodes,
    //     bookCover: '/assets/images/books/podcasts/podcast5.webp',
    //     bookAltKey: 'data.podcasts.data.bookalt_guide_to_deewan_podcast_season_5_book_cover',
    //     reverse: false,
    //     bookLink: '/books/podcasts/season-5',
    // },
];
