import { ThemeSwitcher } from "./ThemeSwitcher";

const Arrow = () => <span aria-hidden="true">↗</span>;

const roles = [
  {
    period: "2021 — 2025",
    company: "Wayfair",
    title: "Software Engineer III · Fintech & Loyalty",
    description:
      "Built business-critical payment capabilities across provider integrations, cloud-native services, multi-PSP processing, and the evolution from monolith to microservices.",
    tags: ["Payments", "Microservices", "Google Cloud", "Platform engineering"],
  },
  {
    period: "2018 — 2021",
    company: "Wayfair",
    title: "Software Engineer II · Payments",
    description:
      "Three years in payments engineering, developing the domain context and production experience that underpin my current platform work.",
    tags: ["Fintech", "Distributed systems"],
  },
  {
    period: "2018",
    company: "Atomia AB",
    title: "Lead Developer",
    description:
      "Led development work around the Atomia hosting platform, following several years building its customizations, extensions, and integrations.",
    tags: ["Technical leadership", "Hosting platforms"],
  },
  {
    period: "2012 — 2018",
    company: "Troxo",
    title: "Senior Software Engineer · PHP Developer",
    description:
      "Built hosting, billing, DNS, domain-management, and third-party integration software for Atomia and Loopia, part of the Visma Group.",
    tags: ["C# / .NET", "PHP", "JavaScript", "SQL"],
  },
];

const capabilities = [
  {
    number: "01",
    title: "Distributed backend systems",
    text: "Designing and evolving service boundaries, integrations, and resilient production software.",
  },
  {
    number: "02",
    title: "Payments & platform engineering",
    text: "Working in business-critical domains where correctness, scale, and operability all matter.",
  },
  {
    number: "03",
    title: "Technical direction",
    text: "Turning domain complexity into clear engineering decisions, with an increasing focus on architecture.",
  },
];

const contributions = [
  {
    label: "Platform evolution",
    title: "Made payment architecture more resilient and adaptable.",
    text: "Helped decouple monolithic payment services, shape multi-provider card processing, and design cloud-native services using event-driven patterns and infrastructure as code.",
  },
  {
    label: "Delivery at scale",
    title: "Turned complex provider integrations into reliable products.",
    text: "Contributed across Stripe, Klarna, Braintree, PayPal, and Apple Pay initiatives—from RFCs and solution design through rollout and production support.",
  },
  {
    label: "Operational excellence",
    title: "Reduced recurring work and protected system stability.",
    text: "Automated Apple Pay domain verification, improved traces and dashboards, resolved critical incidents, and led postmortem analysis to strengthen future reliability.",
  },
  {
    label: "Engineering leverage",
    title: "Helped teams understand systems, not just inherit them.",
    text: "Acted as a payments subject-matter expert, created architecture diagrams and clear documentation, mentored engineers, and improved collaboration through structured reviews and knowledge transfer.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header wrap">
        <a className="wordmark" href="#top" aria-label="Ivan Milovanović, home">
          IM<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#experience">Experience</a>
          <a href="#expertise">Expertise</a>
          <a href="#education">Education</a>
        </nav>
        <div className="header-actions">
          <ThemeSwitcher />
          <a className="header-contact" href="#contact">
            Let’s talk <Arrow />
          </a>
        </div>
      </header>

      <section className="hero wrap" id="top">
        <p className="hero-name">Ivan Milovanović</p>
        <div className="eyebrow"><span /> Senior Backend Software Engineer</div>
        <h1>Engineering systems<br />that hold up<br /><em>under pressure.</em></h1>
        <div className="hero-bottom">
          <p className="intro">
            I’m Ivan Milovanović, a senior software engineer with 14+ years of experience—most
            recently building business-critical payment platforms at Wayfair, with a growing focus on systems architecture.
          </p>
          <div className="hero-meta" aria-label="Professional summary">
            <div><span>Most recently</span><strong>Software Engineer III</strong></div>
            <div><span>Focus</span><strong>Payments & platforms</strong></div>
            <div><span>Experience</span><strong>14+ years</strong></div>
          </div>
        </div>
        <div className="scroll-cue" aria-hidden="true"><span /> Explore</div>
      </section>

      <section className="impact section wrap" id="impact">
        <div className="section-head">
          <div><p className="section-kicker">Selected contributions</p><h2>Impact through<br />technical clarity.</h2></div>
          <p>Representative work from seven years in Wayfair’s payments organization, distilled from formal performance feedback and the final reference letter.</p>
        </div>
        <div className="impact-grid">
          {contributions.map((item, index) => (
            <article className="impact-card" key={item.label}>
              <div className="impact-number">0{index + 1}</div>
              <p className="impact-label">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="statement">
        <div className="wrap statement-grid">
          <p className="section-kicker">What I do</p>
          <p className="statement-copy">
            I work where <strong>software design</strong>, operational reality, and business
            impact meet—shaping backend platforms that teams can understand, trust, and evolve.
          </p>
        </div>
      </section>

      <section className="section wrap" id="experience">
        <div className="section-head">
          <div><p className="section-kicker">Selected experience</p><h2>A career built<br />from the backend out.</h2></div>
          <p>From web infrastructure and hosting platforms to high-volume payments systems.</p>
        </div>
        <div className="timeline">
          {roles.map((role, index) => (
            <article className="role" key={`${role.company}-${role.period}`}>
              <div className="role-index">0{index + 1}</div>
              <time>{role.period}</time>
              <div className="role-main"><h3>{role.company}</h3><h4>{role.title}</h4></div>
              <div className="role-detail">
                <p>{role.description}</p>
                <ul aria-label={`${role.company} areas`}>
                  {role.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="expertise" id="expertise">
        <div className="wrap">
          <div className="section-head light">
            <div><p className="section-kicker">Expertise</p><h2>Thinking in systems,<br />not just services.</h2></div>
            <p>A practical engineering foundation shaped by long-lived platforms, high-stakes domains, and a strong bias for clear design.</p>
          </div>
          <div className="capability-grid">
            {capabilities.map((item) => (
              <article className="capability" key={item.number}>
                <span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="stack" aria-label="Core technology stack">
            <span>Core stack</span>
            <ul><li>Spring Boot</li><li>Microservices</li><li>Kubernetes</li><li>Terraform</li><li>PHP</li><li>SQL</li></ul>
          </div>
        </div>
      </section>

      <section className="section education wrap" id="education">
        <div><p className="section-kicker">Education</p><h2>Strong foundations.<br />Continuous direction.</h2></div>
        <div className="education-list">
          <article><time>2018</time><div><h3>Master, Computer Science</h3><p>University of Niš</p></div></article>
          <article><time>2003 — 2007</time><div><h3>Mathematics & Natural Sciences</h3><p>Gimnazija Svetozar Markovic, Nis</p></div></article>
        </div>
      </section>

      <footer id="contact">
        <div className="wrap footer-grid">
          <div><p className="section-kicker">Contact</p><h2>Let’s build something<br /><em>that lasts.</em></h2></div>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/iggim" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            <a href="https://github.com/iggim" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          </div>
        </div>
        <div className="wrap footer-note"><span>Ivan Milovanović</span><span>Senior Software Engineer · Berlin</span><span>© 2026</span></div>
      </footer>
    </main>
  );
}
