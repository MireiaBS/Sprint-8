import React from "react";
import { useState } from "react";
import '../App.css';

const SignUp = () => {

    const [nameRegister, setNameRegister] = useState('')
    const [passwordRegister, setPasswordRegister] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('perfect submit!')

    };
    return (
        <div className="login-div">
            <form  className='login'>
                <input
                    className="placeholder"
                    type='text'
                    value={nameRegister}
                    name="Username"
                    placeholder="Your Username"
                    onChange={({ target }) => setNameRegister(target.value)}
                />
                <input
                    type='text'
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

