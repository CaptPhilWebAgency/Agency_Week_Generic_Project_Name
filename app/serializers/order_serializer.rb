class OrderSerializer < ActiveModel::Serializer
  attributes :id, :user, :cost, :status

  def user
    object.user.id
  end

  def status
    status.name
  end

end
