Rails.application.routes.draw do
  root to: 'pages#home'
  get 'zombies/new', to: 'pages#home'
  get 'zombies/:id', to: 'pages#home'
  namespace :api do
    namespace :v1 do
      resources :zombies, only: [:index, :create, :update, :show, :destroy]
    end
  end
end
