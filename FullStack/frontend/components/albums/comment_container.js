import {connect} from 'react-redux';
import React from 'react';

import Comment from './comment';
  
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

export default connect(mapStateToProps,)(Comment);