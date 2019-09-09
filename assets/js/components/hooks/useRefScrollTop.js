import { useEffect } from 'react';

const useRefScrollTop = (ref, shouldScroll) => {
    useEffect(() => {
        if (ref.current && shouldScroll) {
            ref.current.scrollTop = 0;
        }
    });
};

export default useRefScrollTop;
