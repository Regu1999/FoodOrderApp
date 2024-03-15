import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { useState } from 'react';
let PRODUCTS=[{id:'0001', title:'Test', price:6, description:' This is a first product - amazing!'},{id:'0002', title:'Test 2', price:10, description:' This is a second product - wonderfull!'}]
const Products = (props) => {
  const[products, setProducts]=useState(PRODUCTS)
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map(item=>{
          return <ProductItem key={item.id} item={item}/>
        })}
      </ul>
    </section>
  );
};

export default Products;
