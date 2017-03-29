class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :products, :image
end
