import useWindowSize from 'react-use/lib/useWindowSize';

function useIsMobile() {
    const { width } = useWindowSize();

    return width < 768;
}

export default useIsMobile;
