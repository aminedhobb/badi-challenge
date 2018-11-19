class Weapon < ApplicationRecord
  has_many :zombies, through: :zombie_weapons

  validates :name, presence: true, uniqueness: true

  validates_presence_of :attack_points, :durability, :price
end
