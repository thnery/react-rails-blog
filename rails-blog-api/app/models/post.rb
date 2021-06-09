class Post < ApplicationRecord
  extend FriendlyId

  friendly_id :title, use: :slugged

  belongs_to :author, class_name: 'User', foreign_key: 'author_id'

  has_many :comments

  def summary
    "#{content[0..50]}..."
  end

  protected

  def should_generate_new_friendly_id?
    slug.blank? || title_changed?
  end
end
