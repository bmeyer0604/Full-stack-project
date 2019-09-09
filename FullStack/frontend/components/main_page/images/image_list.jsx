import React from 'react';
import ImageListItem from './imageListItem';
import ImageListItemContainer from './imageListItemContainer';

class ImageList extends React.Component {
    componentDidMount() {
        this.props.fetchAlbums();
    }

    render() {
        let column_one = [];
        let column_two = [];
        let column_three = [];

        let albums = this.props.albums.map(album => {
            return(
                <ImageListItemContainer key={album.id} album={album}/>
            )
        })
        // albums.forEach(album => {
        //     if(album.id % 3 === 0) {
        //         column_three.push(album);
        //     } else if(album.id % 2 === 0) {
        //         column_two.push(album);
        //     } else {
        //         column_one.push(album);
        //     }
        // })
        for(let i = 0, alb = 1; i < albums.length; i++) {
            if(alb === 1) {
                column_one.push(albums[i]);
            } else if (alb === 2) {
                column_two.push(albums[i]);
            } else {
                column_three.push(albums[i]);
            }
            alb +=1;
            if(alb === 4) alb = 1;
        }
        console.log("column one" + column_one);
        console.log(column_two);
        console.log(column_three);

        return(
            <div className="imageList">
                <ul className="imageColumn">
                    {column_one}
                </ul>
                <ul className="imageColumn">
                    {column_two}   
                </ul>
                <ul className="imageColumn">
                    {column_three}
                </ul>
            </div>
        )
    }
}

export default ImageList;