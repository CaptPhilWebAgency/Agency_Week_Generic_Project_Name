class OrderingController < ApplicationController

  def create
    item = current_cart.orderings.new(item_params)
    if item.save
      render json: current_cart
    else
      request_error(item.errors.full_messages)
    end
  end


  def update
    item = current_cart.orderings.find(params[:id])
    if item.update(params[:quantity])
      render json: current_cart
    else
      request_error(item.errors.full_messages)
    end
  end

  def destroy
    item = current_cart.orderings.find(params[:id])
    if item.destroy
      render json current_cart
    else
      request_error(item.errors.full_messages)
    end

  end

private

  def item_params
    params.permit(:product_id, :quantity)
  end

end
