# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'


if Product.all.count < 1
  csv_text = File.read(Rails.root.join('lib', 'seeds',"Iron_Glory_Inventory.csv"))
  csv = CSV.parse(csv_text, headers: true, encoding: 'ISO-8859-1')
  csv.each do |row|
    row.each do |key, value|
      if key.include?("Available")
        row[key] = value.gsub(/[S|M]:/i, "")
      end
    end
    #Write to the Category Table
    c = Category.find_or_create_by!(name: row["Category"])
    c.name = row["Category"]
    c.save!

    #Write to the Year Table
    y = Year.find_or_create_by!(yr: row["Year"])
    y.yr = row["Year"]
    y.save!

    #Write to the Product Table
    p = Product.new
    p.name = row["Product"]
    p.sku = row["SKU"]
    p.price = row["Price"]
    p.available = row["Available"]
    p.year_id = Year.find_by(yr: row["Year"]).id
    p.category_id = Category.find_by(name: row["Category"]).id
    p.description = row["Description"]
    p.image = Rails.root.join('lib', 'seeds', 'inventory',"#{p.sku.downcase}.png").open
    p.save!

  end

  music = Category.find_by(name: "Music")
  music.image = Rails.root.join('lib', 'seeds', 'category images',"music.png").open

  farm = Category.find_by(name: "Farming")
  farm.image = Rails.root.join('lib', 'seeds', 'category images',"farming.png").open

  park = Category.find_by(name: "National Parks")
  park.image = Rails.root.join('lib', 'seeds', 'category images',"parks.png").open

  movie = Category.find_by(name: "Movies")
  movie.image  = Rails.root.join('lib', 'seeds', 'category images',"movies.png").open

  music.save!
  farm.save!
  park.save!
  movie.save!

end

  unless Product.exists?(featured: true)
    prod = Product.find(rand(1..Product.all.length))
    prod.featured = true
    prod.save!
  end

# This method adds 10 new users
def new_users
  print "\nadding 5 new users: "
  users = []
  5.times do
    print '.'
    user = User.create!(
      email: Faker::Internet.unique.email,
      password: "password"
    )
    users << user
  end
  users
end

# username: Faker::Pokemon.unique.name,
# first_name: Faker::Superhero.descriptor,
# last_name: Faker::Superhero.suffix,



#run the methods here.
# this runs new_users if there are less than 10 users in the database.
# userslist = User.all.length < 5 ? new_users : User.all

puts "\nDone."
