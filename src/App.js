
import './App.css';
import Navbar from './components/Navbar.jsx'
import Banner from './components/Banner.jsx'
import ProductsContextProvider from './global/productsContext'
import Products from './components/Products'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <ProductsContextProvider>
       <div className='container'>
       <Products/>
       </div>
     </ProductsContextProvider>
    </div>
  );
}

export default App;
