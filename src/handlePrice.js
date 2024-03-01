export const somePriceWithQty = (cartValue) => {
    const prices = [];
    cartValue.map((value) => {
        prices.push(value.qty * Number(value.price))
    })
    const totalPrice = prices.length > 0 ? prices.reduce((a, b) => a + b) : 0;
    return totalPrice
}

export const numerToPriceConverter = (price) => {
    const convertDoler = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
    return convertDoler;
}