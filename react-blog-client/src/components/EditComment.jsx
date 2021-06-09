import React from 'react';
import { Form, Input, Button } from 'antd';

const EditComment = (props) => {
  const [form] = Form.useForm();
  const { comment } = props;
  
  const updateComment = (values) => {
    console.log(values);
  }

  return (
    <div className='edit-comment-form'>
      <Form form={form} name='comment-form' onFinish={updateComment}>
        <Form.Item name={['comment', 'content']} label='Comment'>
          <Input.TextArea rows={6} >
            { comment.content }
          </Input.TextArea>
        </Form.Item>
        <Form.Item wrapperCol={{offset: 0}}>
          <Button type='primary' htmlType='submit'>
            Edit Comment
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default EditComment;
