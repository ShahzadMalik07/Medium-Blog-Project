import { blog } from "../hooks/indec"
import Appbar from "./Appbar"

type BlogSingleProps = {
  blog: blog;
  finalName: string;
};

const BlogSingle = ({ blog, finalName }: BlogSingleProps) => {
  
  return (
    <div>
      <Appbar />
      <div className="grid grid-cols-12 px-2 py-2 mt-4 ">
        <div className="grid col-span-8  px-2 py-2 mt-8 ml-8 ">
          <h1 className="text-6xl font-bold w-[95%]  mb-4">{blog.title}</h1>
          <h6 className="text-lg text-gray-500 font-medium mb-4">Posted on August 24, 2023</h6>
          <p className="text-lg font-[500]  font-sans">{blog.content}</p>


        </div>
        <div className="col-span-4 px-2 py-2 mt-8 ml-8 w-full">
          <div className="text-lg font-medium mb-3 ml-2">Author</div>
          <div className=" flex items-center gap-3 px-2">
            <div className="w-12 h-8 rounded-full bg-gray-200  "></div>
            <div>
              <h1 className="text-2xl font-bold mb-1">{finalName}</h1>
              <p className="text-gray-600 text-lg w-11/12">Lorem ipsum dolor, sit amet consectetur adipisicingobcaecati soluta pariatur .</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default BlogSingle
