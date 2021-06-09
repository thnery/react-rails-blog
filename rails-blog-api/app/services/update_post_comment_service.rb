class UpdatePostCommentService
  def initialize(comment, user, params)
    @params = params
    @comment = comment
    @user = user
  end

  def call!
    if @comment.author_id.eql? @user.id
      if @comment.update(@params)
        ActionCable.server.broadcast "comment_#{comment.id}", comment
        @comment
      else
        raise StandardError.new(@comment.errors.full_messages)
      end
    else
      raise StandardError.new('comment does not belong to you')
    end
  end

  def self.call! comment, user, params
    new(comment, user, params).call!
  end
end
