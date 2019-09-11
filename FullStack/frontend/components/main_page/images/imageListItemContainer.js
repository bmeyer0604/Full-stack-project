import { connect } from 'react-redux';
import ImageListItem from './imageListItem';
import {fetchAlbum, deleteAlbum} from '../../../actions/album_actions';
import {fetchImages} from '../../../actions/image_actions';
import {imageSelector} from '../../../util/image_selector';

// const mapStateToProps = (state, ownProps) => { 
//     let album = ownProps.album;

//     return {
//         images: imageSelector(album, state.images)
//     }
// }

const mapDispatchToProps = dispatch => ({
    fetchAlbum: (id) => dispatch(fetchAlbum(id)),
    deleteAlbum: (id) => dispatch(deleteAlbum(id)),
    fetchImages: () => dispatch(fetchImages())
});

export default connect(null, mapDispatchToProps)(ImageListItem);
