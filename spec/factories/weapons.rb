FactoryBot.define do
  factory :weapon do
    name              { "#{Faker::Hacker.adjective} #{Faker::Music.instrument} #{rand(999)}".capitalize }
    attack_points     { Faker::Number.between(1, 10) }
    durability        { Faker::Number.between(1, 10) }
    price             { Faker::Number.between(1, 50) }
  end
end
