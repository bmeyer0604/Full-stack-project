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
    APIUtil.fetchImages().then(images => dispatch(receiveAllImages(images)))
)

export const fetchImage = (id) => dispatch => (
    APIUtil.fetchImage(id).then(image => dispatch(receiveImage(image)))
)
 
export const createImage = (image) => dispatch => (
    APIUtil.createImage(image).then(image => dispatch(receiveImage(image)))
)

export const updateImage = (image) => dispatch => (
    APIUtil.updateImage(image).then(image => dispatch(receiveImage(image)))
)

export const deleteImage = (id) => dispatch => (
    APIUtil.deleteImage(id).then(image => dispatch(removeImage(image.id)))
)