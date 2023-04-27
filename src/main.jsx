import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './components/form.css';
import './components/pp.css';
import './index.css';
import { ContextProvider } from './ContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ContextProvider>
    <App />
  </ContextProvider>

  {/* // <App2 /> */}
  </React.StrictMode>,
);
