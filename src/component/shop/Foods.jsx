import Food from "./Food"
import { useContext, useEffect, useState } from "react";
import { MealsContext } from "../store/mealContext";
import { getMealsData } from "../../http";
export default function Foods({ updateSetMeals }) {
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        async function fetchedData() {
            setIsLoading(true)
            const mealsData = await getMealsData();
            !mealsData.resStatus && setIsLoading(null);
            mealsData.resStatus && updateSetMeals(mealsData.resdata) & setIsLoading(false);
        }
        fetchedData()
    }, [])
    const { mealsInfo } = useContext(MealsContext)
    const Notification=({message="loading...."})=> <h3 style={{ textAlign: 'center', color: 'yellow' }}>{message}</h3>
    if (isLoading) {
        return <Notification />
    }
    if (isLoading == null) {
        return <Notification message=" Unable to get data try again later" />
    }
    return <div id="meals">
        {mealsInfo.map((meal) => {
            return <Food key={meal.id} meal={meal} />
        })}
    </div>
}