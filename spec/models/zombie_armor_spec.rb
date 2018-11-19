require 'rails_helper'

RSpec.describe ZombieArmor, type: :model do
  it { should belong_to(:zombie) }
  it { should belong_to(:armor) }
end
