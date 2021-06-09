Rails.application.routes.draw do
  scope '/api' do
    post 'user_token' => 'user_token#create'
    resources :users

    namespace :users do
      resources :posts, only: [:create, :update, :destroy]
    end

    resources :posts, only: [:index, :show], defaults: { format: :json } do
      resources :comments, only: [:index, :create, :update, :destroy], defaults: { format: :json } do
        resources :reactions, only: [:create, :destroy], controller: 'comment_reactions', defaults: { format: :json }
      end
    end
  end
end
