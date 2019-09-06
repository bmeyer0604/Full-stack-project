import React from 'react';

import NavRightContainer from './nav_right_container';
import ImageUpload from './image_upload';

class ImageForm extends React.Component {
    render() {
        return(
            <div className="imageUploadBody">
                <div className="navbarLogo">Picagur</div>
                <ImageUpload />
                <NavRightContainer />
            </div>
        )
    }
}

export default ImageForm;