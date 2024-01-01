import React from 'react'
import Menu from '../component/Menu'
import { Helmet } from 'react-helmet';
// import "../assiste/aboutus.css"
import Footer2 from '../component/Footer2'

function Aboutus() {

  return (
    <div>
      <Helmet>
        <title>About Us - Exos</title>
        <meta name="description" content="Learn more about Exos, our mission, values, and the team driving innovation in sustainable tech solutions." />
        <meta name="keywords" content="Exos, sustainable technology, innovation, company mission, tech team" />
      </Helmet>
     <div>
      <Menu/>
      </div>

      {/* content Our contact */}
      <div>

        {/* <ContentContacts/> */}
      
      </div>

      {/* footer */}
      <div>

        <Footer2/>
      </div>


    </div>
  )
}

export default Aboutus