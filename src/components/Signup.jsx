import React, { useContext, useEffect, useRef, useState } from 'react';
import './form.css';
import { Context } from '../ContextProvider';

function Signup () {

    const { signup0rLoginToggler, addSubscriberToArray } = useContext(Context);

    const [person, setPerson] = useState({
        fn: "", ln: "", username: "", pwd: "",
        cpwd: "", stories: []
    });
    const { fn, ln, username, pwd, cpwd } = person;

    const inputfocus = useRef(null);

    useEffect(() => inputfocus.current.focus(), []);

    async function signUpHandler (e) {
        e.preventDefault();
        if (pwd === cpwd) {
            await addSubscriberToArray(person);
            signup0rLoginToggler();
            setPerson({ fn: "", ln: "", username: "", pwd: "", cpwd: "", stories: [] });
        } else {
            alert("Sorry!!\nMismatch Passwords");
        }
    }

    function onChangeHandler (e) {
        setPerson({ ...person, [e.target.id]: e.target.value });
    }

    return (
        <div className='signup-form-container'>
            <form className='signup-form' onSubmit={(e) => signUpHandler(e)}>
                <h1 className='signup-h1'>Signup Form</h1>
                <div className='label-n-input-container-inside-form'>
                    <input
                        id='fn'
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
                        id='ln'
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
                        id='pwd'
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
                        id='cpwd'
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
                        <a href='#' className='link-btn' onClick={signup0rLoginToggler}> Login </a>
                    </p>
                </div>
            </form>
        </div>
    );
}


export default Signup;