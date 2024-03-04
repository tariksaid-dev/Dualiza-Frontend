import { useParams } from "react-router-dom"
import NewContent from "@/features/news/NewContent"

const NewsDetails = () => {

  const {NewId} = useParams()

  return (
    <div>
      <NewContent NewId={NewId}/>
    </div>

  )
}

export default NewsDetails