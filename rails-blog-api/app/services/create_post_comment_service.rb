class CreatePostCommentService
  def initialize(post_id, user_id, params)
    @params = params
    @post_id = post_id
    @user_id = user_id
  end

  def call!
    comment = Comment.new(@params)
    comment.post = Post.friendly.find(@post_id)
    comment.author_id = @user_id

    if comment.save
      ActionCable.server.broadcast "comment_#{comment.id}", comment
      comment
    else
      raise StandardError.new(comment.errors.full_messages)
    end
  end

  def self.call! post_id, user_id, params
    new(post_id, user_id, params).call!
  end
end
