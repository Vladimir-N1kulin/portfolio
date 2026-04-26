import { useState } from 'react'
import { Link } from 'react-router-dom'

function scrollToContact() {
  const el = document.getElementById('home-contact')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  function handleContact() {
    setIsOpen(false)
    scrollToContact()
  }

  return (
    <header className="header_area">
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link className="navbar-brand logo_h site-logo" to="/">
              <span className="site-logo-monogram">VN</span>
              <span className="site-logo-name">Nikulin</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setIsOpen(o => !o)}
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className={`collapse navbar-collapse offset${isOpen ? ' show' : ''}`}>
              <ul className="nav navbar-nav menu_nav justify-content-end">
                <li className="nav-item active">
                  <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>Home</Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={handleContact}>Contact</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
