class Armor < ApplicationRecord
  has_many :zombie_armors, dependent: :destroy
  has_many :zombies, through: :zombie_armors

  validates :name, presence: true, uniqueness: true

  validates_presence_of :defense_points, :durability, :price
end
