class OrderSerializer < ActiveModel::Serializer
  attributes :id, :user, :total, :status, :address, :created_at

  def user
    object.user.id
  end

  # def status
  #   status.name
  # end

end
