import { useState } from "react"
import Appbar from "./Appbar"
import { blog, useBlog } from "../hooks/indec"
import { useParams } from "react-router-dom"


const Edit = () => {

    const {id} = useParams()
    const blogdata = useBlog({id:id || ""})

    const [title, settitle] = useState<blog>({})
    const [content, setcontent] = useState("")
    console.log(blogdata)
    
   
  return (
    <div>
        <Appbar/>
            <div className="flex items-center justify-center mt-4 px-8 w-full space-y-3 text-lg  ">
                <input onChange={(e)=>{
                    
                }} className="border w-[80%] py-4 px-4" type="text" placeholder="Title" />
            </div>
            <div className="flex items-center justify-center mt-4 px-8 w-full space-y-3">
                <textarea  onChange={(e)=>{
                
                }} className="border py-3 px-4 block w-[80%] border-gray-200 rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Enter Your Post Here" rows={8}></textarea>
            </div>
            <button onClick={async()=>{
            
           
            }} className="mt-4 ml-44 bg-green-600 hover:bg-green-700 transition-all px-4 py-2 text-white text-lg mr-4 rounded-md"  >update</button>
        </div>
  )
}

export default Edit
