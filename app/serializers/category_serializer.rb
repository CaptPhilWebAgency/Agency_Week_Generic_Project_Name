class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :products

  def image
    object.image.url
  end

end
