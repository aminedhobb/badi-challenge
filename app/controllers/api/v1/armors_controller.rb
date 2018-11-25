class Api::V1::ArmorsController < ApplicationController
  skip_before_action :authenticate_user!

  def index
    @armors = Armor.all
    render json: { data: @armors }
  end
end
