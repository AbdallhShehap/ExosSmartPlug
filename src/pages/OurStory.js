import React from "react";
import Menu from "../component/Menu";
import "../assiste/ourstory.css";
import { Helmet } from 'react-helmet';
import appStoreBadge from '../images/download-on-the-app-store-apple-logo.svg'; 
import googlePlayBadge from '../images/google-play-badge-logo.svg';
import Footer2 from '../component/Footer2'

function OurStory() {
  return (
    <div>
     <Helmet>
        <title>Our Story - Exos: Innovating for a Better Tomorrow</title>
        <meta name="description" content="Discover the journey of Exos, from its humble beginnings to becoming a leader in sustainable technology. Learn about our mission, values, and the impact we aim to create." />
        <meta name="keywords" content="Exos story, Exos history, sustainable technology, company mission, innovation journey" />
      </Helmet>
      <div>
        <Menu />
      </div>

      {/* content Our contact */}
      <div className="imageOurStory">
        <h1 className="titleOurStory">OUR STORY</h1>
      </div>

      <div className="textOurStory">
        <h3> Making life easier by making smart products.</h3>


        <div className="paraOurStory">

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

      <div className="anasSay">
      <div className="anasSaytext">
        <p>
"We believe in empowering change through innovations, and we strive to shape a sustainable future, one smart step at a time.“</p>

<h3 className="anasName">– Anas Sabha, Founder & CEO</h3>

      </div>
      </div>

      <div className="applation">
        <DownloadAppSection/>
      </div>

      
      {/* footer */}
      <div><Footer2/></div>
    </div>
  );
}

export default OurStory;


const DownloadAppSection = () => {
  return (
    <div className="download-app-section">
      <h2>Download Hyer Today!</h2>
      <div className="badges">
        <a href="https://www.apple.com/ios/app-store/" target="_blank" rel="noopener noreferrer">
          <img src={appStoreBadge} alt="Download on the App Store" className="app-store" />
        </a>
        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
          <img src={googlePlayBadge} alt="Get it on Google Play" className="google-play"/>
        </a>
      </div>
    </div>
  );
};


