import { useEffect } from 'react';

const useRefIntersect = (y, ref, callback) => {
    useEffect(() => {
        if (!ref.current) return;

        const elFromTop = ref.current.offsetTop;
        if (elFromTop >= y - 100 && elFromTop <= y + 200) {
            callback();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [y]);
};

export default useRefIntersect;
