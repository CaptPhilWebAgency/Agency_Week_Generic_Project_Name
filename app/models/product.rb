class Product < ApplicationRecord
  has_many :orderings
  has_many :orders, through: :orderings
  belongs_to :year
  belongs_to :category
end
