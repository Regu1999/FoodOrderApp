import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux'

function App() {
  const cartVisibility = useSelector(state => state.cartData.isCartVisible);
  const cartData = useSelector(state => state.cartData.cartProduct);
  useEffect(() => {
    const sendData = async () => {
      const response =await fetch('https://testing-34b2c-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cartData)
      })
      if(!response.ok){
        throw new Error("unable to send data")
      }
      const resData=await response.json();
    }
    sendData()
  },[cartData])
  // console.log(cartData);
  return (
    <Layout>
      {cartVisibility && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;