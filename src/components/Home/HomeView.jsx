import React from 'react';
import { Card, Input, Button, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import Header from '../../sharedComponents/Header/Header';
import { SideBar } from '../../sharedComponents/SideBar/SideBar';

export const HomeView = () => {
  const history = useHistory();

  return (
    <div style={HomeContainer}>
      <SideBar />
      <div style={MainView}>
        <h2>Welcome to HomePage</h2>
      </div>
    </div>
  );
};
const HomeContainer = {
  display: 'flex',
  flexDirection: 'row',
};
const MainView = {
  padding: 20,
  width: '85%',
};
