import './Header.css'


function Header() {
    return (
      <>
        <div class="main_header_container">
          <div class="logo">
            <a class="logo_anchor" href="/">Alban Roussée</a>
          </div>
          <div class="pages">
            <div class="page_anchor_container">
              <a class="page_anchor" href='#top'>Accueil</a>
            </div>
            <div class="page_anchor_container">
              <a class="page_anchor" href='#about-me'>A propos</a>
            </div>
            <div class="page_anchor_container">
              <a class="page_anchor" href='#projects'>Projets</a>
            </div>
            <div class="page_anchor_container">
              <a class="page_anchor" href='#skills'>Compétences</a>
            </div>
          </div>
          <div class="social">
            <a href="https://www.instagram.com/alban._.rss/">
              <i class="fa-brands fa-instagram fa-2x social_icon"></i>
            </a>
            <a href="https://www.linkedin.com/in/alban-roussee/">
              <i class="fa-brands fa-linkedin fa-2x social_icon"></i>
            </a>
            <a href="https://github.com/albanrss">
              <i class="fa-brands fa-github fa-2x social_icon"></i>
            </a>
          </div>
        </div>
      </>
    )
  }
  
export default Header
  