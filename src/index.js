import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './styles/custom.css';
import './App.css';
import './styles/uikit.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
