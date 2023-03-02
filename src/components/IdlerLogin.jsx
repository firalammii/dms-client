import React, { useContext } from 'react';
import { Context } from '../ContextProvider';

import IdlerCreateStory from './IdlerCreateStory';
import Login from './Login';

function IdlerLogin () {
    const { user } = useContext(Context);
    return (
        <>
            {
                user ?
                    <IdlerCreateStory />
                    :
                    <Login />
            }
        </>
    );
}

export default IdlerLogin;