import Navbar from "./component/Navbar";
import Foods from "./component/shop/Foods"
import PopUpCard from "./component/UI/PopUpCard";
import { getMealsData } from "./http";
import { MealsContext } from "./component/store/mealContext";
import { useState, useEffect, useReducer } from "react";
import { cartReducer } from "./cartReducer";
function App() {
  // console.log("App");
  const [meals, setMeals] = useState([]);
  const [cart, cartDispatch] = useReducer(cartReducer, [])
  const [isModel, setIsModel] = useState(false);
  useEffect(() => {
    async function fetchedData() {
      const mealsData = await getMealsData();
      setMeals(mealsData)
    }
    fetchedData()
  }, [])

  const mealContext = {
    mealsInfo: meals,
    mealsCart: cart,
    addCartData: cartDispatch,
    isModel,
    setIsModel
  }
  return (
    <MealsContext.Provider value={mealContext}>
      <PopUpCard />
      <Navbar />
      <Foods />
    </MealsContext.Provider>
  );
}

export default App;
