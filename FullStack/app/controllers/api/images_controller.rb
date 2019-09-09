class Api::ImagesController < ApplicationController
    before_action :require_signed_in!

    def new
        @image = Image.new
    end

    def create
        @image = Image.new(image_params)

        if @album.save
            render :show
        else
            render json: @album.errors.full_messages, status: 422
        end
    end

    def index
        @images = Image.all
        render :index
    end

    def show
        @image = Image.find(params[:id])
    end

    def edit
        @image = Image.find(params[:id])
    end

    def update
    end

    def destroy
        @image = Image.find(params[:id])
        @image.destroy
        render :show
    end

    private

    def image_params
        params.require(:image).permit(:url, :description, :album_id)
    end
end
