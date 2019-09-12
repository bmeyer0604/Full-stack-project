@albums.each do |album|

  image = Image.find_by(album_id: album.id)
  comment = Comment.find_by(album_id: album.id)

  json.images do
    json.set! image.id do
      json.partial! '/api/images/image', image: image
    end
  end

  json.comments do
    json.set! comment.id do
      json.partial! '/api/comments/comment', comment: comment
    end
  end

  images = Image.where(album_id: album.id)
  comments = Comment.where(album_id: album.id)

  json.albums do
    json.set! album.id do
      json.partial! 'album', album: album
      json.imageIds do
        json.array! images.pluck(:id)
      end
      json.commentIds do
        json.array! comments.pluck(:id)
      end
      json.partial! '/api/images/image', image: image
      json.partial! '/api/comments/comment', comment: comment
    end
  end
end