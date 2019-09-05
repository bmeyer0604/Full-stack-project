import React from 'react';
import {Link} from 'react-router-dom';

class LoginSidebar extends React.Component {

    render() {
        return(
            <div className="login-sidebar">
                <Link to="/"><h2>back to Picagur</h2></Link>
                <div className="login-sidebar-bottom">
                    <a href="#">terms</a>
                    <a href="#">privacy</a>
                </div>
            </div>
        )
    }
}

export default LoginSidebar;