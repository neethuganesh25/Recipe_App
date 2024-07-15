import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { faEnvelope, faMobile, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validateMobile = (mobile) => {
        return mobile.length === 10;
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

        if (!validateMobile(mobile)) {
            setError('Mobile number must be 10 digits');
            return;
        }

        // Additional validation for password
        if (password.length < 8) {
            setError('Password must be at least 8 characters long');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setIsLoading(true);

        // Mock registration process
        setTimeout(() => {
            console.log('User Registered:', { name, email, mobile, password });
            toast.success('Registration successful!');
            navigate('/');
            setIsLoading(false);
        }, 1000);
    };

    return (
        <>
            <div className="row" style={{ backgroundColor: 'rgb(145, 238, 145)' }}>
                <div className="col background"></div>
                <div className="col">
                    <div className="container-fluid ">
                        <div className="wrapper">
                            <div className="form-box login">
                                {error && <p className="error text-center">{error}</p>}
                                <form onSubmit={handleSubmit}>
                                    <h1>Register</h1>
                                    <div className="input-box">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            id="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                        <FontAwesomeIcon className="icons" icon={faUser} />
                                    </div>
                                    <div className="input-box">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            id="email"
                                            className="mt-3"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        <FontAwesomeIcon className="icons mt-5" icon={faEnvelope} />
                                    </div>
                                    <div className="input-box">
                                        <input
                                            className="form-control mt-4 p-2"
                                            type="number"
                                            placeholder="Mobile"
                                            id="mobile"
                                            value={mobile}
                                            onChange={(e) => setMobile(e.target.value)}
                                            required
                                        />
                                        <FontAwesomeIcon className="icons mt-4" icon={faMobile} />
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
                                        className="btn btn-light border rounded-5"
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;