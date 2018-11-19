Rails.application.routes.draw do
  root to: 'api/v1/zombies#index'
  namespace :api do
    namespace :v1 do
      resources :zombies, only: [:index, :create, :update, :show, :destroy]
    end
  end
end
