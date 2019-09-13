import React from 'react';
import {Link} from 'react-router-dom';

class ImageListItem extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        if(!this.props.album) {
            return null;
        }

        return(
            <div className="frontPageImageContainer">
                <Link to={`/albums/${this.props.album.album_id}`}>
                    <img className="frontPageImage" src={this.props.album.url}/>
                    <div className="frontPageImageInfo">
                        <div className="frontPageImageTitle">{this.props.album.title}</div>
                        <div className="frontPageInfoStats">
                            <div>Upvotes</div>
                            <div>Comments</div>
                            <div>Views</div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default ImageListItem;