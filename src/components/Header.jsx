import { useState } from "react";
import './Header.css';


function scrollToSection(id, path) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", path);
  }
}

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header>
      <div className="main-container" id='main'>
        <div className="profile">
          <div
            className="flip-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flip-card">
              <div className="flip-inner">
                <div className="flip-front">
                  <img src="/assets/logo.svg" alt="Front Image" />
                </div>
                <div className="flip-back">
                  <img src="/assets/profpic.png" alt="Back Image" />
                </div>
              </div>
            </div>
            <div className={`flip-text ${isHovered ? "visible" : ""}`}>
              <p>
                I'm a Software Developer from the Philippines, specializing in creating functional web applications and exploring new technologies.
              </p>
            </div>
          </div>
          <h1 id='name'>PAUL ALCANTARA</h1>
          <p id='belowname'>SOFTWARE DEVELOPER</p>
          <div className={`navmenu ${isHovered ? "shifted" : ""}`}>
            <button onClick={() => scrollToSection("about", "/about")}>About</button>
            <button onClick={() => scrollToSection("projects", "/projects")}>Projects</button>
            <button onClick={() => scrollToSection("contacts", "/contacts")}>Contacts</button>

          </div>
        </div>
      </div>
    </header>
  );
}
