class AddressController < ApplicationController

  def index
    @address = Address.all
    render json: @order
  end

  def show
    @address = Address.find(params[:id])
    render json: @address
  end

  def create
    @address = Address.new(address_params)

    if @address.save
      render json: @address
    else
      request_error(@address.errors.full_messages)
    end
  end

  private

  def address_params
    params.permit(:name, :street, :city, :state, :zip)
  end
end
