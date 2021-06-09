import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

import API from '../utils/api';

const CreatePost = () => {
  const history = useHistory();

  const createPost = (values) => {
    const url = 'users/posts';
    const { post } = values;

    API.post(url, { post })
      .then(response => {
        console.log(response);
        history.push('/');
      })
      .catch(error => console.log(error));
  };

  return (
    <Form
      name="create-post"
      onFinish={createPost} >
      <Form.Item
        label='Title'
        name={['post', 'title']}
        rules={[{required: true, message: 'Title is required'}]} >
        <Input />
      </Form.Item>
      
      <Form.Item
        label='Content'
        name={['post', 'content']}
        rules={[{required: true, message: 'Content is required'}]} >
        <Input.TextArea />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Create Post
        </Button>
      </Form.Item>
    </Form>
  )
}

export default CreatePost;
