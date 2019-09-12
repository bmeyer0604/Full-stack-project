import React from 'react';

import Comment from './comment';

class CommentsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { commentBody: "", charsRemaining: 140,
                        numOfComments: this.props.comments.length }
    }

    componentDidMount() {
        this.props.fetchComments();
    }

    update(field) {
        return (e) => this.setState({
            commentBody: e.target.value,
            charsRemaining: this.state.charsRemaining - 1
        })
    }

    handleSubmit(e) {
        e.preventDefault();
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
                            <button><input type="submit" value="Post"/></button>
                        </div>
                    </form>
                </div>
                <div className="commentsInfo">
                    {this.state.numOfComments} COMMENTS
                </div>
                <div className="commentsList">{comments}</div>
            </div>
        )
    }
}

export default CommentsList;