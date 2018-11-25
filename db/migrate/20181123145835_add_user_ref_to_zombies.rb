class AddUserRefToZombies < ActiveRecord::Migration[5.1]
  def change
    add_reference :zombies, :user, foreign_key: true
  end
end
