import React from 'react';

class SignupInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: "", password: "", email: "", password_redo: ""}
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.target.value
        })
    }

    render() {
        return(
            <div className="loginInput">
                <input type="text" value={this.state.username} 
                onChange={state.update("username")} placeholder="Username" />
                <input type="text" value={this.state.email} 
                onChange={state.update("email")} placeholder="Email" />
                <input type="password" value={this.state.password} 
                onChange={state.update("password")} placeholder="Password" />
                <input type="password" value={this.state.password_redo} 
                onChange={state.update("password_redo")} placeholder="Retype Password" />
            </div>
        )
    }
}

export default SignupInput;