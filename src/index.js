import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './styles/uikit.css';
// import 'react-select/dist/react-select.css'
import './styles/custom.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
