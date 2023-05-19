import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './milan1.css'
import Thirdvideo from '../video/Thirdvideo';

class Article extends Component {
    render() {
        return (
            <div className="article">
                <h3>{this.props.title}</h3>
                <h4>{this.props.prix}</h4>
                <Thirdvideo/>
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
            title: "Roma",
            prix: "500€ la semaine",
            image: "roma.jpg",
            description: "Rome, la ville éternelle, où l'histoire se mêle à la beauté architecturale. Des ruines antiques côtoient des églises baroques, tandis que les fontaines Renaissance émerveillent les yeux. Les promenades sur les marches de l'Empire romain ou sur les rues pavées de la vieille ville, offrent des vues imprenables sur la ville."
        }
        return (
            <Article {...article} />
        );
    }
}


export default App;