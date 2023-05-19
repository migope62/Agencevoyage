import React, { useState } from "react";
import './form.css'
import axios from "axios";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [responseMessage, setResponseMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/contact', {
                name,
                email,
                message
            });
            setResponseMessage(response.data.message);
            alert("Votre message a été envoyé!");
        } catch (error) {
            setError(error.response.data.message);
        }
    };
    return (
        <div>
            {responseMessage && <p>{responseMessage}</p>}
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Nom :
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Email :
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Message :
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </label>
                <br />
                <input type="submit" value="Envoyer" />
            </form>
        </div>
    );
}

export default ContactForm;