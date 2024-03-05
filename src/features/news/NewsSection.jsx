import { ThemeProviderContext } from "@/context/DarkModeContext";
import { supabaseUrl } from "@/services/supabase";
import { getNewsCard, getTextColorTitle } from "@/utils/themeHelpers";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const NewsSection = ({ id, created_at, title, imageUrl, content }) => {
  const { theme } = useContext(ThemeProviderContext);

  return (
    <Link to={`${id}`}>
      <div
        className='rounded-xl overflow-hidden max-w-96 border hover:border-white hover:shadow-xl transition-shadow transition-border duration-150 ease-in-out'
      >
        <img
          alt="Image"
          className="object-contain w-full h-72 md:h-56 lg:h-72"
          src={imageUrl}
        />
        <div className="p-4 max-h-52 min-h-52">
          <div
            className={`text-sm font-semibold mb-1 background`}
          >
            {created_at}
          </div>
          <h2 className="text-lg font-bold  mb-2">{title}</h2>
          <p className="text-sm text-muted-foreground">{content.slice(0, 100)}...</p>
        </div>
      </div>
    </Link>
  );
};

export default NewsSection;
