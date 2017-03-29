class OrdersController < ApplicationController

  def index
    @order = Order.all
    render json: @order
  end

  def show
    @order = Order.find(params[:id])
    render json: @order
  end
end
