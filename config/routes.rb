Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  root 'application#static'

  scope :api do
    resources :orders
    resources :products
    resources :users
    resources :categories

  
    get  'products/categories/:id' => 'categories#show'
    post 'login' => 'users#login'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
