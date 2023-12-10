import React, { useState } from 'react';
import './CSS/AccountInformation.css'
import avatar from '../Components/Assets/avatar-1.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// ...

const AccountInformation = () => {
    const [accountInfo, setAccountInfo] = useState({
      f_name: "",
      l_name: "",
      email_address: "",
    });
  
    const navigateAccount = useNavigate();
  
    const handleInputChange = (e) => {
      setAccountInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post("http://localhost:3001/account", accountInfo);
        navigateAccount("/");
      } catch (err) {
        console.log(err);
      }
    };
  
    console.log(accountInfo);
    return (
      <div className='account-information'>
        <center><h2>My Account</h2></center>
        <form onSubmit={handleSubmit}>
          <br />
          <center><img src={avatar} alt='profile-avatar'></img></center>
          <br/>
          <label>
            First Name:
            <input
              type="text"
              name="f_name"
              value={accountInfo.f_name}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              name="l_name"
              value={accountInfo.l_name}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email_address"
              value={accountInfo.email_address}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <center><button type="submit">Update Account Information</button></center>
          <br />
        </form>
      </div>
    );
  };
  
  export default AccountInformation;
  