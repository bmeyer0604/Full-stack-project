class Api::SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def new
    end

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )
        if @user
            sign_in(@user)
            render "root"
        else
            render json: ["Invalid username or passowrd"], status: 401
        end
    end

    def destroy
        sign_out
        render json: ["Not signed in"], status: 404
    end
end
