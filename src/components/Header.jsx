import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Header() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const scrollToSection = (id) => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }, 120);
  };

  // add entrance animation on mount
  useEffect(() => {
    const header = document.querySelector(".header");
    header?.classList.add("header--visible");
  }, []);

  return (
    <header className="header">
      <div className="header__content">
        {/* LOGO */}
        <div className="header__logo-container">
          <Link to="/" className="header__logo">
            <span className="logo-glow">Harsh</span> Yadav
          </Link>
        </div>

        {/* NAV LINKS */}
        <ul className="header__links">
          <li>
            <button className="header__link" onClick={goHome}>
              Home
            </button>
          </li>

          <li>
            <button
              className="header__link"
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
          </li>

          <li>
            <button
              className="header__link"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>
          </li>

          <li>
            <button
              className="header__link header__link--cta"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
