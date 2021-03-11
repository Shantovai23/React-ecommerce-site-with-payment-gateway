import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import NotFoundPage from './components/NotFoundPage'
import ProductsContextProvider from "./global/productsContext";
import Products from "./components/Products";
import Cart from "./components/Cart";
import CartContextProvider from './global/CartContext'

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
      <CartContextProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/"  component={Products} />
            <Route path='/cart' exact component={Cart}/>
            <Route component={NotFoundPage}/>
          </Switch>
        </Router>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
