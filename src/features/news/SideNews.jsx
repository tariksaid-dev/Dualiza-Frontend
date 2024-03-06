import { supabaseUrl } from "@/services/supabase";
import React from "react";
import { Link } from "react-router-dom";

const SideNews = ({ id, created_at, title, imageUrl }) => {
  return (
    <Link to={`${id}`} className="aspect-[16/9] rounded-xl overflow-hidden relative hover:shadow-xl transition-shadow duration-150 ease-in-out">
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
        <div className="text-sm font-semibold text-gray-50 mb-1">{created_at}</div>
        <h2 className="text-xl font-bold tracking-tighter text-gray-100/90">{title}</h2>
      </div>
    </Link>
  );
};

export default SideNews;
