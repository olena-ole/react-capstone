import Image from '../components/Image';
import { getClass } from '../utils/index';
import { Context } from '../Context';
import React, { useContext } from 'react';

function Photos() {

    const { allPhotos } = useContext(Context);
    const imageEls = allPhotos.map( (photo, i) => (
        <Image 
            key={photo.id} 
            img={photo} 
            className={getClass(i)} 
        />
    ));

    return (
        <main className="photos">
            {imageEls}
        </main>
    );
}

export default Photos