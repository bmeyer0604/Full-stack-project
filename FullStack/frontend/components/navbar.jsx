import React from 'react';
import SearchBar from './search_bar';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbarTop">
                <a className="navbarLogo" href="#">Picagur</a>
                <button className="newPostButton"><img src="/images/newpost_button.svg"/><p>New post</p></button>
                <SearchBar />
                <div className="navbarRight">
                    <img className="topImagesIcon" src="/images/top_images_icon.svg"/>
                    <a className="signinButton">Sign in</a>
                    <button className="signupButton">Sign up</button>
                </div>
            </div>
        )
    }
}

export default Navbar;