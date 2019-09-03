import * as APIUtil from '../util/image_api_util';

export const RECEIVE_ALL_IMAGES = "RECEIVE_ALL_IMAGES";
export const RECEIVE_IMAGE = "RECEIVE_IMAGE";
export const REMOVE_IMAGE = "REMOVE_IMAGE";

const receiveAllImages = (images) => ({
    type: RECEIVE_ALL_IMAGES,
    images
})

const receiveImage = (image) => ({
    type: RECEIVE_IMAGE,
    image
})

const removeImage = (imageId) => ({
    type: REMOVE_IMAGE,
    imageId
})

export const fetchImages = () => dispatch => (
    APIUtil.fetchImages().then(images => dispatch(receiveAllImages()))
)