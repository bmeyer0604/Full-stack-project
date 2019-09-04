import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from './navbar';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import ImageGroups from './image_groups';
import ImageScroller from './images/image_scroller';

const App = () => {
    return(
        <div className="mainPage">
            <Navbar />
            <h3 className="welcomeMessage">Your first stop for memes!</h3>
            <ImageGroups />
            <ImageScroller />
        </div>
    )
}

export default App;