import { connect } from 'react-redux';
import ImageList from './image_list';
import {fetchImages, deleteImage} from '../../../actions/image_actions';

const mapStateToProps = (state) => {
    let images = Object.values(state.images);
    return {
        images: images
    };
};

const mapDispatchToProps = dispatch => ({
    fetchImages: () => dispatch(fetchImages()),
    deleteImage: (id) => dispatch(deleteImage(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);
