// NewsSection.js
import React from "react";

const NewsSection = ({ news }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {news.map((item, index) => (
        <div key={index} className="bg-gray-100 rounded-xl overflow-hidden">
          <img
            alt="Image"
            className="object-cover w-full h-52 md:h-40 lg:h-52"
            src={item.imageUrl}
          />
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsSection;
