import { useState, useCallback } from 'react';

const useElementSize = (initialWidth = 500, initialHeight = 500) => {
    const [width, setWidth] = useState(initialWidth);
    const [height, setHeight] = useState(initialHeight);

    const ref = useCallback(node => {
        if (node !== null) {
            setWidth(node.getBoundingClientRect().width);
            setHeight(node.getBoundingClientRect().height);
        }
    }, []);

    return [ref, width, height];
};

export default useElementSize;
