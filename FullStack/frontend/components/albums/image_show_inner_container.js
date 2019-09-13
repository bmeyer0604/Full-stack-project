import {connect} from 'react-redux';
import React from 'react';
import {withRouter} from 'react-router';

import ImageShowInner from './image_show_inner';
import {fetchImages, deleteImage} from '../../actions/image_actions';
import {fetchAlbum} from '../../actions/album_actions';
import imageSelector from '../../util/image_selector';
  
const mapStateToProps = (state, ownProps) => {
    let albumId = ownProps.match.params.albumId;
    let album = state.albums[albumId];
    let userId = ownProps.match.params.userId;
    let user = state.users[userId];
    const images = imageSelector(album, state.images)

    return {
        images,
        album
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchImages: () => dispatch(fetchImages()),
        fetchAlbum: (id) => dispatch(fetchAlbum(id)),
        deleteImage: (id) => dispatch(deleteImage(id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ImageShowInner));