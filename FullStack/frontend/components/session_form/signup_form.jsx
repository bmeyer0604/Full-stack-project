import React from 'react';
import {Link} from 'react-router-dom';

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
        e.preventDefault();
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
            <div className="signupbody">
                <LoginSidebar />

                <form className="signup-subbody" onSubmit={this.handleSubmit}>
                    <Link to="/"><div className="logo">Picagur</div></Link>

                    <div className="fadeBreaks">
                        <img src="/images/fading-section-break.png"/>
                        <p className="registerWith">Register with Picagur</p>
                        <img src="/images/fading-section-break-reverse.png"/>
                    </div>

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
                    <div className="loginInputFooter">
                        <Link to="/login">sign in</Link>
                        <button><input type="submit" value={this.props.formType} /></button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUpForm;