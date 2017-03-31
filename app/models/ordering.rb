class Ordering < ApplicationRecord
  belongs_to :order
  belongs_to :product

  def cost
    product.price*quantity
  end
end
