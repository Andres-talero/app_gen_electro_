import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import Contenedor from './elementos/Contenedor'


ReactDOM.render(
  <React.StrictMode>
    
    <Contenedor>

    <App />

    </Contenedor>

  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorkerRegistration.register();