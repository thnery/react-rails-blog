import React from 'react';
import { Redirect } from 'react-router-dom';

import PostsList from './PostsList';

const Home = () => {
  const token = localStorage.getItem('jwt');
  
  if(token) {
    return (
      <div>
        <PostsList />
      </div>
    )
  } else {
    return <Redirect to='/login' />
  }

}

export default Home;


