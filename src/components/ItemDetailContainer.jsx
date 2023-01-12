//import Bootstrap
import 'bootstrap/dist/css/bootstrap.css';

import ItemDetail from "./ItemDetail"
import data from "../utils/data"
import customFetch from "../utils/customFetch"
import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"
const ItemDetailContainer = () => {
    //custom ID to prove fetch
    const {idItem}=useParams();
    //Agregar useParams para probar por Navegador, sino Maxi se enoja.


    //state use to keep a found item
    const [datos,setDatos]=useState([])

    const slugIdItem = (text) => text.toLowerCase().replace(" ", "-")

    useEffect(()=>{
        customFetch(1000, data.find(item=>slugIdItem(item.nombre) == idItem))
        .then(response => setDatos(response))
        .catch(err=>console.log(err))
    },[]);


    return(
        <div className="container bg-primary d-flex flex-column align-items-center m-2 p-2">
            {
                datos.length!==0
                ?<ItemDetail datos={datos}/>
                :<h1>Loading...</h1>
            }
        </div>
    )
}

export default ItemDetailContainer