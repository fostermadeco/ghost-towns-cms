import { useEffect } from 'react';

const useRefScrollTo = (ref, shouldScroll) => {
    useEffect(() => {
        if (shouldScroll) {
            window.scroll(0, ref.current.offsetTop - 80);
        }
    }, [ref, shouldScroll]);
};

export default useRefScrollTo;
