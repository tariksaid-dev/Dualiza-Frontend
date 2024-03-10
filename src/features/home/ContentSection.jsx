import React from "react";
import "@fontsource/inter";

function ContentSection({ id, title, subtitle, children }) {
  return (
    <section
      id={id}
      className="flex flex-col items-center justify-center space-y-16 h-[100vh] relative"
    >
      <div className="flex flex-col items-center gap-12">
        <h2
          className="gradient-text text-center font-extrabold tracking-tight text-5xl sm:text-7xl md:text-8xl text-primary"
          style={{ fontFamily: "Inter" }}
        >
          {title}
        </h2>
        {subtitle}
      </div>
      {children}
    </section>
  );
}

export default ContentSection;
