FactoryBot.define do
  factory :weapon do
    name              { "#{Faker::Hacker.adjective} #{Faker::Music.instrument} #{rand(999)}".capitalize }
    attack_points     { rand(1..10) }
    durability        { rand(1..10) }
    price             { rand(1..10) }
  end
end
