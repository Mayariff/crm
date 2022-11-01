import {useEffect, useState} from "react";


export function useWidthScreenListener() {
    const [screenWidth, setScreenWidth] = useState<number>(window.screen.width)
    useEffect(() => {
        function findWidth() {
            setScreenWidth(window.screen.width)
        }

        window.addEventListener('resize', findWidth);
        return () => window.removeEventListener('resize', findWidth)
    }, [screenWidth])
    return screenWidth
}