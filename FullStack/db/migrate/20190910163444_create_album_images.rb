class CreateAlbumImages < ActiveRecord::Migration[5.2]
  def change
    create_table :album_images do |t|
      t.references :album, foreign_key: true
      t.references :image, foreign_key: true

      t.timestamps
    end
  end
end