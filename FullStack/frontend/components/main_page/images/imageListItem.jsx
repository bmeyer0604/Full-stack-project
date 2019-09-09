import React from 'react';
import {Link} from 'react-router-dom';

class ImageListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.debug('hey', this.props);
        if(this.props.album) {
            let albumId = this.props.album.id;
            this.props.fetchAlbum(albumId);
        }
    }

    render() {
        if(!this.props.album) {
            return null;
        }
        return(
            <div className="frontPageImageContainer">
                <Link to={`/albums/${this.props.album.id}`}>
                    <img className="frontPageImage" src={"/images/f9agy.jpg"}/>
                    <div className="frontPageImageInfo">
                        <div className="frontPageImageTitle">Commander Shepard</div>
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