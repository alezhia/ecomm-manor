import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import customFetch from "../utils/customFetch"
import products from "../utils/products"


const ItemListContainer = () => {

    const [itemListState, setItemListState] = useState([])
    const { idCategoryParam } = useParams()

    const showItems = (items) => {
        if (idCategoryParam === undefined) {
            return items
        } else {
            return items.filter(item => item.idCategoria === parseInt(idCategoryParam))
        }
    }

    useEffect(() => {
        customFetch(1000, showItems(products))
            .then(res => setItemListState(res))
            .catch(err => console.log(err))
    },[idCategoryParam])

    return (
        <>
            {itemListState.map(item => (
                                <ItemList
                                    key= {item.idProducto}
                                    categoria= {item.categoria}
                                    nombre= {item.nombre}
                                    anio= {item.anio}
                                    precio= {item.precio}
                                    stock= {item.stock}
                                    portada= {item.portada}
                                />
            ))}
        </>
    )
}

export default ItemListContainer