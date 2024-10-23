import { Link, useNavigate } from "react-router-dom"
import { LiaEdit } from "react-icons/lia";


const Appbar = () => {
    const navigate = useNavigate()
    return (
        <div className="border-b border-slate-200 flex justify-between px-8 py-3">
            <div className="flex items-center text-2xl font-medium">
                <Link to={"/blogs"}>Medium</Link>
                <div className="rounded-full bg-gray-300 px-2 py-1"><input className="border-none" type="text" placeholder="Search" /></div>
            </div>
            <div className="flex items-center">
                <Link to={"/publish"}><button className="flex items-center gap-2 text-xl px-2 py-2 text-gray-700 mr-4 rounded-md"><LiaEdit className="text-3xl"/> Write</button></Link>
                <Link to={"/signin"}><button onClick={()=>{
                    localStorage.removeItem("token")
                    navigate("/signin")
                }} className="bg-black px-2 py-2 text-white mr-4 rounded-md">Sign Out</button></Link>


                <div className="bg-yellow-400 w-9 h-9 rounded-full flex justify-center items-center text-md">S</div>
            </div>

        </div>
    )
}

export default Appbar
