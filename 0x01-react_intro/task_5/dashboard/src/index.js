import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App/App";
import Notifications from "./Notifications/Notifications";

ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
    <div>
      <div id="root-notifications">
        <Notifications />
      </div>
      <App />
=======
    <App />
    <div className="root-notifications">
      <Notifications />
>>>>>>> 5ede1434d3cc0763b9cc6e6fff85d0aa73b84cb9
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
