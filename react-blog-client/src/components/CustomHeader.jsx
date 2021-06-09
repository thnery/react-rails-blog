import React from 'react';
import { Layout, Menu } from 'antd';

import '../styles/CustomHeader.css';

const { Header } = Layout;

const CustomHeader = (props) => {
  const redirect = (e) => {
    if (e.key === 'home') {
      window.location.href = '/';
    }

    if (e.key === 'logout') {
      window.location.href = '/logout';
    }

    if (e.key === 'login') {
      window.location.href = '/login';
    }
  }

  return (
    <Header>
      <div className='logo' />
      <Menu 
        onClick={redirect}
        theme='dark' mode='horizontal' 
        defaultSelectedKeys={['home']} >
        <Menu.Item key='home'>Home </Menu.Item>
        <Menu.Item key='logout' className='auth-button'>Logout </Menu.Item>
        <Menu.Item key='login' className='auth-button'>Login </Menu.Item>
      </Menu>
    </Header>
  );
}

export default CustomHeader;

