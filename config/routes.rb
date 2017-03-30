Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  #TODO Figure out how to set root URL based on front-end
  #Figure we want to take the user directly to the products landing page whether signed in or not.
  #root 'products#index'

  scope :api do
    resources :orders
    resources :products
    resources :users
    resources :categories

    post 'login' => 'users#login'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
