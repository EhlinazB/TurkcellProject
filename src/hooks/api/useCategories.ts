import { useEffect, useState } from "react"
import { axiosInstance } from "../../config/axiosInstance"



export const useCategories = () => {
    const [categories, setcategories] = useState([])
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState({})  


    useEffect(() => {

        axiosInstance.get("categories")
            .then(res => {
                setcategories(res.data)
                setloading(false)
            })
            .catch(err => {
                seterror(err)
                setloading(false)
            })

    }, [])

    return { categories, loading, error }
    
}