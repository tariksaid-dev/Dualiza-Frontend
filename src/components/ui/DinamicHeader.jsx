import { useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import BombillaLibro from "../icons/BombillaLibro";
import LetrasBombilla from "../icons/LetrasBombilla";
import { Link } from "react-router-dom";

function DinamicHeader() {
  const sections = [
    { title: "Noticias", url: "news", isRedirect: true },
    // { title: "Login", url: "login" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const page = document.documentElement;
      const header = document.querySelector("#header");

      const d = page.clientHeight - page.scrollTop - header.offsetHeight;
      header.classList.toggle("fixed-header", d < 0);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <header
      id="header"
      className="absolute bottom-0 z-20 flex container h-14 max-w-[100vw] items-center justify-between border-y border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      {/* hover? */}
      <Link to="/" className="flex items-center gap-4 ">
        <BombillaLibro width="52" height="52" />
        <LetrasBombilla width="120" height="52" />
      </Link>
      <div>
        <div className="flex items-center gap-6">
          <nav className="hidden sm:block">
            <ul className="flex items-center gap-6">
              {sections.map(({ title, url, isRedirect }) => {
                isRedirect ? (
                  <li key={title}>
                    <Link to={url} className="text-sm">
                      {title}
                    </Link>
                  </li>
                ) : (
                  <li key={title}>
                    <a href={url} className="text-sm">
                      {title}
                    </a>
                  </li>
                );
              })}
              <ThemeToggle />
            </ul>
          </nav>

          <button
            id="open-nav-button"
            type="button"
            className="btn sm:hidden"
            aria-label="Navigation"
          >
            <img src="/test.svg" alt="Hamburguer menu" />
            {/* SVG con un menú HAMBURGUER para responsive */}
          </button>
          {/* cambiador de tema, componente */}
        </div>
        {/* REST */}
      </div>
    </header>
  );
}

export default DinamicHeader;
