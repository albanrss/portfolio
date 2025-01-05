import "./Header.css";
import { useEffect, createRef, useState } from "react";


function Header() {
  const containerRef = createRef();
  const [defaultPage, setDefaultPage] = useState(null);
  const [lastPage, setLastPage] = useState(null);

  window.addEventListener('scroll', () => {
    const opacity = Math.min(0.6, window.scrollY / 200);
    const header = document.getElementById("header_id");
  
    header.style.background = `linear-gradient(to bottom, rgba(0, 0, 0, ${opacity}), rgba(0, 0, 0, 0))`;
  });

  useEffect(() => {
    function setUpContainer() {
      const container = containerRef.current;
      const firstPage = document.getElementById("first_page");

      let rect = firstPage.getBoundingClientRect();

      container.style.width = `${rect.width}px`;
      container.style.height = `${rect.height}px`;
      container.style.left = `${rect.left}px`;

      firstPage.style.color = "#FFF7D1";

      setDefaultPage(firstPage);
      setLastPage(firstPage);
    }

    setUpContainer();
  }, []);

  const moveContainer = (e) => {
    const container = containerRef.current;
    const page = e.target;

    const rect = page.getBoundingClientRect();

    lastPage.style.color = "#2A3335";

    container.style.width = `${rect.width}px`;
    container.style.height = `${rect.height}px`;
    container.style.left = `${rect.left}px`;

    page.style.color = "#FFF7D1";
    setLastPage(page);
  };

  const restartContainer = () => {
    const container = containerRef.current;

    const rect = defaultPage.getBoundingClientRect();

    container.style.width = `${rect.width}px`;
    container.style.height = `${rect.height}px`;
    container.style.left = `${rect.left}px`;

    lastPage.style.color = "#2A3335";
    defaultPage.style.color = "#FFF7D1";
    setLastPage(defaultPage);
  };

  const selectPage = (e) => {
    const page = e.target;

    setDefaultPage(page);
  };

  return (
    <>
      <div id="header_id">
        <div className="main_header_container">
          <div id="logo">
            <a className="logo_anchor" href="/">
              <h1>Alban Roussée</h1>
            </a>
          </div>
          <div id="pages" onMouseLeave={restartContainer}>
            <a
              id="first_page"
              className="page_anchor"
              href="#top"
              onMouseEnter={(e) => moveContainer(e)}
              onClick={(e) => selectPage(e)}
            >
              Accueil
            </a>
            <a
              className="page_anchor"
              href="#about-me"
              onMouseEnter={(e) => moveContainer(e)}
              onClick={(e) => selectPage(e)}
            >
              A propos
            </a>
            <a
              className="page_anchor"
              href="#skills"
              onMouseEnter={(e) => moveContainer(e)}
              onClick={(e) => selectPage(e)}
            >
              Compétences
            </a>
            <a
              className="page_anchor"
              href="#projects"
              onMouseEnter={(e) => moveContainer(e)}
              onClick={(e) => selectPage(e)}
            >
              Projets
            </a>
            <span ref={containerRef} id="page_anchor_container"></span>
          </div>
          <div id="social">
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
      </div>
    </>
  );
}

export default Header;
