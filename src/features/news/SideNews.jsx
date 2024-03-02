import React from "react";

const SideNews = ({ category, title, imageUrl }) => {
  return (
    <div className="aspect-[16/9] rounded-xl overflow-hidden relative">
      <img
        alt="Image"
        className="object-cover w-full h-full"
        src={imageUrl}
        style={{
          aspectRatio: "400/225",
          objectFit: "cover",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gray-900/50 backdrop-blur-20 p-4">
        <h2 className="text-xl font-bold tracking-tighter text-gray-100/90">{title}</h2>
      </div>
    </div>
  );
};

export default SideNews;
