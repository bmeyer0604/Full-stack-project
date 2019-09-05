import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from './navbar';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import ImageGroups from './image_groups';
import ImageScroller from './images/image_scroller';
import Footer from './footer';

const App = () => {
    return(
        <div className="mainPage">
            <Navbar />
            <section className="welcomeMessage">Your first stop for memes!</section>
            <ImageGroups />
            <ImageScroller />
            <Footer />
        </div>
    )
}

export default App;