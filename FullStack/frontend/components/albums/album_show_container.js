import {connect} from 'react-redux';
import React from 'react';
import AlbumShow from './album_show_page';
import {fetchAlbum} from '../../actions/album_actions';
  
const mapStateToProps = (state, ownProps) => {
    let albumId = ownProps.match.params.albumId;
    let album = state.albums[albumId];

    return {
        album: album,
        albumId: albumId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAlbum: (id) => dispatch(fetchAlbum(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);