import { useContext } from 'react';
import { Context } from '../Context';

import CartItem from '../components/CartItem';

const ITEM_PRICE = 5.99;

function Cart() {

    const { cartItems } = useContext(Context);
    const cartItemEls = cartItems.map( item => (
        <CartItem key={item.id} item={item}/>
    ));

    function countTotal() {
        const totalCost = cartItems.length * ITEM_PRICE;
        return totalCost.toLocaleString("en-US", {style: "currency", currency: "GBP"})
    }
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemEls}
            <p className="total-cost">Total: {countTotal()}</p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}

export default Cart