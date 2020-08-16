import React from 'react';
import { Form, Input, Button, message } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Register } from './RegisterSlice';

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

export const RegisterView = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(Register({ ...values }, history));
  };
  return (
    <div style={LoginContainer}>
      <div style={LoginContent}>
        <h4>Welcome Back!</h4>
        <h6>
          To Check Our Website Please Login <br /> With Your Personal
          Information
        </h6>
        <br />
        <Button
          onClick={() => history.push('/login')}
          style={{ width: '75%' }}
          type="primary"
        >
          Login
        </Button>
      </div>
      <div style={LoginForm}>
        <h4 style={{ textAlign: 'center', color: '#0e7ee7' }}>
          Please Fill Your Info
        </h4>
        <Form
          style={{ width: 300 }}
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="firstName"
            rules={[
              { required: true, message: 'Please input your First Name!' },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="First Name"
            />
          </Form.Item>
          <Form.Item
            name="lastName"
            rules={[
              { required: true, message: 'Please input your Last Name!' },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Last Name"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input type="email" prefix={<MailOutlined />} placeholder="Email" />
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
          <Form.Item name="mobile">
            <Input
              type="number"
              prefix={<PhoneOutlined />}
              placeholder="Mobile Number"
            />
          </Form.Item>
          <Form.Item name="address">
            <Input.TextArea
              rows={4}
              prefix={<HomeOutlined />}
              placeholder="Please Enter Your Address"
            />
          </Form.Item>
          <Form.Item>
            <Button style={{ width: '100%' }} type="primary" htmlType="submit">
              Register
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
