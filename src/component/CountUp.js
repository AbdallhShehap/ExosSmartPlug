import React from 'react';
import CountUp from 'react-countup';
import '../assiste/countup.css'; 
import 'animate.css';


const CounterBox = () => {
    return (
      <div className='container'>
        <h2 className="title text-center  animate__animated animate__bounceIn">Why choose us?</h2>
        <p className="subtitle text-center animate__animated animate__bounceIn">Optimizing your site has never been so easy!</p>
        <div className="row ">
          <div className="col-sm-12 col-md-4 mainCounterBox">
            <div className="counterBox text-center animate__animated animate__backInLeft ">
              <div className="innerBox">
                <CountUp end={20} duration={2.75} suffix=" M+" className="counterValue" />
                <p className='para'>Devices Damaged by Lightning Annually</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 mainCounterBox">
            <div className="counterBox text-center animate__animated animate__bounceIn">
              <div className="innerBox">
                <CountUp end={70} duration={2.75} suffix=" K" className="counterValue" />
                <p className='para'>Electrical contact Injuries Annually</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 mainCounterBox">
            <div className="counterBox text-center animate__animated animate__backInRight">
              <div className="innerBox">
                <CountUp end={3} duration={2.75} suffix=" K" className="counterValue" />
                <p className='para'>Electrical contact Fatalities Annually</p>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    );
  };
  
  export default CounterBox;
