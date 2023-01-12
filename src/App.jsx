//import Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import ItemDetailContainer from "./components/ItemDetailContainer"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/item/:idItem" element={<ItemDetailContainer/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App