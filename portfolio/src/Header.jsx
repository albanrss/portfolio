import './Header.css'


function Header() {
    return (
      <>
        <div id="top" className="main_header_container">
          <div className="logo">
            <a className="logo_anchor" href="/"><h1>Alban Roussée</h1></a>
          </div>
          <div className="pages">
            <a className="page_anchor" href='#top'>
              <div className="page_anchor_container">
                Accueil
              </div>
            </a>
            <a className="page_anchor" href='#about-me'>
              <div className="page_anchor_container">
                A propos
              </div>
            </a>
            <a className="page_anchor" href='#skills'>
              <div className="page_anchor_container">
                Compétences
              </div>
            </a>
            <a className="page_anchor" href='#projects'>
              <div className="page_anchor_container">
                Projets
              </div>
            </a>
          </div>
          <div className="social">
            <a href="https://www.instagram.com/alban._.rss/">
              <i className="fa-brands fa-instagram fa-2x social_icon"></i>
            </a>
            <a href="https://www.linkedin.com/in/alban-roussee/">
              <i className="fa-brands fa-linkedin fa-2x social_icon"></i>
            </a>
            <a href="https://github.com/albanrss">
              <i className="fa-brands fa-github fa-2x social_icon"></i>
            </a>
          </div>
        </div>
      </>
    )
  }
  
export default Header
  