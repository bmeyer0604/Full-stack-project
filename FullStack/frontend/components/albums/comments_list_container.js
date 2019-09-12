import {connect} from 'react-redux';
import React from 'react';

import CommentsList from './comments_list';
import {fetchComment, fetchComments, createComment, deleteComment} from '../../actions/comment_actions';
import {fetchAlbum} from '../../actions/album_actions';
import commentSelector from '../../util/comment_selector';
  
const mapStateToProps = (state, ownProps) => {
    // let albumId = ownProps.match.params.albumId;
    // let album = state.albums[albumId];
    const comments = commentSelector(ownProps.album, state.comments);
    return {
        comments: comments,
        album: ownProps.album,
        currentUser: state.users[state.session.id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchAlbum: (id) => dispatch(fetchAlbum(id)),
        fetchComments: () => dispatch(fetchComments()),
        createComment: (album_id, comment) => dispatch(createComment(album_id, comment)),
        deleteComment: (id) => dispatch(deleteComment(id))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);