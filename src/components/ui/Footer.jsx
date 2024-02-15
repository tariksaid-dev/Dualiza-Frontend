import { useEffect } from "react";

function DinamicHeader() {
  const logoDark = "Logo-negativo-(3).webp";
  const logoWhite = "Logo-positivo-(1).webp";

  const sections = [
    { title: "Noticias", url: "#noticias" },
    { title: "Login", url: "#login" },
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
      className="absolute bottom-0 z-20 flex w-full items-center justify-between border-b border-transparent px-8 py-4 text-red bg-slate-900"
    >
      {/* hover? */}
      <a href="#" className="flex items-center gap-3">
        <img
          className="h-12"
          src={`images/LOGOS_PROYECTO/${logoDark}`}
          alt="Logo de una bombilla verde con una planta en su interior"
        />
      </a>
      <div>
        <div className="flex items-center gap-6">
          <nav className="hidden sm:block">
            <ul className="flex items-center gap-6">
              {sections.map(({ title, url }) => (
                <li key={title}>
                  <a href={url} className="text-sm">
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            id="open-nav-button"
            type="button"
            className="btn sm:hidden"
            aria-label="Navigation"
          >
            {/* SVG con un menú HAMBURGUER para responsive */}
            MENU
          </button>
          {/* cambiador de tema, componente */}
        </div>
        {/* REST */}
      </div>
    </header>
  );
}

export default DinamicHeader;
