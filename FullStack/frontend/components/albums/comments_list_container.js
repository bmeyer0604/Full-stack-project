import {connect} from 'react-redux';
import React from 'react';
import CommentsList from './comments_list';
  
const mapStateToProps = (state) => {
    let comments = Object.values(state.comments);
    return {
        comments: comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchComments: () => dispatch(fetchComments()),
        deleteComment: (id) => dispatch(deleteComment(id))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);