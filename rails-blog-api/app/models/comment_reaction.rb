class CommentReaction < ApplicationRecord
  belongs_to :comment
  belongs_to :user

  validate :valid_reaction?, :duplicated_reaction

  private

  def duplicated_reaction
    if CommentReaction.exists?(user_id: user_id, comment_id: comment_id, reaction: reaction)
      errors.add(:reaction, 'you already reacted to this comment')
    end
  end

  def valid_reaction?
    unless ['like', 'thumbs_up', 'smile'].freeze.include? reaction
      errors.add(:reaction, 'is not valid')
    end
  end
end
