import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CommentBox from './CommentBox'

import API from '../utils/api';

const Post = ({ match, location }) => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const style = {
    display: 'flex', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between'
  }

  const url = `posts/${postId}`;

  useEffect(() => {
    const loadPost = async () => {
      API.get(url)
        .then(res => {
          setPost(res.data);
        })
        .catch(error => console.log(error))
    }

    loadPost();
  }, [url]);

  return (
    <div>
      <h2>{post.title}</h2>
      <div style={style}>
        <p>{post.content}</p>
      </div>
      
      <CommentBox />
    </div>
  )
}

export default Post;

