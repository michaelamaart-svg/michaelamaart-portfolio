
import { useState } from "react";
import "./App.css";
import MissionHome from "./MissionHome";

const educationCategories = [
  {
    id: "formal",
    title: "Formal Education",
    symbol: "✦",
    description: "Your formal education details will go here.",
    detail: "Add your qualification, institution and dates here when you're ready."
  },
  {
    id: "courses",
    title: "Courses & Training",
    symbol: "✧",
    description: "Your courses and training will go here.",
    detail: "Add courses, workshops and training you've completed."
  },
  {
    id: "certifications",
    title: "Certifications",
    symbol: "✹",
    description: "Your certifications will go here.",
    detail: "Add your certificates and the organisations that issued them."
  },
  {
    id: "learning",
    title: "Currently Learning",
    symbol: "☾",
    description: "What you're learning right now will go here.",
    detail: "Add the skills, tools or topics you're currently exploring."
  }
];

const projects = [
  {
    title: "The Gallery",
    number: "01",
    description: "A creative project showcasing visual ideas and design.",
    tags: ["Web Design", "Development"],
    visual: "gallery-visual"
  },
  {
    title: "HR Modern Tech",
    number: "02",
    description: "A project focused on modern technology and a professional digital experience.",
    tags: ["Web Development", "UI Design"],
    visual: "hr-visual"
  },
  {
    title: "Foodboxx",
    number: "03",
    description: "A food-related digital project built as part of my development journey.",
    tags: ["Web Development", "Design"],
    visual: "food-visual"
  }
];

const lessons = [
  {
    number: "01",
    title: "The Mission",
    label: "THE GOAL",
    text: "Every project starts with an idea, a goal and something new to explore."
  },
  {
    number: "02",
    title: "The Challenge",
    label: "THE PROBLEM",
    text: "Development comes with unexpected errors, confusing code and moments that need patience."
  },
  {
    number: "03",
    title: "The Discovery",
    label: "THE INVESTIGATION",
    text: "Breaking a problem into smaller steps helps me understand what's happening and find possible solutions."
  },
  {
    number: "04",
    title: "The Lesson",
    label: "THE LEARNING",
    text: "Each challenge gives me a chance to strengthen my problem-solving skills and learn something new."
  },
  {
    number: "05",
    title: "The Breakthrough",
    label: "THE NEXT STEP",
    text: "I take what I've learned into the next attempt and keep improving my approach."
  }
];

function SectionHeading({ eyebrow, title, subtitle, description }) {
  return (
    <div className="section-heading">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function Monogram() {
  return (
    <span className="monogram" aria-label="MM">
      <span>M</span>
      <span>M</span>
    </span>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Meet the Commander", href: "#crew" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Academic Journey", href: "#education" },
    { label: "Lessons from the Universe", href: "#lessons" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="site-header">
      <a className="brand-monogram" href="#home" aria-label="Stellara home">
        <Monogram />
      </a>

      <nav className={`site-nav ${menuOpen ? "site-nav-open" : ""}`}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a className="brand-name" href="#home">
        <strong>STELLARA</strong>
        <span>Created by Michaela</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

function AboutSection() {
  return (
    <section className="crew-section section-shell" id="crew">
      <SectionHeading
        eyebrow="MEET YOUR COMMANDER"
        title="Meet the Commander"
        subtitle="Every universe has a story. This is mine."
        description="A little about the person behind Stellara."
      />

      <div className="about-layout">
        <div className="profile-card">
          <div className="profile-stars"></div>
          <div className="profile-photo">
            <img
              src="/my-photo.jpg"
              alt="Michaela"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            <div className="profile-monogram">
              <Monogram />
            </div>
          </div>
          <p className="profile-kicker">YOUR FRIENDLY NEIGHBOURHOOD DEVELOPER</p>
          <h3>Michaela</h3>
          <p className="profile-role">Developer</p>
          <p className="profile-tagline">Curious mind. Creative spirit. Always learning.</p>
          <div className="profile-status">
            <span className="status-dot"></span>
            Exploring new possibilities
          </div>
        </div>

        <div className="about-copy">
          <p className="section-eyebrow">MY STORY</p>
          <h3>Building, learning and finding my way through the universe of code.</h3>
          <p>
            I'm Michaela, a developer with a passion for building interactive
            digital experiences and continuously expanding my technical skills.
          </p>
          <p>
            My journey in web development is driven by curiosity, creativity,
            and a commitment to learning. Through building projects and working
            through challenges, I'm developing my abilities, strengthening my
            problem-solving skills, and discovering new ways to bring ideas to life.
          </p>
          <p>
            As I continue to grow as a developer, I'm focused on creating
            meaningful projects, improving my technical knowledge, and preparing
            for opportunities where I can contribute, learn, and grow within the
            technology industry.
          </p>
          <a className="text-link" href="#skills">Explore my skills <span>↗</span></a>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const skills = [
    { name: "HTML & CSS", symbol: "⌘", level: "Web foundations" },
    { name: "JavaScript", symbol: "JS", level: "Interactive experiences" },
    { name: "React", symbol: "⚛", level: "Component-based development" },
    { name: "Vue", symbol: "◇", level: "Frontend development" },
    { name: "WordPress", symbol: "W", level: "Website building" },
    { name: "UI / UX Design", symbol: "✧", level: "Design and usability" }
  ];

  return (
    <section className="skills-section section-shell" id="skills">
      <SectionHeading
        eyebrow="MY TOOLKIT"
        title="My Technical Toolkit"
        subtitle="Every mission requires the right tools."
        description="Explore the technologies and skills I'm using to bring my ideas to life."
      />

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <article className="skill-card" key={skill.name}>
            <span className="skill-number">0{index + 1}</span>
            <div className="skill-symbol">{skill.symbol}</div>
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
            <span className="skill-star">✦</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="projects-section section-shell" id="projects">
      <SectionHeading
        eyebrow="MISSIONS COMPLETED"
        title="My Universe of Projects"
        subtitle="Every idea has the potential to become something extraordinary."
        description="Explore the projects I've brought to life across my universe."
      />

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className={`project-visual ${project.visual}`}>
              <span className="project-number">{project.number}</span>
              <div className="project-orbit project-orbit-one"></div>
              <div className="project-orbit project-orbit-two"></div>
              <div className="project-planet"></div>
              <span className="project-visual-label">STELLARA / PROJECT FILE</span>
            </div>
            <div className="project-content">
              <p className="project-kicker">PROJECT {project.number}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <p className="project-note">More details coming soon <span>✦</span></p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function EducationSection() {
  const [selectedEducation, setSelectedEducation] = useState("formal");
  const selected = educationCategories.find(
    (category) => category.id === selectedEducation
  );

  return (
    <section className="education-section section-shell" id="education">
      <SectionHeading
        eyebrow="MY LEARNING ORBIT"
        title="Academic Journey"
        subtitle="Every new lesson moves me forward."
        description="Discover the educational milestones and learning experiences that are helping me build my future in technology."
      />

      <div className="education-layout">
        <div className="education-map">
          <div className="education-nebula education-nebula-one"></div>
          <div className="education-nebula education-nebula-two"></div>
          <div className="education-starfield">✦　·　✧　·　✦　·　✧　·　✦</div>
          <svg className="education-connections" viewBox="0 0 600 500" aria-hidden="true">
            <circle cx="300" cy="250" r="108" />
            <circle cx="300" cy="250" r="192" />
            <circle cx="300" cy="250" r="232" />
          </svg>

          <div className="education-sun">
            <span>✦</span>
            <strong>MY</strong>
            <strong>JOURNEY</strong>
          </div>

          {educationCategories.map((category, index) => (
            <div
              className={`education-orbit education-orbit-${index + 1}`}
              key={category.id}
            >
              <button
                type="button"
                className={`education-node ${
                  selectedEducation === category.id ? "education-node-active" : ""
                }`}
                aria-pressed={selectedEducation === category.id}
                onClick={() => setSelectedEducation(category.id)}
              >
                <span className="education-node-symbol">{category.symbol}</span>
                <span className="education-node-label">{category.title}</span>
              </button>
            </div>
          ))}
        </div>

        <div className="education-info" aria-live="polite">
          <p className="section-eyebrow">SELECTED DESTINATION</p>
          <span className="education-info-symbol">{selected.symbol}</span>
          <h3>{selected.title}</h3>
          <p>{selected.description}</p>
          <p>{selected.detail}</p>
          <span className="education-info-footer">A journey of continuous growth <span>✦</span></span>
        </div>
      </div>
    </section>
  );
}

function LessonsSection() {
  return (
    <section className="lessons-section section-shell" id="lessons">
      <SectionHeading
        eyebrow="NOTES FROM THE COSMOS"
        title="Lessons from the Universe"
        subtitle="Every challenge is an opportunity to learn."
        description="Explore the problems I've encountered during development, how I approached them, and the lessons I've taken forward."
      />

      <div className="lessons-timeline">
        {lessons.map((lesson) => (
          <article className="lesson-card" key={lesson.number}>
            <div className="lesson-marker">{lesson.number}</div>
            <div className="lesson-content">
              <p className="lesson-label">{lesson.label}</p>
              <h3>{lesson.title}</h3>
              <p>{lesson.text}</p>
            </div>
            <span className="lesson-star">✧</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact-section section-shell" id="contact">
      <SectionHeading
        eyebrow="SEND A SIGNAL"
        title="Let's Connect"
        subtitle="Every universe is better with a little connection."
        description="Let's bring new ideas together — your next message could be the start of something exciting."
      />

      <div className="contact-panel">
        <div className="contact-copy">
          <span className="contact-symbol">✉</span>
          <h3>Have something in mind?</h3>
          <p>
            I'd love to hear from you. Whether it's a project, an opportunity,
            or simply a conversation about technology, let's connect.
          </p>
          <a className="contact-email" href="mailto:michaelamaart@gmail.com">
            <span>✉</span>
            michaelamaart@gmail.com <span>↗</span>
          </a>
        </div>

        <div className="contact-details">
          <a
            className="social-link"
            href="https://www.linkedin.com/in/michaela-maart-bb789b413/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="social-icon">in</span>
            <span>
              <strong>LinkedIn</strong>
              <small>Connect with me professionally</small>
            </span>
            <span className="social-arrow">↗</span>
          </a>

          <a
            className="social-link"
            href="https://github.com/michaelamaart-svg"
            target="_blank"
            rel="noreferrer"
          >
            <span className="social-icon">⌘</span>
            <span>
              <strong>GitHub</strong>
              <small>Explore my code and projects</small>
            </span>
            <span className="social-arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <a className="footer-brand" href="#home">STELLARA</a>
      <p>Created by Michaela · Made with curiosity ✦</p>
      <a href="#home" className="back-to-top">Back to the stars ↑</a>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <div className="page-stars"></div>
      <Navbar />
      <main>
        <AboutSection />
        <MissionHome />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <LessonsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
