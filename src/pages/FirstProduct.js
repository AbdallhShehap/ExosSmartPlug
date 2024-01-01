import React from 'react'
import Menu from '../component/Menu'
import { Helmet } from 'react-helmet';
import FirstProductContacts from '../component/FirstProductContacts'
import Footer2 from '../component/Footer2'


function FirstProduct() {

  return (
    <div>
       <Helmet>
        <title>Exos SmartHome - Revolutionary Smart Home Device</title>
        <meta name="description" content="Discover Exos SmartHome, the leading-edge smart home device designed to simplify your life. Learn about its features, benefits, and how it can transform your living experience." />
        <meta name="keywords" content="Exos SmartHome, smart home device, intelligent home solutions, home automation, smart living" />
      </Helmet>
      <div>
      <Menu/>
      </div>

      {/* content Our contact */}
      <div style={{height:"auto"}}>

        <FirstProductContacts/>
      
      </div>

      {/* footer */}
      <div style={{height:"auto"}}>

        <Footer2/>
      </div>


    </div>
  )
}

export default FirstProduct