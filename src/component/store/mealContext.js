import { createContext } from "react";

export const MealsContext=createContext({
    mealsInfo:[],
    mealsCart:[],   
    addCartData:()=>{},
    isModel:null,
    setIsModel:()=>{}
})

export const CartTotalCtx=createContext({
    total:null,
    setTotal:()=>{},
    popUp:'',
    setPopUp:()=>{},
    notificationStatis:null,
    setNotificationStatis:()=>{}
})