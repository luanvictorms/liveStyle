import Home from "./pages/Home"
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes , Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/listaprodutos" element={<ProductList/>} />
            <Route path="/produto" element={<Product/>} />
            <Route path="/carrinho" element={<Cart/>} />
            <Route path="/logar" element={<Login/>} />
            <Route path="/registrar" element={<Register/>} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;