import React from 'react'
import fastracker from '../../Assets/fastracker.png'
import './portfolio-content.css'

const outcomes = [
  { value: '13.47%', label: 'manpower optimized', detail: 'Workload balancing and process redesign' },
  { value: '71%', label: 'fewer end-line inspectors needed', detail: 'Integrated material flow' },
  { value: '90%', label: 'less paper used', detail: 'Digital IE workflows' },
  { value: '17.04%', label: 'less material waste', detail: 'Real-time consumption analysis' },
]

const projects = [
  {
    number: '01',
    category: 'Process engineering',
    title: 'Build more capacity with less waste',
    description: 'Balanced workloads and redesigned processes across departments. Sewing micromotion analysis and PMTS removed non-value-added work.',
    metrics: [{ value: '13.47%', label: 'manpower optimized' }, { value: '19.83%', label: 'lower process SMV' }],
    tags: ['Work study', 'PMTS', 'Line balancing'],
  },
  {
    number: '02',
    category: 'Automation',
    title: 'Convert manual work into repeatable processes',
    description: 'Converted 37 manual processes into semi-automated workflows, reducing labor demand and standard minutes.',
    metrics: [{ value: '37', label: 'processes converted' }, { value: '36%', label: 'manpower optimized' }, { value: '7%', label: 'SMV improvement' }],
    tags: ['Method engineering', 'Process redesign'],
  },
  {
    number: '03',
    category: 'Digital operations',
    title: 'Make production performance visible in real time',
    description: 'Built Android IE workflows, an MIS platform, and a cross-platform production tracker for alerts, hourly output, efficiency, skill matrices, and line balancing.',
    metrics: [{ value: '47%', label: 'faster reaction time' }, { value: '2.06%', label: 'higher factory efficiency' }, { value: '90%', label: 'less paper used' }],
    tags: ['Android app', 'MIS', 'Analytics'],
    logo: fastracker,
  },
  {
    number: '04',
    category: 'Material & planning',
    title: 'Use live data to guide decisions',
    description: 'Standardized material requirements from real-time consumption data and developed a model to forecast manpower demand from planned volume.',
    metrics: [{ value: '17.04%', label: 'less material waste' }, { value: '83%', label: 'model confidence' }],
    tags: ['Material flow', 'Forecasting', 'Machine learning'],
  },
]

const roles = [
  {
    title: 'Deputy Manager, Industrial Engineering',
    dates: 'Feb 2020 – Present',
    description: 'Lead process redesign, workforce optimization, digital IE, and factory analytics initiatives.',
  },
  {
    title: 'Operations & Planning Coordinator',
    dates: 'Aug 2019 – Jan 2020',
    description: 'Introduced earliest-due-date scheduling, reducing annual air freight by 0.79%; connected SAP and FastReact for faster order allocation.',
  },
  {
    title: 'Executive, Industrial Engineering',
    dates: 'Jul 2018 – Jul 2019',
    description: 'Applied process engineering and micromotion analysis to reduce product minute value by 3.39%.',
  },
]

const skillGroups = [
  { title: 'Industrial engineering', items: ['Work study', 'PMTS', 'SMV optimization', 'Capacity planning', 'Line balancing', 'Micromotion analysis'] },
  { title: 'Operational excellence', items: ['Lean manufacturing', 'Value stream mapping', 'Material flow', '5S', 'SMED', 'OEE'] },
  { title: 'Data & development', items: ['Power BI', 'Excel · Power Query · DAX', 'Python', 'SQL', 'React', 'React Native'] },
]

const certifications = [
  { title: 'Six Sigma Yellow Belt', issuer: 'Technical University of Munich, Germany' },
  { title: 'ISO 9001:2015 Lead Auditor', issuer: 'Intertek' },
  { title: 'Lean Manufacturing System', issuer: 'NPO, BEF & BJTI' },
  { title: 'Microsoft Excel: Beginner to Advanced', issuer: 'Udemy · Power Query, DAX & dashboards' },
  { title: 'Data Science and Neuro-Linguistic Programming', issuer: 'Udemy' },
]

const SectionHeading = ({ eyebrow, title, description }) => (
  <div className="portfolio-heading">
    <span className="portfolio-eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>
)

const PortfolioContent = () => (
  <main className="portfolio-content">
    <nav className="portfolio-nav" aria-label="Portfolio sections">
      <div className="portfolio-shell portfolio-nav-inner">
        <span className="portfolio-nav-label">Explore my work</span>
        <div className="portfolio-nav-links">
          <a href="#impact">Impact</a>
          <a href="#work">Selected work</a>
          <a href="#experience">Experience</a>
          <a href="#capabilities">Expertise</a>
          <a href="#education">Education</a>
        </div>
      </div>
    </nav>

    <section id="impact" className="portfolio-section portfolio-impact">
      <div className="portfolio-shell">
        <div className="portfolio-impact-intro">
          <SectionHeading eyebrow="Industrial engineering · Operational excellence" title="Results at a glance" description="Measurable improvements in workforce use, material flow, and digital operations at SQUARE Fashions Limited." />
          <p className="portfolio-tenure"><strong>8+ years</strong><span>in apparel manufacturing</span></p>
        </div>
        <div className="portfolio-metrics">
          {outcomes.map((item) => (
            <article className="portfolio-metric" key={item.value}>
              <strong>{item.value}</strong>
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section id="work" className="portfolio-section portfolio-work">
      <div className="portfolio-shell">
        <SectionHeading eyebrow="Selected work" title="Projects with measurable outcomes" description="A concise view of the problems solved and the results achieved." />
        <div className="portfolio-project-grid">
          {projects.map((project) => (
            <article className="portfolio-project" key={project.number}>
              <div className="portfolio-project-top">
                <span>{project.number} / {project.category}</span>
                {project.logo && <img src={project.logo} alt="FasTracker" className="portfolio-project-logo" />}
              </div>
              <h3>{project.title}</h3>
              <p className="portfolio-project-description">{project.description}</p>
              <div className="portfolio-project-metrics">
                {project.metrics.map((metric) => (
                  <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>
                ))}
              </div>
              <div className="portfolio-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section id="experience" className="portfolio-section portfolio-experience">
      <div className="portfolio-shell portfolio-two-column">
        <SectionHeading eyebrow="Career" title="Progressive responsibility at SQUARE Fashions" description="From process engineering to factory-wide improvement and digital operations." />
        <div className="portfolio-timeline">
          {roles.map((role) => (
            <article className="portfolio-role" key={role.title}>
              <span className="portfolio-role-dates">{role.dates}</span>
              <h3>{role.title}</h3>
              <p>{role.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section id="capabilities" className="portfolio-section portfolio-capabilities">
      <div className="portfolio-shell">
        <SectionHeading eyebrow="Expertise" title="Methods and tools" description="Engineering methods, operational systems, and digital skills used across the work above." />
        <div className="portfolio-skill-grid">
          {skillGroups.map((group) => (
            <article className="portfolio-skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section id="education" className="portfolio-section portfolio-education">
      <div className="portfolio-shell">
        <SectionHeading eyebrow="Credentials" title="Education & certifications" />
        <div className="portfolio-credentials-grid">
          <div>
            <h3 className="portfolio-column-title">Education</h3>
            <article className="portfolio-credential">
              <span>2019 – 2020 · Score 87%</span>
              <h4>Postgraduate Diploma in Supply Chain Management</h4>
              <p>International Supply Chain Education Alliance (ISCEA, USA)</p>
            </article>
            <article className="portfolio-credential">
              <span>2013 – 2017 · CGPA 3.545 / 4.00</span>
              <h4>BSc in Industrial and Production Engineering</h4>
              <p>Ahsanullah University of Science and Technology</p>
            </article>
            <article className="portfolio-credential portfolio-earlier-education">
              <span>Earlier education</span>
              <h4>Higher Secondary & Secondary School Certificates</h4>
              <p>National Ideal College (2012) and Motijheel Government Boys High School (2010) · GPA 5.00 / 5.00 in both</p>
            </article>
          </div>
          <div>
            <h3 className="portfolio-column-title">Professional certifications</h3>
            <div className="portfolio-cert-list">
              {certifications.map((certificate) => (
                <article className="portfolio-cert" key={certificate.title}>
                  <h4>{certificate.title}</h4>
                  <p>{certificate.issuer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer className="portfolio-footer">
      <div className="portfolio-shell">
        <strong>A K M Tasfiq Abedin</strong>
        <span>Industrial engineering · Operational excellence · Digital transformation</span>
        <a href="#impact">Back to results ↑</a>
      </div>
    </footer>
  </main>
)

export default PortfolioContent
