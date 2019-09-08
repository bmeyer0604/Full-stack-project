# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Image.delete_all
Album.delete_all
Comment.delete_all

User.create!(
    username: 'guest',
    password: 'password',
    email: "whatever@domain.com",
    id: 1
)

User.create!(
    username: 'DarthSauron',
    password: 'password',
    email: "thisisanemail@email.com",
    id: 2
)

Album.create!(
    id: 1,
    user_id: 1,
    title: "Sanic the hadgehog"
)

Album.create!(
    id: 2,
    user_id: 2,
    title: "cats lol"
)

Image.create!(
    id: 1,
    user_id: 1,
    album_id: 1,
    url: "https://i.imgur.com/MmiKPd3.jpg",
    description: "it's a cat lol"
)

Image.create!(
    id: 2,
    user_id: 2,
    album_id: 2,
    url: "/images/sanic.jpg",
    description: "sanic caek face is a caek face of sanic the hadghog and eh is a video gaem caractar who goes real fast lol"
)