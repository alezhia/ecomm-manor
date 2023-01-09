import Card from "react-bootstrap/Card"

const ItemList = ({ categoria, nombre, anio, precio, stock, portada }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={portada} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{categoria} - {anio}</Card.Subtitle>
                <Card.Text>Precio: {precio}</Card.Text>
                <Card.Text>Stock: {stock}</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
    )
}

export default ItemList