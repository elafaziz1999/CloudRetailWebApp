import React, { useState } from 'react'
import './CSS/Checkout.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Checkout = () => {
    const[checkout, setcheckout] = useState({
        firstname: "",
        lastname: "",
        email_address: "",
        address: "",

    });

    const navigatehome = useNavigate()

    const handleChange = (e) => {
        setcheckout((prev)=> ({...prev, [e.target.name]:e.target.value}));
    }

    const handleClick = async e => {
        e.preventDefault ()
        try {
            await axios.post("http://localost:3001/checkout", checkout)
            navigatehome("/succcess")
        }catch(err){
            console.log(err)
        }
    }

    console.log(checkout)

    return (
        <div className='checkout'>
      <h2>Checkout</h2>
      <div className='fields'>
        <label>
          First Name:
          <input type="text" onChange={handleChange} required />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" onChange={handleChange} required />
        </label>
        <br />
        <label>
          Address:
          <br/>
          <textarea onChange={handleChange} required />
        </label>
        <br />
        <label>
          Payment Method:
          <select onChange={handleChange}>
            <option value="creditCard">Credit Card</option>
            <option value="cod">Cash On Delivery</option>
          </select>
        </label>
        <br />
        <button onClick={handleClick}>Place Order</button>
      </div>
    </div>
    );
};

export default Checkout