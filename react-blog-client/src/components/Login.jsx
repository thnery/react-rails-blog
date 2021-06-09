import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

import '../styles/Login.css';

import API from '../utils/api';

const Login = () => {
  const history = useHistory();

  const handleSubmit = (values) => {
    const { email, password } = values;
    const auth = {
      email: email,
      password: password
    };

    API.post('user_token',
      { auth })
      .then(response => {
        localStorage.setItem('jwt', response.data.jwt);
        history.push('/');
      })
      .catch(error => console.log(`api error: ${error}`));
  }

  return (
    <div>
      <Form className='form-login' name='login' onFinish={handleSubmit}>
        <Form.Item label='E-mail' name='email'>
          <Input />
        </Form.Item>

        <Form.Item label='Password' name='password'>
          <Input.Password />
        </Form.Item>

        <Form.Item className='form-login-submit'>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
};

export default Login;

