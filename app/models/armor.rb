class Armor < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  validates_presence_of :defense_points, :durability, :price
end
