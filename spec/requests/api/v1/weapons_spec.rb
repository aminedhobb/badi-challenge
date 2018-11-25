require 'rails_helper'

RSpec.describe 'Weapons API', type: :request do

  let!(:weapons) { create_list(:weapon, 10) }

  describe 'GET /weapons' do
    before { get '/api/v1/weapons' }

    it 'returns weapons' do
      # Note `json` is a custom helper to parse JSON responses
      expect(json['data']).not_to be_empty
      expect(json['data'].size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end
end
