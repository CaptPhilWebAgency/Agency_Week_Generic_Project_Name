class OrdersController < ApplicationController

  def index
    @order = Order.all
    render json: @order
  end


  def show
    @order = Order.find(params[:id])
    render json: @order
  end

  def update
    @order = current_cart
    @order.status = "completed"
    @order.cost = total
    OrdersMailer.create(@order).deliver
    # charge them!
  end

  private



  def order_params
    params.permit(:product_id, :address_id, :status_id)
  end


end
