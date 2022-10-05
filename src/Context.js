import React, {useState, useEffect} from "react";

const Context = React.createContext();

function ContextProvider(props) {

    const [allPhotos, setAllPhotos] = useState([]);
    const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json';

    function toggleFavorite(id) {
        setAllPhotos( (prevPhotos) => {
            return prevPhotos.map( prevPhoto => {
                return prevPhoto.id === id ? 
                    {...prevPhoto, isFavorite: !prevPhoto.isFavorite} : 
                    prevPhoto
                }) 
        })
    }

    useEffect( () => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, []);

    return (
        <Context.Provider value={{allPhotos, toggleFavorite}}>
            {props.children}
        </Context.Provider>
    );
};

export {ContextProvider, Context};