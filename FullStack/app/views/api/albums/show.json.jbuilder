json.album do
    json.partial! '/api/albums/album', album: @album
    json.imageIds do
        json.array! @images.pluck(:id)
    end
end

json.images do
    @images.each do |image|
        json.set! image.id do
            json.partial! '/api/images/image', image: image
        end
    end
end