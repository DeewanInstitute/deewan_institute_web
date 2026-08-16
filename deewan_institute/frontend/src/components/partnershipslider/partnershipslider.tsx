import styles from "./partnershipslider.module.scss";

function PartnershipSlider() {
  const partners = [
    {
      name: "Jadal",
      url: "https://www.instagram.com/jadalbookshop.jo/",
      img: "../assets/images/partnership/jadal.webp"
    },
    {
      name: "The Good Bookshop",
      url: "https://goodbookshopjo.com/",
      img: "../assets/images/partnership/thegoodbookshop.webp",
    },
    {
      name: "Save the Children",
      url: "https://savethechildren.org.jo/en",
      img: "../assets/images/partnership/savethechildren.webp",
    },
    {
      name: "Medecins Sans Frontieres",
      url: "https://www.msf.org/",
      img: "../assets/images/partnership/partnership3.webp",
    },
    {
      name: "Instituto de Cultura Árabe",
      url: "https://incaco.org/",
      img: "../assets/images/partnership/partnership4.webp",
    },
    {
      name: "Università Ca' Foscari",
      url: "https://www.unive.it/",
      img: "../assets/images/partnership/partnership5.webp",
    },
    {
      name: "Darna Hostel",
      url: "https://darnahostel.com/",
      img: "../assets/images/partnership/darnahostel.webp",
    },
    {
      name: "Senatsverwaltung für Arbeit, Soziales, Gleichstellung, Integration, Vielfalt und Antidiskriminierung ",
      url: "https://www.berlin.de/",
      img: "../assets/images/partnership/bp1.webp",
    },
    {
      name: "Anerkennung von Bildungsveranstaltungen nach dem Niedersächsischen Bildungsurlaubsgesetz (NBildUG) ",
      url: "https://www.niedersachsen.de/",
      img: "../assets/images/partnership/bp2.webp",
    },
    {
      name: "Hamburger Institut für Berufliche Bildung",
      url: "https://www.hamburg.de/",
      img: "../assets/images/partnership/bp3.webp",
    },
    {
      name: "Landesamt für Soziales, Jugend und Versorgung Rheinland-Pfalz",
      url: "https://www.rlp.de/",
      img: "../assets/images/partnership/bp4.webp",
    },
    {
      name: "Ministerium für Wirtschaft, Innovation, Digitales und Energie",
      url: "https://www.saarland.de/",
      img: "../assets/images/partnership/bp5.webp",
    },
    {
      name: "Ministerium für Bildung, Jugend und Sport",
      url: "https://mbjs.brandenburg.de/",
      img: "../assets/images/partnership/bp6.webp",
    },
  ];

  return (
    <div className={`${styles.ourclients} container my-4 my-md-5`}>
      <div className={styles.clientsWrap}>
        <div className={styles.sliderTrack}>
          {/* First Set - Original Partners */}
          {partners.map((partner, index) => (
            <div className={styles.slide} key={`original-${index}`}>
              <a
                href={partner.url}
                className="text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={styles.partnerImg}
                  src={partner.img}
                  alt={partner.name}
                  loading="lazy"
                />
              </a>
            </div>
          ))}

          {/* Second Set - Duplicates for Seamless Loop */}
          {partners.map((partner, index) => (
            <div className={styles.slide} key={`duplicate-${index}`}>
              <a
                href={partner.url}
                className="text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={styles.partnerImg}
                  src={partner.img}
                  alt={partner.name}
                  loading="lazy"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PartnershipSlider;
