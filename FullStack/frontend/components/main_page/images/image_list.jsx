import React from 'react';
import ImageListItem from './imageListItem';
import ImageListItemContainer from './imageListItemContainer';

class ImageList extends React.Component {
    componentDidMount() {
        this.props.fetchAlbums();
    }

    render() {
        let albums = this.props.albums.map(album => {
            return(
                <ImageListItemContainer key={album.id} album={album}/>
            )
        })

        let column_one = albums;
        let column_two = ""; 
        let column_three = ""; 

        return(
            <div className="imageList">
                <ul className="imageColumn">
                    {albums}
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