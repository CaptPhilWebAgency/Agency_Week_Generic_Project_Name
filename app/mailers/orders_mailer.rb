class UsersMailer < ApplicationMailer
  def create(order)
    @user = user
    @order = order
    mail(to: @user.email, subject: "Iron Glory order: #{order.id}")
  end
end
