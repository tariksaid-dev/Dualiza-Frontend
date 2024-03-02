import { supabaseUrl } from "@/services/supabase";
import React from "react";

const NewsSection = ({ news }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {news.map((item, index) => (
        <div key={index} className="bg-gray-100 rounded-xl overflow-hidden">
          <img
            alt="Image"
            className="object-contain w-full h-72 md:h-56 lg:h-72"
            src={`${supabaseUrl}/storage/v1/object/public/news/${item.image}`}
          />
          <div className="p-4">
            <div className="text-sm font-semibold text-slate-400 mb-1">{item.created_at}</div>
            <h2 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsSection;
