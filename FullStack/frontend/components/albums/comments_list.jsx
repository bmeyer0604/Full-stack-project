import React from 'react';

class CommentsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { commentBody: "", numComments: 0, charsRemaining: 140,
                        numOfComments: 0, comments: [] }
    }

    componentDidMount() {
        // this.props.fetchComments();
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
                <div className="commentsList">Lots of comments</div>
            </div>
        )
    }
}

export default CommentsList;