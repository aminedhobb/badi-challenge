require 'rails_helper'

RSpec.describe 'Zombies API', type: :request do
  # initialize test data
  let!(:zombies) { create_list(:zombie, 10) }
  let!(:zombie_id) { zombies.first.id }
  let(:invalid_attributes) do
    {
      data: {
        type: 'zombie',
        attributes: {
          name: nil
        }
      }
    }.to_json
  end

  describe 'GET /zombies' do
    before { get '/api/v1/zombies' }

    it 'returns zombies' do
      # Note `json` is a custom helper to parse JSON responses
      expect(json['data']).not_to be_empty
      expect(json['data'].size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /zombies/:id' do
    before { get "/api/v1/zombies/#{zombie_id}" }

    context 'when the record exists' do
      it 'returns the zombie' do
        expect(json['data']).not_to be_empty
        expect(json['data']['id']).to eq(zombie_id.to_s)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:zombie_id) { 'do-not-exist' }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Zombie/)
      end
    end
  end

  # Test suite for POST /zombies
  describe 'POST /zombies' do
    # valid payload
    let(:valid_attributes) do
      {
        data: {
          type: 'zombie',
          attributes: {
            name: 'Zombie Test 1',
            hit_points: rand(1..10),
            brains_eaten: rand(1..10),
            speed: rand(1..50),
            turn_date: Date.today,
            weapons_attributes: [
              {
                name: 'a new test weapon',
                attack_points: rand(1..10),
                durability: rand(1..10),
                price: rand(1..10)
              }
            ],
            armors_attributes: [
              {
                name: 'a new test armor',
                defense_points: rand(1..10),
                durability: rand(1..10),
                price: rand(1..10)
              }
            ]
          }
        }
      }.to_json
    end

    context 'when the request is valid' do
      before { post '/api/v1/zombies', params: valid_attributes, headers: headers }

      it 'creates a zombie' do
        expect(json['data']['attributes']['name']).to eq('Zombie Test 1')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      before { post '/api/v1/zombies', params: invalid_attributes, headers: headers }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(response.body).to match(/Validation failed: Name can't be blank/)
      end
    end
  end

  # Test suite for PUT /zombies/:id
  describe 'PUT /zombies/:id' do
    let(:valid_attributes) do
      {
        data: {
          type: 'zombie',
          attributes: {
            name: 'Zombie Test 2',
            hit_points: rand(1..10),
            brains_eaten: rand(1..10),
            speed: rand(1..50),
            turn_date: Date.today,
            weapons_ids: [Weapon.first, Weapon.last],
            armors_attributes: [
              {
                name: 'not the same armor',
                defense_points: rand(1..10),
                durability: rand(1..10),
                price: rand(1..10)
              }
            ]
          }
        }
      }.to_json
    end

    context 'when the record exists' do
      before { put "/api/v1/zombies/#{zombie_id}", params: valid_attributes, headers: headers }

      it 'updates the record' do
        expect(response.body).to be_empty
      end

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end

    context 'when the record does not exist' do
      let(:zombie_id) { 'do-not-exist' }
      before { put "/api/v1/zombies/#{zombie_id}", params: valid_attributes, headers: headers }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Zombie/)
      end
    end

    context 'when the request is invalid' do
      before { put "/api/v1/zombies/#{zombie_id}", params: invalid_attributes, headers: headers }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(response.body).to match(/Validation failed: Name can't be blank/)
      end
    end
  end

  # Test suite for DELETE /zombies/:id
  describe 'DELETE /zombies/:id' do
    before { delete "/api/v1/zombies/#{zombie_id}" }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end
