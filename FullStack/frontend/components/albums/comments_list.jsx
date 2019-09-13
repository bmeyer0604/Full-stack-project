import React from 'react';
import {Link} from 'react-router-dom';

import CommentContainer from './comment_container';
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
        return (e) => {
            let comment = this.state.commentBody;
            let inputBody = e.target.value;

            if (inputBody.length < comment.length) {
                this.setState({
                    commentBody: e.target.value,
                    charsRemaining: 140 - inputBody.length
                })
            } else {
                this.setState({
                    commentBody: e.target.value,
                    charsRemaining: this.state.charsRemaining - 1
                })
            }
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.charsRemaining < 0) return;
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
        if(this.state.charsRemaining < 0) return;
        location.reload();
    }

    render() {
        let comments = this.props.comments.map(comment => {
            return <CommentContainer comment={comment} key={comment.id} />
        })

        let charsRemaining = this.state.charsRemaining;
        let clickButton = "";
        if(this.state.charsRemaining >= 0 && this.state.charsRemaining !== 140) {
            charsRemaining = <span className="charsRemaining">{this.state.charsRemaining}</span>
            clickButton = <button onClick={this.handleClick}><input type="submit" value="Post"/></button>
        } else {
            charsRemaining = <span className="charsRemaining-over">{this.state.charsRemaining}</span>
            clickButton = <button className="buttonDisabled">Post</button>
        }

        return(
            <div className="commentsContainer">
                <div className="createComment">
                    <form className="submitCommentContainer" onSubmit={this.handleSubmit}>
                        <div className="submitCommentInnerContainer">
                            <textarea className="submitComment" 
                            type="text" value={this.state.commentBody} 
                            onChange={this.update("commentBody")} 
                            placeholder="Write a comment" />

                            {charsRemaining}
                        </div>

                        <div className="commentInputFooter">
                            <a href="#">remember the community rules</a>
                            {clickButton}
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