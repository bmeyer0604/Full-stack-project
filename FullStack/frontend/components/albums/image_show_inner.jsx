import React from 'react';
import ImageItem from './image_item';

class ImageShowInner extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAlbum(this.props.match.params.albumId);
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
                        <p className="albumTitle">{this.props.album.title}</p>
                        <p className="albumUploadInfo">by USERNAME HERE  via Android  2 hr</p>
                    </div>
                    <div className="scrollImageButtons">
                        <button className="previousImage">Previous Post</button>
                        <button className="nextImage">Next Post ></button>
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