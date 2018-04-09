Rails.application.routes.draw do
  mount_ember_app :admin, to: "admin/"

  namespace :api do
    namespace :v1 do
      jsonapi_resources :pages
      jsonapi_resources :categories
      jsonapi_resources :menus
      jsonapi_resources :menu_items
    end
  end

  resources :categories, only: [:show]
  resources :pages, only: [:show]

  Page.where.not(slug: nil).where(publicated: true).each do |page|
    get "/#{page.slug}", controller: "pages", action: "show", id: page.id
  end
end
