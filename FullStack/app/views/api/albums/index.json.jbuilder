@albums.each do |album|

  image = Image.find_by(album_id: album.id)

  json.images do
    json.set! image.id do
      json.partial! '/api/images/image', image: image
    end
  end

  images = Image.where(album_id: album.id)

  json.albums do
    json.set! album.id do
      json.partial! 'album', album: album
      json.imageIds do
        json.array! images.pluck(:id)
      end
      json.partial! '/api/images/image', image: image
    end
  end
end