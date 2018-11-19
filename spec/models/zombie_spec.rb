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
end
