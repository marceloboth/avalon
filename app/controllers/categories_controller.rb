class CategoriesController < ApplicationController
  def show
    @category = Category
      .includes(:pages)
      .where(pages: { publicated: true })
      .find(params[:id])
  end
end
