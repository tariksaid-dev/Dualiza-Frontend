import { useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import BombillaLibro from "../icons/BombillaLibro";
import LetrasBombilla from "../icons/LetrasBombilla";
import { Link } from "react-router-dom";

function DinamicHeader() {
  const sections = [{ title: "Noticias", url: "news" }];

  useEffect(() => {
    const page = document.querySelector("#main");

    function handleScroll() {
      const header = document.querySelector("#header");
      const d = page.clientHeight - page.scrollTop - header.offsetHeight;
      header.classList.toggle("fixed-header", d < 0);
    }

    page.addEventListener("scroll", handleScroll);

    return () => {
      page.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className="absolute bottom-0 z-20 flex container h-14 max-w-[100vw] items-center justify-between border-y border-border/70 bg-background/95"
    >
      <Link to="/" className="flex items-center gap-4 ">
        <BombillaLibro width="52" height="52" />
        <LetrasBombilla width="120" height="52" />
      </Link>
      <div>
        <div className="flex items-center gap-6">
          <nav className="hidden sm:block">
            <ul className="flex items-center gap-6">
              {sections.map(({ title, url }) => (
                <li key={title}>
                  <Link to={url} className="text-sm">
                    {title}
                  </Link>
                </li>
              ))}
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
