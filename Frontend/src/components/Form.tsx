import { Link, useNavigate } from "react-router-dom"
import InputLabel from "./InputLabel"
import { useState } from "react"
import { SignupInput } from "shahzad_malik_common_types"
import axios from "axios"
import { REQUEST_URL} from "../config"


const Form = ({type} :{type:"Signup" | "Signin"}) => {
    const navigate = useNavigate()
    const [formInputs, setformInputs] =useState<SignupInput>({
        name:"",
        email:"",
        password:""
 })


 async function request(){
    try {
        const response = await axios.post(`${REQUEST_URL}/api/v1/user${type=="Signup"?"/signup":"/signin"}`, formInputs)
        const jwt = response.data.jwt
        localStorage.setItem("token",jwt)
        navigate("/blogs")
        
    } catch (error) {
        alert("something Wrong")
        
    }
   
   }
  

  return (
    <div className="h-screen flex justify-center items-center flex-col">
        <div className="mb-5">
            <div className="text-4xl font-bold mb-2">Create an account</div>
            <div className="text-xl text-gray-500 font-normal">{type=="Signup"?"Already Have an account?":"Don't Have an account? "} <Link className="underline" to={type=="Signup"?"/signin":"/signup"}> {type=="Signup"?"Login":"Singup"}</Link></div>
           
        </div>
        <div className="">
      { type=="Signup"? <div className="my-3"><InputLabel label="Username" type={"text"} placeholder="Enter Your Usernme" onChange={(e)=>setformInputs({
            ...formInputs,
            name:e.target.value
        })}/></div>:""}
        <div className="my-3"><InputLabel label="Email" type={"text"} placeholder="Enter Your Email" onChange={(e)=>setformInputs({
            ...formInputs,
            email:e.target.value
        })}/></div>
        <div className="my-3"><InputLabel label="Password" type={"password"} placeholder="Enter Your Password" onChange={(e)=>setformInputs({
            ...formInputs,
            password:e.target.value
        })}/></div>

        <button onClick={request} className="bg-black text-white px-2 py-2 w-full rounded-md font-semibold text-xl mt-2">{type=="Signup"?"Signup":"Signin"}</button>
        </div>
     
      
      
    </div>
  )
}

export default Form
