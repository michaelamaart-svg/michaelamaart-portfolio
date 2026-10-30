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
    title: "Cisco Data Science",
    provider: "Cisco Networking Academy",
    description:
      "Completed training introducing data science concepts and the use of data.",
    link: "PASTE_YOUR_DATA_SCIENCE_CERTIFICATE_LINK_HERE"
  },
  {
    title: "Cisco Cybersecurity",
    provider: "Cisco Networking Academy",
    description:
      "Completed training covering cybersecurity concepts and digital safety.",
    link: "PASTE_YOUR_CYBERSECURITY_CERTIFICATE_LINK_HERE"
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
    link: "https://pawtopia-team.vercel.app"
  },
  {
    title: "Kay's Cart",
    number: "02",
    description:
      "A shopping list and budget tracker designed to help users organise their shopping and keep track of spending.",
    tags: ["HTML", "CSS", "JavaScript", "PWA"],
    visual: "cart-visual",
    link: "https://stately-crostata-5ffc78.netlify.app"
  },
  {
    title: "HR Modern Tech",
    number: "03",
    description:
      "A human resources project focused on employee information and payroll functionality.",
    tags: ["Web Development", "Payroll"],
    visual: "hr-visual",
    link: ""
  },
  {
    title: "Foodboxx",
    number: "04",
    description:
      "A food-related digital project built as part of my development journey.",
    tags: ["Web Development", "Team Project"],
    visual: "food-visual",
    link: ""
  },
  {
    title: "The Gallery",
    number: "05",
    description:
      "A creative project showcasing visual ideas and design.",
    tags: ["Web Design", "Development"],
    visual: "gallery-visual",
    link: ""
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
  },
  {
    number: "06",
    title: "Purpose",
    label: "THE BIGGER PICTURE",
    text: "I'm learning to embrace change, stay open to new opportunities, and trust the process as I grow into the software developer I want to become."
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
    { label: "Lessons", href: "#lessons" },
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

              {project.link ? (
                <a
                  className="text-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project <span>↗</span>
                </a>
              ) : (
                <p className="project-note">
                  More details coming soon <span>✦</span>
                </p>
              )}
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
        {certificates.map((certificate, index) => {
          const linkReady =
            certificate.link.startsWith("https://") ||
            certificate.link.startsWith("http://");

          return (
            <article className="skill-card" key={certificate.title}>
              <span className="skill-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="skill-symbol">✹</div>
              <h3>{certificate.title}</h3>
              <p>{certificate.provider}</p>
              <p>{certificate.description}</p>

              {linkReady ? (
                <a
                  className="text-link"
                  href={certificate.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Certificate <span>↗</span>
                </a>
              ) : (
                <p className="project-note">
                  Add your certificate link <span>✦</span>
                </p>
              )}
            </article>
          );
        })}
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      formData.subject || "Portfolio enquiry"
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href =
      `mailto:michaelamaart@gmail.com?subject=${subject}&body=${body}`;
  };

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

          <a className="contact-email" href="tel:REPLACE_WITH_YOUR_PHONE_NUMBER">
            <span>☎</span>
            Add your phone number
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

      <div className="contact-form-panel">
        <p className="section-eyebrow">OPEN A COMMUNICATION CHANNEL</p>
        <h3>Send Me a Message</h3>
        <p>
          Fill in the form below to prepare an email to me.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="contact-email">Your email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="contact-subject">Subject</label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What would you like to discuss?"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="contact-message">Your message</label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows="5"
              required
            ></textarea>
          </div>

          <button className="contact-submit" type="submit">
            Prepare Email ↗
          </button>
        </form>
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
        <LessonsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

