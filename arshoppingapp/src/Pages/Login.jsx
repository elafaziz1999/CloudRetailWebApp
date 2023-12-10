import React, { useState } from 'react'
import './CSS/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation'
import axios from 'axios'

const Login = () => {
    const [Values, setValues] = useState({
        email_address: '',
        user_pass: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(Values));
        if(errors.email_address === "" && errors.user_pass === "") {
          axios.post('http://localhost:3001/login', Values)
          .then(res => {
              if(res.data === "Success") {
                navigate('/');
              } else {
                alert('No account found');
              }
          })
          .catch(err => console.log(err));
      }
    }
  return (
    <div className='login'>
    <div className="login-container">
      <center><h1>Login</h1></center>
      <form action='' onSubmit={handleSubmit}>
        <div className="login-fields">
            <label>Email Address</label>
            <input type="email" placeholder='Email Address' name='email_address' onChange={handleInput}/>
            {errors.email_address && <span className='text-danger'> {errors.email_address}</span>}
            <label>Password</label>
            <input type="password" placeholder='Password' name='user_pass' onChange={handleInput}/>
            {errors.user_pass && <span className='text-danger'> {errors.user_pass}</span>}
        </div>
        <button type='submit'>Login</button>
        <p className="login-login">Don't have an account? <span><Link to="/register">Register</Link></span></p>
      </form>
    </div>
  </div>
  )
}

export default Login