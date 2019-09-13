json.extract! album, :id, :title, :user_id

json.user do
    user = User.find_by(id: album.user_id)
    json.partial! 'api/users/user', user: user
end