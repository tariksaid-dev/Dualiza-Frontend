import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import BombillaLibro from "../icons/BombillaLibro";
import LetrasBombilla from "../icons/LetrasBombilla";

function StaticHeader({ sections = [] }) {
  return (
    <header
      id="header"
      className="z-20 flex container h-14 max-w-[100vw] items-center justify-between border-y border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed-header"
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

export default StaticHeader;
