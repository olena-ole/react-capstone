import React, {useState, useEffect} from "react";

const Context = React.createContext();

function ContextProvider(props) {

    const [allPhotos, setAllPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json';

    function toggleFavorite(id) {
        setAllPhotos( (prevPhotos) => {
            return prevPhotos.map( prevPhoto => {
                return prevPhoto.id === id ? 
                    {...prevPhoto, isFavorite: !prevPhoto.isFavorite} : 
                    prevPhoto
                });
        });
    };

    function addToCart(imgObj) {
        setCartItems(prev => [...prev, imgObj]);
    };

    function removeFromCart(id) {
        setCartItems(prev => prev.filter( photo => photo.id !== id));
    };

    function emptyCart() {
        setCartItems([]);
    };

    useEffect( () => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, []);

    return (
        <Context.Provider value={{allPhotos, toggleFavorite, cartItems, addToCart, removeFromCart, emptyCart}}>
            {props.children}
        </Context.Provider>
    );
};

export {ContextProvider, Context};