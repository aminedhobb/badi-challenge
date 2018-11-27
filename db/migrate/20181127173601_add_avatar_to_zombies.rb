class AddAvatarToZombies < ActiveRecord::Migration[5.1]
  def change
    add_column :zombies, :avatar, :string
  end
end
