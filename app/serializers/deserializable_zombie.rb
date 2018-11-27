class DeserializableZombie < JSONAPI::Deserializable::Resource
  'zombie'
  id
  has_many :weapons
  has_many :armors
  attributes :name, :hit_points, :brains_eaten, :speed, :turn_date, :weapons_attributes, :user_id,
    :armors_attributes, :weapon_ids, :armor_ids, :avatar
end
