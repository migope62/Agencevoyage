import React from 'react'
import './contact.css'
import Header from '../components/header/Header'
import Form from '../components/formulaire/Form'
import Footer from '../components/footer/Footer'
import Ariane from '../components/ariane/Ariane'
function Contact() {
  return (<>
    <Header/>
    <Ariane/>
      <Form/>
      <Footer/>
   </>
  )
}

export default Contact