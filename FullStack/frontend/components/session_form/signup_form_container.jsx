import {connect} from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';
import {signup} from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, {errors}) => {
    return {
        //errors: errors.session,
        formType: 'Next',
        navLink: <div className="loginButtons">
                    <Link to="/login">need an account?</Link>
                </div>
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);