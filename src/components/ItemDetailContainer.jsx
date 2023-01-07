import ItemDetail from "./ItemDetail"
import data from "../utils/data"
import customFetch from "../utils/customFetch"
import { useState,useEffect } from "react"
const ItemDetailContainer = () => {
    const idItem=6
    const [datos,setDatos]=useState([])

    useEffect(()=>{
        customFetch(1000, data.find(item=>item.id == idItem))
        .then(response => setDatos(response))
        .catch(err=>console.log(err))
    },[]);


    return(
        <>
            <ItemDetail datos={datos}/>
        </>
    )
}

export default ItemDetailContainer