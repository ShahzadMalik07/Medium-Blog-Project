import BlogSingle from "../components/BlogSingle";
import { useBlog } from "../hooks/indec"
import { useParams } from "react-router-dom";
import { usename } from "../hooks/usename";
import ShimmerUi from "../components/ShimmerUi";




const Blog = () => {
  const { id } = useParams();
  const {blog, loading} = useBlog({id:id || ""})
  console.log(blog)
  
  const name = blog?.author.name
  const finalName = usename(name)


  if (loading){
    return <div>
    <ShimmerUi/>
    </div>
  }

  if (!blog) {
    throw new Error('blog is undefined');
  }

  return (
    <div>
      <BlogSingle blog={blog} finalName={finalName} />
    </div>
  )
}

export default Blog
