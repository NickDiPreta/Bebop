class Playlist < ApplicationRecord
    has_many :rosters
    has_many :songs, through: :rosters
    validates_uniqueness_of :song_id
end