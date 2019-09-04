import React from 'react';
import LoginSidebar from './sidebar';
import LoginInput from './login_input';
import SignupInput from './signup_input';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault;
    }

    render() {
        let inputForm = <SignupInput />;

        if(this.props.formType === 'Sign In') {
            inputForm = <LoginInput />
        }

        return(
            <div>
                <LoginSidebar />
                <a href="root"><h1>Picagur</h1></a>
                <form className="signin-form" onSubmit={this.handleSubmit}>
                    <div className="username-password">
                        {inputForm}
                    </div>
                    <input type="submit" value={this.props.formType} />
                </form>
            </div>
        )
    }
}

export default SessionForm;