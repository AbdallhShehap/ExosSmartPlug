import React from 'react'
import { Helmet } from 'react-helmet';
import Menu from '../component/Menu'
import ContactInput from '../component/ContactInput'
import "../assiste/contactus.css"
import Footer2 from '../component/Footer2'

function Contactus() {

  return (
    <div>
     <Helmet>
        <title>Contact Us - Exos</title>
        <meta name="description" content="Get in touch with Exos for inquiries, support, or feedback. Find our contact information, location, and business hours here." />
        <meta name="keywords" content="contact Exos, Exos support, Exos contact information, Exos location, business hours" />
      </Helmet>
     <div>
      <Menu/>
      </div>

      {/* content Our contact */}
      <div>

      <div className="imageContactus">
        <h1 className="titleContactus">CONTACT US</h1>
      </div>


        <div className='contacttext'>
        

          <p>Exos, a pioneer in green-tech and IoT innovation, prioritizes customer-centric solutions. With a commitment to excellence, we're dedicated to serving our clients. Experience personalized service and cutting-edge solutions that empower you for a sustainable future.</p>



          <p style={{marginTop:"30px"}}> <b>Email:</b>  info@Exos.com</p>
          <p style={{marginTop:"30px"}}> <b>
What You Get When Asking Your Question
</b></p>

<ul>
  <li>Less than 12-hour response to your question.</li>
  <li>High level of customer service </li>
</ul>
        


        </div>


        <div style={{backgroundColor:"#e5e5e5", marginTop:"100px"}}>

          <ContactInput/>
        </div>
      
      </div>

      {/* footer */}
      <div>

        <Footer2/>
      </div>


    </div>
  )
}

export default Contactus