import { useState } from "react";
import "./App.css";
import MissionHome from "./MissionHome";

const educationCategories = [
  {
    id: "formal",
    title: "Formal Education",
    symbol: "✦",
    description:
      "My academic journey has helped me build a foundation for my future in technology.",
    detail:
      "Life Choices Academy — Software Development, 2026–Present. High School — National Senior Certificate (Matric), completed in 2022."
  },
  {
    id: "courses",
    title: "Courses & Training",
    symbol: "✧",
    description:
      "Additional learning experiences that help me expand my technical knowledge.",
    detail:
      "I've completed Cisco Data Science and Cybersecurity courses to explore different areas of technology."
  },
  {
    id: "certifications",
    title: "Certifications",
    symbol: "✹",
    description:
      "Certificates that recognise the courses and training I have completed.",
    detail:
      "View my Cisco course certificates below."
  },
  {
    id: "learning",
    title: "Currently Learning",
    symbol: "☾",
    description:
      "I'm continuing to develop my technical skills through practice and projects.",
    detail:
      "Explore the technologies and topics I'm currently learning below."
  }
];

const certificates = [
  {
    title: "Introduction to Data Science",
    provider: "Cisco Networking Academy",
    description:
      "Completed through Life Choices Academy on 31 August 2026.",
    link: "https://www.credly.com/badges/a6f5f9bc-a080-41f6-a167-1ba6654b4adc/public_url"
  },
  {
    title: "Introduction to Cybersecurity",
    provider: "Cisco Networking Academy",
    description:
      "Completed through Life Choices Academy on 31 August 2026.",
    link: "https://www.credly.com/badges/3450618f-bad4-42f7-b9d2-d1a1631234d5/public_url"
  }
];

const learningTopics = [
  {
    name: "JavaScript",
    symbol: "JS",
    description:
      "Practising programming logic, functions, events, and interactive features.",
    status: "Learning in progress"
  },
  {
    name: "React",
    symbol: "⚛",
    description:
      "Building reusable components and interactive user interfaces.",
    status: "Learning in progress"
  },
  {
    name: "Vue.js",
    symbol: "◇",
    description:
      "Working with components and building dynamic web applications.",
    status: "Learning in progress"
  },
  {
    name: "Backend Development",
    symbol: "⌘",
    description:
      "Learning how server-side code, routes, and APIs work together.",
    status: "Learning in progress"
  },
  {
    name: "Databases",
    symbol: "▤",
    description:
      "Understanding how applications store, organise, and retrieve data.",
    status: "Learning in progress"
  },
  {
    name: "Git & GitHub",
    symbol: "⑂",
    description:
      "Practising version control, managing changes, and collaborating on projects.",
    status: "Learning in progress"
  }
];

const projects = [
  {
    title: "Pawtopia",
    number: "01",
    description:
      "A pet-focused web project built as part of my software development journey.",
    tags: ["Web Development", "Team Project"],
    visual: "pawtopia-visual",
    image: "/pawtopia.png",
    link: "https://pawtopia-team.vercel.app",
    github: "https://github.com/avivarendse/Pawtopia.git"
  },
  {
    title: "Kay's Cart",
    number: "02",
    description:
      "A shopping list and budget tracker designed to help users organise their shopping and keep track of spending.",
    tags: ["HTML", "CSS", "JavaScript", "PWA"],
    visual: "kays-cart-visual",
    image: "/icon-512(1).png",
    link: "https://stately-crostata-5ffc78.netlify.app",
    github: "https://github.com/michaelamaart-svg/KaysCart-2026.git"
  },
  {
    title: "HR Modern Tech",
    number: "03",
    description:
      "A human resources project focused on employee information and payroll functionality.",
    tags: ["Web Development", "Payroll"],
    visual: "hr-visual",
    image: "/hr-modern-tech.png",
    link: "https://hendrickscial-commits.github.io/modern_tech_back/",
    github: "https://github.com/hendrickscial-commits/modern-tech.git"
  },
  {
    title: "Foodboxx",
    number: "04",
    description:
      "A food-related digital project built as part of my development journey.",
    tags: ["Web Development", "Team Project"],
    visual: "food-visual",
    image: "/foodboxx.png",
    link: "https://foodboxx.onrender.com/login?redirect=/",
    github: "https://github.com/Caleb-Asia/Group-10---Module-3-Core-Project.git"
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
    <span className="monogram" aria-label="M M">
      <span>M</span>
      <span>M</span>
    </span>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#crew" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
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
              src="/my-photo.jpeg"
              alt="Michaela"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            <div className="profile-monogram">
              <Monogram />
            </div>
          </div>

          <p className="profile-kicker">
            YOUR FRIENDLY NEIGHBOURHOOD DEVELOPER
          </p>
          <h3>Michaela</h3>
          <p className="profile-role">Software Developer</p>
          <p className="profile-tagline">
            Curious mind. Creative spirit. Always learning.
          </p>

          <div className="profile-status">
            <span className="status-dot"></span>
            Exploring new possibilities
          </div>
        </div>

        <div className="about-copy">
          <p className="section-eyebrow">MY STORY</p>
          <h3>
            Building, learning and finding my way through the universe of code.
          </h3>
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
          <a className="text-link" href="#skills">
            Explore my skills <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const skills = [
    { name: "HTML", symbol: "⌘", level: "Web foundations" },
    { name: "CSS", symbol: "🎨", level: "Styling and layout" },
    { name: "React", symbol: "⚛", level: "Component-based development" },
    { name: "Vue", symbol: "◇", level: "Frontend development" },
    { name: "WordPress", symbol: "W", level: "Website building" },
    {
      name: "GitHub",
      symbol: "🐙",
      level: "Version control and collaboration"
    }
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
            <span className="skill-number">
              {String(index + 1).padStart(2, "0")}
            </span>
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
              <span className="project-visual-label">
                STELLARA / PROJECT FILE
              </span>

              {project.image && (
                <img
                  className="project-image"
                  src={project.image}
                  alt={`${project.title} project preview`}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              )}
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

              <div className="project-links">
                {project.link ? (
                  <a
                    className="project-button live-button"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>↗</span> Live Preview
                  </a>
                ) : (
                  <span className="project-button unavailable-button">
                    ◌ Live Preview Soon
                  </span>
                )}

                {project.github ? (
                  <a
                    className="project-button github-button"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>⌘</span> GitHub Repository
                  </a>
                ) : (
                  <span className="project-button unavailable-button">
                    ◌ Repository Soon
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CertificateSection() {
  return (
    <div className="certificate-section">
      <p className="section-eyebrow">PROOF OF LEARNING</p>
      <h3>My Certificates</h3>
      <p>
        Explore the courses I've completed and the certificates I've earned.
      </p>

      <div className="skills-grid">
        {certificates.map((certificate, index) => (
          <article className="skill-card" key={certificate.title}>
            <span className="skill-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="skill-symbol">✹</div>
            <h3>{certificate.title}</h3>
            <p>{certificate.provider}</p>
            <p>{certificate.description}</p>

            <a
              className="text-link"
              href={certificate.link}
              target="_blank"
              rel="noreferrer"
            >
              View Certificate <span>↗</span>
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

function LearningSection() {
  return (
    <div className="learning-section">
      <p className="section-eyebrow">LEARNING IN PROGRESS</p>
      <h3>Currently Exploring the Universe of Code</h3>
      <p>
        I'm continuing to build my skills through practice, projects, and
        discovering new ways to solve problems.
      </p>

      <div className="skills-grid">
        {learningTopics.map((topic, index) => (
          <article className="skill-card" key={topic.name}>
            <span className="skill-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="skill-symbol">{topic.symbol}</div>
            <h3>{topic.name}</h3>
            <p>{topic.description}</p>
            <span className="skill-star">✦</span>
            <p className="learning-status">{topic.status}</p>
          </article>
        ))}
      </div>
    </div>
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
          <div className="education-starfield">
            ✦　·　✧　·　✦　·　✧　·　✦
          </div>

          <svg
            className="education-connections"
            viewBox="0 0 600 500"
            aria-hidden="true"
          >
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
                  selectedEducation === category.id
                    ? "education-node-active"
                    : ""
                }`}
                aria-pressed={selectedEducation === category.id}
                onClick={() => setSelectedEducation(category.id)}
              >
                <span className="education-node-symbol">
                  {category.symbol}
                </span>
                <span className="education-node-label">
                  {category.title}
                </span>
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

          {selectedEducation === "certifications" && (
            <CertificateSection />
          )}

          {selectedEducation === "learning" && (
            <LearningSection />
          )}

          <span className="education-info-footer">
            A journey of continuous growth <span>✦</span>
          </span>
        </div>
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
        description="Have a project, an opportunity, or a question? I'd love to hear from you."
      />

      <div className="contact-panel">
        <div className="contact-copy">
          <span className="contact-symbol">✉</span>
          <h3>Have something in mind?</h3>
          <p>
            Whether it's a project, an opportunity, or a conversation about
            technology, let's connect.
          </p>

          <a
            className="contact-email"
            href="mailto:michaelamaart@gmail.com"
          >
            <span>✉</span>
            michaelamaart@gmail.com <span>↗</span>
          </a>

          <a className="contact-email" href="tel:0764410345">
            <span>☎</span>
            076 441 0345
            <span>↗</span>
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
      <a className="footer-brand" href="#home">
        STELLARA
      </a>
      <p>Created by Michaela · Made with curiosity ✦</p>
      <a href="#home" className="back-to-top">
        Back to the stars ↑
      </a>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <div className="page-stars"></div>
      <Navbar />

      <main>
        <MissionHome />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
