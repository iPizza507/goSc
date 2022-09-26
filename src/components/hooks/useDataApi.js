import axios from "axios"
import { useEffect, useState } from "react"


export const  useDataApi = () => {

    const [dataFromApis, setDataFromApis] = useState([])
    const [loading, setLoading] = useState(true)

    const products = async () =>{
        try{
        const res = await axios.get('https://alkcommerceback.herokuapp.com/products')
        console.log(res.data)
        setDataFromApis(res.data)
        setLoading(false)
        }
        catch(err){
        console.log(err)
        }
    }

    useEffect(() => {
        products()
    }, [])
    


    console.log(dataFromApis);

        
    return{
        dataFromApis,
        loading,
    }
}
