//*import the ability to subscribe with useContext
import React, { useContext } from "react";

// Components
import Product from "./Product";
//*import what you'd like to subscribe to that you made
import { ProductContext } from "../context/ProductContext";

const Products = () => {
// * marry the two together! What it gives us is a rip in the space time continuum and RETURNS AN OBJECT
const asdf = useContext(ProductContext)
const {addItem, products} = asdf;
console.log(products)

  return (
    <div className="products-container">
      {products.map((product) => (
        <Product key={product.id} product={product} addItem={addItem} />
      ))}
    </div>
  );
};

export default Products;
