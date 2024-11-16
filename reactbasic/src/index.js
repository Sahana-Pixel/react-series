import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// dom-  tree structured
// react khudka do banata hain 
// createroot expects element from html, getelement by root
// app ko render karo 
// through js we render html
