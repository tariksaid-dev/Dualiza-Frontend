function ContentSection({ id, title, text }) {
  return (
    <section
      id={id}
      className="flex scroll-mt-24 flex-col items-center gap-4 space-y-8"
    >
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-center font-extrabold tracking-tight text-6xl">
          {title}
        </h2>
      </div>
      <p>{text}</p>
    </section>
  );
}

export default ContentSection;
