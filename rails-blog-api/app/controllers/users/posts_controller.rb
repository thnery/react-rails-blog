class Users::PostsController < ApplicationController
  before_action :authenticate_user

  def create
    response = ::CreatePostService.call! post_params, current_user.id

    render json: response, status: :created
  end

  def update
    response = ::UpdatePostService.call! post_params, current_user.id

    render json: response, status: :ok
  end

  def destroy
    @post.destroy!

    render json: @post, status: :ok
  end

  protected

  def post_params
    params.require(:post).permit(:title, :content)
  end

  def set_post
    @post = Post.friendly.find(params[:id])
  end
end
