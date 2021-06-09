class ReactToCommentService
  def initialize comment, user, params
    @comment = comment
    @user = user
    @params = params
  end

  def call!
    reaction = @comment.reactions.new(@params)
    reaction.user = @user

    if reaction.save
      ActionCable.server.broadcast "reaction_#{reaction.id}", reaction
      reaction
    else
      raise StandardError.new(reaction.errors.full_messages)
    end
  end

  def self.call! comment, user, params
    new(comment, user, params).call!
  end
end
