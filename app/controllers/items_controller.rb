class ItemsController < ApplicationController
  def create
    department = Department.find(params[:department_id])
    item = department.items.new(item_params)
    if item.save
      render json: item
    else
      render json: { erros: item.errors }
    end
  end

  private

  def item_params
    params.require(:item).permit(:name, :price)
  end
end

