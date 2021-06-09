class CommentsController < ApplicationController
  before_action :authenticate_user
  before_action :set_comment, only: [:update, :destroy]

  def index
    @comments = Post.friendly.find(params[:post_id]).comments
  end

  def create
    @comment = ::CreatePostCommentService.call! params[:post_id], current_user.id, comment_params

    render json: @comment, status: :created
  end

  def update
    ::UpdatePostCommentService.call! @comment, current_user, comment_params

    render json: { message: 'ok' }, status: :ok
  end

  def destroy
    ::DeletePostCommentService.call! @comment, current_user

    render json: { message: 'comment deleted' }, status: :ok
  end

  protected

  def set_comment
    @comment = Comment.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:content)
  end
end
