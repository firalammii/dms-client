import React, { useContext, useState } from 'react';
import CreateStory from './CreateStory';
import StoryDisplayer from './StoryDisplayer';
import './pp.css';
import { Context } from '../ContextProvider';

function IdlerCreateStory () {

    const { stories } = useContext(Context);

    const [displayPosts, setDisplayPosts] = useState(false);
    function toggleDiplayPosts () {
        setDisplayPosts(prevState => !prevState);
    }

    return (
        <div className='root-pp-container'>
            <div className='position-sticky'>
                <a href='#' onClick={toggleDiplayPosts}>create posts</a>
            </div>
            {
                stories && displayPosts ?
                    <StoryDisplayer toggleDiplayPosts={toggleDiplayPosts} />
                    :
                    <CreateStory toggleDiplayPosts={toggleDiplayPosts} />
            }
        </div>
    );
}

export default IdlerCreateStory;