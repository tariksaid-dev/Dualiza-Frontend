import { supabaseUrl } from "@/services/supabase"
import { Link } from "react-router-dom"

const UniqueSideNews = ({ item }) => {
  const { id, created_at, title, content, image } = item;
  return (
    <div className="grid md:grid-cols-2">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight line-clamp-3">{title}</h2>
              <p className="text-gray-500 dark:text-gray-400">Creado el {created_at.split("T")[0]}</p>
              <p className="line-clamp-3 text-sm text-muted-foreground">
                {content.slice(0, 100)}...
              </p>
            </div>
            
            <Link to={`/news/${id}`} className="hidden md:flex items-start space-y-2" replace>
              <img
                alt="Image"
                className="aspect-[16/9] overflow-hidden rounded-lg object-cover"
                height={225}
                src={`${supabaseUrl}/storage/v1/object/public/news/${image}`}
                width={400}
              />
            </Link>
          </div>
  )
}

export default UniqueSideNews