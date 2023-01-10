import { BrowserRouter } from 'react-router-dom';
import MiNavbar from './components/MiNavbar';
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
  return (
    <BrowserRouter>
   <MiNavbar />
   </BrowserRouter>
  )
}

export default App