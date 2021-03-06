class UsersController < ApplicationController

  def index
    if current_user
      @user = User.find(params[:id])
      render json: @order
    else
      render json: @products
    end
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def create
    @user = User.new(user_params)
    if @user.save
      UsersMailer.signup(@user).deliver
      render json: @user, serializer: UserExtendedSerializer
    else
      request_error(@user.errors.full_messages)
    end
  end

  def login
    @user = User.find_by(email: params[:email])&.
              authenticate(params[:password])
    if @user
      render json: @user, serializer: UserExtendedSerializer
    else
      request_error("Invalid email or password", 401)
    end
  end

  private
  def user_params
    params.permit(:email, :password)
  end

end
