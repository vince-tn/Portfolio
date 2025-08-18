import React from "react";
import "./Skills.css";

const skillsData = {
  creative: [
    { name: "Adobe Premiere Pro", icon: "/icons/premiere.png", link: "https://www.adobe.com/products/premiere.html" },
    { name: "After Effects", icon: "/icons/aftereffects.png", link: "https://www.adobe.com/products/aftereffects.html" },
    { name: "Photoshop", icon: "/icons/photoshop.png", link: "https://www.adobe.com/products/photoshop.html" },
    { name: "Vegas Pro", icon: "/icons/vegas.png", link: "https://www.vegascreativesoftware.com/" },
    { name: "DaVinci Resolve", icon: "/icons/davinci.png", link: "https://www.blackmagicdesign.com/products/davinciresolve" },
    { name: "Microsoft Office", icon: "/icons/office.png", link: "https://www.microsoft.com/microsoft-365" },
    { name: "AutoCAD", icon: "/icons/autocad.png", link: "https://web.autocad.com/" },
    { name: "OBS", icon: "/icons/obs.png", link: "https://obsproject.com/" }
  ],
  developer: [
    { name: "Python", icon: "/icons/python.png", link: "https://www.python.org/" },
    { name: "React.js", icon: "/icons/react.png", link: "https://react.dev/" },
    { name: "JavaScript", icon: "/icons/javascript.png", link: "https://www.javascript.com/" },
    { name: "HTML", icon: "/icons/html.png", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: "/icons/css.png", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "Tailwind CSS", icon: "/icons/tailwind.png", link: "https://tailwindcss.com/" },
    { name: "C++", icon: "/icons/cpp.png", link: "https://isocpp.org/" },
    { name: "Git", icon: "/icons/git.png", link: "https://git-scm.com/" },
    { name: "Github", icon: "/icons/github.png", link: "https://github.com/" },
    { name: "Vercel", icon: "/icons/vercel.png", link: "https://vercel.com/" },
    { name: "Node.js", icon: "/icons/node.png", link: "https://nodejs.org/" },
    { name: "MongoDB", icon: "/icons/mongodb.png", link: "https://www.mongodb.com/" }
  ],
  other: [
    { name: "Arduino", icon: "/icons/arduino.png", link: "https://www.arduino.cc/" },
    { name: "MATLAB", icon: "/icons/matlab.png", link: "https://www.mathworks.com/products/matlab.html" },
    { name: "Weka", icon: "/icons/weka.png", link: "https://www.weka.io/" },
    { name: "Nmap", icon: "/icons/nmap.png", link: "https://nmap.org/" },
    { name: "Render", icon: "/icons/render.png", link: "https://render.com/" }
  ],
};

const Skills = () => {
  return (
    <section className="skills-section">
      <h1>TECHNOLOGIES I USE</h1>
      <div className="skills-grid">
        <div className="skills-column">
          <h2>Creative & Productivity</h2>
          <div className="skills-icons">
            {skillsData.creative.map((skill, index) => (
              <a
                key={index}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="skill-icon"
                title={skill.name}
              >
                <img src={skill.icon} alt={skill.name} />
              </a>
            ))}
          </div>
        </div>

        <div className="skills-column">
          <h2>Core Developer Stack</h2>
          <div className="skills-icons">
            {skillsData.developer.map((skill, index) => (
              <a
                key={index}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="skill-icon"
                title={skill.name}
              >
                <img src={skill.icon} alt={skill.name} />
              </a>
            ))}
          </div>
        </div>

        <div className="skills-column">
          <h2>More Stuff I Know</h2>
          <div className="skills-icons">
            {skillsData.other.map((skill, index) => (
              <a
                key={index}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="skill-icon"
                title={skill.name}
              >
                <img src={skill.icon} alt={skill.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p>...and many others!</p>
    </section>
  );
};

export default Skills;
