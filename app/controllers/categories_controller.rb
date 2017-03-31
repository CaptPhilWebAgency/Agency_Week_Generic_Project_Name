class CategoriesController < ApplicationController

  def index
    @categories = Category.all
    render json: @categories.map { |c|
      {name: c.name, image: c.image.url} }

  end

  def show
    @category = Category.find(params[:id])
    render json: @category
  end

  def update
  end

  def destroy
    @category = Category.find(params[:id])
    if @category.destroy!
      flash[:success] = "Category deleted successfully"
      render json: flash[:success], status: 200
    else
      flash[:alert] = "Something went wrong"
      request_error(@category.errors.full_messages)
    end
  end

end
