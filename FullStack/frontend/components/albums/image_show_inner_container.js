import {connect} from 'react-redux';
import React from 'react';
import ImageShowInner from './image_show_inner';
import {fetchImages, deleteImage} from '../../actions/image_actions';
  
const mapStateToProps = (state, ownProps) => {
    let images = Object.values(state.images)
    images = images.filter(image => image.album_id === ownProps.album.id);
    return {
        images: images,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //fetchAlbumImages, action, util, route, controller, jbuilder
        //nest get route for images under albums
        //imageAlbum controller
        //nest image route under albums in routes
        fetchImages: () => dispatch(fetchImages()),
        deleteImage: (id) => dispatch(deleteImage(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageShowInner);