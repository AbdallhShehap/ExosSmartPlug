import React, { useState } from 'react';
import "../assiste/contactus.css"


function ContactForm() {
  // State for form inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here
    console.log(formData);
    // You would typically send the data to a server or another handler here
  };

  return (
    <form onSubmit={handleSubmit} className="container formContainer">
    
    <div className='row'>

  
    <div className="col-sm-12 col-md-6 formGroup">
      <label htmlFor="firstName" className="  labe">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
        className="input"
      />
      </div>

      <div className='col-sm-12 col-md-6'>
        <label htmlFor="lastName" className="labe">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="input"

        />
      </div>

      </div>


    <div className='row'>

      <div className='col-sm-12 col-md-6 formGroup'>
        <label htmlFor="email" className="labe">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input"

        />
      </div>

      <div className='col-sm-12 col-md-6 formGroup'>
        <label htmlFor="phone" className="labe">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="input"

        />
      </div>

    </div>
      <div className='formGroup'>
        <label htmlFor="subject" className="labe">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="input"

        />
      </div>
      <div className='formGroup'>
        <label htmlFor="message" className="labe">How may we help you?</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="input"

        />
      </div>
      <div className="formGroup">
        <button type="submit" className="button">Submit</button>
      </div>
    </form>
  );
}

export default ContactForm;
