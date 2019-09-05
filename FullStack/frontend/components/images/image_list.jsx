import React from 'react';
import ImageListItem from './imageListItem';

class ImageList extends React.Component {
    render() {
        let column_one = "";
        let column_two = ""; 
        let column_three = ""; 

        return(
            <div className="imageList">
                <ul className="imageColumn">
                    <ImageListItem />
                    <ImageListItem />
                    <ImageListItem />
                </ul>
                <ul className="imageColumn">
                    <ImageListItem />
                    <ImageListItem />
                    <ImageListItem />
                </ul>
                <ul className="imageColumn">
                    <ImageListItem />
                    <ImageListItem />
                    <ImageListItem />
                </ul>
            </div>
        )
    }
}

export default ImageList;