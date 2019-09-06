import React from 'react';

class ImageUploadBottom extends React.Component {
    constructor(props) {
        super(props);
        this.state = { imageURL: "" }
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.target.value
        })
    }

    render() {
        return(
            <div className="imageUploadContainerBottom">
                <p className="choosePhotoOrVideo">Choose Photo/Video</p>
                <p>----- or -----</p>
                <input type="text" value={this.state.imageURL} 
                onChange={this.update("imageURL")} 
                placeholder="Paste Image or URL" />
            </div>
        )
    }
}

export default ImageUploadBottom;