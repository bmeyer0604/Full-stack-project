json.album do
    json.partial! '/api/albums/album', album: @album
    json.imageIds do
        json.array! @images.pluck(:id)
    end
    json.commentIds do
        json.array! @comments.pluck(:id)
    end
end

json.images do
    @images.each do |image|
        json.set! image.id do
            json.partial! '/api/images/image', image: image
        end
    end
end

json.comments do
    @comments.each do |comment|
        json.set! comment.id do
            json.partial! '/api/comments/comment', comment: comment
        end
    end
end