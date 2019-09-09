import React from 'react';
import {withRouter} from 'react-router';

import AlbumShowHeader from './album_show_header';
import AlbumShowSidebar from './album_show_sidebar';
import ImageShowInnerContainer from './image_show_inner_container';
import CommentsListContainer from '../albums/comments_list_container';

class AlbumShow extends React.Component {
    componentDidMount() {
        let albumId = this.props.match.params.albumId;
        this.props.fetchAlbum(albumId);
    }

    render() {
        return(
            <div className="imageShowBody">
                <AlbumShowHeader />
                <div className="imageShowOuterContainer">
                    <div className="albumShow">
                        <div className="topBarAd">This is an ad</div>
                        <ImageShowInnerContainer album={this.props.album} />
                        <CommentsListContainer />
                    </div>
                    <AlbumShowSidebar />
                </div>
            </div>
        )
    }
}

export default withRouter(AlbumShow);