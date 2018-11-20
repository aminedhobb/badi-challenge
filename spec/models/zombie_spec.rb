require 'rails_helper'

RSpec.describe Zombie, type: :model do
  it { should have_many(:zombie_armors).dependent(:destroy) }
  it { should have_many(:zombie_weapons).dependent(:destroy) }

  it { should have_many(:weapons) }
  it { should have_many(:armors) }

  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:hit_points) }
  it { should validate_presence_of(:speed) }
  it { should validate_presence_of(:turn_date) }

  it { should validate_uniqueness_of(:name) }

  context 'when added the search kick gem' do

    let(:zombie) { FactoryBot.create(:zombie, :reindex) }

    it 'should have the right attributes' do
      expect(zombie.search_data).to have_key(:zombie_name)
      expect(zombie.search_data).to have_key(:weapons_name)
      expect(zombie.search_data).to have_key(:armors_name)
    end

    it 'should search by zombie name' do
      search = described_class.search(zombie.name)
      expect(search.results).to include(zombie)
    end

    it 'should search by weapons name' do
      search = described_class.search(zombie.weapons.first.name)
      expect(search.results).to include(zombie)
    end

    it 'should search by armors name' do
      search = described_class.search(zombie.armors.last.name)
      expect(search.results).to include(zombie)
    end
  end
end
