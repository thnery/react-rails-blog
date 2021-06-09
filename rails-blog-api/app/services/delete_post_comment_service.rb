class DeletePostCommentService
  def initialize(comment, user)
    @comment = comment
    @user = user
  end

  def call!
    if @comment.author_id.eql? @user.id
      if @comment.destroy
        ActionCable.server.broadcast "comment_#{comment.id}", 'comment_deleted'
        @comment
      else
        raise StandardError.new(@comment.errors.full_messages)
      end
    else
      raise StandardError.new('comment does not belong to you')
    end
  end

  def self.call! comment, user
    new(comment, user).call!
  end
end
