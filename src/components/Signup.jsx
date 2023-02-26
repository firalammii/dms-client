import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './form.css';

const BASE_URL = 'http://localhost:3000/api/person';
const ENDPOINT = '/post';

function Signup ({ toggleSignupOrLoginDisplay, addSubscription, user }) {

    const [person, setPerson] = useState({
        fn: "", ln: "", username: "", pwd: "", cpwd: ""
    });
    const { fn, ln, username, pwd, cpwd } = person;

    const inputfocus = useRef(null);

    useEffect(() => inputfocus.current.focus(), []);

    function signUpHandler (e) {
        if (pwd === cpwd) {
            e.preventDefault();
            axios.post(BASE_URL + ENDPOINT, { fn, ln, username, pwd })
                .then(res => console.log(res))
                .catch(err => console.log(err));
            setPerson({ fn: "", mn: "", ln: "", username: "", pwd: "", cpwd: "" });
        }
        else {
            alert("unmatch passwords");
        }

    }

    function onChangeHandler (e) {
        setPerson({ ...person, [e.target.name]: e.target.value });
    }

    return (
        // <div className='signup-form-container'>
        <form className='signup-form' onSubmit={signUpHandler}>
            <h1 className='signup-h1'>Signup Form</h1>
            <div className='label-n-input-container-inside-form'>
                {/* <label htmlFor="first-name">First Name: </label> */}
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
                {/* <label htmlFor="first-name">First Name: </label> */}
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
                {/* <label htmlFor="first-name">First Name: </label> */}
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
                {/* <label htmlFor="first-name">First Name: </label> */}
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
                {/* <label htmlFor="first-name">First Name: </label> */}
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
                    <a href='#' className='link-btn' onClick={toggleSignupOrLoginDisplay}> Login </a>
                </p>
            </div>
            <div className='label-n-input-container-inside-form'>
                <p className='p'>
                    Not Happy?
                    <a href='#' className='link-unsubscribe-btn' onClick={addSubscription}> unsubscribe me </a>
                </p>
            </div>
        </form>
        // </div>

    );
}


export default Signup;