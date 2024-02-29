import Button from "../UI/Button"
import { useContext } from "react";
import { MealsContext } from "../store/mealContext";
export default function Food({ meal }) {
    const { id, name, price, description, image } = meal;
    const { addCartData} = useContext(MealsContext);
    // console.log("hi");
    // function handleCartData() {
    //     // const isexistVal=isExist();
    //     const isExist = mealsCart.indexOf((meal) => {
    //         console.log(meal);
    //         return meal.id == id
    //     })
    //     console.log(mealsCart);
    //     if (isExist == -1) {
    //         setCart(prevCart => {
    //             return [...prevCart, { id, qty: 1 }]
    //         })
    //     }
    //     // console.log(isExist);
    // }
    return <div className="meal-item">
        <article>
            <img src={`http://localhost:3000/${image}`} alt={name} />
            <h3>{name}</h3>
            <div><span className="meal-item-price">${price}</span></div>
            <p className="meal-item-description">
                {description}
            </p>
            <div className="meal-item-actions"><Button onClick={()=>addCartData({type:'increment', dispatch:{id,price,qty:1}})}>Add to Cart</Button></div>
        </article>
    </div>
}