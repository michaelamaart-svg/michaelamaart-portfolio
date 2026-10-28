
import "./MissionHome.css";

export default function MissionHome() {
  return (
    <section className="mission-home" id="home">
      <div className="mission-copy">
        <p className="mission-label">
          <span className="status-dot"></span>
          YOUR FRIENDLY NEIGHBOURHOOD DEVELOPER
        </p>

        <h1>
          Every universe
          <br />
          starts with
          <br />
          <span>an idea.</span>
        </h1>

        <h2 className="mission-welcome">Welcome to Stellara.</h2>

        <p className="mission-description">
          I'm Michaela, a developer who enjoys turning ideas into interactive
          experiences. Explore my universe and discover the projects, skills,
          and ideas I'm bringing to life.
        </p>

        <p className="mission-prompt">
          Choose your destination and begin exploring.
        </p>

        <div className="mission-actions">
          <a href="#projects" className="mission-button">
            EXPLORE MY WORK <span>↗</span>
          </a>
          <a href="#crew" className="mission-link">
            MEET THE COMMANDER <span>↓</span>
          </a>
        </div>

        <div className="mission-stats">
          <div>
            <strong>01</strong>
            <span>CREATIVE MIND</span>
          </div>
          <div>
            <strong>∞</strong>
            <span>THINGS TO LEARN</span>
          </div>
        </div>
      </div>

      <div className="solar-system">
        <div className="solar-coordinate coordinate-top">
          FIG. 001 — MICHAELA'S UNIVERSE
        </div>

        <div className="solar-glow"></div>

        <div className="orbit orbit-one">
          <span className="orbiting-planet planet-cyan"></span>
        </div>

        <div className="orbit orbit-two">
          <span className="orbiting-planet planet-purple"></span>
        </div>

        <div className="orbit orbit-three">
          <span className="orbiting-planet planet-gold"></span>
        </div>

        <div className="main-planet">
          <div className="planet-craters"></div>
          <div className="planet-highlight"></div>
          <div className="planet-ring"></div>
        </div>

        <a href="#crew" className="planet-info">
          <span className="status-dot"></span>
          <span>
            <small>YOUR DESTINATION</small>
            <strong>MEET MICHAELA ↗</strong>
          </span>
        </a>

        <div className="solar-coordinate coordinate-bottom">
          MADE WITH CURIOSITY · EST. 2026
        </div>
      </div>
    </section>
  );
}
