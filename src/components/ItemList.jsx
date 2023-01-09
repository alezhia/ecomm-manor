import "../styles/ItemList.css"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const ItemList = ({ categoria, nombre, anio, precio, stock, portada }) => {
    return (
        <Card className="card-container bg-light" style={{ width: "14rem" }}>
            <div className="img-container d-flex justify-content-center align-items-center" >
                <Card.Img className="card-img" variant="top" src={portada} />
            </div>
            <Card.Body className="card-body d-flex flex-column justify-content-between">
                <div className="card-headings">
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{categoria} - {anio}</Card.Subtitle>
                </div>
                <div className="card-txt mb-2">
                    <Card.Text>Precio: {precio}</Card.Text>
                    <Card.Text>Stock: {stock}</Card.Text>
                </div>
            </Card.Body>
            <Button className="m-3 mt-0" variant="primary">Detalle</Button>
        </Card>
    )
}

export default ItemList