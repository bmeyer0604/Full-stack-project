import React from 'react';

class ImageUploadBottom extends React.Component {
    constructor(props) {
        super(props);
        this.state = { imageURL: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault;
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.target.value
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} className="imageUploadContainerBottom">
                <div className="choosePhotoOrVideo">
                    <img src="/images/photo_icon.svg"/>
                    <label>Choose Photo/Video<input type="file" multiple /></label>
                </div>
                <p>----- or -----</p>
                <input type="text" value={this.state.imageURL} 
                onChange={this.update("imageURL")} 
                placeholder="Paste Image or URL" />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default ImageUploadBottom;