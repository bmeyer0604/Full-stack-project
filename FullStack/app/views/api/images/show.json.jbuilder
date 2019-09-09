json.partial! "api/images/image", image: @image

json.album_id do
    json.partial! '/api/albums/album', album: @image.album_id
end