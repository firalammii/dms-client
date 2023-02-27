import { useEffect, useState } from 'react';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';

function App () {
    const [subscribers, setSubscribers] = useState(JSON.parse(localStorage.getItem("subscribers")) || []);
    const [removedSubscribers, setRemovedSubscribers] = useState(JSON.parse(localStorage.getItem("removedSubscribers")) || []);

    const [toggleSignUpnLogin, setToggleSignUpnLogin] = useState(true); // to determine to render signup page or login page 
    //to be improved later
    const [subscriberAdded, setSubscriberAdded] = useState(false); // just to be triggered by useEffect to save added subscribers
    const [subscriberRemoved, setSubscriberRemoved] = useState(false); // just to be triggered by useEffect to save removed subscribers

    useEffect(() => {
        localStorage.setItem("subscribers", JSON.stringify(subscribers));
    }, [subscriberAdded]);

    useEffect(() => {
        localStorage.setItem("removedSubscribers", JSON.stringify(removedSubscribers));
    }, [subscriberRemoved]);

    function signupNloginToggler () {
        setToggleSignUpnLogin(prevState => !prevState);
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
        <div className="App">
            <div className='inner-app'>
                {
                    toggleSignUpnLogin ?
                        <Login
                            subscribers={subscribers}
                            signupNloginToggler={signupNloginToggler}
                            handleUnSubscribeMe={handleUnSubscribeMe}
                        />
                        :
                        <Signup
                            signupNloginToggler={signupNloginToggler}
                            addSubscriberToArray={addSubscriberToArray}
                        />
                }
            </div>
        </div>
    );
}

export default App;
