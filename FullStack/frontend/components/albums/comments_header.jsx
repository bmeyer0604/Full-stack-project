import React from 'react';

class CommentsHeader extends React.Component {
    render() {
        return(
            <div className="commentsInfo">
                {this.props.numComments} COMMENTS
            </div>
        )
    }
}

export default CommentsHeader;