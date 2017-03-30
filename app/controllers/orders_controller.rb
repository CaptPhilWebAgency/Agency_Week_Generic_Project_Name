class OrdersController < ApplicationController

  def index
    @order = Order.all
    render json: @order
  end

  def create
    @order = Order.new(order_params)
  end

  def show
    @order = Order.find(params[:id])
    render json: @order
  end

  private

  def order_params
    params.permit(:product_id, :cost, :address_id, :status_id)
  end


end
