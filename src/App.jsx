//import Bootstrap
import 'bootstrap/dist/css/bootstrap.css';

import ItemDetailContainer from "./components/ItemDetailContainer"
const App = () => {
  return (
    <div className="container bg-secondary m-3 p-2 d-flex flex-column justify-content-center align-items-center">
      <h1>ecomm-manor</h1>
      <h2>fran_s1_item-detail-container</h2>
      <ItemDetailContainer/>
    </div>
  )
}

export default App