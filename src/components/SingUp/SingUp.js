import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './SingUp.css';

const SingUp = () => {

const [error, setError] = useState(null);
const {createUser} = useContext(AuthContext)
const navigate = useNavigate();

    const handleSubmit =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm)

      
        if(password.length < 7){
            setError('please 8 digit password')
            return;
        }
        if(password !== confirm ){
          setError('your password did not match')
          return;
        }
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            form.reset()
            navigate('/login')
        })
        .catch(error => console.error(error))
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sing Up</h2>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='password' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="confirm">Confirm password</label>
                    <input type="password" name='confirm' placeholder='confirm-password' required />
                </div>
                <input className='btn-submit' type="submit" value="Sing Up" />
            </form>
            <p className=''>New to amazon?<Link to="/login">already have an account</Link></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SingUp;