import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/home.tsx'
import About from '../src/pages/about.tsx'
import Contact from '../src/pages/contact.tsx'

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