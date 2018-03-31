Rails.application.routes.draw do
  get 'pages/show'

  mount_ember_app :admin, to: "admin/"

  namespace :api do
    namespace :v1 do
      jsonapi_resources :pages
    end
  end

  Page.where.not(slug: nil).all.each do |page|
    get "/#{page.slug}", controller: "pages", action: "show", id: page.id
  end
end
