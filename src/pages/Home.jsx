import React from 'react'
import './home.css'
import Header from '../components/header/Header'
import Carrousel from '../components/carrousel/Carrousel'
import Milan1 from '../components/ville/Milan1'
import Rome1 from '../components/ville/Rome1'
import Naples1 from '../components/ville/Naples1'
import Footer from '../components/footer/Footer'
import Btnscroll from '../components/btnscroll/Btnscroll'
import Firstvideo from '../components/video/Firstvideo'
function Home() {
    return (
        <>
            
            <Header />
           <Firstvideo />
            <h1>Voyage Tranquille</h1>
            <div className="firstp">
                <p>
                    Voici un exemple de nos voyages en Italie. Si vous êtes à la recherche d'un voyage inoubliable, alors vous êtes au bon endroit. Chez <strong>Voyage Tranquille</strong>, nous nous efforçons de vous offrir les meilleures expériences . Nous nous occupons de tous les détails afin que vous puissiez vous détendre et profiter de la vie. Vous visiterez les plus célèbres monuments, découvrirez la richesse culturelle et goûterez à la gastronomie locale. Nous sommes passionnés par le voyage et cela se reflète dans la qualité de nos offres. Contactez-nous dès maintenant pour planifier votre voyage et vivre une expérience inoubliable.
                </p>
            </div>
            <Carrousel />          
            <h2>Nos Voyages Coups De Coeurs</h2>
            <div className='section'>  
            <Milan1/>
                <Rome1 />
                <Naples1 /></div>
            <Footer /><Btnscroll />
        </>
    )
}




export default Home