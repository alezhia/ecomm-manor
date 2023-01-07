const ItemDetail =({datos})=>{

    return(
        <>
            <h3>{datos.nombre}</h3>
            <img src={datos.foto}/>
        </>
    )
}

export default ItemDetail