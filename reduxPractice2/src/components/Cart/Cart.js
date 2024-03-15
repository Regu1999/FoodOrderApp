import { useState } from 'react';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
// let PRODUCT=[{id:"00001", title: 'Test Item', quantity: 3, total: 18, price: 6 }]
const Cart = (props) => {
  // const [cartProduct, setCartProduct]=useState(PRODUCT)
  const cartProduct=useSelector(state=>state.cartData.cartProduct)
  if (cartProduct.length==0) {
    return <h2 style={{color:'white', textAlign:'center', background:'gray'}}>Yout Cart is Empty!</h2>
  }
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartProduct.map(item=>{
          return <CartItem key={item.id} item={item} />
        })}
      </ul>
    </Card>
  );
};

export default Cart;
