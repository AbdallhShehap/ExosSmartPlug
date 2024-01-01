import React from 'react'
import Menu from '../component/Menu'
import "../assiste/privacyPolicy.css"
import Footer2 from '../component/Footer2'
import { Helmet } from 'react-helmet';

function PrivacyPolicy() {

  return (
    <div>
    <Helmet>
        <title>Privacy Policy - Exos</title>
        <meta name="description" content="Read Exos' Privacy Policy. Understand how we collect, use, protect, and share your personal information, and your rights regarding your data." />
        <meta name="keywords" content="Exos privacy policy, personal data protection, data privacy, user information security" />
      </Helmet>
     <div>
      <Menu/>
      </div>

      {/* content Our contact */}
      {/* content Our contact */}
      <div className="imagePrivacyPolicy">
        <h1 className="titlePrivacyPolicy">PRIVACY POLICY</h1>
      </div>

      <div className="textPrivacyPolicy">
        <h3> Making life easier by making smart products.</h3>


        <div className="paraPrivacyPolicy">

        <p>
          Welcome to EXOS, where innovation meets sustainability in the realm of
          green technology. We are a pioneering company dedicated to
          revolutionizing the landscape of electrical sources using the power of
          IoT (Internet of Things) and AI (Artificial Intelligence). Our primary
          focus is to overhaul outdated electrical systems notorious for
          high-risk electrical hazards and inefficient power consumption.
        </p>

        <p>
          At EXOS, we recognize the pressing need to address these challenges
          for a sustainable future. Our mission is clear: to integrate
          cutting-edge technology into electrical infrastructure, significantly
          reducing risks and inefficiencies while imparting remarkable
          sustainable value. By doing so, we aim to make a positive impact on
          climate change and create a more eco-friendly environment for
          generations to come.
        </p>

        <p>
          We take pride in our commitment to innovation, harnessing the
          potential of IoT and AI to transform the way electrical systems
          operate. Through diligent research and development, we design and
          deliver products that not only prioritize safety but also optimize
          power consumption, leading to enhanced efficiency.
        </p>

        <p>
          As a testament to our dedication to excellence, our products are
          available on Amazon, ensuring accessibility and convenience for
          customers worldwide. By offering our solutions on this platform, we
          aim to reach a broader audience, empowering individuals and businesses
          to make informed choices that benefit both their operations and the
          planet.
        </p>

        <p>
          Join us in our journey toward a greener, safer, and more sustainable
          future. Explore our range of products on Amazon and experience the
          difference that EXOS can make in upgrading electrical systems while
          leaving a positive footprint on climate change. Together, let's embark
          on this transformative journey and pave the way for a brighter, more
          sustainable tomorrow.
        </p>

        </div>
      </div>

      {/* footer */}
      <div>

        <Footer2/>
      </div>


    </div>
  )
}

export default PrivacyPolicy