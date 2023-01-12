const ItemDetail =({datos})=>{

    return(
        <div>
            <h3>{datos.nombre}</h3>
            <p>{datos.descripcion}</p>
            <img className="img-thumbnail img-fluid w-25 h-25" src={datos.foto} alt={datos.nombre}/>
        </div>
    )
}

export default ItemDetail