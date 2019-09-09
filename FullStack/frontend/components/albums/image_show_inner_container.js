import {connect} from 'react-redux';
import React from 'react';
import ImageShowInner from './image_show_inner';
import {fetchAlbum} from '../../actions/album_actions';
import {fetchImages, deleteImage} from '../../actions/image_actions';
  
const mapStateToProps = (state, ownProps) => {
    let images = Object.values(state.images)
    images = images.filter(image => image.album_id === ownProps.album.id);

    return {
        images: images
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchImages: () => dispatch(fetchImages()),
        deleteImage: (id) => dispatch(deleteImage(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageShowInner);