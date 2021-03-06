Rails.application.routes.draw do
  scope :api, defaults: { format: :json } do
    resources :consultations, only: [:index, :show, :create], param: :slug
  end
end
