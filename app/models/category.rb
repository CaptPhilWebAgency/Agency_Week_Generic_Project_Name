class Category < ApplicationRecord
  has_many :products

  mount_uploader :image_upload, ImageUploader

end
