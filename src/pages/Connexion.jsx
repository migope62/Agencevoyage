import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './connexion.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Ariane from '../components/ariane/Ariane';
import Voyages from '../components/reservation/Voyages';

// Composant de connexion
function Connexion() {
    const [email, setEmail] = useState(''); // État pour stocker l'e-mail de l'utilisateur
    const [password, setPassword] = useState(''); // État pour stocker le mot de passe de l'utilisateur
    const [isSignup, setIsSignup] = useState(false); // État pour indiquer si l'utilisateur veut créer un compte ou se connecter
    const [isLoggedIn, setIsLoggedIn] = useState(false); // État pour stocker si l'utilisateur est connecté ou non

    useEffect(() => {
        // Récupération de l'état isLoggedIn depuis le stockage local lorsque le composant est monté
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(storedIsLoggedIn);
    }, []);

    const handleEmailChange = (event) => {
        // Mettre à jour l'état de l'e-mail avec la valeur de l'entrée utilisateur
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        // Mettre à jour l'état du mot de passe avec la valeur de l'entrée utilisateur
        setPassword(event.target.value);
    };

    const handleSignupChange = () => {
        // Inverser l'état de isSignup pour indiquer si l'utilisateur veut créer un compte ou se connecter
        setIsSignup(!isSignup);
    };


    // Fonction qui gère la soumission du formulaire de connexion/création de compte
    const handleSubmit = (event) => {
        event.preventDefault(); // Empêche la page de se recharger lors de la soumission du formulaire

        if (isSignup) {
            // Si l'utilisateur est en train de créer un compte, appeler l'API pour créer un compte utilisateur
            axios.post('http://localhost:5000/api/signup', {
                email,
                password
            })
                .then(response => {
                    // Si l'appel à l'API est réussi, mettre à jour le statut de connexion de l'utilisateur et le stocker localement
                    setIsLoggedIn(true);
                    localStorage.setItem('isLoggedIn', true);
                })
                .catch(error => console.error(error));
        } else {
            // Si l'utilisateur est en train de se connecter, appeler l'API pour se connecter
            axios.post('http://localhost:5000/api/login', {
                email,
                password
            })
                .then(response => {
                    // Si l'appel à l'API est réussi, mettre à jour le statut de connexion de l'utilisateur et le stocker localement
                    setIsLoggedIn(true);
                    localStorage.setItem('isLoggedIn', true);
                })
                .catch(error => console.error(error));
        }
    };


    // Définition de la fonction qui gère la déconnexion de l'utilisateur
    const handleLogout = () => {
        // Mettre le statut de connexion à faux
        setIsLoggedIn(false);
        // Supprimer l'indicateur de connexion dans le stockage local
        localStorage.removeItem('isLoggedIn');
    };


    return (
        <>
            <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            <Ariane />
            {isLoggedIn ? (
                <Voyages email={email} />
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mot de passe:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="signup">Créer un compte?</label>
                        <input
                            type="checkbox"
                            id="signup"
                            name="signup"
                            checked={isSignup}
                            onChange={handleSignupChange}
                        />
                    </div>
                    <button type="submit">
                        {isSignup ? 'Créer un compte' : 'Se connecter'}
                    </button>
                </form>
            )}
            <Footer />
        </>
    );
}

export default Connexion;
