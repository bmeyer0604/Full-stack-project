json.album do
    json.partial! '/api/albums/album', album: @album
    json.imageIds @album.images.pluck(:id)
end