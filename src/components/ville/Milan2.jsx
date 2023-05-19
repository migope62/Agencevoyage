import React from "react";
import "./milan2.css";


function handleReservationClick() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn) {
    window.location.href = "/reservation";
  } else {
    alert("Vous devez vous connecter pour réserver");
    window.location.href = "/compte";
  }
}
function Milan2() {

  return (
    <>
      <div className='pagelist'>
        <h2>Milano</h2>
        <div className='firstart'>
          <img className="milano" src={process.env.PUBLIC_URL + 'milan.jpg'} alt="milanvoyages"></img>
          <p className='text1'>Le Duomo de Milan est un édifice majestueux situé en plein cœur de la ville. Cette cathédrale gothique, considérée comme l'un des joyaux architecturaux de l'Italie, est un monument incontournable pour les amateurs d'art et d'histoire. Avec sa façade en marbre blanc et ses innombrables arcs-boutants, le Duomo offre une vue imprenable sur la ville et ses alentours. À l'intérieur, les visiteurs peuvent admirer de magnifiques fresques et sculptures, ainsi que l'escalier en spirale qui mène à la terrasse panoramique. Le Duomo de Milan est un symbole de la richesse culturelle et historique de la ville, et une destination incontournable pour les touristes en quête de découvertes inoubliables.</p>
          <div className="reservation">
            <h4>Prix: 100€ par jour</h4>
            <button onClick={handleReservationClick}>Réserver</button> {/* Appel de setSelectedCity pour fixer la ville avant l'appel de handleReservationClick */}
          </div>
        </div>
        <h2>Napoli</h2>
        <div className='secondart'>
          <img className="napoli" src={process.env.PUBLIC_URL + 'naples.jpg'} alt="napolivoyages"></img>
          <p className="text2">Naples, ville située sur la côte ouest de l'Italie, est connue pour sa riche histoire, sa cuisine délicieuse et son architecture impressionnante. Des rues pittoresques aux places animées, Naples offre une expérience culturelle unique. Les attractions populaires incluent le musée archéologique national, le Castel dell'Ovo, le Vésuve et les ruines de Pompéi. La ville est également célèbre pour sa pizza napolitaine, considérée comme l'une des meilleures au monde. Découvrez les merveilles de cette ville ensoleillée et vibrante lors de votre prochain voyage en Italie.</p>
          <div className="reservation">
            <h4>Prix: 100€ par jour</h4>   
            <button onClick={handleReservationClick}>Réserver</button>
          </div>
        </div>
        <h2>Roma</h2>
        <div className='thirdart'>
          <img className="roma" src={process.env.PUBLIC_URL + 'roma.jpg'} alt="romavoyages"></img>
          <p className='text3'>Rome, la ville éternelle, est un joyau historique de l'Italie. Cette ville fascinante est remplie d'art, d'architecture, de culture et de cuisine délicieuse. Visitez les attractions légendaires telles que le Colisée, la Fontaine de Trevi, la Basilique Saint-Pierre et le Panthéon. Marchez dans les rues pavées de la ville et découvrez les boutiques de mode, les restaurants pittoresques et les cafés ensoleillés. Rome est également réputée pour sa cuisine italienne authentique, notamment les pâtes fraîches et les gelati. Explorez cette ville animée et passionnante pour découvrir pourquoi elle est une destination de choix pour les voyageurs du monde entier.</p>
          <div className="reservation">
            <h4>Prix: 100€ par jour</h4>
            <button onClick={handleReservationClick}>Réserver</button>
          </div>
        </div>
      </div>
  </>)}


export default Milan2;