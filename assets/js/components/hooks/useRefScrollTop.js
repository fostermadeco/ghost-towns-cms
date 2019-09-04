import { useEffect } from 'react';

const useRefScrollTop = (ref, shouldScroll) => {
    useEffect(() => {
        console.log(ref);
        if (ref.current && shouldScroll) {
            ref.current.scrollTop = 0;
        }
    }, [ref, shouldScroll]);
};

export default useRefScrollTop;
