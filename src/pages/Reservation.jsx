import React from 'react'
import './contact.css'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Ariane from '../components/ariane/Ariane'
import Calendar from '../components/reservation/Calendare'


function Reservation() {
  return (
    <>
    <Header />
        <Ariane />
        <h1>Réservation</h1>
        <Calendar/>
        
        <Footer />
      </>
  )
}

export default Reservation