import profileImg from './assets/profile-placeholder.svg';
import aboutImg from './assets/about-placeholder.svg';
import projectImg from './assets/project-placeholder.svg';
import galleryImg from './assets/gallery-placeholder.svg';

const stats = [
  { label: 'Years crafting interfaces', value: '8+' },
  { label: 'Products shipped', value: '27' },
  { label: 'Satisfied teams', value: '40+' },
];

const services = [
  {
    title: 'Product Strategy',
    description:
      'Collaborative workshops that define the north-star experience, uncover user needs, and map out the release roadmap.',
  },
  {
    title: 'Experience Design',
    description:
      'Pixel-perfect interfaces with thoughtful motion, accessible patterns, and design systems ready for engineering.',
  },
  {
    title: 'Front-end Engineering',
    description:
      'Production-ready React builds with robust component libraries, documentation, and performance baked in from the start.',
  },
];

const caseStudies = [
  {
    title: 'Nova Health',
    subtitle: 'Patient onboarding platform',
    description:
      'Reimagined the intake experience for a telehealth startup, increasing completed sessions by 34% in the first quarter.',
    tags: ['UX Research', 'Design System', 'React Build'],
    image: projectImg,
  },
  {
    title: 'Orbit Finance',
    subtitle: 'Investment analytics dashboard',
    description:
      'Crafted a modular analytics surface for financial teams to track performance, collaborate on insights, and act quickly.',
    tags: ['Product Strategy', 'UI Design', 'Prototyping'],
    image: projectImg,
  },
  {
    title: 'Shift Mobility',
    subtitle: 'EV charging network',
    description:
      'Built a responsive map-based experience that helps drivers locate charging stations, monitor sessions, and earn rewards.',
    tags: ['Design Ops', 'Responsive Web', 'Brand'],
    image: projectImg,
  },
];

const galleryItems = [
  { label: 'Design Summit, Vilnius', image: galleryImg },
  { label: 'Client Workshop', image: galleryImg },
  { label: 'Team Offsite', image: galleryImg },
];

const App = () => {
  return (
    <div className="page">
      <header className="header">
        <div className="header-surface" />
        <nav className="nav">
          <div className="brand">DI</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="nav-contact" href="mailto:hello@example.com">
            Let&apos;s Talk
          </a>
        </nav>

        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Product Designer &amp; Front-end Engineer</p>
            <h1>
              Deividas
              <br />
              Ilgunas
            </h1>
            <p className="lead">
              Partnering with mission-led teams to transform complex problems into effortless digital experiences. From early
              discovery to polished production, I bridge design and code to deliver measurable results.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">
                View Projects
              </a>
              <a className="btn ghost" href="#resume">
                Download CV
              </a>
            </div>
            <div className="hero-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <img src={profileImg} alt="Portrait of Deividas Ilgunas" />
              <div className="hero-card-body">
                <div className="hero-card-header">
                  <span className="hero-card-title">Currently crafting</span>
                  <span className="hero-card-pill">In progress</span>
                </div>
                <h3>Fintech Dashboard Revamp</h3>
                <p>
                  Consolidating analytics, billing, and forecasting into a unified workspace with tailored role permissions.
                </p>
                <div className="progress">
                  <div className="progress-bar" style={{ width: '72%' }} />
                </div>
                <div className="hero-card-meta">
                  <span>UX Audit</span>
                  <span>Delivery Q3</span>
                </div>
              </div>
            </div>
            <div className="hero-float hero-pill">Trusted by teams across EU &amp; US</div>
            <div className="hero-float hero-availability">
              <span>Next availability</span>
              <strong>June 2024</strong>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section id="about" className="section about">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>The intersection of storytelling, systems, and shipping</h2>
          </div>
          <div className="about-layout">
            <img src={aboutImg} alt="Design process collage" />
            <div className="about-copy">
              <p>
                Over the past eight years I&apos;ve helped founders, product teams, and agencies translate vision into interactive
                journeys that customers trust. My approach combines qualitative research, rapid prototyping, and hands-on
                engineering to move fast without sacrificing craft.
              </p>
              <ul className="about-highlights">
                <li>
                  <span className="highlight-title">Workshops</span>
                  <span className="highlight-description">Facilitated design sprints with teams from Series A to Fortune 500.</span>
                </li>
                <li>
                  <span className="highlight-title">Design Systems</span>
                  <span className="highlight-description">Maintained component libraries powering 5+ product teams.</span>
                </li>
                <li>
                  <span className="highlight-title">Performance</span>
                  <span className="highlight-description">Ship responsive, accessible builds with Core Web Vitals in the green.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>How I help teams scale their products</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a className="learn-more" href="#contact">
                  Let&apos;s collaborate
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-heading">
            <p className="eyebrow">Selected Work</p>
            <h2>Case studies that blend clarity and momentum</h2>
          </div>
          <div className="case-grid">
            {caseStudies.map((project) => (
              <article key={project.title} className="case-card">
                <img src={project.image} alt={project.subtitle} className="case-media" />
                <div className="case-body">
                  <div className="case-meta">
                    <span className="case-title">{project.title}</span>
                    <span className="case-subtitle">{project.subtitle}</span>
                  </div>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section gallery">
          <div className="section-heading">
            <p className="eyebrow">Behind the scenes</p>
            <h2>Snapshots from collaborations worldwide</h2>
          </div>
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <figure key={item.label} className="gallery-card">
                <img src={item.image} alt={item.label} />
                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="contact">
        <div className="contact-card">
          <p className="eyebrow">Let&apos;s build together</p>
          <h2>Have a project in mind?</h2>
          <p>
            I&apos;m currently booking collaborations for Q3. Share a little about your goals and we&apos;ll schedule a workshop to map the
            path forward.
          </p>
          <div className="contact-actions">
            <a className="btn primary" href="mailto:hello@example.com">
              Start a conversation
            </a>
            <a className="btn ghost" href="https://cal.com" target="_blank" rel="noreferrer">
              Schedule a call
            </a>
          </div>
        </div>
        <p className="footer-note">© {new Date().getFullYear()} Deividas Ilgunas. Crafted with purpose in Vilnius.</p>
      </footer>
    </div>
  );
};

export default App;
