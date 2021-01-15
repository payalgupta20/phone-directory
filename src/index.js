import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import AddSubscriber from './AddSubscriber';
import reportWebVitals from './reportWebVitals';
import './common/common.css';
import ShowSubscribers from './ShowSubscribers';
import PhoneDirectory from './PhoneDirectory';

ReactDOM.render(
  <React.StrictMode>
    <PhoneDirectory/>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
