import { useContext } from 'react';

import Signup from './components/Signup';
import Login from './components/Login';
import { Context } from './ContextProvider';
import IdlerLogin from './components/IdlerLogin';

function App () {

    const { renderLogin0rSignup } = useContext(Context);
    return (
        <div className="App">
            {/* <div className='inner-app'> */}
                {
                renderLogin0rSignup ?
                    <IdlerLogin /> : <Signup />
                }
            {/* </div> */}
        </div>
    );
}

export default App;
