class OrdersMailer < ApplicationMailer
  def create(email, order)
    @email = email
    @order = order
    mail(to: @email, subject: "Iron Glory order: #{order.id}")
  end
end
