export const fetchComments = () => (
    $.ajax({
        method: "GET",
        url: "api/comments"
    })
)

export const fetchComment = (comment) => (
    $.ajax({
        method: "GET",
        url: `api/comments/${id}`
    })
)

export const createComment = (album_id, comment) => (
    $.ajax({
        method: "POST",
        url: `api/albums/${album_id}/comments`,
        data: {comment}
    })
)

// export const updateComment = (comment) => (
//     $.ajax({
//         method: "PATCH",
//         url: `api/comments/${comment.id}`,
//         data: {comment}
//     })
// )

export const deleteComment = (album) => (
    $.ajax({
        method: "DELETE",
        url: `api/albums/${album.id}`
    })
)