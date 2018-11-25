class Zombie < ApplicationRecord
  searchkick word_start: [:zombie_name, :weapons_name, :armors_name]
  scope :search_import, -> { includes(:weapons, :armors) }

  belongs_to :user

  has_many :zombie_armors, dependent: :destroy
  has_many :zombie_weapons, dependent: :destroy

  has_many :armors, through: :zombie_armors
  has_many :weapons, through: :zombie_weapons

  validates :name, presence: true, uniqueness: true

  validates_presence_of :hit_points, :speed, :turn_date, :user

  accepts_nested_attributes_for :armors, :weapons

  def search_data
    {
      zombie_name: name,
      weapons_name: weapons.map(&:name).join(' ').to_s,
      armors_name: armors.map(&:name).join(' ').to_s
    }
  end
end
