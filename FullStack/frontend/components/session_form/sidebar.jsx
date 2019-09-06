import React from 'react';
import {Link} from 'react-router-dom';

class LoginSidebar extends React.Component {

    render() {
        return(
            <div className="sidebar">
                <Link to="/" className="backToHomepage">
                        <img src="/images/back-to-imgur.png" />
                        <p>back to Picagur</p>
                </Link>
                <div className="loginSidebarBottom">
                    <a href="#">terms</a>
                    <a href="#">privacy</a>
                </div>
            </div>
        )
    }
}

export default LoginSidebar;