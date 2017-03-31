class User < ApplicationRecord
  has_secure_password
  has_secure_token

  has_many :orders
  has_many :addresses

  validates :email, uniqueness: true
  validates :first_name, :last_name, :email, presence: true

end
