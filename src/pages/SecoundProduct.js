import React from 'react'
import Menu from '../component/Menu'
import { Helmet } from 'react-helmet';
import SecoundProductContacts from '../component/SecoundProductContacts'
import Footer2 from '../component/Footer2'

function SecoundProduct() {

  return (
    <div>
     <Helmet>
        <title>Exos EcoLight - Energy-Efficient Lighting Solution</title>
        <meta name="description" content="Explore the Exos EcoLight, an advanced energy-efficient lighting solution designed to reduce energy costs and environmental impact. Discover its features and how it can brighten your space sustainably." />
        <meta name="keywords" content="Exos EcoLight, energy-efficient lighting, sustainable lighting, LED technology, eco-friendly lighting solutions" />
      </Helmet>
      <div>
      <Menu/>
      </div>
      {/* content Our contact */}
     
      <div style={{height:"auto"}}>

      <SecoundProductContacts/>
      </div>
       
      
   

      {/* footer */}
      <div style={{height:"auto"}}>

        <Footer2/>
      </div>


    </div>
  )
}

export default SecoundProduct