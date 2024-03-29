import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../store';
const ProductItem = (props) => {
  const { title, price, description } = props.item;
  const disPatch=useDispatch();
  const product={
    ...props.item,
    quantity:1,
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={()=>disPatch(cartAction.addToCart(product))}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
