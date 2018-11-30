FactoryBot.define do
  factory :zombie do
    name              { "#{Faker::Superhero.prefix} #{Faker::TvShows::RickAndMorty.character} #{rand(999)}" }
    hit_points        { rand(1..10) }
    speed             { rand(1..10) }
    brains_eaten      { rand(1..10) }
    turn_date         { Faker::Date.between(2.years.ago, Date.today) }
    weapons           { [FactoryBot.create(:weapon)] }
    armors            { [FactoryBot.create(:armor)] }
    user              { FactoryBot.create(:user) }
    trait :reindex do
      after(:create) do |zombie, _evaluator|
        zombie.reindex(refresh: true)
      end
    end
  end
end
