import React from 'react';

class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.fetchUser(this.props.comment.user_id);
    }

    render() {
        debugger;
        return(
            <div className="commentBody">
                <div className="commentHeader">
                    <div className="commentHeaderUsername">{this.props.comment.user.username}</div>
                    via iPhone   1,000,000,000 pts   3 hr
                    <button className="commentButtons"><img src="/images/app_dots.svg"/></button>
                </div>
                <div className="userText">{this.props.comment.body}</div>
                <div className="commentTransition"></div>
            </div>
        )
    }
}

export default Comment;