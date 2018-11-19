class SerializableZombie < JSONAPI::Serializable::Resource
  type 'zombie'

  attributes :name, :hit_points, :speed, :brains_eaten, :turn_date, :weapons, :armors
end
