import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Context } from '../Context';
import useHover from '../hooks/useHover';

function CartItem( { item } ) {

    const { removeFromCart } = useContext(Context);
    const [hovered, ref] = useHover();
    const binClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";

    return (
        <div className="cart-item">
            <i className={binClassName} 
                onClick={() => removeFromCart(item.id)}
                ref={ref}
            >
            </i>
            <img src={item.url} width="130px" alt=""/>
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