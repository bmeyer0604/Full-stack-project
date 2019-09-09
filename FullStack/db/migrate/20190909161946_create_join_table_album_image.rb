class CreateJoinTableAlbumImage < ActiveRecord::Migration[5.2]
  def change
    create_join_table :albums, :images do |t|
      t.index [:album_id, :image_id]
      t.index [:image_id, :album_id]
    end
  end
end
