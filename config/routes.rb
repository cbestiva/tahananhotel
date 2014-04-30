TahananhotelApp::Application.routes.draw do
  get "/tahanan", to: "hotels#index", as: :home_url

  root to: "hotels#index"
end
