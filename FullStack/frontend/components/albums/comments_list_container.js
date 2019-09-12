import {connect} from 'react-redux';
import React from 'react';

import CommentsList from './comments_list';
import {fetchComment, fetchComments, createComment, deleteComment} from '../../actions/comment_actions';
import {fetchAlbum} from '../../actions/album_actions';
import commentSelector from '../../util/comment_selector';
  
const mapStateToProps = (state, ownProps) => {
    const comments = commentSelector(ownProps.album, state.comments)
    return {
        comments: comments,
        album: ownProps.album
    }
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchAlbum: (id) => dispatch(fetchAlbum(id)),
        fetchComments: () => dispatch(fetchComments()),
        // createComment: (comment) => dispatch(createComment(comment)),
        deleteComment: (id) => dispatch(deleteComment(id))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);