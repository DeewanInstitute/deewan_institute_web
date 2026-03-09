import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home.tsx'
import About from './pages/about/about.tsx'
import Contact from './pages/contact/contact.tsx'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;