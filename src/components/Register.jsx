import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Mock authentication function
        const mockLoginUser = (username, password) => {
            // Simulate a user login process
            const mockUsers = [
                { username: 'user@gmail.com', password: '12345' },
                { username: 'test@gmail.com', password: '54321' }
            ];

            const user = mockUsers.find(
                (u) => u.username === username && u.password === password
            );

            if (user) {
                return Promise.resolve(user);
            } else {
                return Promise.reject(new Error('Invalid login credentials'));
            }
        };

        try {
            const user = await mockLoginUser(username, password);
            console.log('Login successful:', user);
            toast.success('Login successful!');
            navigate('/home');
        } catch (error) {
            setError(error.message);
            toast.error('Invalid login credentials');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="row" style={{ backgroundColor: 'rgb(145, 238, 145)' }}>
                <div className="col background"></div>
                <div className="col">
                    <div className="container-fluid">
                        <div className="wrapper">
                            <div className="form-box login">
                                {error && <p className="error text-center">{error}</p>}
                                <form onSubmit={handleSubmit}>
                                    <h1>Login</h1>
                                    <div className="input-box">
                                        <input
                                            type="text"
                                            placeholder="Username"
                                            id="name"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                        />
                                        <FontAwesomeIcon className="icons" icon={faUser} />
                                    </div>
                                    <div className="input-box">
                                        <input
                                            className="form-control mt-3"
                                            type="password"
                                            placeholder="Password"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                        <FontAwesomeIcon className="icons" icon={faLock} />
                                    </div>
                                    <div className="remember-forget">
                                        <label>
                                            <input type="checkbox" /> Remember Me
                                        </label>
                                        <a href="#">Forget Password?</a>
                                    </div>
                                    <button
                                        className="btn btn-light border rounded-5"
                                        type="submit"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'Logging in...' : 'Login'}
                                    </button>
                                    <div className="register-link">
                                        <p>
                                            Don't have an account? <Link to="/register">Register</Link>
                                        </p>
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
