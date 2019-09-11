import * as APIUtil from '../util/album_api_util';

export const RECEIVE_ALL_ALBUMS = "RECEIVE_ALL_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const REMOVE_ALBUM = "REMOVE_ALBUM";

const receiveAllAlbums = (payload) => ({
    type: RECEIVE_ALL_ALBUMS,
    payload
})

const receiveAlbum = (payload) => ({
    type: RECEIVE_ALBUM,
    payload
})

const removeAlbum = (albumId) => ({
    type: REMOVE_ALBUM,
    albumId
})

export const fetchAlbums = () => dispatch => (
    APIUtil.fetchAlbums().then(albums => dispatch(receiveAllAlbums(albums)))
)

export const fetchAlbum = (id) => dispatch => (
    APIUtil.fetchAlbum(id).then(album => dispatch(receiveAlbum(album)))
)

export const createAlbum = (album) => dispatch => (
    APIUtil.createAlbum(album).then(album => dispatch(receiveAlbum(album)))
)

export const updateAlbum = (album) => dispatch => (
    APIUtil.updateAlbum(album).then(album => dispatch(receiveAlbum(album)))
)

export const deleteAlbum = (id) => dispatch => (
    APIUtil.deleteAlbum(id).then(album => dispatch(removeAlbum(album.id)))
)