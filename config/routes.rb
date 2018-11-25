Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  get 'zombies/new', to: 'pages#home'
  get 'zombies/:id', to: 'pages#home'

  namespace :api do
    namespace :v1 do
      get 'zombies/user', to: 'zombies#user'
      resources :zombies, only: [:index, :create, :update, :show, :destroy]
      resources :weapons, only: :index
      resources :armors, only: :index
    end
  end
end
