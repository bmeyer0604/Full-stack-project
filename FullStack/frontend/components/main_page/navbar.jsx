import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './search_bar';
import NavRightContainer from './nav_right_container';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbarTop">
                <Link to={'/'}><div className="navbarLogo">Picagur</div></Link>
                <Link to={'/images/new'}>
                    <button className="newPostButton"><img src="/images/newpost_button.svg"/><p>New post</p></button>
                </Link>
                <SearchBar />
                <NavRightContainer />
            </div>
        )
    }
}

export default Navbar;