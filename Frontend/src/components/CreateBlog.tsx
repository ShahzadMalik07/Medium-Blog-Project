import { useState } from "react"
import { REQUEST_URL } from "../config"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Spinner from "./Spinner"

const CreateBlog = () => {
    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")
    const [loading, setloading] =useState(false)
    const navigate = useNavigate()

    return (
        <div>
            <div className="flex items-center justify-center mt-4 px-8 w-full space-y-3 text-lg  ">
                <input onChange={(e)=>{
                    settitle(e.target.value)
                }} className="border w-[80%] py-4 px-4" type="text" placeholder="Title" />
            </div>
            <div className="flex items-center justify-center mt-4 px-8 w-full space-y-3">
                <textarea  onChange={(e)=>{
                    setcontent(e.target.value)
                }} className="border py-3 px-4 block w-[80%] border-gray-200 rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Enter Your Post Here" rows={8}></textarea>
            </div>
            <button onClick={async()=>{
                setloading(true)
                try {
                    const response = await axios.post(`${REQUEST_URL}/api/v1/blog`,{
                        title,
                        content
                    },
                {
                    headers:{
                        Authorization:localStorage.getItem("token")
                    }
                })
                navigate(`/blog/${response.data.id}`)
                    
                } catch (error) {
                    console.error('Failed to publish the blog', error);
                    
                }
                finally{
                    setloading(false)

                }
            }} className="mt-4 ml-44 bg-green-600 hover:bg-green-700 transition-all px-4 py-2 text-white text-lg mr-4 rounded-md" disabled={loading} >{loading? <Spinner/> : "Publish" }</button>
        </div>
    )
}

export default CreateBlog
