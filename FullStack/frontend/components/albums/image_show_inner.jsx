import React from 'react';
import {Link} from 'react-router-dom';

import ImageItem from './image_item';

class ImageShowInner extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchImages().then(() => {
            this.props.fetchAlbum(this.props.match.params.albumId);
        });
    }

    render() {
        let images = this.props.images.map(image => {
            return <ImageItem album={this.props.album} image={image} key={image.id} />
        })

        if(!this.props.album) {
            return <div>Loading...</div>
        }

        return(
            <div className="imageShowInnerContainer">
                <div className="ImageContainerHeader">
                    <div className="albumInfo">
                        <div className="albumTitle">{this.props.album.title}</div>
                        <div className="imageHeaderAuthor">
                            by 
                            <div className="commentHeaderUsername">{this.props.album.user.username}</div>
                            via Android  2 hr
                        </div>
                    </div>
                    <div className="scrollImageButtons">
                        { this.props.album.id - 1 !== 0 &&
                            <Link to={`/albums/${this.props.album.id - 1}`}>
                                <button className="previousImage">Previous Post</button>
                            </Link>
                        }
                        <Link to={`/albums/${this.props.album.id + 1}`}>
                            <button className="nextImage">Next Post ></button>
                        </Link>
                    </div>
                </div>

                {images}

                <div className="imageShowIcons">
                    <div className="iconsLeft">

                    </div>
                    <div className="iconsRight">

                    </div>
                </div>
            </div>
        )
    }
}

export default ImageShowInner;