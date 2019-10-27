# README

Picagur is an image-hosting site where users can create albums filled with pictures and then comment on those of others.

Link: https://picagur-fullstackproject.herokuapp.com/#/

<img src="https://github.com/ropfa0604/Full-stack-project/blob/master/FullStack/public/images/mainPage.png"/>

Picagur uses Ruby on Rails on the backend and JavaScript React on the frontend.

Users on Picagur can browse albums with one or more images. They can then comment on these albums and respond to others' comments. 
Some challenges involved with the production of these features were connecting user information to their respective comments and albums, as well as significant and repeated refactoring of the overall project over the course of production. The Jbuilder view files also caused various errors, but were themselves used to solve a variety of difficult problems.

The following snippet highlights the aforementioned connecting of comments to the usernames of their attributed users. The usernames were connected through Container files and Jbuilder view files.
```
<div className="commentBody">
	<div className="commentHeader">
		<div className="commentHeaderUsername">
		{this.props.comment.user.username}</div>
                via iPhone   1,000,000,000 pts   3 hr
                <button className="commentButtons"><img src="/images/
		app_dots.svg"/></button>
	</div>
        <div className="userText">{this.props.comment.body}</div>
        <div className="commentTransition"></div>
</div>
```
Another challenge involved a characer counter for an textarea box. The numbers would count down after every character change, however this also initially caused it to count down when the backspace key was pressed. I fixed this by having the update function check the current length and if it was shorter than the to-be-updated version of the user's text. This also helped in that it would account for if the user had erased a block of text, rather than a single character. It also would not require a check for the specific key that had been pressed (one of the previous attempts to resolve this), which would have required a lengthy set of if/else conditionals to also check for other buttons such as Shift and Enter.
```
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
```
<img src="https://github.com/ropfa0604/Full-stack-project/blob/master/FullStack/public/images/albumPage.png"/>
