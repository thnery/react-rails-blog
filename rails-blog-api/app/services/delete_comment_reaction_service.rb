class DeleteCommentReactionService
  def initialize reaction, user
    @reaction = reaction
    @user = user
  end

  def call!
    reaction = @comment.reactions.new(@params)
    reaction.user = @user

    if @reaction.user_id.eql? @user.id
      if reaction.destroy
        ActionCable.server.broadcast "reaction_#{reaction.id}", reaction
        reaction
      else
        raise StandardError.new(reaction.errors.full_messages)
      end
    else
      raise StandardError.new('reaction is not yours')
    end

  end

  def self.call! reaction, user
    new(reaction, user).call!
  end
end
