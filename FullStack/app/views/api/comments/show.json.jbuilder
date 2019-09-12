json.partial! "api/comments/comment", comment: @comment

json.album_id @comment.album_id

json.user_id @comment.user_id