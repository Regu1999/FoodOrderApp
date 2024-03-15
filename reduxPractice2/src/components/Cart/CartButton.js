import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartAction } from '../../store';
const CartButton = (props) => {
  const cartData = useSelector(state => state.cartData.cartProduct)
  const disPatch = useDispatch();
  const totalQty = cartData.reduce((prevVal, currentVal) => {
    return prevVal + currentVal.quantity
  }, 0);
  return (
    <button className={classes.button} onClick={() => disPatch(cartAction.openCart())}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQty}</span>
    </button>
  );
};

export default CartButton;