import React from 'react';

class ImageShowInnerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {description: "sanic caek face is a caek face of sanic the hadghog and eh is a video gaem caractar who goes real fast lol"}
    }

    render() {
        return(
            <div className="imageShowInnerContainer">
                <div className="ImageContainerHeader">
                    <div className="imageInfo">
                        <p className="imageTitle">Sanic the hadgehog</p>
                        <p className="imageUploadInfo">by Ropfa  via Android  2 hr</p>
                    </div>
                    <div className="scrollImageButtons">
                        <button className="previousImage">Previous Post</button>
                        <button className="nextImage">Next Post ></button>
                    </div>
                </div>
                <div className="imageContainer">
                    <img src="/images/sanic.jpg" />
                </div>
                <div className="imageDescription">{this.state.description}</div>
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

export default ImageShowInnerContainer;