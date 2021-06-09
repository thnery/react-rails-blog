json.array! comments do |comment|
  json.id comment.id
  json.content comment.content
  json.author comment.author.name
  json.post_id comment.post.slug

  json.grouped_reactions comment.grouped_reactions
end


