import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import {DataProvider} from './Context';

ReactDOM.render(
<DataProvider>
<Router>
    <App />
</Router>
</DataProvider>, 
document.getElementById('root'));

serviceWorker.unregister();
