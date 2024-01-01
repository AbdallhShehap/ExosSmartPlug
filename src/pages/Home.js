import React from 'react'
import { Helmet } from 'react-helmet';
import Menu from '../component/Menu'
import HomeSlider from '../component/HomeSlider'
import WhyExos from '../component/WhyExos'
import FisrtBlog from '../component/FisrtBlog'
import Countup from '../component/CountUp'
import SecoundBlog from '../component/SecoundBlog'
import Footer2 from '../component/Footer2'

function Home() {

  return (
    <div>
       <Helmet>
        <title>Home page</title>
        <meta name="Pioneering Sustainable Tech Solutions" content="Explore Exos' smart power outlet extension and socket solutions. Effortlessly enhance safety and convenience in your daily life." />
        <meta name="keywords" content="keyword1, keyword2, keyword3" />
      </Helmet>
      <div>
      <Menu/>
      </div>

      {/* content Our contact */}
      <div style={{height:"auto"}}>

        <HomeSlider/>
      
      </div>


      <div style={{height:"auto", marginBottom:"100px"}}>

        <WhyExos/>
      
      </div>
      
      <div style={{height:"auto"}}>

        <FisrtBlog/>
      
      </div>

      <div style={{height:"auto"}}>

        <Countup/>
      
      </div>
      <div style={{height:"auto"}}>

        <SecoundBlog/>
      
      </div>

      {/* footer */}
      <div style={{height:"auto", marginTop:"100px"}}>

        <Footer2/>
      </div>


    </div>
  )
}

export default Home