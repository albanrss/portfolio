import "./Header.css";
import { useEffect, useRef, useState } from "react";

function Header() {
  const [defaultPage, setDefaultPage] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      const container = containerRef.current;
      const firstPage = document.getElementById("first_page");
      
      const rect = firstPage.getBoundingClientRect();
      
      container.style.width = `${rect.width}px`;
      container.style.height = `${rect.height}px`;
      container.style.left = `${rect.left}px`;
      
      setDefaultPage(firstPage);
    }, 5);
  }, []);

  const moveContainer = (e) => {
    const container = containerRef.current;
    const page = e.target;

    const rect = page.getBoundingClientRect();

    container.style.width = `${rect.width}px`;
    container.style.height = `${rect.height}px`;
    container.style.left = `${rect.left}px`;
  };

  const restartContainer = () => {
    const container = containerRef.current;

    const rect = defaultPage.getBoundingClientRect();

    container.style.width = `${rect.width}px`;
    container.style.height = `${rect.height}px`;
    container.style.left = `${rect.left}px`;
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
              <span className="fa-solid fa-laptop fa-2x"></span>
              <h1>Alban Roussée</h1>
            </a>
          </div>
          <div className="pages_container">
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
          </div>
          <div id="social">
            <a href="https://www.linkedin.com/in/alban-roussee/">
              <i className="fa-brands fa-linkedin fa-2x"></i>
            </a>
            <a href="https://github.com/albanrss">
              <i className="fa-brands fa-github fa-2x"></i>
            </a>
            <a href="https://www.instagram.com/alban._.rss/">
              <i className="fa-brands fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
