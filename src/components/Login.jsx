import React, { useState, useRef, useEffect } from "react";

import './form.css';
import PersonalProfile from "./PersonalProfile";

function Login ({ signupNloginToggler, subscribers, handleUnSubscribeMe }) {

    const [person, setPerson] = useState({
        username: "", pwd: ""
    });

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const usernameFocus = useRef(null);

    const pwdFocus = useRef(null);

    useEffect(() => {
        if (!user)
            usernameFocus.current.focus();
    }, []);

    function handleLogin (e) {
        e.preventDefault();
        const { username, pwd } = person;
        if (username && pwd) {
            const subscriber = subscribers.filter(obj => obj.username === username)[0];
            if (subscriber && subscriber.pwd === pwd) {
                localStorage.setItem("user", JSON.stringify(subscriber));
                setUser(subscriber);
                setPerson({ username: "", pwd: "" });
            } else if (subscriber && subscriber.pwd !== pwd) {
                pwdFocus.current.focus();
            } else {
                usernameFocus.current.focus();
            }
        }
    }

    function onChangeHandler (e) {
        setPerson({ ...person, [e.target.name]: e.target.value });
    }

    return (
        <div className='signup-form-container login'>
            {
                user ?
                    <PersonalProfile
                        user={user}
                        setUser={setUser}
                        handleUnSubscribeMe={handleUnSubscribeMe}
                    />
                :
                <form className='signup-form' onSubmit={(e) => handleLogin(e)} >
                    <h1 className='login-h1'>Login Form</h1>
                        <div className='label-n-input-container-inside-form'>
                        <input
                            name='username'
                            id='user-name'
                            className='signup-inputs'
                            type="text"
                            placeholder='username'
                            value={person.username}
                            onChange={(e) => onChangeHandler(e)}
                            required
                                ref={usernameFocus}
                        />
                    </div>
                        <div className='label-n-input-container-inside-form'>
                        <input
                            name='pwd'
                            id='pwd'
                            className='signup-inputs'
                            type="password"
                            placeholder='password'
                            value={person.pwd}
                            onChange={(e) => onChangeHandler(e)}
                                ref={pwdFocus}
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
                            <p className="p">New user? <a href='#' className='link-btn' onClick={signupNloginToggler}>Create One</a></p>
                    </div>
                </form>
            }
        </div>
    );
}
export default Login;