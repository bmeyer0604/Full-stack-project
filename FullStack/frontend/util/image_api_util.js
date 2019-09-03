export const fetchImages = () => (
    $.ajax({
        method: "GET",
        url: "api/images"
    })
)

export const fetchImage = (id) => (
    $.ajax({
        method: "GET",
        url: `api/posts/${id}`
    })
)

export const createImage = (post) => (
    $.ajax({
        method: "POST",
        url: `api/posts`,
        data: {image}
    })
)

export const updateImage = (post) => (
    $.ajax({
        method: "PATCH",
        url: `api/posts/${post.id}`,
        data: {image}
    })
)

export const deleteImage = (id) => (
    $.ajax({
        method: "DELETE",
        url: `api/posts/${id}`
    })
)