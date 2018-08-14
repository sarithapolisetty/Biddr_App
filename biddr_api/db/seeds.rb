# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

PASSWORD = "supersecret"

Bid.delete_all
Auction.delete_all
User.delete_all

super_user = User.create(
  first_name: "Jon",
  last_name: "Snow",
  email: "js@winterfell.gov",
  password: PASSWORD
  
)

10.times do
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name
  
    User.create(
      first_name: first_name,
      last_name: last_name,
      email: "#{first_name.downcase}.#{last_name.downcase}@example.com",
      password: PASSWORD
    )
end
users = User.all
puts Cowsay.say "Created #{users.count} users", :ghostbusters

100.times do
    a = Auction.create(
      title: Faker::Commerce.product_name,
        details: Faker::Community.quotes,
        ends_on: Faker::Date.forward(21),
        reserve_price: rand(50..100),
      user: users.sample
    )
  
    if a.valid?
      rand(0..10).times do
        Bid.create(
          price: rand(49),
          auction: a,
          user: users.sample
        )
      end
    end
end
  
  auctions = Auction.all
  bids = Bid.all

puts Cowsay.say("Created #{auctions.count} auctions", :tux)
puts Cowsay.say("Created #{bids.count} bids", :sheep)

