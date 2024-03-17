import SingleNewCard from "./SingleNewCard";

function OriginalNewContainer({ originalValue }) {
  if (!originalValue) return;

  const { id, created_at, title, content, image, category } = originalValue;

  return (
    <div className="flex flex-col space-y-4 h-full max-h-full">
      <SingleNewCard image={image} content={content} title={title} />
    </div>
  );
}

export default OriginalNewContainer;
