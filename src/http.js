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