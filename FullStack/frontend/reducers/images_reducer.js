import {RECEIVE_ALL_IMAGES, RECEIVE_IMAGE, REMOVE_IMAGE} from '../actions/image_actions';
import {RECEIVE_ALBUM} from '../actions/album_actions';

const imagesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALBUM:
            return Object.assign({}, state, action.payload.images)
        case RECEIVE_ALL_IMAGES:
            return Object.assign({}, action.images);
        case RECEIVE_IMAGE:
            return Object.assign({}, state, {[action.image.id]: action.image})
        case REMOVE_IMAGE:
            let newState = Object.assign({}, state);
            delete newState[action.imageId];
            return newState;
        default:
            return state;
    }
}

export default imagesReducer;