import React, { useState } from 'react';
import axios from 'axios';
import './CSS/ContactUs.css';
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const [contactus, setcontactus] = useState({
    name: "",
    email_address: "",
    message: "",
  });

  const navigatehome = useNavigate()

  const handleChange = (e) => {
    setcontactus(prev=>({...prev, [e.target.name]: e.target.value}));
  };

  const handleClick = async e => {
    e.preventDefault()
    try{
      await axios.post("http://localhost:3001/contact", contactus)
      navigatehome("/")
    }catch(err){
      console.log(err)
    }
  }

  console.log(contactus)
  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit="">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" placeholder="Name" onChange={handleChange} name='name'/>
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="text" placeholder="Email" onChange={handleChange} name='email_address'/>
        </div>
        <div className="form-group">
          <label>Message:</label>
          <input type="message" placeholder="Message" onChange={handleChange} name='message'/>
        </div>
        <center>
          <button onClick={handleClick}>Submit</button>
        </center>
      </form>
    </div>
  );
};

export default ContactUs;
