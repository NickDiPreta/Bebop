# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
100.times do
    Song.create(
        title: Faker::Hipster.sentence(word_count: 3, supplemental: false, random_words_to_add: 4),
        artist: Faker::Music.band,
        duration: Faker::Number.between(from: 1, to: 10).to_s + ":" + Faker::Number.between(from: 1, to: 60).to_s,
        album: Faker::Music.album,
        genre: Faker::Music.genre,
        is_favorite: false
    )
end

Playlist.create(
    name: "Slow Jamz"
)
Playlist.create(
    name: "High School Classics"
)
Playlist.create(
    name: "Sad Songs"
)

45.times do
Roster.create(
    playlist_id: Faker::Number.between(from: 1, to: 3),
    song_id: Faker::Number.between(from: 1, to: 100)
)
end