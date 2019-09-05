import React from 'react';

class ImageListItem extends React.Component {
    render() {
        return(
            <div className="frontPageImageContainer">
                <img className="frontPageImage" src="/images/f9agy.jpg"/>
                <div className="frontPageImageInfo">
                    <div className="frontPageImageTitle">Commander Shepard</div>
                    <div className="frontPageInfoStats">
                        <div>Upvotes</div>
                        <div>Comments</div>
                        <div>Views</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageListItem;