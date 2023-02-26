
import React, { useState } from 'react';
import Login from './Login';
import PersonalProfile from './PersonalProfile';

function LoginDeterminer ({ toggleSignupOrLoginDisplay, handleLogOut, user, updateUser }) {

    //     if (user)
    //         console.log("Login Determiner " + user.username, user.pwd);
    //     console.log(user);

    return (
        <div>
            {
                user ? <PersonalProfile handleLogOut={handleLogOut} user={user} />
                    : <Login toggleSignupOrLoginDisplay={toggleSignupOrLoginDisplay} updateUser={updateUser} />
            }
        </div>
    );
}

export default LoginDeterminer;