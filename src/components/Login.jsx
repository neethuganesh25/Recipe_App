import {  faEnvelope, faMobile, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function Login() {

    
    const [name,setname] = useState('')
    
    const [email,setEmail] = useState('')
    const [Mobile, setMobile] = useState('');
    const [error, setError] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      setError('');
      
      
  
      try {
        const response = await fetch('http://localhost:3000/users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        
  
        const users = await response.json();
        const user = users.find(
          (u) =>  u.password === password && u.username == username
        );
  
        if (!user) {
          throw new Error('Cant Register User');
          toast.info('Invaid Login')
        }
  
        // Handle the successful logLoginin, e.g., save the user data, redirect, etc.
        console.log(' User Registered:', user);
        //('Login successful!');
        navigate('/login');
        
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
        <>

  <div className="row">
  <div className="col background">
    </div>
  <div className="col">
    
  <div className='container-fluid'>
   
    <div className='wrapper'>
      <div className='form-box login'>
      {error && <p className="error text-center">{error}</p>}
        <form action="" onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className="input-box">
          <input  type="name"
              placeholder='Name'
              id="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
            />
                <FontAwesomeIcon className="icons"icon={faUser} />
                <input  type="email"
              placeholder='Email' 
              id="name"
              className="mt-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
                <FontAwesomeIcon className="icons mt-5"icon={faEnvelope} />
                
                </div>
                <div className="input-box">
                <input className='form-control mt-4 p-2'
              type="number"
              placeholder='Mobile'
              id="password"
              value={Mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            <FontAwesomeIcon  className="icons mt-4"icon={faMobile} />
                </div>
                
                <button className='btn btn-light border border rounded-5' type="submit" disabled={isLoading} >
            {isLoading ? 'Registering...' : 'Register'} 
          </button>
                <div className="register-link">
                    <p>Already registered? <Link to="/">Login</Link></p>
                </div>
        </form>
      </div> </div>
    </div>
  </div>
    </div>
  </>
  )
}

export default Login