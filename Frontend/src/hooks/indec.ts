import axios from "axios"
import { useEffect, useState } from "react"
import { REQUEST_URL } from "../config"


export interface blog{
    "content":string,
    "title":string,
    "id":string,
    "author":{
      "name":string
    }
  }
export const useBlogs =() => {
const [blogss,setblogs] = useState<blog[]>([])

const[loading,setloading] = useState(true)

    useEffect(()=>{
        axios.get(`${REQUEST_URL}/api/v1/blog/bulk`,{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
        .then((response)=>{
            setblogs(response.data.posts)
            setloading(false)
        })

    },[])



    return {
    blogss,
    loading
}

}


export const useBlog =({ id }: { id: string })=>{
 const [blog,setblog] = useState<blog>()

const[loading,setloading] = useState(true)

    useEffect(()=>{
        axios.get(`${REQUEST_URL}/api/v1/blog/${id}`,{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
        .then((response)=>{
            setblog(response.data.post)
            setloading(false)
        })

    },[])



    return {
    blog,
    loading
}
    

}