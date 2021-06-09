class CommentsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "comment_#{params[:comment_id]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
