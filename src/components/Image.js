import {useState, useContext} from 'react';
import {Context} from '../Context';

function Image({className, img}) {

    const {toggleFavorite} = useContext(Context);

    const [hovered, setHovered] = useState(false);
    const heartIcon = hovered && <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>;
    const plusIcon = hovered && <i className="ri-add-circle-line cart"></i>;

    return (
        <div 
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={img.url} className="image-grid" />
            {heartIcon}
            {plusIcon}
        </div>
    );
};

export default Image;