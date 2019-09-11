class DropAlbumImagesTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :albums_images
  end
end
