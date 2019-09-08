import React from 'react';
import ImageNavbar from './image_navbar';
import ImageListContainer from './image_list_container';

class ImageScroller extends React.Component {
    render() {
        return(
            <div className="imageScroller">
                <ImageNavbar />
                <ImageListContainer />
            </div>
        )
    }
}

export default ImageScroller;