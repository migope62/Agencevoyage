import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import './calendar.css'

const Calendare = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [finDate, setFinDate] = useState(new Date());
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const [city, setCity] = useState('Milan'); // Ajout de l'état pour la ville
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Générer un nouvel identifiant caché
            const newUserId = Math.random().toString(36).substr(2, 9);
            // Enregistrer l'identifiant dans le navigateur client
            localStorage.setItem('userId', newUserId);

            // Envoyer la requête POST avec l'identifiant
            await axios.post('http://localhost:5000/api/inscription', {
                startDate,
                finDate,
                name,
                email,
                phone,
                numberOfPeople,
                city, // Ajout de la ville à la requête POST
                userId: newUserId,
            });

            alert('Votre inscription a été enregistrée avec succès !');
        } catch (error) {
            console.error(error);
            alert('Une erreur s\'est produite lors de l\'enregistrement de votre inscription.');
        }
    };

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            // Mettre à jour l'état du composant avec l'identifiant stocké dans le navigateur client
            // setUserId(storedUserId);
        }
    }, []);
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="startDate">Date de départ :</label>
                <DatePicker
                    id="startDate"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    minDate={new Date()}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="dd/MM/yyyy HH:mm"
                    timeCaption="Heure"
                />
            </div>
            <div>
                <label htmlFor="finDate">Date de fin :</label>
                <DatePicker
                    id="finDate"
                    selected={finDate}
                    onChange={(date) => setFinDate(date)}
                    minDate={new Date()}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="dd/MM/yyyy HH:mm"
                    timeCaption="Heure"
                />
            </div>
            <div>
                <label htmlFor="name">Nom :</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">E-mail :</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="phone">Téléphone :</label>
                <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="numberOfPeople">Nombre de personnes :</label>
                <input
                    id="numberOfPeople"
                    type="number"
                    min="1"
                    value={numberOfPeople}
                    onChange={(event) => setNumberOfPeople(parseInt(event.target.value))}
                    required
                />
            </div>
            <div>
                <label htmlFor="city">Ville :</label>
                <select id="city" value={city} onChange={(event) => setCity(event.target.value)}>
                    <option value="Milan">Milan</option>
                    <option value="Rome">Rome</option>
                    <option value="Naples">Naples</option>
                </select>
            </div>

            <button type="submit">Réserver</button>
        </form>
    );
};

export default Calendare;