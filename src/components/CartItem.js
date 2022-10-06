import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Context } from '../Context'

function CartItem( { item } ) {

    const { removeFromCart } = useContext(Context);

    return (
        <div className="cart-item">
            <i className="ri-delete-bin-line" onClick={() => removeFromCart(item.id)}></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    );
};

CartItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
};

export default CartItem;