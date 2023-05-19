import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './milan1.css'
import Secondvideo from '../video/Secondvideo';

class Article extends Component {
    render() {
        return (
            <div className="article">
                <h3>{this.props.title}</h3>
                <h4>{this.props.prix}</h4>
                <Secondvideo/>
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
            title: "Milano",
            prix: "500€ la semaine",
            image: "milan.jpg",
            description: "Milan est une ville cosmopolite, réputée pour son style de vie élégant et sa scène culturelle riche. La ville regorge d'architecture historique, de musées renommés et de boutiques de mode haut de gamme. La cathédrale de Milan, le fameux Duomo, domine l'horizon, offrant une vue imprenable sur la ville."
        }
        return (
            <Article {...article} />
        );
    }
}

export default App;