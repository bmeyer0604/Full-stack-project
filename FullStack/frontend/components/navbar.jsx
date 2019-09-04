import React from 'react';
import SearchBar from './search_bar';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbarTop">
                <a href="#"><h2>Picagur</h2></a>
                <button><img src="../../../images/navbar_button.svg"/>New post</button>
                <SearchBar />
                <button className="signinButton">Sign in</button>
                <button>Sign up</button>
            </div>
        )
    }
}

export default Navbar;