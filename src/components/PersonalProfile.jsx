import React, { useState } from 'react';
import Login from './Login';

function PersonalProfile ({ user, setUser }) {
    console.log(user);
    // const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    function logOut () {
        console.log("logOut clicked");
        setUser(null);
        localStorage.removeItem('user');

    }
    const pp = user ? 
        <div>
            <h1>Personal Profile</h1>
            <h2>username: {user.username}</h2>
            <button className='log-out-btn' onClick={logOut}> Log Out</button>
        </div>
        :
        setUser(null);

    return (
        <>
            {
                pp
            }
        </>

    );
}

export default PersonalProfile;