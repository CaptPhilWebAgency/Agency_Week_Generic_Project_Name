class AddressSerializer < ActiveModel::Serializer
  attributes :id, :name, :street, :city, :state, :zip

end
