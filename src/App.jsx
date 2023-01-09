import ItemListContainer from "./components/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
    return (
        <BrowserRouter>
            <h1>ecomm-manor</h1>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:idCategoryParam" element={<ItemListContainer />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App