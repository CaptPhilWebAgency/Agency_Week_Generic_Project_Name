class User < ApplicationRecord
  has_secure_password
  has_secure_token

  has_many :orders
  has_many :addresses

  validates :email, presence: true, uniqueness: true
  
end
