class ProductsController < ApplicationController

  def index
    @product = Product.all
    render json: @product
  end

  def show
    @product = Product.find(params[:id])
    render json: @product
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      render json: @product
    else
      request_error(@product.errors.full_messages)
    end
  end

  

end
