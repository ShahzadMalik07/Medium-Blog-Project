import Appbar from "../components/Appbar"
import BlogCard from "../components/BlogCard"
import ShimmerUi from "../components/ShimmerUi"
import { useBlogs } from "../hooks/indec"



const Blogs = () => {
  const {loading, blogss} = useBlogs()
  

  if (loading){
    return <div>
      <ShimmerUi/>
    </div>
  }

  return (
    <div>
      <Appbar/>
     {blogss.map(blogs=> <BlogCard content={blogs.content} title={blogs.title} authorname={blogs.author.name} date={"23 DEC 2023"} id={blogs.id}/>)}
     
     
   
    
    </div>
  )
}

export default Blogs
