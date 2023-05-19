import React from 'react';
import './ariane.css'
import { useLocation } from 'react-router-dom';

function Ariane() {
    const location = useLocation();
    const paths = location.pathname.split("/").filter(Boolean);

    return (
        <header>
            <nav className="ariane">
                <p>
                    {paths.map((path, index) => (
                        <React.Fragment key={index}>
                            {path}
                            {index < paths.length - 1 && " > "}
                        </React.Fragment>
                    ))}
                </p>
            </nav>
        </header>
    );
}

export default Ariane;
