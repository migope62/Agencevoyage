import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div>
       <Link className="cont" to="/Contact">Contactez Nous ici</Link>
        <p>Email:VacanzaTranquille@gmail.com</p>
        <p>Téléphone 118 218</p>
        </div>
        <div className="resnav">
          <a href='https://static.service-voyages.com/infos_legales/encours/karavel/vie_privee.pdf'>Politique de confidentialité</a>
        <a href='https://static.service-voyages.com/infos_legales/encours/karavel/vie_privee.pdf'>Mentions légales</a>
        <a href='http://www.gestion.presenceassistance.com/'>Assurance et garanties</a>
        </div>
      <div className="resnav">
        <a href='https://fr-fr.facebook.com/'>Facebook <img  src={process.env.PUBLIC_URL + 'fb.png'} alt="facebook"></img></a>
        <a href='https://twitter.com/?lang=fr'>Twitter <img src={process.env.PUBLIC_URL + 'tw.png'} alt="twitter"></img></a>
        <a href='https://www.instagram.com/?hl=fr'>Instagram <img src={process.env.PUBLIC_URL + 'it.png'} alt="instagram"></img></a>
            <div/>
          </div>

        </footer>
        );
}

        export default Footer;
