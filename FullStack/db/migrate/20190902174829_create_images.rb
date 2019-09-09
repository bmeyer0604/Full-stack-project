class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.string :url, null: false
      t.integer :user_id, null: false
      t.integer :album_id, null: false
      t.text :description
      
      t.timestamps
    end
  end
end
