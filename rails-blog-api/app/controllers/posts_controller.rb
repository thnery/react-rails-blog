class PostsController < ApplicationController
  before_action :authenticate_user

  def index
    @posts = ::HottestPostsQuery.call!
  end

  def show
    @post = Post.friendly.find(params[:id])
  end
end
