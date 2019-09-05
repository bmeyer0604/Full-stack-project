import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveAllComments = (comments) => ({
    type: RECEIVE_ALL_COMMENTS,
    comments
})

const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment
})

const removeComment = (commentId) => ({
    type: REMOVE_COMMENT,
    commentId
})

export const fetchComments = () => dispatch => (
    APIUtil.fetchComments().then(comments => dispatch(receiveAllComments(comments)))
)

export const fetchComment = (id) => dispatch => (
    APIUtil.fetchComment(id).then(comment => dispatch(receiveComment(comment)))
)

export const createComment = (comment) => dispatch => (
    APIUtil.createComment(comment).then(comment => dispatch(receiveComment(comment)))
)

export const updateComment = (comment) => dispatch => (
    APIUtil.updateComment(comment).then(comment => dispatch(receiveComment(comment)))
)

export const deleteComment = (id) => dispatch => (
    APIUtil.deleteComment(id).then(comment => dispatch(removeComment(comment.id)))
)