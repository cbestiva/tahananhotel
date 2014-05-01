TahananhotelApp::Application.routes.draw do
  
  root to: "hotels#index"

  get "/tahanan", to: "hotels#index", as: :home_url

end
