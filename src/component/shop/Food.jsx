import Button from "../UI/Button"
import { useContext } from "react";
import { MealsContext } from "../store/mealContext";
import { numerToPriceConverter } from "../../handlePrice";
export default function Food({ meal }) {
    const { id, name, price, description, image } = meal;
    const { addCartData} = useContext(MealsContext);
    const convetedPrice=numerToPriceConverter(price);
    // console.log("hi");
    return <div className="meal-item">
        <article>
            <img src={`http://localhost:3000/${image}`} alt={name} />
            <h3>{name}</h3>
            <div><span className="meal-item-price">{convetedPrice}</span></div>
            <p className="meal-item-description">
                {description}
            </p>
            <div className="meal-item-actions"><Button onClick={()=>addCartData({type:'increment', dispatch:{id,price,qty:1}})}>Add to Cart</Button></div>
        </article>
    </div>
}