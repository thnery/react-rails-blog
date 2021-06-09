import React, { useState } from 'react';
import { Comment, Tooltip } from 'antd';
import { LikeOutlined, HeartOutlined, SmileOutlined } from '@ant-design/icons';

import API from '../utils/api';

const CommentItem = (props) => {
  const { comment } = props;
  const { grouped_reactions } = comment;
  const [reaction, setReaction] = useState({});

  let likes = 0;
  let thumbsUp = 0;
  let smiles = 0;

  const createReaction = (reaction) => {
    const url = `/posts/${comment.post_id}/comments/${comment.id}/reactions`

    API.post(url, { reaction })
      .then((response) => {
        setReaction(reaction)
      })
      .catch(error => console.log(error));
  };

  if (grouped_reactions) {
    likes = grouped_reactions.like;
    thumbsUp = grouped_reactions.thumbs_up;
    smiles = grouped_reactions.smile;
  }

  const actions =[
    <Tooltip key='action-like' title='Like'>
      <span onClick={() => createReaction('like')}>
        <HeartOutlined />
        <span className='comment-action'>{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key='action-thumbs-up' title='ThumbsUp'>
      <span onClick={() => createReaction('thumbs_up')}>
        <LikeOutlined />
        <span className='comment-action'>{thumbsUp}</span>
      </span>
    </Tooltip>,
    <Tooltip key='action-smile' title='Smile'>
      <span onClick={() => createReaction('smile')}>
        <SmileOutlined />
        <span className='comment-action'>{smiles}</span>
      </span>
    </Tooltip>
  ];

  return (
    <div>
      <Comment
        actions={actions}
        author={comment.author}
        content={comment.content}
      />
    </div>
  )
};

export default CommentItem;
