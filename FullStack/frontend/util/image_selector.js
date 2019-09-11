export default function imageSelector(album, images) {
    const selected = [];
    if (album === undefined || images === undefined) return [];

    album.imageIds.forEach(id => {
        selected.push(images[id]);
    })

    return selected;
}