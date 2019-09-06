import React from 'react';
import {Link} from 'react-router-dom';

import ImageUploadBottomContainer from './image_upload_bottom_container';
import TermsOfService from './terms_of_service';

class ImageUpload extends React.Component {
    render() {
        return(
            <div className="imageUpload">
                <div className="imageUploadContainer">
                    <Link to="/"><img className="exitButton" src="/images/exit_button.svg"/></Link>
                    <div className="imageUploadContainerTop">
                        <div className="dropImageHere">
                            <p>Drop images here</p>
                        </div>
                        <img className="imageUploadContainerTopObservatory" src="/images/observatory.svg"/>
                    </div>
                    <ImageUploadBottomContainer />
                </div>
                <TermsOfService />
            </div>
        )
    }
}

export default ImageUpload;