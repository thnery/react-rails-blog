json.title @post.title
json.slug @post.slug
json.content @post.content

json.author do
  json.partial! 'author', author: @post.author 
end

json.comments do
  json.partial! 'comments', comments: @post.comments
end
