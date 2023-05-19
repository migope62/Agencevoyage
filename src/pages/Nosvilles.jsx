import React from 'react'
import './nosvilles.css'
import Header from '../components/header/Header'
import Ariane from '../components/ariane/Ariane'
import Fivevideo from '../components/video/Fivevideo'
import Milan2 from '../components/ville/Milan2'
import Footer from '../components/footer/Footer'
import Btnscroll from '../components/btnscroll/Btnscroll'
function Nosvilles() {
  return (
    <>
    <Header />
    <Ariane/>
      <Fivevideo/>
      <Milan2/>
      <Footer /><Btnscroll />
    </>
  )
}

export default Nosvilles