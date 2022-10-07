import { useState, useEffect, useRef } from "react";

function useHover() {

    const ref = useRef(null);

    const [hovered, setHovered] = useState(false);

    function enter() {
        setHovered(true);
    };

    function leave() {
        setHovered(false);
    };

    useEffect( () => {
        const currentNode = ref.current;
        currentNode.addEventListener('mouseenter', enter);
        currentNode.addEventListener('mouseleave', leave);

        return () => {
            currentNode.removeEventListener('mouseenter', enter);
            currentNode.removeEventListener('mouseleave', leave);
        };

    }, []);

    return [hovered, ref];
};

export default useHover;