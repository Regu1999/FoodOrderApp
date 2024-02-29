import Food from "./Food"
import { useContext } from "react";
import { MealsContext } from "../store/mealContext";
export default function Foods() {
    const { mealsInfo } = useContext(MealsContext)
    return <div id="meals">
        {mealsInfo.map((meal) => {
            return <Food key={meal.id} meal={meal} />
        })}
    </div>
}