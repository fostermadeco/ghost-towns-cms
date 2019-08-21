import { useState, useCallback } from 'react';

const useElementSize = () => {
    const [width, setWidth] = useState(500);
    const [height, setHeight] = useState(500);

    const ref = useCallback(node => {
        if (node !== null) {
            setWidth(node.getBoundingClientRect().width);
            setHeight(node.getBoundingClientRect().height);
        }
    }, []);

    return [ref, width, height];
};

export default useElementSize;
