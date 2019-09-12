import React from 'react';

class Comment extends React.Component {
    render() {
        return(
            <div className="commentBody">
                {this.props.comment.body}
            </div>
        )
    }
}

export default Comment;