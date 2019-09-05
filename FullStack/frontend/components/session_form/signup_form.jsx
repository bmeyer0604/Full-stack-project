import React from 'react';

import LoginSidebar from './sidebar';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            password_redo: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(e) {
        e.preventDefault;
        const user = Object.assign({}, this.state);
        delete user.password_redo;
        this.props.processForm(user);
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.target.value
        })
    }

    render() {
        return(
            <div>
                <LoginSidebar />
                <h1>Picagur</h1>
                <form className="signin-form" onSubmit={this.handleSubmit}>
                    <div className="loginInput">
                        <input type="text" value={this.state.username} 
                        onChange={this.update("username")} placeholder="Username" />
                        <input type="text" value={this.state.email} 
                        onChange={this.update("email")} placeholder="Email" />
                        <input type="password" value={this.state.password} 
                        onChange={this.update("password")} placeholder="Password" />
                        <input type="password" value={this.state.password_redo} 
                        onChange={this.update("password_redo")} placeholder="Retype Password" />
                    </div>
                    <input type="submit" value={this.props.formType} />
                </form>
            </div>
        )
    }
}

export default SignUpForm;