import React from "react";
import { useState, useEffect } from "react";
import '../App.css';
import { useLocalStorage } from "./useLocalStorage";

const SignUp = () => {

    const [text, setText] = useLocalStorage('Login:', '');
    const [nameRegister, setNameRegister] = useState('')
    const [passwordRegister, setPasswordRegister] = useState()
    const [completeLogin, setCompleteLogin] = useState([])

    useEffect(() => {
        setText(completeLogin)
      
    }, [completeLogin])
    
    const handleSubmit = (e) => {
        if ((nameRegister || passwordRegister) === '') {
            alert('Debe completar los campos')
            e.preventDefault();
        } else {
            //alert('Te has registrado correctamente!')
            let newLogin = []
            newLogin = [...completeLogin,nameRegister+passwordRegister]
            setCompleteLogin(newLogin)
            //console.log('Complete login', completeLogin, 'newLogin:', newLogin)    
            
        }

        console.log('perfect submit!')       
      
    };
    return (
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
    )
}

export default SignUp;

