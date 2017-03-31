class ApplicationController < ActionController::Base
  protect_from_forgery unless: -> { request.format.json? }

  def static
    render html: File.open("#{Rails.root}/public/index.html").read.html_safe, status: 200
  end


  private

  def request_error(msg, code = 400)
    msg = [msg] unless msg.is_a?(Array)
    render json: msg.map{ |m| { error: m }}, status: code
  end

  def current_user
    @current_user ||= User.find_by(token: params[:token]) if params[:token]
  end

  def require_user
      request_error("You need to be logged in.", 401) unless current_user
  end

  def current_cart
    @cart = @cart || current_user.orders.where(status_id: 1) || current_user.orders.create(status_id: 1)
  end

end
