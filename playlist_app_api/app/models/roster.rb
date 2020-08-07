class Roster < ApplicationRecord
  belongs_to :playlist
  belongs_to :song
  validates_uniqueness_of :song_id, scope: :playlist_id
  validates_uniqueness_of :playlist_id, scope: :song_id
end