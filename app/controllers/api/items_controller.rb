class Api::ItemsController < ApplicationController
  def index
    department = Department.find(params[:department_id])
    render json: department.items
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end
end
