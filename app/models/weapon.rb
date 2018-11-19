class Weapon < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  validates_presence_of :attack_points, :durability, :price
end
