import {connect} from 'react-redux';
import React from 'react';
import CommentsList from './comments_list';
import {fetchComments, fetchComment, deleteComment} from '../../actions/comment_actions';
  
const mapStateToProps = (state, ownProps) => {
    let comments = Object.values(state.comments);
    comments = comments.filter(comment => comment.album_id === ownProps.album.id);

    return {
        comments: comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchComments: () => dispatch(fetchComments()),
        fetchComment: (id) => dispatch(fetchComment(id)),
        deleteComment: (id) => dispatch(deleteComment(id))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);