TahananhotelApp::Application.routes.draw do
  
  root to: "hotels#index"

  get "/tahanan", to: "hotels#index", as: :home_url
  get "/tahanan/events", to: "hotels#events", as: :events_url
  get "/tahanan/packages", to: "hotels#packages", as: :packages_url
  
end
