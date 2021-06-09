import React, { useState, useEffect } from 'react';
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';

import '../styles/PostsList.css';

import API from '../utils/api';

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  
  const loadPosts = () => {
    API.get('posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => console.log(`api error: ${error}`));
  }

  useEffect(() => {
    loadPosts();
  }, [])

  return (
    <div>
      <h1>Hotest Posts</h1>

      <div className='new-post-btn'>
        <Link key='new-post' to='/posts/new'>
          <Button type='primary'>New Post </Button>
        </Link>
      </div>

      <div className='posts-list'>
        {posts && posts.map(post =>
          <div key={`div-${post.slug}`} className='post-item'>
            <Link key={`link-${post.slug}`} to={`${post.slug}`}>
              <Card key={post.slug} title={post.title} >
                <p>{post.summary}</p>
              </Card>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default PostsList;
