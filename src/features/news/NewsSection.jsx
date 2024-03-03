import { supabaseUrl } from "@/services/supabase";
import React from "react";

const NewsSection = ({ created_at, title, imageUrl, content }) => {
  return (
    <div className="bg-gray-100 rounded-xl overflow-hidden w-full max-w-xl !important">

      <img
        alt="Image"
        className="object-contain w-full h-72 md:h-56 lg:h-72"
        src={`${supabaseUrl}/storage/v1/object/public/news/${imageUrl}`}
      />
      <div className="p-4">
        <div className="text-sm font-semibold text-slate-400 mb-1">
          {created_at}
        </div>
        <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-sm text-gray-600">{content.slice(0, 100)}...</p>
      </div>
    </div>
  );
};

export default NewsSection;
