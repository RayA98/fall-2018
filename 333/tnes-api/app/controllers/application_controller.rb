class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
   http_basic_authenticate_with name: ENV['BASIC_USER'] || "dhh", password: ENV['BASIC_PASS'] || "secret"
end