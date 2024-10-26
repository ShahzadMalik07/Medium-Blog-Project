import { useEffect, useState } from "react"
import Appbar from "./Appbar"
import {  useBlog } from "../hooks/indec"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { REQUEST_URL } from "../config"
import Spinner from "./Spinner"


const Edit = () => {

    const { id } = useParams()
    const blogdata = useBlog({ id: id || "" })

    const [title, settitle] = useState<string | undefined>("")
    const [content, setcontent] = useState<string | undefined>("")
    const [loading, setloading] = useState(false)
    const navigate = useNavigate()


    useEffect(() => {
        if (blogdata?.blog) {
            settitle(blogdata.blog.title);
            setcontent(blogdata.blog.content)
        }
    }, [blogdata?.blog]);

    return (
        <div>
            <Appbar />
            <div className="flex items-center justify-center mt-4 px-8 w-full space-y-3 text-lg  ">
                <input onChange={(e) => {
                    settitle(e.target.value)
                }} className="border w-[80%] py-4 px-4" type="text" placeholder="Title" value={title || ""} />
            </div>
            <div className="flex items-center justify-center mt-4 px-8 w-full space-y-3">
                <textarea onChange={(e) => {
                    setcontent(e.target.value)
                }} value={content || ""} className="border py-3 px-4 block w-[80%] border-gray-200 rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Enter Your Post Here" rows={8}></textarea>
            </div>
            <button onClick={async () => {
                      try {
                        setloading(true)
                        await axios.put(`${REQUEST_URL}/api/v1/blog/edit`,{
                            id:id,
                            title:title,
                            content:content
                        }, {
                            headers: {
                                Authorization: localStorage.getItem('token'),
                            },
                        });
            
                        alert('Post updated successfully!');
                        
            
                    } catch (error) {
                        console.error('Error deleting post:', error);
                    } finally {
                        setloading(false)
                      navigate(`/blog/${id}`)
                    }

            }} className="mt-4 ml-44 bg-green-600 hover:bg-green-700 transition-all px-4 py-2 text-white text-lg mr-4 rounded-md"  disabled={loading} >{loading? <Spinner/> : "Update" }</button>
        </div>
    )
}

export default Edit
