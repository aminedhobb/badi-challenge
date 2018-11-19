class Zombie < ApplicationRecord
  has_many :zombie_armors, dependent: :destroy
  has_many :zombie_weapons, dependent: :destroy

  has_many :armors, through: :zombie_armors
  has_many :weapons, through: :zombie_weapons

  validates :name, presence: true, uniqueness: true

  validates_presence_of :hit_points, :speed, :turn_date

  accepts_nested_attributes_for :armors, :weapons
end
