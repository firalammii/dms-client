import { useEffect, useState } from 'react';
import './App.css';
import Signup from './components/Signup';
import LoginDeterminer from './components/LoginDeterminer';

function App () {

  const [subscribed, setSubscribed] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

  function addSubscription () {
    setSubscribed(prevState => !prevState);
  }
  function toggleSignupOrLoginDisplay () {
    setIsLoggedIn(prevState => !prevState);
  }
  function handleLogOut () {
    localStorage.clear('user');
    setUser("");
  }
  function updateUser () {
    setUser(JSON.parse(localStorage.getItem("user")));
  }

  console.log("isLoggedIn: " + isLoggedIn);

  return (
    <div className="App">
      <div className='inner-app'>
        {
          !user && isLoggedIn ?
            <Signup
              toggleSignupOrLoginDisplay={toggleSignupOrLoginDisplay}
              addSubscription={addSubscription}
              user={user}
            />
            :
            <LoginDeterminer
              toggleSignupOrLoginDisplay={toggleSignupOrLoginDisplay}
              handleLogOut={handleLogOut}
              user={user}
              updateUser={updateUser}
            />
        }
      </div>
    </div>
  );
}

export default App;
