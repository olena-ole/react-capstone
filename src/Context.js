import React, {useState} from "react";

const Context = React.createContext();

function ContextProvider(props) {

    const [allPhotos, setAllPhotos] = useState([]);

    return (
        <Context.Provider value={{allPhotos}}>
            {props.children}
        </Context.Provider>
    );
};

export {ContextProvider, Context};