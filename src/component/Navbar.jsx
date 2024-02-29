import logo from '../assets/logo.jpg'
import CartButton from './CartButton'
export default function Navbar() {
    return <div id="main-header">
        <div id="title">
            <img src={logo} alt="food order logo" /> <h1>REACT FOOD</h1>
        </div>
        <CartButton />
    </div>
}