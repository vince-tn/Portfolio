import { useState } from "react";
import "./Projects.css";
import { SiReact, SiPandas, SiCss3, SiScikitlearn, SiMongodb, SiVercel, SiRender, SiNodedotjs, SiPython, SiCplusplus, SiJavascript, SiGoogleforms, SiGooglesheets, SiGooglecalendar } from "react-icons/si";


const projects = [
    {
    name: "This Portfolio Website",
    year: "2025",
    description: "I programmed this personal web app myself to highlight my work and progress in web development and creative tools, while also serving as a platform to practice front-end development and UI/UX design.",
    gif: "/assets/portfolio.gif",
    link: "https://github.com/vince-tn",
    icons: [<SiReact />, <SiJavascript />, <SiCss3 />, <SiNodedotjs />]
  },
  {
    name: "Random Deck Permutation",
    year: "2025",
    description: "A web app where users can shuffle a standard deck of 52 playing cards, customize it by swapping cards, and save their unique combination. if another user's deck matches partially or completely, it gets recorded on a shared leaderboard.",
    gif: "/assets/randomdeck.gif",
    link: "https://randomdeckpermutation.vercel.app/",
    icons: [<SiReact />, <SiJavascript />, <SiCss3 />, <SiNodedotjs />, <SiMongodb />, <SiVercel />, <SiRender />]
  },
  {
    name: "Automatic Bee Monitoring System",
    year: "2024",
    description: "A Python program that monitors two beehives' entry and exit activity using 8 IR sensors via Arduino Mega. The GUI logs and displays real-time in/out detections and saves it to a CSV file.",
    gif: "/assets/beelog.gif",
    link: "https://github.com/vince-tn/Bee-Monitoring-System",
    icons: [<SiPython />, <SiPandas />, <SiCplusplus />, <SiGooglesheets />]
  },
  {
    name: "Bee Activity Machine Learning",
    year: "2024",
    description: "A Python program that analyzes bee nesting and foraging activities using machine learning algorithms such as XGBoost, Random Forest, and Multilayer Perceptron to create a predictive model.",
    gif: "/assets/machinelearning.gif",
    link: "https://github.com/vince-tn/Bee-Activity-Machine-Learning",
    icons: [<SiPython />, <SiPandas />, <SiScikitlearn />, <SiGooglesheets />]
  },
  {
    name: "SLI Meeting Reservation System",
    year: "2023",
    description: "A meeting reservation system made with AppScript in Google Spreadsheet for made for management purposes.",
    gif: "/assets/sli.gif",
    link: "https://sites.google.com/sydenhamlab.com/sli-omrr",
    icons: [<SiJavascript />, <SiGooglesheets />, <SiGoogleforms />, <SiGooglecalendar />]
  },
  {
    name: "Element Search Utility",
    year: "2022",
    description: "An Arduino-based line-following robot using QTR sensors and PID control.",
    gif: "/assets/elementsearch.gif",
    link: "https://github.com/vince-tn/Element-Dictionary",
    icons: [<SiPython />]
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <h1 id="coffee">☕︎</h1>
      <h1 id="projectstitle">SOME OF MY PROJECTS</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <button
            key={index}
            className="project-item"
            onClick={() => setSelectedProject(project)}
          >
            <span className="project-name">{project.name}</span>
            <span className="project-year">{project.year}</span>
            
          </button>
        ))}
      </div>
    {/* modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-left">
              <h2>{selectedProject.name}</h2>
              <p>{selectedProject.description}</p>
              <p> Technologies Used: 
                <span className="project-icons"> 
                    {selectedProject.icons.map((Icon, index) => (
                    <span key={index} className="project-icon"> 
                        {Icon}
                    </span>
                    ))}
                </span>
                </p>
              <button className="visit" onClick={() => window.open(selectedProject.link, "_blank", "noreferrer")}>Visit</button>
              <button className="modal-exit" onClick={() => setSelectedProject(null)}>
                Exit
              </button>
            </div>
            <div className="modal-right">
              <a href={selectedProject.demo} target="_blank" rel="noreferrer">
                <img
                  src={selectedProject.gif}
                  alt={`${selectedProject.name} demo`}
                  className="project-gif"
                  onClick={() => window.open(selectedProject.link, "_blank")}
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

