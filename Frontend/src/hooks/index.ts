import axios from "axios"
import { useEffect, useState } from "react"
import { REQUEST_URL } from "../config"
import { blog } from "./indec"


const useSearch = (query: any) => {
    const [result, setresult] = useState<blog[]>([])

    const data = async () => {
        const res = await axios.get(`${REQUEST_URL}/api/v1/blog/search?query=${query}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        setresult(res.data)
    }

    useEffect(() => {
        if (query) {

           const handle = setTimeout(() => {
            data()
            console.log('hhhh')
           }, 2000);
           return ()=> clearTimeout(handle)         
                

            


        }


    }, [query])
    return result





}
export default useSearch