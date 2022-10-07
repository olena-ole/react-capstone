import { useState, useContext } from 'react';
import { Context } from '../Context';

import CartItem from '../components/CartItem';

const ITEM_PRICE = 5.99;

function Cart() {
    const [buttonText, setButtonText] = useState('Place Order');

    const { cartItems, emptyCart } = useContext(Context);
    const cartItemEls = cartItems.map( item => (
        <CartItem key={item.id} item={item}/>
    ));

    function countTotal() {
        const totalCost = cartItems.length * ITEM_PRICE;
        return totalCost.toLocaleString("en-US", {style: "currency", currency: "GBP"});
    };

    function placeOrder() {
        setButtonText('Ordering...');
        setTimeout( () => {
            emptyCart();
            console.log('Your order is placed!');
            setButtonText('Place Order');
        }, 3000);
    };

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemEls}
            <p className="total-cost">Total: {countTotal()}</p>
            <div className="order-button">
                {
                cartItems.length ? 
                <button onClick={placeOrder}>{buttonText}</button> : 
                <p>You have no items in your cart</p>
                }    
            </div>
        </main>
    );
};

export default Cart;