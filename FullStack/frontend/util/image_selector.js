export default function imageSelector(album, images) {
    const selected = [];
    if (album === undefined || Object.values(images).length === 0) return [];

    album.imageIds.forEach(id => {
        selected.push(images[id]);
    })

    return selected;
}