import './App.css';
import Nav from './Components/Nav';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import PrivateComponent from './Components/PrivateComponent';
import Aproduct from './Components/Aproduct';
import Product from './Components/Product';
import Uprodcut from './Components/Uproduct';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path='/'element={<Product/>} />
        <Route path='/AProduct'element={<Aproduct/>} />
        <Route path='/Uprodcut/:id'element={<Uprodcut/>} />
        </Route>
        <Route path='/Register'element={<Register/>} />
        <Route path='/Login'element={<Login/>} />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
