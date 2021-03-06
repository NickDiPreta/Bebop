class SongsController < ApplicationController
  before_action :set_song, only: [:show, :update, :destroy, :song_params]

  # GET /songs
  def index
    @songs = Song.all

    render json: @songs.to_json(include: :playlists)
  end

  # GET /songs/1
  def show
    render json: @song.to_json(include: :playlists)
  end

  # POST /songs
  def create
    @song = Song.new(song_params)

    if @song.save
      render json: @song, status: :created, location: @song
    else
      render json: @song.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /songs/1
  def update
    if @song.update(song_params)
      render json: @song.to_json(include: :playlists)
    else
      render json: @song.errors, status: :unprocessable_entity
    end
  end

  # DELETE /songs/1
  def destroy
    @song.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_song
      @song = Song.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def song_params
      params.permit(:title, :artist, :duration, :is_favorite, :album, :genre)
    end
end
