import { Link, useNavigate, useParams } from "react-router-dom"
import { LiaEdit } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import { REQUEST_URL } from "../config";
import { useState } from "react";



const Appbar = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [loading, setloading] =useState(false)

    const handleclick = async () => {
        setloading(true)
        try {
            const response = await axios.delete(`${REQUEST_URL}/api/v1/blog/${id}`, {
                headers: {
                    Authorization: localStorage.getItem('token'),
                },
            });

            alert('Post deleted successfully!');
            navigate("/")

        } catch (error) {
            console.error('Error deleting post:', error);
        } finally {
            setloading(false)
            navigate("/blogs")
        }

    }


    return (
        <div className="border-b border-slate-200 flex justify-between px-8 py-3">
            <div className="flex items-center gap-3 font-medium">
                <Link className="text-3xl" to={"/blogs"}>Medium</Link>
                <div className="flex items-center bg-[#F9F9F9] rounded-full gap-2 px-2 py-2"><span><CiSearch className="text-2xl" /></span><input className="outline-none bg-transparent text-sm" type="text" placeholder="Search" /></div>



            </div>
            <div className="flex items-center">

              {id &&  <button className="mr-4 px-3 py-2 bg-red-500 text-white rounded-md" onClick={handleclick}>{loading?"Deleting...":"Delete"}</button>}
                <Link to={"/publish"}><button className="flex items-center gap-2 text-xl px-2 py-2 text-gray-700 mr-4 rounded-md"><LiaEdit className="text-3xl" /> Write</button></Link>
                <Link to={"/signin"}><button onClick={() => {
                    localStorage.removeItem("token")
                    navigate("/signin")
                }} className="bg-black px-3 py-2 text-white mr-4 rounded-md">Sign Out</button></Link>


                <div className="bg-yellow-400 w-9 h-9 rounded-full flex justify-center items-center text-md">S</div>
            </div>

        </div>
    )
}

export default Appbar
