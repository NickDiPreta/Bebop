class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :artist
      t.string :duration
      t.boolean :is_favorite
      t.string :album
      t.string :genre

      t.timestamps
    end
  end
end
