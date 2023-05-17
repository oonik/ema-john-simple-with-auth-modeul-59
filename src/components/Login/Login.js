import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './Login.css';

const Login = () => {
    const navigate = useNavigate()
    const {singIn} = useContext(AuthContext)
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSingIn = (event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

       singIn(email, password)
       .then(result =>{
        const user = result.user;
        console.log(user)
        form.reset()
        navigate(from, {replace: true})
       })
       .catch(error => console.error(error))
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form className='form' onSubmit={handleSingIn}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='password' required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p className=''>New to amazon?<Link to="/singUp"> Create a new account</Link></p>
        </div>
    );
};

export default Login;