import Container from "react-bootstrap/Container"
import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import customFetch from "../utils/customFetch"
import products from "../utils/products"


const ItemListContainer = () => {

    const [itemListState, setItemListState] = useState([])
    const { idCategoryParam, idSubCategoryParam } = useParams()

    const showItems = (items) => {
        if (idCategoryParam === undefined) {
            return items
        } else if (idSubCategoryParam === undefined) {
            return items.filter(item => item.idCategoria === parseInt(idCategoryParam))
        } else {
            return items.filter(item => (item.idCategoria === parseInt(idCategoryParam)
                                    && item.idSubCategoria === parseInt(idSubCategoryParam)))
        }
    }

    useEffect(() => {
        customFetch(1000, showItems(products))
            .then(res => setItemListState(res))
            .catch(err => console.log(err))
    },[idCategoryParam, idSubCategoryParam])

    return (
        <Container className="d-flex flex-wrap gap-3">
            {itemListState.map(item => (
                                <ItemList
                                    key= {item.idProducto}
                                    categoria= {item.categoria}
                                    subCategoria= {item.subCategoria}
                                    nombre= {item.nombre}
                                    precio= {item.precio}
                                    stock= {item.stock}
                                    portada= {item.portada}
                                />
            ))}
        </Container>
    )
}

export default ItemListContainer