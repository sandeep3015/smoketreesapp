import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './RegisterForm.css'

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: ''
  });

  const onChangeNameAndAddress = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormData({ name: '', address: '' });
    const userData = formData
    const url = 'http://localhost:4000/registeruser'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(userData)
    }

    const data = await fetch(url, options)
    const jsonData = await data.json()
    console.log(jsonData)
  };

  return (
    <div className="app-container">
        <form className='form-container' onSubmit={handleSubmit}>
          <AccountCircleIcon className='profile-icon'/>
        <h2 className='main-heading'>Registration Form</h2>
        <div className='input-container'>
          <label htmlFor='name' className='input-label'>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onChangeNameAndAddress}
            placeholder="Enter your name"
            required
            id='name'
            className='input-field'
          />
        </div>
        <div className='input-container'>
          <label htmlFor='address' className='input-label'>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={onChangeNameAndAddress}
            placeholder="Enter your address"
            required
            id='adddress'
            className='input-field'
          />
        </div>
        <Link to='/register'><button type="submit" className='register-button'>Register</button></Link>
      </form>    
    </div>
  );
};

export default RegisterForm;
