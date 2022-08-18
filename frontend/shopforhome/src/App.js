import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import  Home  from './components/Home';
import SharedLayout from './components/SharedLayout'
import Products from './components/Products';
import About from './components/About';
import SingleProduct from './components/SingleProduct';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<SharedLayout/>}>
                <Route index element={<Home/>}></Route>
                <Route path='about' element={<About/>}></Route>
                <Route path='products' element={<Products/>}></Route>
                <Route path='products/:productId' element={<SingleProduct/>}></Route>
              </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
