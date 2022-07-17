
import React from "react";
import { useState, useEffect, useContext } from "react";
import '../App.css';
import { UserContext } from "../hooks/UserContext";


const Login = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [loginComplete, setLoginComplete] = useState('')
    

    useEffect(() => {
      setLoginComplete(userName+password)
    
    }, [userName, password] )

    const {loged, setLoged} = useContext(UserContext)    

    const handleSubmit = () => {
       
        const isIncluded = localStorage.getItem('Login').includes(loginComplete)
        isIncluded ? setLoged(true) : alert('This account is not registered.Please, sign up')
        
    };

    let text = (
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
                    type='password'
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
    return text
}

export default Login;

