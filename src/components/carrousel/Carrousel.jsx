import React, { useState, useEffect } from 'react';
import './carrousel.css';

function Carousel() {
    const images = [
        'fassa.jpg',
        'venise1.jpg',
        'house.jpg',
        'castel.jpg',
        'venise.jpg',
    ];
    const legends = [
        'Fassa, Italie',
        'Venise, Italie',
        'Leece, Italie',
        "Cortina d'Ampezzo, Italie",
        'Parma, Italie',
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((currentImageIndex + 1) % images.length);
        }, 3000);
        return () => {
            clearInterval(intervalId);
        };
    }, [currentImageIndex, images.length]);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const imageWidth = windowWidth < 768 ? windowWidth - 32 : 768 * 0.9;
    const imageHeight = imageWidth * 0.8;

    const numImages = windowWidth < 1090 ? 1 : 3; 

    return (
        <div className='carousel-container'>
            <div className='carousel-image-container'>
                {images
                    .slice(currentImageIndex)
                    .concat(images.slice(0, currentImageIndex))
                    .slice(0, numImages)
                    .map((image, index) => (
                        <div key={image}>
                            <div className='carousel-image-content'>
                                <img
                                    src={image}
                                    alt='slide'
                                    className='carousel-image'
                                    style={{ width: imageWidth, height: imageHeight }}
                                />
                                <p className='image-legend'>
                                    {legends[(index + currentImageIndex) % images.length]}
                                </p>
                            </div>
                        </div>
                    ))}
            </div>
            <div className='carousel-indicator-container'>
                {images.map((image, index) => (
                    <div
                        key={image}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`carousel-indicator ${index === currentImageIndex ? 'active' : ''
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
