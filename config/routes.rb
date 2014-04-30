TahananhotelApp::Application.routes.draw do
  get "hotels/index"

  root to: "hotels#index"
end
