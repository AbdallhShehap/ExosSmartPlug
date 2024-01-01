import React from 'react'
import "../assiste/whyExos.css"
import 'animate.css';
import { useInView } from 'react-intersection-observer';

export default function WhyExos() {

      // Initialize the hook for each section
      const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5  // Adjust this value based on when you want the animation to start
    });

    
  return (
    <>
    <div className={`titleWhyExos ${inView ? 'animate__animated animate__bounceInDown delay-1s' : ''}`} ref={ref}
     style={{textAlign:"center", marginTop:"100px"}}>

        <h2>Why Exos?</h2>

        <p >Elevate your electrical experience with Exos Products, the epitome of innovation and safety in electrical solutions. Here's why our products are the smart and safe choice:</p>
    </div>

    <div className='container'>
    <div className='row'>
        <div className='col-sm-12 col-md-4' style={{marginTop:"60px"}}>

        <div className='left lSide1' >
        <h4 className={` ${inView ? 'animate__animated animate__backInLeft delay-1s' : ''}`}>
        <img src={require("../images/download.png")} width="40px"/>

        Save Energy </h4>
        <p className= {` ${inView ? 'animate__animated animate__backInLeft delay-1s' : ''}`}> help lower your home’s energy consumption and reduce your electricity bill through their scheduling features.</p>

        </div>

        

        <div  className='left lSide2'  >

            <h4 className={` ${inView ? 'animate__animated animate__backInLeft delay-2s' : ''}`}>
            <img src={require("../images/download.png")} width="40px"/>
            Surge Protection</h4>
        <p className={` ${inView ? 'animate__animated animate__backInLeft delay-2s' : ''}`}>900 Joules power strip surge protector protects your expensive devices from accidents like lightning, overload.
</p>

        </div>

        <div  className='left lSide3'>

        
           <h4  className={` ${inView ? 'animate__animated animate__backInLeft delay-3s' : ''}`}>
           <img src={require("../images/download.png")} width="40px"/>
           Safe for Every Space</h4>
        <p className={` ${inView ? 'animate__animated animate__backInLeft delay-3s' : ''}`}>Our outlet's safety features work in homes, offices, schools and various spaces, ensuring safety wherever it's used.</p>


        </div>

        
        
        </div>

        <div className={` col-md-4 imagWhyExos ${inView ? 'animate__animated animate__bounceInUp delay-4s' : ''}`}></div>

        <div className='col-sm-12 col-md-4'style={{marginTop:"60px"}}>


        <div className='right rSide1' >

<h4 className= {` ${inView ? 'animate__animated animate__backInRight delay-1s' : ''}`}>    <img src={require("../images/download.png")} width="40px"/>
Visual Safety Alerts</h4>
<p className={` ${inView ? 'animate__animated animate__backInRight delay-1s' : ''}`}>Utilizes RGB Light Indicator to signal power consumption, overload, partial plugging, and human detection for enhanced safety awareness.
</p>
        </div>


<div className='right rSide2'>

    <h4 className={` ${inView ? 'animate__animated animate__backInRight delay-2s' : ''}`}>    <img src={require("../images/download.png")} width="40px"/> High Quality Materials</h4>
<p className={` ${inView ? 'animate__animated animate__backInRight delay-2s' : ''}`}>Durable ABS flame-resistant material withstands high temperatures; copper insert offers elasticity, longevity, and high-quality manufacturing.
</p>
            
            </div>




<div className='right rSide3' >
   <h4 className={` ${inView ? 'animate__animated animate__backInRight delay-3s' : ''}`}>    <img src={require("../images/download.png")} width="40px"/> Family-Oriented Design</h4>
<p className={` ${inView ? 'animate__animated animate__backInRight delay-3s' : ''}`}>Crafted with families in mind, our outlet integrates human detection for enhanced household safety</p>
            
            </div>



</div>
        
        
   </div>
      
    </div>
    </>
  )
}
