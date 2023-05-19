import proxy from '../../assets/img/carritoBlanco.png';
import './CartWidget.css';
import { useContext } from 'react';
import GeneralContext from "../../context/GeneralContext";

const CartWidget = () => {
    const { car } = useContext(GeneralContext);
    return (
        <div className='carrito'>
            <img width={200} height={200} src={proxy}  alt="cart-widget" />
            <div className='productoCarrito'>{car.length}</div>
        </div>
    )
}
export default CartWidget;