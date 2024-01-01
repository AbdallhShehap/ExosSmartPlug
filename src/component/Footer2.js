import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon,  MDBInput,MDBBtn } from 'mdb-react-ui-kit';
import "../assiste/footer.css"
import { BottomNavigation } from '@mui/material';

export default function App() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block footerlogo' >
          <img src={require("../images/color logo.png")} width="100px" height="100px"/>
        </div>

        <div className='footerSocialIconContainer' style={{ display:"flex",alignItems:"center"}}>
 

          <MySvgIcon className='footerSocialIcon' />

<MySecondSvgIcon className='footerSocialIcon'/>
<MySvgIcon className='footerSocialIcon' />

<MySecondSvgIcon className='footerSocialIcon'/>


        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color:"white"}}>
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p style={{color:"white"}}>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color:"white"}}>Products</h6>
              <p style={{color:"white"}}>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p style={{color:"white"}}>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p style={{color:"white"}}>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p style={{color:"white"}}>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            {/* <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color:"white"}}>Useful links</h6>
              <p style={{color:"white"}}>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p style={{color:"white"}}>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p style={{color:"white"}}>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p style={{color:"white"}}>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color:"white"}} >Contact</h6>
              <p style={{color:"white"}}>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p style={{color:"white"}}>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p style={{color:"white"}}>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p style={{color:"white"}}>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol> */}
            <MDBCol md="7" lg="5" xl="5" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4' style={{color:"white"}}>Email Newsletter</h6>
              <p style={{color:"#e5e5e5"}}>
               
                Dummy text of the printing and typesetting industry.


              
              </p>

              <input className='emailinput' placeholder='Enter Your Email' />


              <button className='btnGo'>
                GO
              </button>

     
              <p className='contactDetails'><b style={{color:"blue", marginLeft:"10px", marginTop:"10px"}}> Phone: </b> 0 123 456 789 {" "}

              <b style={{color:"blue", marginLeft:"10px", marginTop:"10px"}}> Mail: </b>mail@qwilo.com</p>

             
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' , color:"white"}}>
        © 2024 Copyright:
     
          EXOS.com

      </div>
    </MDBFooter>
  );
}




const MySvgIcon = () => {
    return (
      <svg version="1.1" id="Layer_1" width="42px" height="42px" viewBox="0 0 32 32" style={{marginLeft:"10px"}}>
  
        <g>
          <path fill="#808184" d="M16-0.035C7.159-0.035-0.035,7.159-0.035,16S7.159,32.035,16,32.035S32.035,24.841,32.035,16
            S24.841-0.035,16-0.035z M16,30.965C7.748,30.965,1.035,24.252,1.035,16S7.748,1.035,16,1.035S30.965,7.748,30.965,16
            S24.252,30.965,16,30.965z"/>
          <path fill="#808184" d="M19.5,7h-2.668C13.652,7,13,8.737,13,11.345L13.002,13H11.5c-0.276,0-0.5,0.224-0.5,0.5v3
            c0,0.276,0.224,0.5,0.5,0.5H13v7.5c0,0.276,0.224,0.5,0.5,0.5h3.058c0.276,0,0.5-0.224,0.5-0.5L17.06,17h2.44
            c0.276,0,0.5-0.224,0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5h-2.441l0.003-1.396c0-0.673,0-0.673,0.629-0.674L19.48,11
            c0.127,0.004,0.268-0.045,0.366-0.139S20,10.636,20,10.5v-3C20,7.224,19.776,7,19.5,7z M19,9.98l-1.289-0.05
            c-1.521,0-1.648,0.827-1.648,1.672l-0.004,1.896c0,0.133,0.052,0.26,0.146,0.354C16.298,13.947,16.425,14,16.558,14H19v2h-2.44
            c-0.276,0-0.5,0.224-0.5,0.5L16.058,24H14v-7.5c0-0.276-0.224-0.5-0.5-0.5H12v-2h1.503c0.133,0,0.26-0.053,0.354-0.147
            c0.094-0.094,0.146-0.221,0.146-0.354L14,11.344C14,9.079,14.424,8,16.832,8H19V9.98z"/>
        </g>
      </svg>
    );
  };
  
  const MySecondSvgIcon = () => {
    return (
      <svg version="1.1" id="Layer_1" width="42px" height="42px" viewBox="0 0 32 32" style={{marginLeft:"10px"}}>
        <g>
          <path fill="#808184" d="M16-0.035C7.158-0.035-0.034,7.159-0.034,16S7.158,32.035,16,32.035S32.034,24.841,32.034,16
            S24.842-0.035,16-0.035z M16,30.965C7.748,30.965,1.034,24.252,1.034,16S7.748,1.035,16,1.035S30.966,7.748,30.966,16
            S24.252,30.965,16,30.965z"/>
          <path fill="#808184" d="M19.525,15.616c-0.533-0.278-1.105-0.594-1.678-0.909c-1.194-0.658-2.323-1.28-3.163-1.614
            c-0.153-0.062-0.327-0.042-0.465,0.05C14.082,13.237,14,13.392,14,13.558v4.987c0,0.171,0.088,0.331,0.232,0.422
            c0.082,0.052,0.175,0.078,0.268,0.078c0.073,0,0.146-0.016,0.215-0.048c1.006-0.478,2.11-1.065,3.179-1.633
            c0.545-0.291,1.093-0.582,1.631-0.86c0.165-0.086,0.27-0.256,0.27-0.443S19.69,15.703,19.525,15.616z M17.424,16.48
            c-0.809,0.43-1.638,0.871-2.424,1.264v-3.417c0.699,0.337,1.543,0.802,2.365,1.255c0.288,0.159,0.576,0.317,0.86,0.472
            C17.959,16.196,17.69,16.338,17.424,16.48z"/>
          <path fill="#808184" d="M22.304,10.626c-0.812-0.293-5-0.316-6.264-0.316c-2.504,0-4.67,0.072-5.795,0.193
            c-0.639,0.067-1.198,0.365-1.617,0.859c-1.176,1.383-0.925,7.562-0.412,8.97c0.265,0.725,0.769,1.214,1.498,1.454
            c0.984,0.324,5.328,0.34,6.189,0.34c1.759,0,5.934-0.045,6.717-0.456c0.486-0.253,0.842-0.614,1.058-1.075
            c0.728-1.561,0.68-7.022,0.087-8.56C23.503,11.355,23.011,10.881,22.304,10.626z M22.771,20.172
            c-0.121,0.26-0.322,0.459-0.612,0.61c-0.353,0.167-2.664,0.344-6.256,0.344c-3.279,0-5.438-0.146-5.877-0.291
            c-0.436-0.143-0.713-0.412-0.871-0.846c-0.502-1.378-0.551-7.057,0.235-7.98c0.253-0.299,0.576-0.472,0.961-0.512
            c1.075-0.116,3.255-0.188,5.688-0.188c3.386,0,5.579,0.132,5.924,0.257c0.435,0.157,0.71,0.42,0.867,0.829
            C23.331,13.692,23.378,18.872,22.771,20.172z"/>
        </g>
      </svg>
    );
  };
  
  
  
  const MyThirdSvgIcon = () => {
    return (
      <svg className="insta" viewBox="0 0 24 24" fill="none">
        <path d="M3.35288 8.95043C4.00437 6.17301 6.17301 4.00437 8.95043 3.35288C10.9563 2.88237 13.0437 2.88237 15.0496 3.35288C17.827 4.00437 19.9956 6.17301 20.6471 8.95044C21.1176 10.9563 21.1176 13.0437 20.6471 15.0496C19.9956 17.827 17.827 19.9956 15.0496 20.6471C13.0437 21.1176 10.9563 21.1176 8.95044 20.6471C6.17301 19.9956 4.00437 17.827 3.35288 15.0496C2.88237 13.0437 2.88237 10.9563 3.35288 8.95043Z" fill="#363853" fillOpacity="0.15" stroke="#363853" strokeWidth="1.5"/>
        <rect x="9" y="9" width="6" height="6" rx="3" stroke="#363853" strokeWidth="1.5"/>
        <circle cx="16" cy="7" r="1" fill="#363853"/>
      </svg>
    );
  };
  