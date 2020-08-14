import React from 'react'
import { Link, useHistory } from "react-router-dom";
import "./Login.css"
import { auth } from './firebase';
import { useState } from 'react';
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const login = (event) => {
        event.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {

                history.push("/");
            })
            .catch((e) => alert(e.message));
        // ovo odje auth kupi iz state 
    };
    const register = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/");
            })
            .catch((e) => alert(e.message));
    };
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1920px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" name="" id="" />
                    <button onClick={login} type="submit" className="login__signInButton ">Sign in </button>
                </form>
                <p>
                    By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
