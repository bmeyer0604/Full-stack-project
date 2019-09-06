import React from 'react';
import {Link} from 'react-router-dom';

import DropArea from './drop_area';
import ImageUploadBottomContainer from './image_upload_bottom_container';
import TermsOfService from './terms_of_service';

class ImageUpload extends React.Component {
    render() {
        return(
            <div className="imageUpload">
                <div className="imageUploadContainer">
                    <Link to="/"><img className="exitButton" src="/images/exit_button.svg"/></Link>
                    <DropArea />
                    <ImageUploadBottomContainer />
                </div>
                <TermsOfService />
            </div>
        )
    }
}

export default ImageUpload;