import axios from "axios";
import React, { useState, useRef, useEffect } from "react";

import './form.css';
import PersonalProfile from "./PersonalProfile";
import Signup from "./Signup";

const BASE_URL = 'http://localhost:3000/api/person';
// const BASE_URL = 'https://dms-server.onrender.com/api/person';
const ENDPOINT = '/login';

function Login ({ toggleSubscriber }) {

    const [person, setPerson] = useState({
        username: "", pwd: ""
    });
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    function toggleLoggedIn () {
        setLoggedIn(prevState => !prevState);
    }

    useEffect(() => {
        console.log("useEffect due to loggedIn change");

    }, [loggedIn]);
    const inputfocus = useRef(null);

    useEffect(() => {
        if (!user)
            inputfocus.current.focus();
    }, []);

    function handleLogin (e) {
        e.preventDefault();
        const { username, pwd } = person;
        if (username && pwd) {
            localStorage.setItem("user", JSON.stringify(person));
            setUser(person);
            setPerson({ username: "", pwd: "" });
            //     axios.post(BASE_URL + ENDPOINT, { username, pwd })
            //         .then(res => {
            //             console.log(res);
            //             if (res) {
            //                 const msg = res.data.message;
            //                 if (msg === 'allow') {
            //                     localStorage.setItem("user", JSON.stringify(res.data.person));
            //                     console.log(msg);
            //                 } else if (msg === 'password_error') {
            //                     console.log(msg);
            //                 } else if (msg === 'not_found') {
            //                     console.log(msg);
            //                 }
            //             } else {
            //                 console.log(res.data.message);
            //             }
            //         })
            //         .catch(err => console.log(err));
        }
    }

    function onChangeHandler (e) {
        setPerson({ ...person, [e.target.name]: e.target.value });
    }

    return (
        <div className='signup-form-container login'>
            {user ?
                <PersonalProfile user={user} setUser={setUser} />
                :
                <form className='signup-form' onSubmit={(e) => handleLogin(e)} >
                    <h1 className='login-h1'>Login Form</h1>
                    <div className='label-n-input-container-inside-form'>
                        {/* <label htmlFor="first-name">First Name: </label> */}
                        <input
                            name='username'
                            id='user-name'
                            className='signup-inputs'
                            type="text"
                            placeholder='username'
                            value={person.username}
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
                            value={person.pwd}
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
                        <p className="p">New user? <a href='#' className='link-btn' onClick={toggleSubscriber}>Create One</a></p>
                    </div>
                </form>
            }
        </div>
    );
}
export default Login;