import React, { useState } from 'react';
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import "./App.css";
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';

function App() {
     const [isLoggedIn, setIsLoggedIn] = useState(false);
 
     return (
       <React.Fragment>
            <Notifications />
            <div className="App">
            <Header />
            {isLoggedIn ? <CourseList /> : <Login setIsLoggedIn={setIsLoggedIn} />}
            <Footer />
            </div>
       </React.Fragment>
   );
}
   
App.propTypes = {
     isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
     isLoggedIn: false,
};

export default App;
