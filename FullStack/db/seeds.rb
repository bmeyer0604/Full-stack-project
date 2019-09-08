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
    email: "whatever@domain.com"
)

User.create!(
    username: 'DarthSauron',
    password: 'password',
    email: "thisisanemail@email.com"
)

Image.create!(
    url: "https://i.imgur.com/MmiKPd3.jpg",
    description: "it's a cat lol"
)

Image.create!(
    url: "/images/orly.jpg",
    description: "O RLY?"
)