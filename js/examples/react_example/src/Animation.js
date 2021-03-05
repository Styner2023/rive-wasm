import React, { useRef, useEffect } from 'react';
import { RiveAnimation, Layout } from 'rive-js';
import styles from './App.css';

const Animation = ({ asset, animation, fit, alignment }) => {
    const canvas = useRef(null);
    const animationContainer = useRef(null);
    let riveAnimation;

    // Resizes the canvas to match the parent element
    useEffect(() => {
        const { width: w, height: h } = animationContainer.current.getBoundingClientRect();
        canvas.current.width = w;
        canvas.current.height = h;
    });

    // Start the animation
    useEffect(() => {
        riveAnimation = new RiveAnimation({
            src: asset,
            canvas: canvas.current,
            animation: animation,
            alignment: new Layout(fit, alignment),
            autoplay: true,
        });

        return () => riveAnimation?.stop();
    }, []);

    return (
        <div ref={animationContainer} className="App-logo">
            <canvas ref={canvas} />
        </div>
    );
};

export default Animation;