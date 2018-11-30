ARMOR_SUFFIXES = %w[warmor helmet shield].freeze

FactoryBot.define do
  factory :armor do
    name              { "#{Faker::Food.ingredient} #{ARMOR_SUFFIXES.sample} #{rand(999)}".capitalize }
    defense_points    { rand(1..10) }
    durability        { rand(1..10) }
    price             { rand(1..10) }
  end
end
