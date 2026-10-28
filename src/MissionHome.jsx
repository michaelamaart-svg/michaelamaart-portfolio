
import "./MissionHome.css";

export default function MissionHome() {
  return (
    <section className="mission-home" id="home">
      <div className="mission-copy">
        <p className="mission-label">
          <span className="status-dot"></span>
          PORTFOLIO SYSTEM ONLINE
        </p>

        <h1>
          EXPLORING
          <br />
          <span>NEW WORLDS.</span>
        </h1>

        <p className="mission-description">
          Welcome to my creative universe, where design,
          development, and imagination come together.
          Every project is another mission waiting to launch.
        </p>

        <div className="mission-actions">
          <a href="#missions" className="mission-button">
            EXPLORE MISSIONS ↗
          </a>

          <a href="#contact" className="mission-link">
            CONTACT ME
          </a>
        </div>

        <div className="mission-stats">
          <div>
            <strong>01</strong>
            <span>CREATIVE MIND</span>
          </div>

          <div>
            <strong>∞</strong>
            <span>POSSIBILITIES</span>
          </div>
        </div>
      </div>

      <div className="solar-system">
        <div className="solar-coordinate coordinate-top">
          FIG. 001 — SOLAR EXPLORATION
        </div>

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

        <div className="planet-info">
          <span className="status-dot"></span>
          <div>
            <small>MISSION STATUS</small>
            <strong>EXPLORING THE COSMOS</strong>
          </div>
        </div>

        <div className="solar-coordinate coordinate-bottom">
          CREATIVITY: UNLIMITED · EST. 2026
        </div>
      </div>
    </section>
  );
}
