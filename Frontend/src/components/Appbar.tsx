import { Link, useNavigate } from "react-router-dom"


const Appbar = () => {
    const navigate = useNavigate()
    return (
        <div className="border-b border-slate-200 flex justify-between px-8 py-3">
            <div className="flex items-center text-2xl font-medium">
                <Link to={"/blogs"}>Medium</Link>
            </div>
            <div className="flex items-center">
                <Link to={"/publish"}><button className="bg-green-400 px-2 py-2 text-white mr-4 rounded-md">New Blog</button></Link>
                <Link to={"/signin"}><button onClick={()=>{
                    localStorage.removeItem("token")
                    navigate("/signin")
                }} className="bg-purple-400 px-2 py-2 text-white mr-4 rounded-md">Sign Out</button></Link>


                <div className="bg-yellow-400 w-9 h-9 rounded-full flex justify-center items-center text-md">S</div>
            </div>

        </div>
    )
}

export default Appbar
