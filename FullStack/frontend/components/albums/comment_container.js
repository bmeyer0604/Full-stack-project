import {connect} from 'react-redux';
import React from 'react';

import Comment from './comment';
// import {fetchUser} from '../../actions/user_actions';
  
const mapStateToProps = (state, ownProps) => {
    let userId = ownProps.comment.user_id;
    let user = state.users[userId];
    let comment = ownProps.comment;
    return {
        userId,
        user,
        comment
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // fetchUser: (id) => dispatch(fetchUser(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);