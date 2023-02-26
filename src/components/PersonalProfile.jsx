import React, { useState } from 'react';
import Login from './Login';

function PersonalProfile ({ handleLogOut, user }) {

    console.log(user);

    const pp = user ? (
        <div>
            <h1>Personal Profile</h1>
            <h2>username: {user.username}</h2>
            <button className='log-out-btn' onClick={handleLogOut}> Log Out</button>
        </div>
    ) : <Login />;
    return (
        <>
            {
                pp
            }
        </>

    );
}

export default PersonalProfile;