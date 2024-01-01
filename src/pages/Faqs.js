import React from 'react'
import { Helmet } from 'react-helmet';
import Menu from '../component/Menu'
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import "../assiste/faqs.css"
import Footer2 from '../component/Footer2'

function Faqs() {

  return (
    <div>
      <Helmet>
        <title>FAQs - Exos</title>
        <meta name="description" content="Find answers to common questions about Exos' products, services, and policies. Our FAQs page provides detailed information to help you." />
        <meta name="keywords" content="Exos FAQs, product questions, service inquiries, company policies, customer support" />
      </Helmet>
     <div>
      <Menu/>
      </div>

      {/* content Our contact */}
      <div className="imageFaqs">
        <h1 className="titleFaqs"> FAQ</h1>
      </div>

      <div>


        <StaticFaqSection/>
      
      </div>

      {/* footer */}
      <div>

        <Footer2/>
      </div>


    </div>
  )
}

export default Faqs



 function StaticFaqSection() {
  return (
    <MDBContainer fluid className='containerOfFaq'>
      <section>
        <MDBTypography
          tag="h3"
          className=" mb-4 pb-2 text-primary fw-bold"
        >
          FAQ
        </MDBTypography>
        <p className=" mb-5">
          Find the answers for the most frequently asked questions below
        </p>

        <MDBRow>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon far icon="paper-plane text-primary pe-2"  /> 
              <p className='question'>
              Are these products compatible with the electrical standards in the USA?

              </p>
                
            </MDBTypography>
            <p style={{width:"80%", textAlign:"start"}}>
              <strong>
                <u>Absolutely!</u>
              </strong>{" "}
               Our products are designed to meet and operate within the electrical standards of the United States, providing seamless functionality in American households.
 

            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="pen-alt text-primary pe-2" />
              <p className='question'>

              Does these products come with a warranty valid in the USA?
              </p>
            </MDBTypography>
            <p style={{width:"80%", textAlign:"start"}}>
              <strong>
                <u>Certainly!</u>
              </strong>{" "}
              Our products come with a one year warranty that is valid in the USA, providing you with reliable support and assurance.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="user text-primary pe-2" /> 
             
              <p className='question'>
              Can I return this smart plug if it doesn't meet my expectations?

              </p>
            </MDBTypography>
            <p style={{width:"80%", textAlign:"start"}}>
            <strong>
                <u>Absolutely, </u>
              </strong>{" "}
            We have a hassle-free return policy through Amazon. If the product doesn't meet your needs, you can easily initiate a return within the specified return window.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="rocket text-primary pe-2" />
              <p className='question'>

              Can I use this smart plug with 110V electrical outlets in the USA?
              </p>
            </MDBTypography>
            <p style={{width:"80%", textAlign:"start"}}>
            <strong>
                <u>Yes, </u>
              </strong>{" "}
              Our smart plug is compatible with standard 110-240V electrical outlets commonly found in households throughout the USA.

            </p>
          </MDBCol>


          
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="home text-primary pe-2" /> 
              <p className='question'>

              A simple question?
              </p>
            </MDBTypography>
            <p style={{width:"80%", textAlign:"start"}}>
              <strong>
                <u>Unfortunately no</u>.
              </strong>{" "}
              We do not issue full or partial refunds for any reason.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="book-open text-primary pe-2" /> 
              <p className='question'>

              Another
              question that is longer than usual
              </p>
            </MDBTypography>
            <p style={{width:"80%", textAlign:"start"}}>
              Of course! We’re happy to offer a free plan to anyone who wants to
              try our service.
            </p>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
}