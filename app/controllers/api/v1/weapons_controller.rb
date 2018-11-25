class Api::V1::WeaponsController < ApplicationController
  skip_before_action :authenticate_user!

  def index
    @weapons = Weapon.all
    render json: { data: @weapons }
  end
end
