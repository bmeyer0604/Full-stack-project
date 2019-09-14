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
    username: 'FirstUser',
    password: 'password',
    email: "whatever@domain.com"
)

User.create!(
    username: 'DarthSauron',
    password: 'password',
    email: "thisisanemail@email.com"
)

Album.create!(
    user_id: 1,
    title: "Sanic the hadgehog"
)

Album.create!(
    user_id: 2,
    title: "cats lol"
)

Album.create!(
    user_id: 1,
    title: "I had to make a title for this"
)

Album.create!(
    user_id: 2,
    title: "Owls"
)

Album.create!(
    user_id: 1,
    title: "lol"
)

Image.create!(
    user_id: 2,
    album_id: 2,
    url: "/images/cat.jpg",
    description: "it's a cat lol"
)

Image.create!(
    user_id: 1,
    album_id: 1,
    url: "/images/sanic.jpg",
    description: "sanic caek face is a caek face of sanic the hadghog and eh is a video gaem caractar who goes real fast lol"
)

Image.create!(
    user_id: 2,
    album_id: 2,
    url: "/images/cat.jpg",
    description: "this is the same cat"
)

Image.create!(
    user_id: 2,
    album_id: 2,
    url: "/images/cat.jpg",
    description: "i made an album of three of the same cats lolololol"
)

Image.create!(
    user_id: 1,
    album_id: 3,
    url: "/images/memes.jpg",
    description: "This picture does not need a description"
)

Image.create!(
    user_id: 2,
    album_id: 4,
    url: "/images/orly.jpg",
    description: "Owls"
)

Image.create!(
    user_id: 2,
    album_id: 4,
    url: "/images/yarly.png",
    description: "Owls"
)

Image.create!(
    user_id: 1,
    album_id: 5,
    url: "/images/eclipse.jpg",
    description: "lol"
)

Image.create!(
    user_id: 1,
    album_id: 5,
    url: "/images/jonsnow.png",
    description: "lol"
)

Image.create!(
    user_id: 1,
    album_id: 5,
    url: "/images/toystory.jpg",
    description: "lol"
)

Image.create!(
    user_id: 1,
    album_id: 5,
    url: "/images/bug.png",
    description: "lol"
)

Comment.create!(
    user_id: 1,
    album_id: 1,
    body: "This is dumb lol"
)

Comment.create!(
    user_id: 2,
    album_id: 1,
    body: "no u"
)

Comment.create!(
    user_id: 1,
    album_id: 2,
    body: "Kitties!!!"
)

Comment.create!(
    user_id: 2,
    album_id: 3,
    body: "This is a generic comment."
)

Comment.create!(
    user_id: 1,
    album_id: 1,
    body: "fight me irl"
)

Comment.create!(
    user_id: 1,
    album_id: 4,
    body: "Owls are pretty cool."
)

Comment.create!(
    user_id: 1,
    album_id: 5,
    body: "LOL!"
)

Comment.create!(
    user_id: 2,
    album_id: 5,
    body: "Did you seriously just comment on your own post?"
)