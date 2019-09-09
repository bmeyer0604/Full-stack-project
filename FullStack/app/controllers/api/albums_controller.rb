class Api::AlbumsController < ApplicationController
    def new
        @album = Album.new
    end

    def index
        @albums = Album.all
        render :index
    end

    def create
        @album = current_user.albums.new(album_params)

        if @album.save
            render :show
        else
            render json: @album.errors.full_messages, status: 422
        end
    end

    def show
        @album = Album.find(params[:id])
        render '/api/albums/show'
    end

    def destroy
        @album = Album.find(params[:id])
        @album.destroy
        render :show
    end

    private

    def album_params
        params.require(:album).permit(:title)
    end
end
