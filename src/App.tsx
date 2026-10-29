
import './App.css'

const githubUrl = 'https://github.com/pranai8500-tech'
const insightAIUrl = 'https://insightai-ft5wqqi7hxectrfnudytky.streamlit.app/'

const projects = [
  {
    number: '01',
    title: 'DataCo Supply Chain Analytics',
    description:
      'Analyze delivery performance, shipping delays, order trends, and supply chain risks to identify operational improvements.',
    tools: 'Python · SQL · Power BI',
  },
  {
    number: '02',
    title: 'Online Retail Analytics',
    description:
      'Explore sales trends, customer purchasing behavior, product performance, and revenue opportunities.',
    tools: 'Python · SQL · Power BI',
  },
  {
    number: '03',
    title: 'Customer Churn Analysis',
    description:
      'Explore customer churn patterns and identify potential retention opportunities using data-driven analysis.',
    tools: 'Python · Pandas · SQL',
  },
  {
    number: '04',
    title: 'InsightAI Analytics Chatbot',
    description:
      'Explore my AI analytics application and interact with the live project.',
    tools: 'Python · AI · Analytics',
    link: insightAIUrl,
  },
]

const skills = [
  ['🐍', 'Python', 'Data analysis and scripting'],
  ['🗄️', 'SQL', 'Joins, aggregations and queries'],
  ['🧮', 'Pandas', 'Data cleaning and transformation'],
  ['📊', 'Excel', 'Analysis and reporting'],
  ['📈', 'Power BI', 'Dashboards and visualization'],
  ['🔍', 'EDA', 'Exploration and business insights'],
]

function App() {
  return (
    <main>
      <nav className="navbar">
        <a className="logo" href="#home">
         BHUNETI PRANAI NAGA SAI <span>   </span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          className="outline-button"
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      </nav>

      <section className="hero section" id="home">
        <div className="hero-bg" aria-hidden="true" />

        <div className="hero-content">
          <span className="eyebrow">ASPIRING DATA ANALYST</span>

          <h1>
            Turning data into
            <br />
            <span className="gradient">
              actionable business insights.
            </span>
          </h1>

          <p className="description">
            Final-year BTech student building end-to-end analytics
            solutions with <strong>SQL</strong>, <strong>Python</strong>,
            <strong> Excel</strong>, and <strong>Power BI</strong>. I
            transform raw datasets into clear findings that support
            decision-making — from data cleaning and exploratory
            analysis to interactive dashboards and business reports.
          </p>

          <div className="actions">
            <a className="primary-button" href="#projects">
              Explore Projects ↗
            </a>

            <a
              className="outline-button"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
          </div>

          <div className="hero-tools" aria-label="Core technologies">
            <span>SQL</span>
            <span>Python</span>
            <span>Excel</span>
            <span>Power BI</span>
            <span>Pandas</span>
            <span>Data Viz</span>
          </div>
        </div>

        <div className="profile-panel">
          <div className="profile-header">
            <span className="profile-label">Profile</span>
            <span className="status-dot" aria-hidden="true" />
          </div>

          <div className="profile-image-wrapper">
            <img
              src="/images/profile.png.jpeg"
              alt="Pranai's profile"
              className="profile-image"
              onError={(event) => {
                event.currentTarget.style.display = 'none'
                const fallback = event.currentTarget
                  .nextElementSibling as HTMLElement | null

                if (fallback) {
                  fallback.style.display = 'flex'
                }
              }}
            />

            <span
              className="profile-fallback"
              style={{ display: 'none' }}
            >
              PS
            </span>
          </div>

          <div className="profile-info">
            <h2>BHUNETI PRANAI NAGA SAI</h2>
            <p className="profile-role">Aspiring Data Analyst</p>
            <p className="profile-role">Data Analytics Enthusiast</p>
            <p className="profile-desc">
              Final-year BTech student building analytics solutions
              with SQL, Python, Excel, and Power BI.
            </p>
          </div>

          <div className="profile-tags">
            <span>Curiosity</span>
            <span>Analysis</span>
            <span>Insights</span>
          </div>
        </div>
      </section>

      <section className="stats">
        <div>
          <strong>04</strong>
          <span>Featured Projects</span>
        </div>
        <div>
          <strong>SQL</strong>
          <span>Data Exploration</span>
        </div>
        <div>
          <strong>BI</strong>
          <span>Visualization</span>
        </div>
        <div>
          <strong>AI</strong>
          <span>InsightAI Project</span>
        </div>
      </section>

      <section className="section" id="about">
        <span className="eyebrow">ABOUT ME</span>
        <h2>
          Curious about data.
          <br />
          <span className="gradient">
            Focused on business impact.
          </span>
        </h2>
        <p className="description">
          I'm developing my skills in data cleaning, exploratory data
          analysis, SQL querying, and dashboard development. Through
          hands-on projects, I aim to answer real business questions
          and communicate findings clearly.
        </p>
      </section>

      <section className="section" id="skills">
        <span className="eyebrow">MY TOOLKIT</span>
        <h2>Skills &amp; Technologies</h2>

        <div className="skills-grid">
          {skills.map(([icon, name, description]) => (
            <div className="skill-card" key={name}>
              <span
                className="skill-icon"
                style={{ fontSize: '28px', lineHeight: 1 }}
              >
                {icon}
              </span>
              <div>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <span className="eyebrow">SELECTED WORK</span>
        <h2>Featured Projects</h2>
        <p className="description">
          Business questions explored through data and analytics.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className={`project-banner banner-${project.number}`}>
                <span>PROJECT {project.number}</span>
                <strong>DATA / INSIGHTS</strong>
              </div>

              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="project-tools">{project.tools}</span>

                {project.link ? (
                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Live Project ↗
                  </a>
                ) : (
                  <a className="project-link" href="#reports">
                    View Project Resources ↓
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="reports">
        <span className="eyebrow">REPORTS &amp; DASHBOARDS</span>
        <h2>Analytics in Practice</h2>
        <p className="description">
          Project reports and dashboard links will be added as the
          portfolio resources are published.
        </p>
      </section>

      <section className="section contact-section" id="contact">
        <span className="eyebrow">LET'S CONNECT</span>
        <h2>
          Let's turn data into
          <br />
          <span className="gradient">better decisions.</span>
        </h2>

        <p className="description">
              Explore my projects and follow my data analytics journey.
        </p>

        <div className="actions">
          <a
            className="primary-button"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            Visit GitHub ↗
          </a>

          <a
            className="outline-button"
            href={insightAIUrl}
            target="_blank"
            rel="noreferrer"
          >
            Try InsightAI ↗
          </a>
        </div>
      </section>

      <footer className="footer">
        <a className="logo" href="#home">
          BHUNETI PRANAI NAGA SAI <span>.</span>
        </a>
        <p>Built with React · TypeScript · Curiosity</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  )
}

export default App
