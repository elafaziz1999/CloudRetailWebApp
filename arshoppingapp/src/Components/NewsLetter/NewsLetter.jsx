import React, { useState } from 'react'
import './NewsLetter.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewsLetter = () => {
  const[newsletter, setnewsletter] = useState({
    email_address:"",
  });

  const navigatehome = useNavigate()

  const handleChange = (e) => {
    setnewsletter((prev)=> ({...prev, [e.target.name]:e.target.value}));
  }

  const handleClick = async e => {
    e.preventDefault()
    try{
      await axios.post("http://localhost:3001/newsletter", newsletter)
      navigatehome("/success")
    }catch(err){
      console.log(err)
    }
  }

  console.log(newsletter)
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type="email" placeholder='Email Address' onChange={handleChange} name='email_address'/>
        <button onClick={handleClick}>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
