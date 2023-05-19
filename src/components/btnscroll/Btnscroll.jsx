import React, { useState, useEffect } from 'react';
import './btnscroll.css';

const BackToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset > 50) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };
    }, []);

    return (
        <div className={`back-to-top ${showButton ? 'show' : 'hide'}`}>
            <button onClick={handleClick} className="back-to-top-button">
                <img src={process.env.PUBLIC_URL + 'scroll.png'} alt="scroll"></img>
            </button>
        </div>
    );
};

export default BackToTopButton;

