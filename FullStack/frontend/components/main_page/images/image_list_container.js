import { connect } from 'react-redux';
import ImageList from './image_list';
import {fetchAlbums, deleteAlbum} from '../../../actions/album_actions';

const mapStateToProps = (state) => {
    let albums = Object.values(state.albums);
    return {
        albums: albums
    };
};

const mapDispatchToProps = dispatch => ({
    fetchAlbums: () => dispatch(fetchAlbums()),
    deleteAlbum: (id) => dispatch(deleteAlbum(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);
