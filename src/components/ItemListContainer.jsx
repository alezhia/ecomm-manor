import Container from "react-bootstrap/Container"
import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import customFetch from "../utils/customFetch"
import { showItems } from "../utils/customFunctions"
import products from "../utils/products"

const ItemListContainer = () => {
    const [itemListState, setItemListState] = useState([])
    const { categoryParam, subCategoryParam } = useParams()

    useEffect(() => {
        customFetch(500, showItems(categoryParam, subCategoryParam, products))
            .then((res) => setItemListState(res))
            .catch((err) => console.log(err))
    }, [categoryParam, subCategoryParam])

    return (
        <Container className="d-flex flex-wrap gap-3">
            {itemListState.map((item) => (
                <ItemList
                    key={item.idProducto}
                    categoria={item.categoria}
                    subCategoria={item.subCategoria}
                    nombre={item.nombre}
                    precio={item.precio}
                    stock={item.stock}
                    portada={item.portada}
                />
            ))}
        </Container>
    )
}

export default ItemListContainer
