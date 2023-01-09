import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/Container"
import ItemListContainer from "./components/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
    return (
        <BrowserRouter>
            <Container className="mt-5 d-flex flex-column gap-5">
                <h1>ecomm-manor</h1>
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:idCategoryParam" element={<ItemListContainer />} />
                    <Route path="/category/:idCategoryParam/:idSubCategoryParam" element={<ItemListContainer />} />
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default App