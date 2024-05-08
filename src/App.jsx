import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { NavBar, Hero, Footer , Memory, Explore , Advertise, Pricing , Banner , NewsLetter} from './components'
import { hero , navlinks , memory, placesAPI , brands, pricingapi, bannerAPI, footerAPI } from './data/travelingodata'



function App() {

  return (
    <BrowserRouter >
      <div>
        <NavBar navlinks={navlinks} />
        <Hero hero={hero} />
        <Memory memory={memory} />
        <Explore title="Explore the beauty of the world" placesAPI ={placesAPI} />
        <Advertise brands={brands} />
        <Pricing pricingapi={pricingapi} />
        <Banner  bannerAPI={bannerAPI} />
        <NewsLetter />
        <Footer footerAPI={footerAPI} />
      </div>
    </BrowserRouter>
  )
}

export default App
