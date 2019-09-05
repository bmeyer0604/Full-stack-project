Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    
    resources :users, only: [:new, :create]
    resource :session, only: [:new, :create, :destroy]
    resources :images do
      resources :comments, only: [:create, :edit, :update]
    end
    resources :comments, only: [:destroy]
    resources :albums, only: [:new, :create, :destroy]
  end

end
