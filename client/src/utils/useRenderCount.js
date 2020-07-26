import { useRef } from 'react';

export const useRenderCount = () => {
    const renders = useRef(0);
    console.log("Renders: ", renders.current++)
}