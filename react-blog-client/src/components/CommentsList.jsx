import React, { useEffect, useState } from 'react';
import { useParams, } from 'react-router-dom';

import API from '../utils/api';

import CommentItem from './CommentItem';

const CommentsList = () => {
  const { postId } = useParams();
  const url = `posts/${postId}/comments`;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const loadComments = async () => {
      API.get(url)
        .then(response => {
          setComments(response.data);
        })
        .catch((error) => { 
          console.log(error);
        })
    }

    loadComments();
  }, [url, postId]);

  return (
    <div>
      {comments.map(comment => <CommentItem key={comment.id} comment={comment} />)}
    </div>
  )
}

export default CommentsList;
