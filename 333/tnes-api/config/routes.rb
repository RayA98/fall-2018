Rails.application.routes.draw do
  resources :chapters
  resources :stories

  get 'profile', to: 'stories#profile'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
