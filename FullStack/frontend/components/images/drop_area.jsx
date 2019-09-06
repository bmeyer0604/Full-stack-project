import React from 'react';
// import ImageUploader from 'react-images-upload';

class DropArea extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { pictures: [] };
    //     this.onDrop = this.onDrop.bind(this);
    // }

    // onDrop(picture) {
    //     this.setState({
    //         pictures: this.state.pictures.concat(picture),
    //     })
    // }

    render() {
        return(
            <div className="dropArea">
                {/* <ImageUploader
                    withIcon={true}
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.svg']}
                    maxFileSize={500000}
                /> */}
                <div className="dropImageHere">
                    <p>Drop images here</p>
                </div>
                <img className="imageUploadContainerTopObservatory" src="/images/observatory.svg"/>
            </div>
        )
    }
}

export default DropArea;