class Api::ImagesController < ApplicationController
    before_action :require_signed_in!

    def new
        @image = Image.new
    end

    def create
        @image = Image.new(image_params)

        if @image.save
            render :show
        else
            render json: @image.errors.full_messages, status: 422
        end
    end

    def index
        @images = Image.all
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
    end

    private

    def image_params
        params.require(:image).permit(:url, :description)
    end
end
