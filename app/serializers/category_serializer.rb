class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :products, :image

  def image
    object.image.url
  end

end
