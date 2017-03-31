class Order < ApplicationRecord
  has_many :orderings
  has_many :orders, through: :orderings
  belongs_to :user
  belongs_to :address
  belongs_to :status

  def total
    orderings.map(&:cost)
  end
end
