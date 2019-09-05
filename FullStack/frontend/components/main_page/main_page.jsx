import React from 'react';

import Navbar from './navbar';
import ImageGroups from './image_groups';
import ImageScroller from './images/image_scroller';
import Footer from './footer';

class MainPage extends React.Component {
    render() {
        return(
            <div className="mainPage">
                <Navbar />
                <section className="welcomeMessage">Your first stop for memes!</section>
                <ImageGroups />
                <ImageScroller />r
                <Footer />
            </div>
        )
    }
}

export default MainPage;