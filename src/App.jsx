import React, { useState } from 'react'
import './App.css'
import './SpaceEffects.css'

const planets = [
  {
    name: 'Mercury',
    description: 'My technical skills and the tools I use to build websites.',
    color: '#9deaff',
    destination: 'skills'
  },
  {
    name: 'Venus',
    description: 'My creativity, design interests and love for exploring new ideas.',
    color: '#c4a1ff',
    destination: 'about'
  },
  {
    name: 'Earth',
    description: 'Get to know me, my story and my journey into web development.',
    color: '#5de4ff',
    destination: 'about'
  },
  {
    name: 'Mars',
    description: 'Explore the projects I have created and the skills I have developed.',
    color: '#ff8066',
    destination: 'projects'
  },
  {
    name: 'Jupiter',
    description: 'Discover my education and learning journey.',
    color: '#e8b890',
    destination: 'education'
  },
  {
    name: 'Neptune',
    description: 'Have a project in mind? Get in touch with me.',
    color: '#7d8cff',
    destination: 'contact'
  }
]

function InteractivePlanets() {
  const [selectedPlanet, setSelectedPlanet] = useState(null)

  const activePlanet = planets.find(
    (planet) => planet.name === selectedPlanet
  )

  return (
    <div className="planet-explorer">
      <p className="planet-hint">✦ SELECT A PLANET TO EXPLORE ✦</p>

      <div className="planet-list">
        {planets.map((planet) => (
          <button
            key={planet.name}
            type="button"
            className={`planet-option ${selectedPlanet === planet.name ? 'active' : ''}`}
            style={{ '--planet-color': planet.color }}
            onClick={() =>
              setSelectedPlanet(
                selectedPlanet === planet.name ? null : planet.name
              )
            }
            aria-expanded={selectedPlanet === planet.name}
          >
            <span className="planet-sphere" />
            <span className="planet-name">{planet.name}</span>
          </button>
        ))}
      </div>

      {activePlanet && (
        <div className="planet-info" key={activePlanet.name}>
          <span className="planet-info-label">TRANSMISSION RECEIVED</span>
          <h3>{activePlanet.name}</h3>
          <p>{activePlanet.description}</p>

          <button
            type="button"
            className="planet-explore-button"
            onClick={() => {
              const section = document.getElementById(
                activePlanet.destination
              )

              if (section) {
                section.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            Explore Destination ↗
          </button>
        </div>
      )}
    </div>
  )
}

function App() {
  const handleContactSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')
    const emailSubject = encodeURIComponent(subject)
    const emailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )

    window.location.href = `mailto:YOUR_EMAIL@example.com?subject=${emailSubject}&body=${emailBody}`
  }

  return (
    <div className="portfolio">
      <div className="aurora-background"></div>

      <div className="solar-system">
        <div className="sun"></div>
        <div className="orbit orbit-1"><span className="planet mercury" data-name="Mercury"></span></div>
        <div className="orbit orbit-2"><span className="planet venus" data-name="Venus"></span></div>
        <div className="orbit orbit-3"><span className="planet earth" data-name="Earth"></span></div>
        <div className="orbit orbit-4"><span className="planet mars" data-name="Mars"></span></div>
        <div className="orbit orbit-5"><span className="planet jupiter" data-name="Jupiter"></span></div>
        <div className="orbit orbit-6"><span className="planet saturn" data-name="Saturn"></span></div>
        <div className="orbit orbit-7"><span className="planet uranus" data-name="Uranus"></span></div>
        <div className="orbit orbit-8"><span className="planet neptune" data-name="Neptune"></span></div>
      </div>

      <InteractivePlanets />

      <nav className="navbar">
        <a href="#home" className="logo">M</a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Connect ↗
        </a>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <p className="small-heading">WELCOME TO MY DIGITAL WORLD</p>

          <h1>
            HELLO, I'M <span>MICHAELA</span>
          </h1>

          <h2>Software Developer in the Making</h2>

          <p className="hero-description">
            I'm a software development student who enjoys creating
            websites, exploring new technologies and bringing creative
            ideas to life through code.
          </p>

          <p className="availability">
            <span className="status-dot"></span>
            AVAILABLE FOR OPPORTUNITIES
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="main-button">
              View My Work ↗
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me ↗
            </a>
          </div>
        </div>

        <div className="profile-card">
          <div className="profile-card-top">
            <span>PLAYER PROFILE</span>
            <span>LV. 01</span>
          </div>

          <div className="profile-avatar">M</div>

          <h2>Michaela Maart</h2>

          <p className="profile-role">ASPIRING SOFTWARE DEVELOPER</p>

          <div className="profile-line"></div>

          <p className="profile-label">CURRENT SKILLS</p>

          <div className="skill-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>

          <div className="profile-status">
            <span>STATUS</span>
            <span>LEARNING & BUILDING</span>
          </div>

          <div className="profile-status">
            <span>CLASS</span>
            <span>WEB DEVELOPER</span>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-heading">
          <p className="small-heading">GET TO KNOW ME</p>
          <p className="planet-section-tag"><span className="section-planet earth-dot"></span> PLANET EARTH · MY STORY</p>
          <h2>My <span>Story</span></h2>
        </div>

        <div className="about-content">
          <div className="about-main-card">
            <p className="small-heading">PLAYER BACKGROUND</p>

            <h3>A little about me</h3>

            <p>
              Hi, I'm Michaela! I'm a software development student at
              Life Choices Academy with an interest in web development,
              design and technology.
            </p>

            <p>
              My journey hasn't followed the exact path I originally
              imagined, but I've learned that sometimes a change in
              direction can lead you towards something meaningful.
              My faith reminds me that not every change is a setback.
            </p>

            <p>
              I'm currently building my skills, working on projects
              and learning how to turn ideas into functional and
              visually appealing websites.
            </p>

            <p>
              My goal is to continue learning, gain practical
              experience and grow into a confident software developer.
            </p>
          </div>

          <div className="about-side-cards">
            <div className="about-small-card">
              <span className="about-icon">⌘</span>
              <h3>Creative Thinking</h3>
              <p>
                I enjoy exploring ideas and finding creative ways
                to bring designs to life.
              </p>
            </div>

            <div className="about-small-card">
              <span className="about-icon">✧</span>
              <h3>Always Learning</h3>
              <p>
                Every project gives me a chance to practise,
                improve and discover something new.
              </p>
            </div>

            <div className="about-small-card">
              <span className="about-icon">♡</span>
              <h3>Faith & Purpose</h3>
              <p>
                My faith keeps me grounded as I continue growing
                and working towards my goals.
              </p>
            </div>
          </div>
        </div>

        <div className="about-ending">
          <p>MY JOURNEY IS STILL LOADING...</p>
          <span>THE BEST IS YET TO COME ✦</span>
        </div>
      </section>

      <section id="education" className="education-section">
        <div className="education-heading">
          <p className="small-heading">MY PATH SO FAR</p>
          <p className="planet-section-tag"><span className="section-planet saturn-dot"></span> SATURN · MY JOURNEY</p>

          <h2>
            My <span>Journey</span>, My Evolution
          </h2>

          <p>
            Every experience has helped me learn something new
            and shaped the person I am becoming.
          </p>
        </div>

        <div className="education-timeline">
          <div className="timeline-card">
            <span className="timeline-date">2018 - 2022</span>

            <h3>High School Education</h3>

            <p>
              Completed my school education and developed a
              foundation for my future studies.
            </p>

            <span className="timeline-tag">EDUCATION</span>
          </div>

          <div className="timeline-card">
            <span className="timeline-date">2023 - 2024</span>

            <h3>Work Experience</h3>

            <p>
              Gained experience in tutoring and medical practice
              administration, developing communication,
              organisation and problem-solving skills.
            </p>

            <span className="timeline-tag">EXPERIENCE</span>
          </div>

          <div className="timeline-card">
            <span className="timeline-date">2026 - PRESENT</span>

            <h3>Life Choices Academy</h3>

            <p>
              Studying software and web development while
              learning to build responsive websites and
              interactive applications.
            </p>

            <span className="timeline-tag">CURRENTLY LEARNING</span>
          </div>

          <div className="timeline-card">
            <span className="timeline-date">NEXT LEVEL</span>

            <h3>Future Goals</h3>

            <p>
              Continue my studies, gain industry experience
              and develop my skills as a software developer.
            </p>

            <span className="timeline-tag">IN PROGRESS</span>
          </div>
        </div>

        <div className="education-ending">
          <p>THE JOURNEY CONTINUES.</p>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="projects-heading">
          <p className="small-heading">THINGS I'VE CREATED</p>
          <p className="planet-section-tag"><span className="section-planet mars-dot"></span> MARS · PROJECT LAB</p>

          <h2>
            My <span>Projects</span>
          </h2>

          <p>
            A collection of projects I've built to explore,
            create and grow my skills in web development and design.
          </p>
        </div>

        <div className="project-grid">
          <div className="project-card planet-earth-card">
            <span className="project-planet-emoji">🌍</span>
            <div className="project-number">01</div>

            <div className="project-image-placeholder">
              <span>✦</span>
              <h3>Kay's</h3>
              <p>WINE & DINE</p>
            </div>

            <div className="project-info">
              <h3>Kay's Wine & Dine</h3>

              <p>
                A website project focused on design,
                presentation and user experience.
              </p>

              <div className="project-skills">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>

              <a href="#contact" className="project-link">
                ↗ Coming Soon
              </a>
            </div>
          </div>

          <div className="project-card planet-saturn-card">
            <span className="project-planet-emoji">🪐</span>
            <div className="project-number">02</div>

            <div className="project-image-placeholder art-placeholder">
              <span>✧</span>
              <h3>MODERN</h3>
              <p>ART GALLERY</p>
            </div>

            <div className="project-info">
              <h3>Modern Art Gallery</h3>

              <p>
                A creative gallery website designed to showcase
                modern art through an engaging layout.
              </p>

              <div className="project-skills">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>

              <a href="#contact" className="project-link">
                ↗ Coming Soon
              </a>
            </div>
          </div>

          <div className="project-card planet-mars-card">
            <span className="project-planet-emoji">🔴</span>
            <div className="project-number">03</div>

            <div className="project-image-placeholder food-placeholder">
              <span>⌘</span>
              <h3>FoodBoxx</h3>
              <p>PERFORMANCE FUEL</p>
            </div>

            <div className="project-info">
              <h3>FoodBoxx</h3>

              <p>
                A food subscription web application developed
                as part of a team project.
              </p>

              <div className="project-skills">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Vue</span>
              </div>

              <a
                href="https://foodboxx.onrender.com/login?redirect=/"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                ↗ View Live Project
              </a>
            </div>
          </div>
        </div>

        <div className="projects-ending">
          <div className="projects-code-icon">&lt;/&gt;</div>

          <h3>More projects coming soon...</h3>

          <p>
            I'm always exploring new ideas and technologies.
          </p>

          <a
            href="https://github.com/michaelamaart-svg"
            target="_blank"
            rel="noreferrer"
            className="github-button"
          >
            View My GitHub ↗
          </a>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-heading">
          <p className="small-heading">LET'S CONNECT</p>
          <p className="planet-section-tag"><span className="section-planet neptune-dot"></span> NEPTUNE · LET'S CONNECT</p>

          <h2>
            Let's Build Something <span>Together</span>
          </h2>

          <p>
            Have a project idea, an opportunity or just want
            to connect? I'd love to hear from you.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-card">
            <div className="contact-icon">✉</div>

            <h3>Get in Touch</h3>

            <p>
              I'm open to connecting with people in tech,
              learning from others and exploring new opportunities.
            </p>

            <div className="contact-note">
              <span className="contact-note-dot"></span>
              OPEN TO OPPORTUNITIES
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/michaelamaart-svg"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <form className="contact-form-card" onSubmit={handleContactSubmit}>
            <p className="form-top-label">TRANSMISSION CONSOLE</p>
            <h3>Send a Message</h3>

            <label htmlFor="contact-name">Your Name</label>
            <input id="contact-name" name="name" type="text" placeholder="Enter your name" required />

            <label htmlFor="contact-email">Your Email</label>
            <input id="contact-email" name="email" type="email" placeholder="you@example.com" required />

            <label htmlFor="contact-subject">Subject</label>
            <input id="contact-subject" name="subject" type="text" placeholder="What would you like to discuss?" required />

            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows="5" placeholder="Write your message here..." required></textarea>

            <button className="contact-submit" type="submit">Launch Message ↗</button>
            <p className="form-help">Your email app will open with your message ready to send.</p>
          </form>
        </div>

        <div className="contact-ending">
          <p>THANK YOU FOR VISITING MY DIGITAL SPACE.</p>
          <span>BUILT WITH CURIOSITY & COFFEE ✦</span>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Michaela Maart</p>
        <a href="#home">Back to Top ↑</a>
      </footer>
    </div>
  )
}

export default App
