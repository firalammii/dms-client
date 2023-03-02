import React,
{ useContext, useEffect, useRef, useState } from 'react';

import { formatDate } from './utils';
import { Context } from '../ContextProvider';

function CreateStory ({ toggleDiplayPosts }) {

    const { handleUnSubscribeMe, user, setUser, upadateSubscriberStories } = useContext(Context);

    const [post, setPost] = useState({ //default is today, if not provided by user
        id: "", title: "", story: "",
        eventDate: formatDate(), date: "", time: ""
    });

    const dateFocus = useRef(null);
    useEffect(() => dateFocus.current.focus(), []);

    function logOut () {
        setUser(null);
        localStorage.removeItem('user');
    }

    function unsubscribeNlogOut () {
        handleUnSubscribeMe(user.username);
        logOut();
    }
    function onChangeHandler (e) {
        setPost({ ...post, [e.target.id]: e.target.value });
    }
    function handleSubmit (e) {
        const { title, story } = post;
        e.preventDefault();
        if (title && story) {
            upadateSubscriberStories(post);
            const npost = { title: "", story: "", eventDate: "", date: "", time: "" };
            setPost(npost); // to erase data
        }
    }

    return (<>{
        user &&
        <div className='personal-profile'>
            <div className='profile'>
                <img src='https://img.freepik.com/free-icon/user_318-174218.jpg' alt='user image' />
                <h2 className='pp-h2'>{user.fn} {user.ln}</h2>
                <h2 className='pp-h2'>{user.username}</h2>
            </div>

            <form className='story-form' onSubmit={handleSubmit}>
                <p className='p'>
                    How was your day
                </p>
                <input
                    id='eventDate'
                    className='pp-inputs'
                    type="date"
                    value={post.eventDate}
                    onChange={(e) => onChangeHandler(e)}
                    ref={dateFocus}
                />
                <input
                    id='title'
                    className='pp-inputs'
                    type="text"
                    placeholder='Title'
                    value={post.title}
                    onChange={(e) => onChangeHandler(e)}
                    required
                />

                <textarea
                    id='story'
                    className='text-area pp-inputs'
                    placeholder='your story here'
                    rows='4'
                    value={post.story}
                    onChange={(e) => onChangeHandler(e)}
                    required
                ></textarea>

                <button type='button' className='post-story pp-inputs ' onClick={(e) => handleSubmit(e)}> Post Story </button>
                <button type='button' className='log-out-btn pp-inputs ' onClick={logOut}> Log Out</button>
            </form>
            <footer>
                <a href='#' onClick={toggleDiplayPosts}>see posts</a>
                <p className='p'>
                    Not Happy?
                    <a href='#' className='link-unsubscribe-btn' onClick={unsubscribeNlogOut}> unsubscribe me </a>
                </p>
            </footer>
        </div>
    }</>);
}

export default CreateStory;