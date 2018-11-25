require 'rails_helper'

RSpec.describe 'Armors API', type: :request do

  let!(:armors) { create_list(:armor, 10) }

  describe 'GET /armors' do
    before { get '/api/v1/armors' }

    it 'returns armors' do
      # Note `json` is a custom helper to parse JSON responses
      expect(json['data']).not_to be_empty
      expect(json['data'].size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end
end
