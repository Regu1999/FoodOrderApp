export async function getMealsData() {
    try {
        const res = await fetch("http://localhost:3000/meals");
        const resdata = await res.json();
        if (!res.ok) {
            throw new Error(res)
        }
        return {resdata, resStatus:res.ok}
    } catch (error) {
        return error;
    }
}

export async function sendOrderDara(order) {
    try {
        const res = await fetch("http://localhost:3000/orders", {
            method: 'POST',
            headers:{
                "Content-Type":'application/json'
            },
            body: JSON.stringify({order})
        });
        if (!res.ok) {
            throw new Error("Unable to Order Please try again later")
        }
        return res
    } catch (error) {
        return error;
    }
}