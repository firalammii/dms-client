import React,
{ useState, useRef, useEffect, useContext } from "react";

import { Context } from "../ContextProvider";

function Login () {
    const {
        subscribers, signup0rLoginToggler,
        user, setUser
    } = useContext(Context)

    const [person, setPerson] = useState({
        username: "", pwd: ""
    });

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
                setUser(subscriber); //then renders business page
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
        // <div className='signup-form-container login'>
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
                                ref={usernameFocus}
                        required
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
                    <p className="p">New user? <a href='#' className='link-btn' onClick={signup0rLoginToggler}>Create One</a></p>
                </div>
                </form>

        // </div>
    );
}
export default Login;