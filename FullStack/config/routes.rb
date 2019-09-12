Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  resource :session, only: [:create, :destroy]
  
  namespace :api, defaults: {format: :json} do
    resources :images, only: [:index]
    resources :users, only: [:new, :create]
    resources :comments, only: [:index]
    resources :albums, only: [:new, :create, :index, :show, :destroy] do
      resources :images, except: [:index]
      resources :comments, except: [:index]
    end
  end

end