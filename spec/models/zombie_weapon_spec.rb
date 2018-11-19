require 'rails_helper'

RSpec.describe ZombieWeapon, type: :model do
  it { should belong_to(:zombie) }
  it { should belong_to(:weapon) }
end
