import {RECEIVE_ALL_ALBUMS, RECEIVE_ALBUM, REMOVE_ALBUM} from '../actions/album_actions';

const albumsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_ALBUMS:
            return Object.assign({}, action.payload.albums);
        case RECEIVE_ALBUM:
            return Object.assign({}, state, {[action.payload.album.id]: action.payload.album})
        case REMOVE_ALBUM:
            let newState = Object.assign({}, state);
            delete newState[action.albumId];
            return newState;
        default:
            return state;
    }
}

export default albumsReducer;