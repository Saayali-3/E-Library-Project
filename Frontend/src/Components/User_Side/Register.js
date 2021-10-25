import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';
import Logo from './Logo.png';

function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const signUp = e => {
        e.preventDefault();

        // Database signup
    }

    return (
        <div className="register">
            <Link to='/'>
                {/* <img
                    className="register__logo"
                    src="https://www.virtusa.com/content/dam/virtusa/images/logo/shared/virtusa-logo.png"
                /> */}
                <img alt="Logo" src={Logo} 
                    className="register__logo"
                />
            </Link>

            <div className="register__container">
                <h1>Sign-Up</h1>
                <form>
                    <h5>Name</h5>
                    <input
                        type="text" value={name} onChange={n => setName(n.target.value)} required
                        className="register__name"
                    />

                    <h5>Phone Number</h5>
                    <input 
                        type="tel" pattern="[0-9]{10}" required
                        className="register__phone"
                    />

                    <h5>Address</h5>
                    {/* <input
                        type="textarea" required
                    /> */}
                    <textarea className="register__address"></textarea>

                    <h5>ID Proof/Address Proof</h5>
                    <input 
                        type="file" required
                        className="register__idproof"
                    />

                    <h5>E-mail</h5>
                    <input
                        type="text" value={email} onChange={e => setEmail(e.target.value)} required
                        className="register__email"
                    />

                    <h5>Password</h5>
                    <input
                        type="password" value={password} onChange={p => setPassword(p.target.value)}
                        className="register__password"
                    />

                </form>
                <p>"By clicking Sign Up, you agree to our Terms and that you have read V-ReadersClub's project E-Library Data Use Policy, including our Cookie Use."</p>
                <button
                    type="submit"
                    onClick={signUp}
                    className="register__signUpButton">Sign Up
                </button>
            </div>
        </div>
    )
}

export default Register
