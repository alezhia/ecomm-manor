const ItemDetail =({datos})=>{

    return(
        <>
            <h3>{datos.nombre}</h3>
            <img className="img-thumbnail img-fluid w-25 h-25" src={datos.foto} alt={datos.nombre}/>
        </>
    )
}

export default ItemDetail