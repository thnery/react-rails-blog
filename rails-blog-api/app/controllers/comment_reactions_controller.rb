class CommentReactionsController < ApplicationController
  before_action :authenticate_user
  before_action :set_comment

  def create
    @reaction = ReactToCommentService.call! @comment, current_user, reaction_params

    render json: @reaction, status: :created
  end

  def destroy
    @reaction = @comment.reactions.find_by(id: params[:id])
    @reaction.destroy
    
    render json: @reaction, status: :ok
  end

  protected

  def reaction_params
    params.permit(:reaction)
  end

  def set_comment
    @comment = Comment.find(params[:comment_id])
  end
end
