class Api::AlbumsController < ApplicationController
    def new
        @album = Album.new
    end

    def create
    end

    def destroy
    end

    private

    def album_params
        params.require(:album).permit(:title, :url)
    end
end
