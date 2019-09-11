import React from 'react';

class ImageItem extends React.Component {
    constructor(props) {
        super(props);
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