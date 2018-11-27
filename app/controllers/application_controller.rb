class ApplicationController < ActionController::Base
  include Response
  include ExceptionHandler
  protect_from_forgery with: :exception
  # skip_before_action :verify_authenticity_token
  before_action :authenticate_user!
end
