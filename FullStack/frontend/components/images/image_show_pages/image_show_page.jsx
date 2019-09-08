import React from 'react';

import ImageShowHeader from './image_show_header';
import ImageShowSidebar from './image_show_sidebar';
import ImageShowInnerContainer from './image_show_inner_container';
import CommentsListContainer from './comments_list_container';

class ImageShow extends React.Component {
    render() {
        return(
            <div className="imageShowBody">
                <ImageShowHeader />
                <div className="imageShowOuterContainer">
                    <div className="imageShow">
                        <div className="topBarAd">This is an ad</div>
                        <ImageShowInnerContainer />
                        <CommentsListContainer />
                    </div>
                    <ImageShowSidebar />
                </div>
            </div>
        )
    }
}

export default ImageShow;