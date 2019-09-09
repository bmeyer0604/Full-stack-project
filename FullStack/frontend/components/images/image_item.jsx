import React from 'react';

class ImageItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {description: "sanic caek face is a caek face of sanic the hadghog and eh is a video gaem caractar who goes real fast lol"}
    }
    
    render() {
        return(
            <div className="imageContainer">
                <img src={this.props.image.url} />
                <div className="imageDescription">{this.props.image.description}</div>
            </div>
        )
    }
}

export default ImageItem;