class User < ApplicationRecord
  has_secure_password
  has_secure_token

  has_many :orders
  has_many :addresses

  validates :email,:first_name, :last_name, presence: true, uniqueness: true

end
