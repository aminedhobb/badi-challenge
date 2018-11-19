Rails.application.routes.draw do
  namespace :api do 
    namespace :v1 do 
      resources :zombies, only: [:create, :update, :show, :destroy]
    end
  end
end
