import { useLocation, Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { showLoader, hideLoader } from "../hooks/loader";
import Loader from "./components/loader/loader.tsx";
import Home from "./pages/home/home.tsx";
import About from "./pages/about/about.tsx";
import Contact from "./pages/contact/contact.tsx";
import ArabicCourses from "./pages/arabiccourses/arabicCourses.tsx";
import ArabiTalk from "./pages/arabiccourses/arabiTalk.tsx";
import English from "./pages/foreigncourses/english.tsx";
import Spanish from "./pages/foreigncourses/spanish.tsx";
import German from "./pages/foreigncourses/german.tsx";
import French from "./pages/foreigncourses/french.tsx";
import ArabicKids from "./pages/arabiccourses/arabicKids.tsx";
import ModernME from "./pages/history/modernME.tsx";
import OldME from "./pages/history/oldME.tsx";
import PalestineHistory from "./pages/history/palestineHistory.tsx";
import PeopleOfME from "./pages/history/peopleME";
import IntensiveProgram from "./pages/arabiccourses/intensiveProgram.tsx";
import Calculator from "./pages/calculator/calculator.tsx";
import Visa from "./pages/accommodations/visa.tsx";
import Trips from "./pages/accommodations/trips.tsx";
import Publications from "./pages/books/publications.tsx";
import PublicationInfo from "./pages/books/publicationinfo.tsx";
import CultureEvents from "./pages/cultureevents/cultureEvents.tsx";
import WishList from "./context/wishlist.tsx";
import Cart from "./context/cart.tsx";
import Checkout from "./context/checkout.tsx";
import Podcasts from "./pages/podcasts/podcasts.tsx";
import BildungsurlaubPage from "./pages/bildungsurlaub/bildungsurlaub.tsx";
import NotFound from "./pages/404_page/error.tsx";
import Careers from "./pages/careers/careers.tsx";
import InternshipForm from "./pages/internship/internshipform.tsx";
import Newsletter from "./pages/newsletter/newsletter.tsx";
import ArabiCafe from "./pages/arabiccourses/arabicafe/arabicafe.tsx";
import ArabicJournalism from "./pages/arabiccourses/arabicjournalism/arabicjournalism.tsx";
import DiplomacyArabic from "./pages/arabiccourses/diplomacy/diplomacyarabic.tsx";
import MiddleEasternStudies from "./pages/arabiccourses/middleeastern/middleeasternstudies.tsx";
import MSA from "./pages/arabiccourses/msa/msa.tsx";
import Colloquial from "./pages/arabiccourses/colloquial/colloquial.tsx";
import Mixed from "./pages/arabiccourses/mixed/mixed.tsx";
function AppContent() {
  const location = useLocation();

  useEffect(() => {
    showLoader();
    const timer = setTimeout(hideLoader, 500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Loader />
      <Routes>
        {/* Standard Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Arabic Courses */}

        {/* History Pages */}
        <Route
          path="/middle-eastern-studies/modern-history-of-the-middle-east"
          element={<ModernME />}
        />
        <Route
          path="/middle-eastern-studies/history-of-the-middle-east"
          element={<OldME />}
        />
        <Route
          path="/middle-eastern-studies/the-zionist-project-in-palestine"
          element={<PalestineHistory />}
        />
        <Route
          path="/middle-eastern-studies/people-of-the-middle-east"
          element={<PeopleOfME />}
        />
        {/* Books */}
        <Route path="/publications" element={<Publications />} />
        <Route path="/publications/book/:id" element={<PublicationInfo />} />
        <Route path="/publications/podcast/:id" element={<PublicationInfo />} />

        {/* Accommodation Pages */}
        <Route
          path="/accommodation-and-student-services/visa"
          element={<Visa />}
        />
        <Route
          path="/accommodation-and-student-services/trips"
          element={<Trips />}
        />
        {/* Foreign Courses */}
        <Route path="/foreign-languages/english-course" element={<English />} />
        <Route path="/foreign-languages/spanish-course" element={<Spanish />} />
        <Route path="/foreign-languages/german-course" element={<German />} />
        <Route path="/foreign-languages/french-course" element={<French />} />
        {/* Calculator */}
        <Route path="/calculator" element={<Calculator />} />
        {/* Culture Events */}
        <Route path="/cultureEvents" element={<CultureEvents />} />
        {/* ShopContext */}
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* Podcasts */}
        <Route path="/podcasts" element={<Podcasts />} />
        {/*Bildungsurlaub*/}
        <Route path="/bildungsurlaub" element={<BildungsurlaubPage />} />
        <Route
          path="/bildungsurlaub-courses/"
          element={<BildungsurlaubPage />}
        />
        <Route
          path="/bildungsurlaub-courses"
          element={<BildungsurlaubPage />}
        />

        {/*Careers*/}
        <Route path="/careers" element={<Careers />} />
        {/* Internship */}
        <Route path="/internship" element={<InternshipForm />} />
        {/* Newsletter */}
        <Route path="/newsletter" element={<Newsletter />} />
        {/* ______________________________________________________Arabic Courses______________________________________________ */}
        <Route path="/arabic-courses" element={<ArabicCourses />} />
        <Route path="/arabic-courses/arabi-talk" element={<ArabiTalk />} />
        <Route
          path="/arabic-courses/arabic-for-kids"
          element={<ArabicKids />}
        />
        <Route
          path="/arabic-courses/intensive-program"
          element={<IntensiveProgram />}
        />
        {/* online Arabi Cafe */}
        <Route path="/arabic-courses/arabicafe" element={<ArabiCafe />} />
        {/* Arabic Journalism */}
        <Route path="/arabic-courses/arabic-journalism" element={<ArabicJournalism />} />
        {/* Diplomacy Arabic */}
        <Route path="/arabic-courses/diplomacy-arabic" element={<DiplomacyArabic />} />
        {/* Middle Eastern Studies */}
        <Route
          path="/arabic-courses/middle-eastern-studies"
          element={<MiddleEasternStudies />}
        />
        {/*MSA*/}
        <Route path="/arabic-courses/modern-standard-arabic" element={<MSA />} />
        {/* Colloquial Arabic */}
        <Route path="/arabic-courses/colloquial-arabic" element={<Colloquial />} />
          {/* Mixed Arabic */}
        <Route path="/arabic-courses/mixed-arabic" element={<Mixed />} />
        {/* ______________________________________________________Arabic Courses END______________________________________________ */}

        {/* 404 Route - must be last */}
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
