import React from 'react';

class LoginInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: "", password: ""}
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.target.value
        })
    }

    render() {
        return (
            <div className="loginInput">
                <input type="text" value={this.state.username} onChange={this.update("username")} placeholder="Username or Email" />
                <input type="password" value={this.state.password} onChange={this.update("password")} placeholder="Password" />
            </div>
        )
    }
}

export default LoginInput;