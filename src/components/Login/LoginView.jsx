import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Login } from './LoginSlice';

export const showMessage = (type, msg) => {
  switch (type) {
    case 'success':
      message.success(msg);
      break;
    case 'error':
      message.error(msg);
      break;
    default:
      message.info(msg);
  }
};

export const LoginView = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(Login({ ...values }));
  };
  return (
    <div style={LoginContainer}>
      <div style={LoginContent}>
        <h4>Hello, Friend</h4>
        <h6>Please Enter Your Personal Data</h6>
        <br />
        <p>Don't Have an Account?</p>
        <Button
          onClick={() => history.push('/register')}
          style={{ width: '75%' }}
          type="primary"
        >
          Register
        </Button>
      </div>
      <div style={LoginForm}>
        <h4 style={{ textAlign: 'center', color: '#0e7ee7' }}>Please Login</h4>
        <Form
          style={{ width: 300 }}
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              style={{ width: '100%' }}
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
const LoginContent = {
  backgroundImage: "url('./Login.jpg')",
  backgroundColor: '#cccccc',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'relative',
  width: '35%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};
const LoginForm = {
  margin: 'auto',
};
const LoginContainer = {
  display: 'flex',
  height: 720,
};
