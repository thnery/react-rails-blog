json.array! @posts do |post|
  json.slug post.slug
  json.title post.title
  json.summary post.summary
end

