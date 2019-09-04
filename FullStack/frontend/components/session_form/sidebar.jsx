import React from 'react';

class LoginSidebar extends React.Component {

    render() {
        return(
            <div className="login-sidebar">
                <a href="root">back to Picagur</a>
                <div className="login-sidebar-bottom">
                    <a href="#">terms</a>
                    <a href="#">privacy</a>
                </div>
            </div>
        )
    }
}

export default LoginSidebar;