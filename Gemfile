source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


gem 'rails'
gem 'pg', '~> 0.18'
gem 'puma'
gem 'sass-rails'
gem 'uglifier'
gem 'turbolinks'
gem "ember-cli-rails"
gem "jsonapi-resources"

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'
group :development do
  gem "web-console", ">= 3.3.0"
  gem "guard-livereload"
  gem "guard-bundler", require: false
end

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
  gem "jazz_fingers"

  gem "rspec-rails"
  gem "rails-controller-testing"
  gem "rspec_api_documentation"
  gem "capybara"
  gem "factory_bot_rails"
  gem "faker"

  gem "rubycritic",       require: false
  gem "rubocop"
  gem "simplecov"

  gem "guard-rspec",      require: false
  gem "guard-rubocop",    require: false
  gem "guard-rubycritic", require: false
end

group :test do
  gem "database_cleaner"
  gem "shoulda", "~> 3.5"
  gem "shoulda-matchers", "~> 2.0"
end
