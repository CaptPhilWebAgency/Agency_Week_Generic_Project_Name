class OrdersMailer < ApplicationMailer
<<<<<<< HEAD
  def create(email, order)
    @email = email
=======
  def create(order)
    @user = user
>>>>>>> fc8814644218a5af883a8efd5b2adbb46d28407e
    @order = order
    mail(to: @email, subject: "Iron Glory order: #{order.id}")
  end
end
