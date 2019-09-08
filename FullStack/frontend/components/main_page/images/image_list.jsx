import React from 'react';
import ImageListItem from './imageListItem';

class ImageList extends React.Component {
    componentDidMount() {
        this.props.fetchImages();
    }

    render() {
        let images = this.props.images.map(image => {
            return(
                <ImageListItem key={image.id} image={image}/>
            )
        })

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