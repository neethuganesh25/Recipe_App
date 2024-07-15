import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Perform basic validation
        if (username.trim() === '') {
            setError('Username or Email is required');
            return;
        }

        if (password === '') {
            setError('Password is required');
            return;
        }

        setIsLoading(true);

        // Mock login process
        setTimeout(() => {
            // Simulate successful login
            if (username === 'test@example.com' && password === 'password') {
                toast.success('Login successful!');
                navigate('/home');
            } else {
                setError('Invalid username/email or password');
            }
            setIsLoading(false);
        }, 1000);
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
                                            placeholder="Username or Email"
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
                                    <button
                                        className="btn btn-light border rounded-5"
                                        type="submit"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'Logging in...' : 'Login'}
                                    </button>
                                    <div className="register-link">
                                        <p>Don't have an account? <Link to="/register">Register</Link></p>
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

export default Login;