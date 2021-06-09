import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomHeader from './CustomHeader';

import Home from './Home';
import Login from './Login';
import Logout from './Logout';
// import Signup from './Signup';

import Post from './Post';
import CreatePost from './CreatePost';

const { Content, Footer } = Layout;

const App = () => {
  return(
    <div>
      <Layout className='layout'>
        <CustomHeader />

        <Content style={{ padding: '0 50px' }}>
          <div className='site-layout-content' style={{ margin: '100px auto' }}>
            <Router>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/logout' component={Logout} />

                <Route exact path='/:postId' component={Post} />
                <Route exact path='/posts/new' component={CreatePost} />
              </Switch>
            </Router>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}> Tácio Nery (c)2021.</Footer>
      </Layout>
    </div>
  )
}

export default App;
