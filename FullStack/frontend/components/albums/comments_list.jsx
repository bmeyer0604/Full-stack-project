import React from 'react';
import {Link} from 'react-router-dom';

import Comment from './comment';
import CommentsHeader from './comments_header';

class CommentsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { commentBody: "", charsRemaining: 140};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchComments().then(() => {
            this.props.fetchAlbum(this.props.album.id);
        });
    }

    update(field) {
        return (e) => this.setState({
            commentBody: e.target.value,
            charsRemaining: this.state.charsRemaining - 1
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const comment = Object.assign({}, {body: this.state.commentBody,
            album_id: this.props.album.id});
        this.props.createComment(1, comment).then(
            () => this.setState({
                commentBody: "",
                charsRemaining: 140
            })
        )
    }

    handleClick() {
        location.reload();
    }

    render() {
        let comments = this.props.comments.map(comment => {
            return <Comment comment={comment} key={comment.id} />
        })

        return(
            <div className="commentsContainer">
                <div className="createComment">
                    <form className="submitCommentContainer" onSubmit={this.handleSubmit}>
                        <div className="submitCommentInnerContainer">
                            <textarea className="submitComment" 
                            type="text" value={this.state.commentBody} 
                            onChange={this.update("commentBody")} 
                            placeholder="Write a comment" />

                            <span className="charsRemaining">{this.state.charsRemaining}</span>
                        </div>

                        <div className="commentInputFooter">
                            <a href="#">remember the community rules</a>
                            <button onClick={this.handleClick}><input type="submit" value="Post"/></button>
                        </div>
                    </form>
                </div>
                <CommentsHeader numComments={this.props.comments.length} />
                <div className="commentsList">{comments}</div>
            </div>
        )
    }
}

export default CommentsList;