import React, { useEffect, useRef, useState } from 'react';
import './form.css';

function Signup ({ signupNloginToggler, addSubscriberToArray }) {

    const [person, setPerson] = useState({
        fn: "", ln: "", username: "", pwd: "", cpwd: ""
    });
    const { fn, ln, username, pwd, cpwd } = person;

    const inputfocus = useRef(null);

    useEffect(() => inputfocus.current.focus(), []);

    async function signUpHandler (e) {
        e.preventDefault();
        if (pwd === cpwd) {
            await addSubscriberToArray(person);
            signupNloginToggler();
            setPerson({ fn: "", ln: "", username: "", pwd: "", cpwd: "" });
        } else {
            alert("Sorry!!\nMismatch passwords");
        }
    }

    function onChangeHandler (e) {
        setPerson({ ...person, [e.target.name]: e.target.value });
    }

    return (
        <div className='signup-form-container'>
            <form className='signup-form' onSubmit={(e) => signUpHandler(e)}>
                <h1 className='signup-h1'>Signup Form</h1>
                <div className='label-n-input-container-inside-form'>
                    <input
                        name='fn'
                        id='first-name'
                        className='signup-inputs'
                        type="text"
                        placeholder='First Name'
                        value={fn}
                        onChange={(e) => onChangeHandler(e)}
                        required
                        ref={inputfocus}
                    />
                </div>
                <div className='label-n-input-container-inside-form'>
                    <input
                        name='ln'
                        id='last-name'
                        className='signup-inputs'
                        type="text"
                        placeholder='Last Name'
                        value={ln}
                        onChange={(e) => onChangeHandler(e)}
                        required
                    />
                </div>
                <div className='label-n-input-container-inside-form'>
                    <input
                        name='username'
                        id='username'
                        className='signup-inputs'
                        type="text"
                        placeholder='unique username/email'
                        value={username}
                        onChange={(e) => onChangeHandler(e)}
                        required
                    />
                </div>
                <div className='label-n-input-container-inside-form'>
                    <input
                        name='pwd'
                        id='strong-password'
                        className='signup-inputs'
                        type="password"
                        placeholder='Strong Password'
                        value={pwd}
                        onChange={(e) => onChangeHandler(e)}
                        required
                    />
                </div>
                <div className='label-n-input-container-inside-form'>
                    <input
                        name='cpwd'
                        id='confirm-pasword'
                        className='signup-inputs'
                        type="password"
                        placeholder='Confirm Password'
                        value={cpwd}
                        onChange={(e) => onChangeHandler(e)}
                        required
                    />
                </div>
                <div className='label-n-input-container-inside-form'>
                    <input
                        id='type-submit-input'
                        className='signup-inputs'
                        type="submit"
                        value="Sign Up"
                    />
                </div>
                <div className='label-n-input-container-inside-form'>
                    <p className='p'>
                        Already registered?
                        <a href='#' className='link-btn' onClick={signupNloginToggler}> Login </a>
                    </p>
                </div>
            </form>
        </div>
    );
}


export default Signup;