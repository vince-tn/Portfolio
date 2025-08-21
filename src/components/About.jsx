import { useEffect, useRef, useState } from "react";
import './About.css';

export default function About() {
  const aboutRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className={`about-section ${isVisible ? "fade-in" : ""}`}
    >
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h1>About Me</h1>
            <p>
              Hi, I'm Paul Vincent, a software developer from the Philippines with a growing interest in full-stack development.
            <br/><br/>Outside of coding, I also like to explore movies, books, music, and even anime just like everybody else.
            </p>
            <br/>
            <div className="about-icons">
              <a href="https://letterboxd.com/Vince_tn/" target="_blank" rel="noopener noreferrer">
                <img src="/icons/letterboxd.svg" alt="Letterboxd" />
              </a>
              <a href="https://www.goodreads.com/user/show/193170110-paul-alcantara" target="_blank" rel="noopener noreferrer">
                <img src="/icons/goodreads.png" alt="Goodreads" />
              </a>
              <a href="https://open.spotify.com/user/21ejj7gjbgpyqvi46nbkjbwdq" target="_blank" rel="noopener noreferrer">
                <img src="/icons/spotify.png" alt="Spotify" />
              </a>
              <a href="https://myanimelist.net/profile/Vince_tn" target="_blank" rel="noopener noreferrer">
                <img src="/icons/mal.png" alt="MyAnimeList" />
              </a>
            </div>
          </div>
          <div className="about-button">
            <button
              onClick={() => window.open(
                "https://docs.google.com/document/d/1LHlS8IWgGzowQJ9I6tNBINULDhjaufLXNWCA8ZKG5qM/edit?usp=sharing",
                "_blank"
              )}
              >
              <span className="arrow"></span>→ Check out my CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
