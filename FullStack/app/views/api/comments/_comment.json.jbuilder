json.extract! comment, :id, :body, :album_id, :user_id

json.user do
    user = User.find_by(id: comment.user_id)
    json.partial! 'api/users/user', user: user
end