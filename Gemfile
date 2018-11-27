source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

# for avatar upload
gem 'carrierwave-base64'

# for user identification
gem 'devise'

# simple form for login page
gem 'simple_form'

# bootstrap for rails
gem 'bootstrap-sass', '~> 3.3'
gem 'sass-rails'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.2'
# Use mysql as the database for Active Record
gem 'mysql2', '~> 0.5.2'
# Use Puma as the app server
gem 'puma', '~> 3.7'

# webpacker for front end
gem 'webpacker', '~> 3.0'

# JSON API
gem 'jsonapi-rails'

# Search Gem
gem 'searchkick'

# To create records easily
gem 'factory_bot_rails', '~> 4.0'

# Use Faker to create seeds or factories
gem 'faker', git: 'https://github.com/stympy/faker'

# Use Redis adapter to run Action Cable in production
gem 'redis'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
# gem 'rack-cors'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]

  gem 'shoulda-matchers', '~> 3.1'
  gem 'simplecov', require: false
  # Use Rspec as testing tool
  gem 'rspec-rails'

end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
