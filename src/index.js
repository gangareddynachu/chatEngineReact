import React from 'react';
//import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client'
import App from './app'




//Method 1 of defining After React 18
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);


//Before Version 18 we can use ReactDOM
//ReactDOM.render(<App/>,document.getElementById('root'));

