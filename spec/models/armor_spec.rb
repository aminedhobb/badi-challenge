require 'rails_helper'

RSpec.describe Armor, type: :model do
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:defense_points) }
  it { should validate_presence_of(:durability) }
  it { should validate_presence_of(:price) }
  it { should validate_uniqueness_of(:name) }

  it { should have_many(:zombie_armors).dependent(:destroy) }
  it { should have_many(:zombies) }

  it { should validate_uniqueness_of(:name) }
end
