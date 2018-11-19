ARMOR_SUFFIXES = %w[warmor helmet shield].freeze

FactoryBot.define do
  factory :armor do
    name              { "#{Faker::Food.ingredient} #{ARMOR_SUFFIXES.sample} #{rand(999)}".capitalize }
    defense_points    { Faker::Number.between(1, 10) }
    durability        { Faker::Number.between(1, 10) }
    price             { Faker::Number.between(1, 50) }
  end
end
