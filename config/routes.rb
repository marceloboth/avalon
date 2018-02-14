Rails.application.routes.draw do
  mount_ember_app :admin, to: "admin/"
end
