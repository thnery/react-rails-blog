class Comment < ApplicationRecord
  belongs_to :author, class_name: 'User', foreign_key: 'author_id'
  belongs_to :post

  has_many :reactions, class_name: 'CommentReaction'

  validates :content, presence: true

  def grouped_reactions
    reactions.group(:reaction).count
  end
end
