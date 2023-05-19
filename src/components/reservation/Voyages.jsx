import React, { useState, useEffect } from 'react';
import "./voyages.css"
import axios from 'axios';

function Voyages({ email }) {
    const [voyages, setVoyages] = useState([]);
    useEffect(() => {
        // Appel à l'API pour récupérer les voyages réservés par l'utilisateur actuel
        axios.get(`http://localhost:5000/api/inscription?email=${email}`)
            .then(response => {
                setVoyages(response.data);
            })
            .catch(error => console.error(error));
    }, [email]);

    const handleDelete = (Id) => {
        // Utiliser window.confirm() pour demander confirmation à l'utilisateur
        const confirmed = window.confirm("Êtes-vous sûr(e) de vouloir supprimer ce voyage ?");
        if (confirmed) {
            // Appel à l'API pour supprimer le voyage correspondant à l'Id donné
            axios.delete(`http://localhost:5000/api/inscription/${Id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })

                .then(response => {
                    // Mise à jour de l'état des voyages en supprimant celui qui a été supprimé de la base de données
                    const updatedVoyages = voyages.filter(voyage => voyage.Id !== Id);
                    setVoyages(updatedVoyages);
                })
                .catch(error => console.error(error));
        }
    };
    return (
        <div className='voyage'>
            <h1>Vos voyages réservés :</h1>
            {voyages.length === 0 ? (
                <div>Vous n'avez pas encore réservé de voyage.</div>
            ) : (
                <ul>
                    {voyages.map(voyage => (
                        <li key={voyage.Id}>
                            <div>Date de départ : {voyage.startDate}</div>
                            <div>Date de fin : {voyage.finDate}</div>
                            <div>Ville : {voyage.city}</div>
                            <div>Nombre de personnes : {voyage.numberOfPeople}</div>
                            <button onClick={() => handleDelete(voyage.userId)}>Supprimer</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Voyages;

