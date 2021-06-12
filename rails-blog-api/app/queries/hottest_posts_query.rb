class HottestPostsQuery
  attr_reader :relation

  def initialize(relation = Post)
    @relation = relation
  end

  def call!
    relation
      .distinct
      .joins('left join comments on comments.post_id = posts.id')
      .joins('left join comment_reactions on comment_reactions.comment_id = comments.id')
      .group('posts.id')
      .order('max(comment_reactions.id) desc')
  end

  def self.call!(relation = Post)
    new(relation).call!
  end
end
