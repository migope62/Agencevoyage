import React, { useState } from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

function Header({ onLogout }) {
    const [menuVisible, setMenuVisible] = useState(false);

    const isLoggedIn = () => {
        return localStorage.getItem('isLoggedIn') === 'true';
    };

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
        document.querySelector('nav').classList.toggle('menu-visible');
    };

    const hideMenu = () => {
        setMenuVisible(false);
    };

    const handleLogout = () => {
        onLogout();
        hideMenu();
    };

    return (
        <>
            <header>
                <nav className={menuVisible ? 'menu-visible' : ''}>
                    <ul>
                        <li>
                            <img src={process.env.PUBLIC_URL + 'logoitalie6.png'} alt="logo"></img>Voyage Tranquille
                        </li>
                        <li>
                            <NavLink to="/nosvilles" onClick={hideMenu}>
                                Nos Villes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" onClick={hideMenu}>
                                Accueil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" onClick={hideMenu}>
                                Contact
                            </NavLink>
                        </li>
                        {isLoggedIn() ? (
                            <li>
                                <NavLink to="/compte" onClick={handleLogout}>
                                    Déconnexion
                                </NavLink>
                            </li>
                        ) : (
                            <li>
                                    <NavLink to="/compte" onClick={hideMenu}>
                                    Compte
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </nav>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <MenuIcon fontSize='large' className='touch'/>
                </div>
            </header>
        </>
    );
}

export default Header;