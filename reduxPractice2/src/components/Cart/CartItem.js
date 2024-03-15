import classes from './CartItem.module.css';
import { cartAction } from '../../store';
import { useDispatch } from 'react-redux';
const CartItem = (props) => {
  const { id, title, quantity, price } = props.item;
  const total = price*quantity;
  const disPatch=useDispatch()
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={()=>disPatch(cartAction.decrement(id))}>-</button>
          <button onClick={()=>disPatch(cartAction.increment(id))}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
