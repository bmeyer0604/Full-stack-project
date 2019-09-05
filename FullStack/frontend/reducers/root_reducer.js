import {combineReducers} from 'redux';

import sessionReducer from './session_reducer';
import imagesReducer from './images_reducer';
import usersReducer from './users_reducer';
import commentsReducer from './comments_reducer';

const RootReducer = combineReducers({
    session: sessionReducer,
    images: imagesReducer,
    users: usersReducer,
    comments: commentsReducer
});

export default RootReducer;