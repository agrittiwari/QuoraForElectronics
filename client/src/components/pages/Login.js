import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const [user, setUser] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    });

    const { email, password } = user;

    const onChange = e => setUser({...user, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        if(email === '' || password === '') {
            alert('Please fill in all fields')
        } else {
            alert('Successfully Login')
        }
    }
    return (
        <div className='form-container'>
            <h1>
                Account <span className='text-yellow'>Login</span>
            </h1>
            <form onSubmit={onSubmit}>
                
                <div className='form-group'>
                    <label htmlFor='email'>
                        Email Address
                    </label>
                    <input 
                        type='email' 
                        name='email' 
                        value={email} 
                        placeholder='Enter The Username'
                        onChange={onChange} 
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>
                        Password
                    </label>
                    <input 
                        type='password' 
                        name='password' 
                        placeholder='Enter The Password'
                        value={password} 
                        onChange={onChange} 
                        required
                    />
                </div>
            
                <div>
                    <Link to='/dashBoard'><input 
                        type='submit' 
                        value="Login" 
                        className="btn btn-yellow btn-block" 
                    />
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Login
