class CreatePostService
  def initialize(params, user_id)
    @params = params
    @user_id = user_id
  end

  def call!
    post = Post.new(@params)
    post.author_id = @user_id

    if post.save
      post
    else
      raise StandardError.new(post.errors.full_messages)
    end
  end

  def self.call! params, user_id
    new(params, user_id).call!
  end
end
