class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :featured, :image, :sku, :price, :available, :year, :category, :description


  def year
    object.year.yr
  end

  def category
    object.category.name
  end

end
