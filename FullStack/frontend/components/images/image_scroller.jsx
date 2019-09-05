import React from 'react';
import ImageNavbar from './image_navbar';
import ImageList from './image_list';

class ImageScroller extends React.Component {
    render() {
        return(
            <div className="imageScroller">
                <ImageNavbar />
                <ImageList />
            </div>
        )
    }
}

export default ImageScroller;