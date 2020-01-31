class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :name
      t.string :full_name
      t.string :nickname

      t.timestamps
    end
  end
end
