//import Bootstrap
import 'bootstrap/dist/css/bootstrap.css';

import ItemDetail from "./ItemDetail"
import data from "../utils/data"
import customFetch from "../utils/customFetch"
import { useState, useEffect } from "react"
const ItemDetailContainer = () => {
    //custom ID to prove fetch
    const idItem=3
    //state use to keep a found item
    const [datos,setDatos]=useState([])

    useEffect(()=>{
        customFetch(1000, data.find(item=>item.id == idItem))
        .then(response => setDatos(response))
        .catch(err=>console.log(err))
    },[]);


    return(
        <div className="container-fluid bg-primary p-3 m-3 d-flex flex-column justify-content-center align-items-center">
            <ItemDetail datos={datos}/>
        </div>
    )
}

export default ItemDetailContainer