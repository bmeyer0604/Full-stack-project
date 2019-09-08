import { connect } from 'react-redux';
import ImageListItem from './imageListItem';
import {fetchAlbum, deleteAlbum} from '../../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
    // let albumId = ownProps.match.props.albumId;
    let albumId = ownProps.album.id;
    let album = state.albums[albumId];
    return {
        album: album
    };
};

const mapDispatchToProps = dispatch => ({
    fetchAlbum: (id) => dispatch(fetchAlbum(id)),
    deleteAlbum: (id) => dispatch(deleteAlbum(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageListItem);
