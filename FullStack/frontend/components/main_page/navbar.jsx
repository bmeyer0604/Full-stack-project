import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './search_bar';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbarTop">
                <a className="navbarLogo" href="#">Picagur</a>
                <Link to={'/images/new'}>
                    <button className="newPostButton"><img src="/images/newpost_button.svg"/><p>New post</p></button>
                </Link>
                <SearchBar />
                <div className="navbarRight">
                    <img className="topImagesIcon" src="/images/top_images_icon.svg"/>
                    <Link to={'/login'}>
                        <a className="signinButton" href="#">Sign in</a>
                    </Link>
                    <Link to={`/signup`}>
                        <button className="signupButton">Sign up</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navbar;