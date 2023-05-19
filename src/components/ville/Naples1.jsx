import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './milan1.css'
import Fourvideo from '../video/Fourvideo';

class Article extends Component {
    render() {
        return (
            <div className="article">
                <h3>{this.props.title}</h3>
                <h4>{this.props.prix}</h4>
                <Fourvideo/>
                <p>{this.props.description}</p>
                <Link to="/Nosvilles">
                    <button className="reserve">Voir plus</button>
                </Link>
            </div>

        )
    }
}

class App extends React.Component {
    render() {
        const article = {
            title: "Napoli",
            prix: "500€ la semaine",
            image: "naples.jpg",
            description: "Naples est une ville fascinante, pleine d'histoire et de culture. La vue sur le Vésuve depuis la ville est à couper le souffle, tout comme les plages de sable fin et les eaux cristallines de la côte amalfitaine. La cuisine locale est également un régal, avec des plats tels que la pizza napolitaine célèbre dans le monde entier."
        }
        return (
            <Article {...article} />
        );
    }
}


export default App;