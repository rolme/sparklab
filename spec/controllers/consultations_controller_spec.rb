require 'rails_helper'

RSpec.describe ConsultationsController, type: :controller do
  render_views

  describe "GET 'index'" do
    let!(:consultations) { FactoryBot.create_list(:consultation, 6) }

    before(:each) do
      get :index, format: :json
    end

    it "returns a successful 200 response" do
      expect(response).to be_successful
    end

    it "returns all consultations" do
      parsed_response = JSON.parse(response.body)
      expect(parsed_response.size).to eq consultations.size
    end
  end

  describe "GET 'show'" do
    let!(:consulation) { FactoryBot.create(:consultation) }

    before(:each) do
      get :show, params: { slug: consulation.slug }, format: :json
    end

    it "returns a successful 200 response" do
      expect(response).to be_successful
    end

    it "returns data of single consulation" do
      parsed_response = JSON.parse(response.body)
      expect(parsed_response).to_not be_nil
    end

    it "returns consulation with expected email" do
      parsed_response = JSON.parse(response.body)
      expect(parsed_response["email"]).to eq consulation.email
    end

    it "returns consulation with expected slug" do
      parsed_response = JSON.parse(response.body)
      expect(parsed_response["slug"]).to eq consulation.slug
    end
  end

  describe "POST 'create'" do
    before(:each) do |test|
      unless test.metadata[:skip_before]
        post :create, params: { consultation: { email: 'example@domain.com' } }, format: :json
      end
    end

    it "returns a successful 200 response" do
      expect(response).to be_success
    end

    it "returns data with new slug" do
      expect(JSON.parse(response.body)["slug"]).to eq Consultation.first.slug
    end

    it "saves new consulation", :skip_before do
      expect {
        post :create, params: { consultation: { email: 'example@domain.com' } }, format: :json
      }.to change(Consultation, :count).by(1)
    end
  end
end
