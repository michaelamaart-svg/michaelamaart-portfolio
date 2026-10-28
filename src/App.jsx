
import React, { useState } from "react";
import "./App.css";
import MissionHome from "./MissionHome";

const projects = [
  {
    number: "01",
    name: "Kay's Wine & Dine",
    category: "HOSPITALITY · WEB DESIGN",
    description:
      "A digital destination designed to bring dining, atmosphere and memorable experiences together.",
    planet: "planet-rose",
    symbol: "✳",
    status: "MISSION COMPLETE",
    tags: ["Web Design", "UI / UX"],
  },
  {
    number: "02",
    name: "Kay's Cart",
    category: "PERSONAL PROJECT · PWA",
    description:
      "A practical shopping list and budget tracker built to make everyday shopping easier.",
    planet: "planet-cyan",
    symbol: "◉",
    status: "IN DEVELOPMENT",
    tags: ["Vue", "PWA", "Budgeting"],
  },
  {
    number: "03",
    name: "Modern Art Gallery",
    category: "CREATIVE PROJECT · WEB",
    description:
      "A contemporary digital gallery where visual storytelling meets a clean, modern experience.",
    planet: "planet-violet",
    symbol: "✧",
    status: "MISSION COMPLETE",
    tags: ["Design", "Creative"],
  },
];

const skills = [
  { name: "HTML & CSS", type: "WEB SYSTEMS" },
  { name: "JavaScript", type: "MISSION LOGIC" },
  { name: "React", type: "INTERACTIVE SYSTEMS" },
  { name: "Vue", type: "FRONTEND EXPLORATION" },
  { name: "WordPress", type: "DIGITAL WORLDS" },
  { name: "UI / UX Design", type: "CREW EXPERIENCE" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      {/* Space background */}
      <div className="space-background" aria-hidden="true">
        <div className="space-glow glow-one" />
        <div className="space-glow glow-two" />
        <div className="space-grid" />
        <div className="space-stars stars-one" />
        <div className="space-stars stars-two" />
      </div>

      {/* Navigation */}
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-icon">✦</span>
          <span>
            <strong>ORBIT</strong>
            <small>CREATIVE UNIVERSE</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>
            01 / HOME
          </a>
          <a href="#missions" onClick={closeMenu}>
            02 / MISSIONS
          </a>
          <a href="#crew" onClick={closeMenu}>
            03 / CREW
          </a>
          <a href="#contact" onClick={closeMenu}>
            04 / CONTACT
          </a>
        </nav>

        <div className="system-status">
          <span className="status-dot" />
          SYSTEM ONLINE
        </div>
      </header>

      {/* Homepage with moving planets */}
      <MissionHome />

      {/* Scrolling specialties ticker */}
      <div className="ticker" aria-label="Portfolio specialties">
        <div className="ticker-track">
          {[0, 1].map((copy) => (
            <div className="ticker-group" key={copy}>
              <span>WEB DEVELOPMENT</span>
              <b>✦</b>
              <span>UI / UX DESIGN</span>
              <b>✦</b>
              <span>DIGITAL EXPLORATION</span>
              <b>✦</b>
              <span>CREATIVE THINKING</span>
              <b>✦</b>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Archives */}
      <section
        className="missions section-shell section-space"
        id="missions"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" /> THE EXPEDITION LOG
            </p>

            <h2>
              MISSION <span className="gradient-text">ARCHIVES.</span>
            </h2>

            <p className="section-description">
              A collection of worlds I've designed, developed and explored.
            </p>
          </div>

          <span className="section-index">ARCHIVE_001—003</span>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className={`project-art ${project.planet}`}>
                <span className="project-number">
                  MISSION {project.number}
                </span>

                <div className="project-orbit">
                  <div className="project-sphere">
                    {project.symbol}
                  </div>
                </div>

                <span className="project-art-caption">
                  UNKNOWN / DISCOVERED
                </span>

                <span className="project-art-corner">↗</span>
              </div>

              <div className="project-info">
                <div className="project-meta">
                  <span>{project.category}</span>

                  <span className="project-status">
                    <span className="status-dot" />
                    {project.status}
                  </span>
                </div>

                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="archive-note">
          <span>✳</span> MORE WORLDS ARE CURRENTLY UNDER CONSTRUCTION.
        </p>
      </section>

      {/* Crew profile */}
      <section className="crew section-shell section-space" id="crew">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" /> PERSONNEL FILE
            </p>

            <h2>
              MEET THE <span className="gradient-text">COMMANDER.</span>
            </h2>
          </div>

          <span className="section-index">CREW_FILE_001</span>
        </div>

        <div className="crew-layout">
          <div className="crew-photo-area">
            <div className="crew-frame">
              <img
                src="/my-photo.jpg"
                alt="Portrait of the portfolio creator"
                onError={(event) => {
                  event.currentTarget.style.display = "none";

                  const placeholder =
                    event.currentTarget.nextElementSibling;

                  if (placeholder) {
                    placeholder.style.display = "flex";
                  }
                }}
              />

              <div className="photo-placeholder">
                <span>✦</span>
                <strong>ASTRONAUT PORTRAIT</strong>
                <small>ADD YOUR PHOTO TO /public/my-photo.jpg</small>
              </div>
            </div>

            <span className="crew-photo-caption">
              CREW MEMBER // 001
            </span>
          </div>

          <div className="crew-copy">
            <span className="mini-label">
              HELLO, FELLOW EXPLORER.
            </span>

            <h3>
              Curious mind.
              <br />
              <span className="gradient-text">Creative spirit.</span>
            </h3>

            <p>
              I'm a developer and digital creator who enjoys turning ideas
              into interactive experiences. I believe a website should do
              more than look good — it should feel intuitive, tell a story
              and give people something memorable to explore.
            </p>

            <p>
              I'm continuing to grow my skills, experiment with new
              technologies and build projects that reflect both creativity
              and purpose. This portfolio is my mission log.
            </p>

            <div className="crew-facts">
              <div>
                <span>01</span>
                <small>CREATIVE PROBLEM SOLVER</small>
              </div>

              <div>
                <span>∞</span>
                <small>ALWAYS LEARNING</small>
              </div>
            </div>

            <a className="text-link" href="#contact">
              ESTABLISH COMMUNICATION <span>↗</span>
            </a>
          </div>
        </div>

        {/* Skills */}
        <div className="skills-block">
          <div className="skills-heading">
            <span className="mini-label">CREW CAPABILITIES</span>
            <span className="section-index">SKILL MATRIX / 001</span>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill.name}>
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{skill.name}</strong>
                <small>{skill.type}</small>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        className="contact section-shell section-space"
        id="contact"
      >
        <div className="contact-panel">
          <div className="contact-decoration" aria-hidden="true">
            <div className="contact-orbit" />
            <div className="contact-orb">✦</div>
          </div>

          <div className="contact-copy">
            <p className="eyebrow">
              <span className="eyebrow-line" /> INCOMING TRANSMISSION
            </p>

            <h2>
              HAVE A MISSION
              <br />
              <span className="gradient-text">FOR ME?</span>
            </h2>

            <p>
              Have an idea, a project or an opportunity to explore together?
              Let's make contact and see what we can create.
            </p>

            <a
              className="button button-primary"
              href="mailto:your-email@example.com?subject=Let's%20work%20together"
            >
              <span>↗</span> SEND A TRANSMISSION
            </a>

            <small className="contact-note">
              Replace the example email address with your real one.
            </small>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-icon">✦</span>
          <span>
            <strong>ORBIT</strong>
            <small>CREATIVE UNIVERSE</small>
          </span>
        </a>

        <p>MADE WITH CURIOSITY, CODE & A LITTLE COSMIC MAGIC.</p>

        <a href="#home" className="back-top">
          BACK TO ORBIT ↑
        </a>
      </footer>
    </main>
  );
}

export default App;
