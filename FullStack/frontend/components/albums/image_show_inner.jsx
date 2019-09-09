import React from 'react';
import ImageItem from '../images/image_item';

class ImageShowInner extends React.Component {
    componentDidMount() {
        this.props.fetchImages();
    }

    render() {
        return(
            <div className="imageShowInnerContainer">
                <div className="ImageContainerHeader">
                    <div className="albumInfo">
                        <p className="albumTitle">{this.props.album.title}</p>
                        <p className="albumUploadInfo">by Ropfa  via Android  2 hr</p>
                    </div>
                    <div className="scrollImageButtons">
                        <button className="previousImage">Previous Post</button>
                        <button className="nextImage">Next Post ></button>
                    </div>
                </div>
                <ImageItem album={this.props.album} />
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