import React from 'react';
import { useParams } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

import CommentsList from './CommentsList';

import API from '../utils/api';

const CommentBox = () => {
  const { postId } = useParams();
  const url = `posts/${postId}/comments`;
  const [form] = Form.useForm();

  const createComment = (values) => {
    const { comment } = values;

    API.post(url, { comment })
      .then((response) => {
        form.resetFields();
      })
      .catch((error) => {
        if (error.response) {
          let data = error.response.data;
          console.log(data.message);
        }
      });
  }

  return (
    <div>
      <div className='comment-form'>
        <Form form={form} name='comment-form' onFinish={createComment}>
          <Form.Item name={['comment', 'content']} label='Comment'>
            <Input.TextArea rows={6} />
          </Form.Item>
          <Form.Item wrapperCol={{offset: 0}}>
            <Button type='primary' htmlType='submit'>
              Add Comment
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className='comments-list'>
        <CommentsList />
      </div>
    </div>
  )
}

export default CommentBox;
