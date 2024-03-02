import { supabaseUrl } from "@/services/supabase";
import React from "react";

const MainNews = ({ created_at, title, imageUrl }) => {
  return (
    <div className="aspect-[16/9] rounded-xl overflow-hidden relative">
      <img
        alt="Image"
        className="object-cover w-full h-full"
        src={`${supabaseUrl}/storage/v1/object/public/news/${imageUrl}`}
        style={{
          aspectRatio: "400/225",
          objectFit: "cover",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gray-900/50 backdrop-blur-20 p-4">
        <div className="text-sm font-semibold text-gray-50 mb-1">{created_at}</div>
        <h2 className="text-3xl font-bold tracking-tighter text-gray-100/90">{title}</h2>
      </div>
    </div>
  );
};

export default MainNews;
