import '../style/navbar.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import logo from '../assets/images/logos/LogoDeewan.svg';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-md bg-transparent align-items-center" id="navBar">
            <div className="container-fluid">
                <a className="navbar-brand d-md-none" href="../index.html">
                    <img src={logo} alt="Deewan Institute Logo" id="mainLogo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-center align-items-center" id="navbarNav">
                    {/* <!-- Left group: Home and Features --> */}
                    <div className="p-2">
                        <ul className="navbar-nav">
                            <li className="nav-item" id="nav-item">
                                <a className="nav-link active" aria-current="page" href="">Home</a>
                            </li>
                            <li className="nav-item active" id="nav-item">
                                <a className="nav-link" href="">About Us</a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- Center: Logo (only on medium+ screens) --> */}
                    <a className="navbar-brand d-none d-md-block" href="">
                        <img src={logo} alt="Deewan Institute Logo" id="mainLogo" />
                    </a>
                    {/* <!-- Right group: Pricing and Contact --> */}
                    <div className="p-2">
                        <ul className="navbar-nav">
                            <li className="nav-item" id="nav-item">
                                <a className="nav-link" href="#">What We Offer</a>
                            </li>
                            <li className="nav-item" id="nav-item">
                                <a className="nav-link" href="">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar