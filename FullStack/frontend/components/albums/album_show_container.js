import {connect} from 'react-redux';
import React from 'react';
import AlbumShow from './album_show_page';
  
const mapStateToProps = (state, ownProps) => {
    let albumId = ownProps.match.params.albumId;
    let album = state.albums[albumId];

    return {
        album: album
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAlbum: (id) => dispatch(fetchAlbum(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);