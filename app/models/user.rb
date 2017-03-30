class User < ApplicationRecord
  has_secure_password
  has_secure_token

  has_many :orders
  has_many :addresses
end
