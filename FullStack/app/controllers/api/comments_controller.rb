class Api::CommentsController < ApplicationController
    before_action :require_signed_in!

    def new
        @comment = Comment.new
    end

    def create
        @comment = current_user.comments.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def edit
        @comment = Comment.find(params[:id])
    end

    def index
        @comments = Comment.all
        render :index
    end

    def update
    end

    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy
        render :show
    end

    private

    def comment_params
        params.require(:comment).permit(:id, :body, :user_id, :album_id)
    end
end
