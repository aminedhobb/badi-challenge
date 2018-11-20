class Zombie < ApplicationRecord
  searchkick
  scope :search_import, -> { includes(:weapons, :armors) }

  has_many :zombie_armors, dependent: :destroy
  has_many :zombie_weapons, dependent: :destroy

  has_many :armors, through: :zombie_armors
  has_many :weapons, through: :zombie_weapons

  validates :name, presence: true, uniqueness: true

  validates_presence_of :hit_points, :speed, :turn_date

  accepts_nested_attributes_for :armors, :weapons

  def search_data
    {
      zombie_name: name,
      weapons_name: weapons.map(&:name).join(' ').to_s,
      armors_name: armors.map(&:name).join(' ').to_s
    }
  end

  def elastic_search(query)
    elastic_query = {
      fields: %i[zombie_name weapons_name armors_name]
    }
    search(query, elastic_query)
  end
end
