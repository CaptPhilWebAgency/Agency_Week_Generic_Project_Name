class Address < ApplicationRecord
  has_many :orders
  belongs_to :user

  validates :street,:city, :state, :zip, presence: true

end
