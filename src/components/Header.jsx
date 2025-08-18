import { useState } from "react";
import './Header.css';

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
                  <img src="src/assets/logo.svg" alt="Front Image" />
                </div>
                <div className="flip-back">
                  <img src="src/assets/profpic.png" alt="Back Image" />
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
            <a href="#about"><button>About</button></a>
            <a href="#projects"><button>Projects</button></a>
            <a href="#footer"><button>Contacts</button></a>
          </div>
        </div>
      </div>
    </header>
  );
}
