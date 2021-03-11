import React, { useContext } from "react";
import { ProductsContext } from "../global/productsContext.js";
import { CartContext } from "../global/CartContext.js";
import Banner from "./Banner";
import Button from '@material-ui/core/Button';
const Products = () => {
  const { products } = useContext(ProductsContext);
  const { dispatch } = useContext(CartContext);
  

  return (
    <div className="container">
      <Banner />
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt="not-found" />
            </div>
            <div className="product-details">
              <div className="product-name">{product.name}</div>
              <div className="product-price">${product.price}.00</div>
            </div>
            <Button variant="contained" color="primary"
              className="add-to-cart"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  id: product.id,
                  product: product,
                })
              }
            >
              Add to Cart
            </Button>
            {product.status === "hot" ? <div className="hot">Hot</div> : ""}
            {product.status === "new" ? <div className="new">New</div> : ""}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;
