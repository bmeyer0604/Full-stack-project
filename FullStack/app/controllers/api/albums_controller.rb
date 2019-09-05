class Api::AlbumsController < ApplicationController
    def new
        @album = Album.new
    end

    def create
        @album = Album.new(album_params)

        if @album.save
            render :show
        else
            render json: @album.errors.full_messages, status: 422
        end
    end

    def destroy
    end

    private

    def album_params
        params.require(:album).permit(:title, :url)
    end
end
