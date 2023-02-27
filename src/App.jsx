import { useEffect, useState } from 'react';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';

function App () {

    const [subscriber, setSubscriber] = useState(JSON.parse(localStorage.getItem("person")) || null);

    function unSubscribeMe () {
        console.log("unSubscribeMe");
        setSubscriber(null);
        localStorage.clear();
    }
    // function createSubscriber () {
    //     localStorage.setItem("person", value);
    // }
    function toggleSubscriber () {
        console.log("toggleSubscriber is clicked");
        const subscribedPerson = JSON.parse(localStorage.getItem("person"));
        if (subscribedPerson) {
            localStorage.removeItem("person");
            setSubscriber(null);
        } else {
            alert("Sorry!,\nYou should be a subscriber first!!");
        }
    }


    return (
    <div className="App">
            <div className='inner-app'>
                {
                    subscriber ?
                        <Login
                            toggleSubscriber={toggleSubscriber}
                        />
                        :
                        <Signup
                            unSubscribeMe={unSubscribeMe}
                            setSubscriber={setSubscriber}
                            toggleSubscriber={toggleSubscriber}
                        />

                }
            </div>
    </div>
    );
}

export default App;
