class Weapon < ApplicationRecord
  has_many :zombie_weapons, dependent: :destroy
  has_many :zombies, through: :zombie_weapons

  validates :name, presence: true, uniqueness: true

  validates_presence_of :attack_points, :durability, :price
end
