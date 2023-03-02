import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
const Context = createContext();
function ContextProvider (props) {

    const [subscribers, setSubscribers] = useState(JSON.parse(localStorage.getItem("subscribers")) || []);
    const [removedSubscribers, setRemovedSubscribers] = useState(JSON.parse(localStorage.getItem("removedSubscribers")) || []);

    const [renderLogin0rSignup, setRenderLogin0rSignup] = useState(true); // to determine to render login page or signup page 
    //to be improved later
    const [subscriberAdded, setSubscriberAdded] = useState(false); // just to be triggered by useEffect to save added subscribers
    const [subscriberRemoved, setSubscriberRemoved] = useState(false); // just to be triggered by useEffect to save removed subscribers

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const [stories, setStories] = useState([]);

    async function upadateSubscriberStories (post) {
        const npost = {
            ...post,
            id: uuid(),
            eventDate: new Date(post.eventDate).toDateString(),
            date: new Date().toDateString(),
            time: new Date().toLocaleTimeString("en-us", { timeStyle: "short" })
        };
        setStories([npost, ...stories]);
        const subsWztUser = await subscribers.filter(each => each.username !== user.username);
        await subscribers.forEach(each => {
            if (each.username === user.username) {
                each.stories = [npost, ...each.stories];
                setSubscribers([each, ...subsWztUser]);
                localStorage.setItem("subscribers", JSON.stringify(subscribers));
            }
        });
    }

    useEffect(() => {
        if (user) {
            subscribers.forEach((subscriber) => {
                if (subscriber.username === user.username) {
                    setStories(subscriber.stories);
                }
            });
        }
    }, [user]);

    useEffect(() => {
        localStorage.setItem("subscribers", JSON.stringify(subscribers));
    }, [subscriberAdded]);

    useEffect(() => {
        localStorage.setItem("removedSubscribers", JSON.stringify(removedSubscribers));
    }, [subscriberRemoved]);

    function signup0rLoginToggler () {
        setRenderLogin0rSignup(prevState => !prevState);
    }
    function toggleSubscriberAdded () {
        setSubscriberAdded(prevState => !prevState);
    }
    function toggleSubscriberRemoved () {
        setSubscriberRemoved(prevState => !prevState);
    }

    async function addSubscriberToArray (personData) {
        setSubscribers([...subscribers, personData]);
        toggleSubscriberAdded();
    }

    function handleUnSubscribeMe (username) {
        const newSubscribers = subscribers.filter(eachObj => eachObj.username !== username);
        setSubscribers(newSubscribers);
        toggleSubscriberAdded();

        const unsubscribed = subscribers.filter(eachObj => eachObj.username === username)[0];
        setRemovedSubscribers([...removedSubscribers, unsubscribed]);
        toggleSubscriberRemoved();
    }

    return (
        <Context.Provider
            value={{
                subscribers,
                renderLogin0rSignup,
                signup0rLoginToggler,
                handleUnSubscribeMe,
                addSubscriberToArray,
                user,
                setUser, stories, upadateSubscriberStories

            }}
        >
            {
                props.children
            }
        </Context.Provider>
    );
}

export { Context, ContextProvider };