class RemoveUrlFromAlbums < ActiveRecord::Migration[5.2]
  def change
    remove_column :albums, :url, :string
  end
end
