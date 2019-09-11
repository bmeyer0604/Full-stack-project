json.partial! "api/comments/comment", comment: @comment

json.album_id do
    json.partial! '/api/albums/album', album: @comment.album_id
end

json.user_id do
    json.partial! '/api/users/user', user: @comment.user_id
end