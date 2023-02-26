import axios from "axios";
import React, { useState, useRef, useEffect } from "react";

import './form.css';

// const BASE_URL = 'http://localhost:3000/api/person';
const BASE_URL = 'https://dms-server.onrender.com/api/person';
const ENDPOINT = '/login';

function Login ({ toggleSignupOrLoginDisplay, updateUser }) {

    const [user, setUser] = useState({
        username: "", pwd: ""
    });

    const inputfocus = useRef(null);

    useEffect(() => inputfocus.current.focus(), []);

    function handleLogin () {
        const { username, pwd } = user;
        if (username && pwd) {
            // console.log(username, pwd + "********************************************************");
            axios.post(BASE_URL + ENDPOINT, { username, pwd })
                .then(res => {
                    console.log(res);
                    localStorage.setItem("user", JSON.stringify(res.data));
                    updateUser();
                })
                .catch(err => console.log(err));

        }
    }

    function onChangeHandler (e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    return (
        <div className='signup-form-container login'>
            <form className='signup-form' onSubmit={handleLogin} >
                <h1 className='login-h1'>Login Form</h1>
                <div className='label-n-input-container-inside-form'>
                    {/* <label htmlFor="first-name">First Name: </label> */}
                    <input
                        name='username'
                        id='user-name'
                        className='signup-inputs'
                        type="text" placeholder='username'
                        value={user.username}
                        onChange={(e) => onChangeHandler(e)}
                        required
                        ref={inputfocus}
                    />
                </div>
                <div className='label-n-input-container-inside-form'>
                    {/* <label htmlFor="first-name">First Name: </label> */}
                    <input
                        name='pwd'
                        id='pwd'
                        className='signup-inputs'
                        type="password"
                        placeholder='password'
                        value={user.pwd}
                        onChange={(e) => onChangeHandler(e)}
                        required
                    />
                </div>

                <div className='label-n-input-container-inside-form'>
                    <input
                        id='type-submit-input'
                        className='signup-inputs'
                        type="submit" value="Log In"
                    />
                </div>
                <div className='label-n-input-container-inside-form'>
                    <p className="p">New user? <a href='#' className='link-btn' onClick={toggleSignupOrLoginDisplay}>Create One</a></p>
                </div>
            </form>
        </div>
    );
}
export default Login;