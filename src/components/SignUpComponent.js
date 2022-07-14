import React from "react";
import { useState, useEffect } from "react";
import '../App.css';

import { useLocalStorage } from "./useLocalStorage";

const SignUp = () => {

    const [text, setText] = useLocalStorage('Login', '');
    const [nameRegister, setNameRegister] = useState('')
    const [passwordRegister, setPasswordRegister] = useState()
    const [completeLogin, setCompleteLogin] = useState(text || [])

    
    useEffect(() => {
        setText(completeLogin)
      
    }, [completeLogin])

    useEffect(() => {
      localStorage.getItem('Login')   
      
    }, [])    
    
    const handleSubmit = (e) => {
        if ((nameRegister || passwordRegister) === '') {
            alert('Debe completar los campos')
            e.preventDefault();
        } else {
            alert('Te has registrado correctamente!')
            let newLogin = []
            newLogin = [...completeLogin,nameRegister+passwordRegister]
            setCompleteLogin(newLogin)           
        }
        console.log('perfect submit!')        
    }

    let text2 = 
        <div className="login-div">
            <form className='login'>
                <input
                    className="placeholder"
                    type='text'
                    value={nameRegister}
                    name="Username"
                    placeholder="Your Username"
                    onChange={({ target }) => setNameRegister(target.value)}
                />
                <input
                    type='password'
                    className="placeholder"
                    value={passwordRegister}
                    name="Password"
                    placeholder="Your Password"
                    onChange={({ target }) => setPasswordRegister(target.value)}
                />
                <input
                    onClick={handleSubmit}
                    className='button-login'
                    type='button'
                    value='REGISTER'
                />
            </form>
        </div>
    
    return text2;
}

export default SignUp;

