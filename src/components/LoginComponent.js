
import React from "react";
import { useState } from "react";
import '../App.css';

const Login = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log('Logueado!')

    };
    return (
        <div className="login-div">
            <form onSubmit={handleSubmit} className='login'>
                <input
                    className="placeholder"
                    type='text'
                    valye={userName}
                    name="Username"
                    placeholder="Your Username"
                    onChange={({ target }) => setUserName(target.value)}
                />
                <input
                    type='text'
                    className="placeholder"
                    valye={password}
                    name="Password"
                    placeholder="Your Password"
                    onChange={({ target }) => setPassword(target.value)}
                />
                <input
                    onClick={handleSubmit}
                    className='button-login'
                    type='button'
                    value='LOGIN'
                />
            </form>

        </div>
    )
}

export default Login;

