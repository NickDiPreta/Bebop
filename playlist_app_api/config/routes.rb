Rails.application.routes.draw do
  root 'welcome#index'
  resources :rosters
  resources :playlists
  resources :songs
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
