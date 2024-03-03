import { useParams } from "react-router-dom"
import NewContent from "@/features/news/NewContent"

const NewsDetails = () => {

  const {id} = useParams()

  return (
    <div>
      <NewContent NewId={id}/>
    </div>

  )
}

export default NewsDetails