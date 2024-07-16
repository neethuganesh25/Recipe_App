import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Login.css'; 

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (name.trim() === '') {
            setError('Name is required');
            return;
        }

        if (!validateEmail(email)) {
            setError('Invalid email format');
            return;
        }

        if (username.trim() === '') {
            setError('Username is required');
            return;
        }

        if (password.length < 8) {
            setError('Password must be at least 8 characters long');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setIsLoading(true);

        setTimeout(() => {
            // Save user details to local storage
            const userDetails = { name, email, username, password };
            localStorage.setItem('userDetails', JSON.stringify(userDetails));

            toast.success('Registration successful!');

            // Simulate sending username and password to the user's email
            toast.info(`Your username is: ${username} and your password is: ${password}`);

            navigate('/');
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="login-container">
            <div className="form-box register">
                {error && <p className="error text-center">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <h1 className='text-dark'>Register</h1>
                    <div className="input-box" >
                        <input 
                            type="text"
                            placeholder="Name"
                            
                            id="name"
                            value={name}
                            
                            onChange={(e) => setName(e.target.value)}
                            required
                          
                        />
                       
                    </div>
                    <div className="input-box">
                        <input
                            type="email"
                            placeholder="Email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        
                    </div>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Username"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder="Password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        className="btn btn-primary "
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Registering...' : 'Register'}
                    </button>
                    <div className="register-link">
                        <p>Already registered? <Link to="/">Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
