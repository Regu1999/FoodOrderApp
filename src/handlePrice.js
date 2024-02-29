export const somePriceWithQty = (cartValue) => {
    const prices=[];
    cartValue.map((value)=>{
        // const 
        prices.push(value.qty*Number(value.price))
    })
    const totalPrice=prices.length>0 ? prices.reduce((a,b)=>a+b):0;
    // console.log("total:", totalPrice);
    return totalPrice
}