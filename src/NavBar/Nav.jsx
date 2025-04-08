import { Link } from "react-scroll";
import "./Nav.css";

function Nav() {
  return (
   <div className="lol position-fixed w-100 z-3 d-block">
     <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold text-white" href="#">Mostafa Ashmawy</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="hero" smooth={true} duration={500} offset={-70} className="nav-link text-white">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" smooth={true} duration={500} offset={-300} className="nav-link text-white">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="skill" smooth={true} duration={500} offset={-460} className="nav-link text-white">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link to="projects" smooth={true} duration={500} offset={-200} className="nav-link text-white">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" smooth={true} duration={500} offset={-70} className="nav-link text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
   </div>
  );
}

export default Nav;
