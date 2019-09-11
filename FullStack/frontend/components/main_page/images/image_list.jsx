import React from 'react';
import ImageListItem from './imageListItem';
import ImageListItemContainer from './imageListItemContainer';

class ImageList extends React.Component {
    componentDidMount() {
        this.props.fetchAlbums();
    }

    render() {

        let albums = this.props.albums.map(album => {
            console.log(album);
            return(
                <ImageListItemContainer key={album.id} album={album}/>
            )
        })

        return(
            <div className="imageList">
                {albums}
            </div>
        )
    }
}

export default ImageList;