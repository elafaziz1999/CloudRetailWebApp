//import React, { useEffect, useState } from 'react'
import React from 'react'
import Hero from '../Components/Hero/Hero'
import Offers from '../Components/Offers/Offers'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
//import axios from 'axios'
//import { useNavigate } from 'react-router-dom'
import './CSS/Home.css'

const Home = () => {
  /*const [name, setname] = useState('')
  const navigate = useNavigate()

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:3001')
    .then(res => {
      if (res.data.valid) {
        setname(res.data.email_address);
      } else {
        navigate('/login')
      }
    })
    .catch(err => console.log(err))
  })*/
  return (
    <div className='home'>
      <Hero/>
      <Offers/>
      <NewsLetter/>
    </div>
  )
}

export default Home
