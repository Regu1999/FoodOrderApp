import { createContext } from "react";

export const MealsContext=createContext({
    mealsInfo:[],
    mealsCart:[],
    addMeals:()=>{},    
    addCartData:()=>{},
    isModel:null,
    setIsModel:()=>{}
})

export const CartTotalCtx=createContext({
    total:null,
    setTotal:()=>{}
})