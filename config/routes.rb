Rails.application.routes.draw do
  mount_ember_app :admin, to: "admin/"

  namespace :api do
    namespace :v1 do
      jsonapi_resources :pages
    end
  end
end
