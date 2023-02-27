import React from 'react';

function PersonalProfile ({ user, setUser, handleUnSubscribeMe }) {

    function logOut () {
        setUser(null);
        localStorage.removeItem('user');
    }

    function unsubscribeNlogOut () {
        handleUnSubscribeMe(user.username);
        logOut();
    }

    const pp = user ?
        <div className='signup-form'>
            <h1>Personal Profile</h1>
            <h2>username: {user.username}</h2>
            <button className='log-out-btn' onClick={logOut}> Log Out</button>
            <div className='label-n-input-container-inside-form'>
                <p className='p'>
                    Not Happy?
                    <a href='#' className='link-unsubscribe-btn' onClick={unsubscribeNlogOut}> unsubscribe me </a>
                </p>
            </div>
        </div>
        :
        setUser(null);

    return (<>{pp}</>);
}

export default PersonalProfile;