import { useState, useEffect } from 'react'

const base = import.meta.env.BASE_URL

const certifications = [
  { src: `${base}img/certifications/Coursera%20GXDPEJPN8MT3_page-0001.jpg`, alt: 'Azure Certified' },
  { src: `${base}img/certifications/Coursera%20NCB7WBW6FKP3_page-0001.jpg`, alt: 'C# Certified' },
  { src: `${base}img/certifications/1639196_822854.en_page-0001.jpg`, alt: 'Python Certified' },
  { src: `${base}img/certifications/ethics_at_work_page-0001.jpg`, alt: 'Ethics at Work' },
  { src: `${base}img/certifications/mindfulness_page-0001.jpg`, alt: 'Mindfulness' },
  { src: `${base}img/certifications/Vladimir_Nikulin20249164923_page-0001.jpg`, alt: 'Certificate' },
]

const skills = [
  {
    icon: 'fa-code',
    title: 'Python Development',
    highlight: false,
    items: [
      'Backend Development (Flask, FastAPI)',
      'Data Processing & Analysis',
      'Machine Learning & AI',
      'RESTful API Development',
      'Automation & Scripting',
    ],
  },
  {
    icon: 'fa-server',
    title: 'Node.js Development',
    highlight: false,
    items: [
      'RESTful API Design',
      'Real-time Applications',
      'Microservices Architecture',
      'Express.js & NestJS',
      'Database Integration',
    ],
  },
  {
    icon: 'fa-lightbulb-o',
    title: 'AI Integration (OpenAI)',
    highlight: true,
    items: [
      'GPT-4 & ChatGPT Integration',
      'Prompt Engineering',
      'AI-Powered Applications',
      'Natural Language Processing',
    ],
  },
]

export default function Home() {
  const [lightbox, setLightbox] = useState(null)
  const [projects, setProjects] = useState([])
  const [projectsLoading, setProjectsLoading] = useState(true)
  const [projectsError, setProjectsError] = useState(false)

  useEffect(() => {
    fetch('https://api.github.com/users/Vladimir-N1kulin/repos?sort=updated&per_page=6')
      .then(res => {
        if (!res.ok) throw new Error('GitHub API request failed')
        return res.json()
      })
      .then(data => {
        setProjects(data.filter(r => !r.fork).slice(0, 6))
        setProjectsLoading(false)
      })
      .catch(() => {
        setProjectsError(true)
        setProjectsLoading(false)
      })
  }, [])

  function prevCert(e) {
    e.stopPropagation()
    setLightbox(i => (i - 1 + certifications.length) % certifications.length)
  }

  function nextCert(e) {
    e.stopPropagation()
    setLightbox(i => (i + 1) % certifications.length)
  }

  return (
    <>
      {/* Banner */}
      <section className="home_banner_area">
        <div className="banner_inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="banner_content">
                  <h3 className="text-uppercase">Hell0</h3>
                  <h1 className="text-uppercase">I am Vladimir Nikulin</h1>
                  <h5 className="text-uppercase">Software Engineer</h5>
                  <div className="d-flex align-items-center">
                    <button className="primary_btn" onClick={() => document.getElementById('home-contact')?.scrollIntoView({ behavior: 'smooth' })}><span>Hire Me</span></button>
                    <a className="primary_btn tr-bg" href={`${base}cv/Vladimir_Nikulin_CV.pdf`} download>
                      <span>Get CV</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="home_right_img">
                  <img src={`${base}img/banner/home-right.png`} alt="Vladimir Nikulin - Software Engineer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about_area section_gap">
        <div className="container">
          <div className="row justify-content-start align-items-center">
            <div className="col-lg-5">
              <div className="about_img">
                <img src={`${base}img/about-us.png`} alt="About Vladimir Nikulin" />
              </div>
            </div>
            <div className="offset-lg-1 col-lg-5">
              <div className="main_title text-left">
                <h2>
                  Let me <br />
                  Introduce <br />
                  Myself
                </h2>
                <p>
                  I'm a software engineer focused on building Node.js apps and Python scripts with OpenAI integrations.
                  I design clean APIs, automate workflows, and turn data into usable features that solve real problems
                  across web and cloud.
                </p>
                <p>
                  My work ranges from chatbots and RAG search to ETL jobs and internal tools. I use Python, Node.js,
                  SQL Server, and Git/GitHub, write testable and secure code, and tune prompts and JSON schemas to
                  ship reliable, measurable results.
                </p>
                <a className="primary_btn" href={`${base}cv/Vladimir_Nikulin_CV.pdf`}>
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="brand_area section_gap_bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="certifications text-center">
                <h4>Certifications</h4>
                <div className="row justify-content-center">
                  {certifications.map((cert, i) => (
                    <div key={i} className="col-md-4 col-sm-6 mb-3">
                      <button
                        onClick={() => setLightbox(i)}
                        style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                        aria-label={`View ${cert.alt} certificate`}
                      >
                        <img
                          src={cert.src}
                          alt={cert.alt}
                          style={{
                            height: 120,
                            margin: 10,
                            objectFit: 'contain',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.13)',
                            borderRadius: 8,
                          }}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.85)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <button
            onClick={prevCert}
            aria-label="Previous certificate"
            style={{ position: 'absolute', left: 20, background: 'none', border: 'none', color: '#fff', fontSize: 40, cursor: 'pointer' }}
          >
            &#8249;
          </button>
          <img
            src={certifications[lightbox].src}
            alt={certifications[lightbox].alt}
            onClick={e => e.stopPropagation()}
            style={{ maxHeight: '80vh', maxWidth: '80vw', borderRadius: 8 }}
          />
          <button
            onClick={nextCert}
            aria-label="Next certificate"
            style={{ position: 'absolute', right: 20, background: 'none', border: 'none', color: '#fff', fontSize: 40, cursor: 'pointer' }}
          >
            &#8250;
          </button>
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
            style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', color: '#fff', fontSize: 30, cursor: 'pointer' }}
          >
            &times;
          </button>
        </div>
      )}

      {/* Skills */}
      <section className="skills_area section_gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="main_title">
                <h2>Core Technical Skills</h2>
                <p>Specialized in AI-powered applications and modern backend development with Python and Node.js</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {skills.map((skill, i) => (
              <div key={i} className="col-lg-4 col-md-6 mb-4">
                <div className={`skill_card${skill.highlight ? ' skill_card_highlight' : ''}`}>
                  <div className="skill_icon">
                    <i className={`fa ${skill.icon} fa-3x`}></i>
                  </div>
                  <h4>{skill.title}</h4>
                  <ul className="skill_list">
                    {skill.items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Projects */}
      <section className="portfolio_area" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main_title text-left">
                <h2>Recent GitHub Projects</h2>
              </div>
            </div>
          </div>
          <div className="row portfolio-grid justify-content-center">
            {projectsLoading && (
              <div className="col-12 text-center"><p>Loading projects...</p></div>
            )}
            {projectsError && (
              <div className="col-12 text-center">
                <p>Unable to load projects. Please try again later.</p>
                <a href="https://github.com/Vladimir-N1kulin" className="primary_btn" target="_blank" rel="noreferrer">
                  <span>View on GitHub</span>
                </a>
              </div>
            )}
            {!projectsLoading && !projectsError && projects.map(repo => {
              const desc = repo.description || 'No description provided.'
              const truncated = desc.length > 100
              const displayDesc = truncated ? desc.substring(0, 100) : desc

              return (
                <div key={repo.id} className="col-lg-4 col-md-6 mb-4">
                  <div className="portfolio_box mb-4">
                    <div className="single_portfolio position-relative">
                      <img className="img-fluid w-100 rounded-top" src={`${base}img/VN_logo.png`} alt={repo.name} />
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="github-btn position-absolute"
                        style={{ top: 10, right: 10 }}
                        aria-label={`View ${repo.name} on GitHub`}
                      >
                        <i className="fa fa-github fa-2x"></i>
                      </a>
                    </div>
                    <div className="short_info p-3 d-flex flex-column">
                      <h4 className="mb-2">
                        <a href={repo.html_url} target="_blank" rel="noreferrer">
                          {repo.name.replace(/[-_]/g, ' ')}
                        </a>
                      </h4>
                      <p className="mb-2 small text-muted">{repo.language || 'Various Languages'}</p>
                      <p>
                        {displayDesc}
                        {truncated && (
                          <a href={repo.html_url} target="_blank" rel="noreferrer"> Read More</a>
                        )}
                      </p>
                      <a href={repo.html_url} target="_blank" rel="noreferrer" className="btn btn-outline-dark btn-sm mt-2">
                        View on GitHub
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="home-contact-section" id="home-contact">
        <div className="container">
          <div className="home-contact-inner">
            <div className="home-contact-text">
              <h2>Let's Work Together</h2>
              <p>I'm currently open to new opportunities. Whether you have a role in mind or just want to connect, feel free to reach out.</p>
              <div className="home-contact-social">
                <a href="https://www.linkedin.com/in/vladimir-n1kulin" target="_blank" rel="noreferrer" className="home-social-btn" aria-label="LinkedIn">
                  <i className="fa fa-linkedin"></i> LinkedIn
                </a>
                <a href="https://github.com/Vladimir-N1kulin" target="_blank" rel="noreferrer" className="home-social-btn" aria-label="GitHub">
                  <i className="fa fa-github"></i> GitHub
                </a>
              </div>
            </div>
            <form
              className="home-contact-form"
              action="https://formsubmit.co/vladimir.nikulin.ca@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Portfolio Contact!" />
              <div className="hcf-row">
                <div className="cf-group">
                  <label htmlFor="hcf-name">Name</label>
                  <input id="hcf-name" type="text" name="name" placeholder="Your name" required />
                </div>
                <div className="cf-group">
                  <label htmlFor="hcf-email">Email</label>
                  <input id="hcf-email" type="email" name="email" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="cf-group">
                <label htmlFor="hcf-message">Message</label>
                <textarea id="hcf-message" name="message" rows="4" placeholder="Tell me about your project or idea..." required></textarea>
              </div>
              <button type="submit" className="cf-submit">
                <i className="fa fa-paper-plane"></i> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
