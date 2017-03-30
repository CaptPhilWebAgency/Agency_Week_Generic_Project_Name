class UsersMailer < ApplicationMailer
  def signup(user)
    @user = user
    mail(to: @user.email, subject: "Welcome to Iron Glory!")
  end
end
