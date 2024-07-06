import {  faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function Register() {
    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('');
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
          throw new Error('Invalid login credentials');
          toast.info('Invaid Login')
        }
  
        // Handle the successful login, e.g., save the user data, redirect, etc.
        console.log('Login successful:', user);
        //('Login successful!');
        navigate('/home');
        
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
            <h1>Login</h1>
            <div className="input-box">
          <input  type="email"
              placeholder='Username'
              id="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
                <FontAwesomeIcon className="icons"icon={faUser} />
                </div>
                <div className="input-box">
                <input className='form-control mt-3'
              type="password"
              placeholder='Password'
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FontAwesomeIcon  className="icons"icon={faLock} />
                </div>
                <div className="remember-forget ">
                    <label><input type="checkbox" />Remember Me</label>
                    <a href="#">Forget Password?</a>
                </div>
                <button className='btn btn-light border border rounded-5' type="submit" disabled={isLoading} >
            {isLoading ? 'Logging in...' : 'Login'} 
          </button>
                <div className="register-link">
                    <p>Don't have an account? <Link to="/register" >Register</Link>
                    </p>
                </div>
        </form>
      </div> </div>
    </div>
  </div>
    </div>
    </>
  )
}

export default Register