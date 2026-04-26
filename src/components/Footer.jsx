import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer_area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="footer_top flex-column">
              <div className="footer_logo">
                <Link to="/" className="site-logo" style={{ justifyContent: 'center' }}>
                  <span className="site-logo-monogram">VN</span>
                  <span className="site-logo-name">Nikulin</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer_bottom justify-content-center">
          <p className="col-lg-8 col-sm-12 footer-text">
            Copyright &copy; {new Date().getFullYear()} Vladimir Nikulin |{' '}
            <a href="https://colorlib.com" target="_blank" rel="noreferrer">Colorlib</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
