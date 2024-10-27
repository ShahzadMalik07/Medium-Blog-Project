import Appbar from "../components/Appbar"
import BlogCard from "../components/BlogCard"
import ShimmerUi from "../components/ShimmerUi"
import { useBlogs } from "../hooks/indec"
import { useSearchContext } from "../SearchContext"



const Blogs = () => {
  const {loading, blogss} = useBlogs()
  const { searchResults, query } = useSearchContext();
console.log(searchResults)
 

  

  if (loading){
    return <div>
      <ShimmerUi/>
    </div>
  }

  return (
    <div>
      <Appbar/>
     { query ? searchResults.map(blog=><BlogCard content={blog.content} title={blog.title} authorname={blog.author.name} date={"23 DEC 2023"} id={blog.id}/>)  :blogss.map(blogs=> <BlogCard content={blogs.content} title={blogs.title} authorname={blogs.author.name} date={"23 DEC 2023"} id={blogs.id}/>)}
     
     
   
    
    </div>
  )
}

export default Blogs
