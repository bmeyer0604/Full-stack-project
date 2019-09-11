import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

import LoginSidebar from './sidebar';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
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
                        <p className="registerWith">Sign in with Picagur</p>
                        <img src="/images/fading-section-break-reverse.png"/>
                    </div>

                    <div className="loginInput">
                        <input type="text" value={this.state.username} 
                        onChange={this.update("username")} placeholder="Username or Email" />
                        <div>
                            <input className="inputPassword" type="password" value={this.state.password} 
                            onChange={this.update("password")} placeholder="Password" />
                            <button className="forgotPassword">forgot?</button>
                        </div>
                    </div>
                    <div className="loginInputFooter">
                        <Link to="/signup">need an account?</Link>
                        <button>{this.props.formType}</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(LoginForm);