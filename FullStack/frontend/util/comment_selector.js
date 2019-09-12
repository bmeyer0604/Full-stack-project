export default function commentSelector(album, comments) {
    const selected = [];
    if (album === undefined || Object.values(comments).length === 0) return [];

    album.commentIds.forEach(id => {
        selected.push(comments[id]);
    })

    return selected;
}