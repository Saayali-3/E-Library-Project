import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import Logo from './Logo.png';

function AdminLogin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // When signIn button is clicked
    const signIn = e => {
        e.preventDefault();

        // Database login
    }

    return (
        <div className="login">
            {/* Logo */}
            <Link to='/'>
                <img alt="timer" src={Logo} 
                    className="login__logo"
                />
            </Link>

            <div className="login__container">
                <h1>Admin Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                        type="text" value={email} onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                        type="password" value={password} onChange={p => setPassword(p.target.value)}
                    />

                    <button
                        type="submit"
                        onClick={signIn}
                        className="login__signInButton">Sign In
                    </button>

                </form>
            </div>
        </div>
    )
}

export default AdminLogin
