import React, { useState } from 'react'
import './CSS/Register.css'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './RegisterValidation'
import axios from 'axios'

const Register = () => {
    const [Values, setValues] = useState({
        f_name: '',
        l_name: '',
        email_address: '',
        user_pass: '',
        dob: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(Values));
        if(errors.f_name === "" && errors.l_name === "" && errors.email_address === "" && errors.user_pass === "" && errors.dob === "") {
            axios.post('http://localhost:3001/register', Values)
            .then(res => {
                navigate('/login')
            })
            .catch(err => console.log(err));
        }
    }
  return (
    <div className='register'>
    <div className="register-container">
      <center><h1>Register</h1></center>
      <form action='' onSubmit={handleSubmit}>
        <div className="register-fields">
            <label>First Name</label>
            <input type='text' placeholder='First Name' name='f_name' onChange={handleInput}/>
            {errors.f_name && <span className='text-danger'> {errors.f_name}</span>}
            <label>Last Name</label>
            <input type='text' placeholder='Last Name' name='l_name' onChange={handleInput}/>
            {errors.l_name && <span className='text-danger'> {errors.l_name}</span>}
            <label>Email Address</label>
            <input type="email" placeholder='Email Address' name='email_address' onChange={handleInput}/>
            {errors.email_address && <span className='text-danger'> {errors.email_address}</span>}
            <label>Password</label>
            <input type="password" placeholder='Password' name='user_pass' onChange={handleInput}/>
            {errors.user_pass && <span className='text-danger'> {errors.user_pass}</span>}
            <p>Password Criteria: The password should contain the following:</p>
            <p> - At least one digit (0-9) </p>
            <p> - One lowercase alphabet (a-z) </p>
            <p> - One uppercase alphabet (A-Z) </p>
            <p> - Minimum 8 alphanumeric characters (e.g. MyP@ssw0rd!)</p>
            <label>Date of Birth</label>
            <input type='text' placeholder='Date of Birth ( in DD/MM/YYYY format )' name='dob' onChange={handleInput}/>
            {errors.dob && <span className='text-danger'> {errors.dob}</span>}
        </div>
        <button>Register</button>
        <p className="register-login">Already have an account? <span><Link to="/login">Login</Link></span></p>
            <div className="register-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing, I agree to the T&Cs of Use & Privacy Policy of CloudRetail.</p>
            </div>
      </form>
    </div>
  </div>
  )
}

export default Register