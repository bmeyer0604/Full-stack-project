Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  resource :session, only: [:create, :destroy]
  
  namespace :api, defaults: {format: :json} do
    
    resources :users, only: [:new, :create]
    resources :images do
      resources :comments, only: [:create, :edit, :update]
    end
    resources :comments, only: [:destroy]
    resources :albums, only: [:new, :create, :index, :show, :destroy]
  end

end
