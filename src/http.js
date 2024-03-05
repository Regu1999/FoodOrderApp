export async function getMealsData() {
    try {
        const res = await fetch("http://localhost:3000/meals");
        const resdata = await res.json();
        if (!res.ok) {
            throw new Error("unable to fetch data")
        }
        return resdata
    } catch (error) {
        console.log(error);
    }
}

export async function sendOrderDara(order) {
    console.log(order);
    try {
        const res = await fetch("http://localhost:3000/orders", {
            method: 'POST',
            headers:{
                "Content-Type":'application/json'
            },
            body: JSON.stringify({order})
        });
        if (!res.ok) {
            throw new Error("Unable to Order fodd try again later")
        }
        return res.json()
    } catch (error) {
        console.log(error);
    }
}