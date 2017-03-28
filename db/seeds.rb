# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds',"Iron_Glory_Inventory.csv"))
csv = CSV.parse(csv_text, headers: true, encoding: 'ISO-8859-1')
csv.each do |row|
  row.each do |key, value|
    if key.include?("Available")
      row[key] = value.gsub(/[S|M]:/i, "")
    end
  end

  #Write to the Product Table
  p = ProductTest.new
  p.product = row["Product"]
  p.sku = row["SKU"]
  p.price = row["Price"]
  p.available = row["Available"]
  p.description = row["Description"]
  p.save!

  #Write to the Category Table
  c = CategoryTest.find_or_create_by!(name: row["Category"])
  c.name = row["Category"]
  c.save!

  #Write to the Year Table
  y = YearTest.find_or_create_by!(yr: row["Year"])
  y.yr = row["Year"]
  y.save!

end
