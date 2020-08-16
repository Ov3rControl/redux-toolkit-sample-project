import React from 'react';
import { Card, Button, Table, Tag, Space } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import Header from '../../sharedComponents/Header/Header';
import { SideBar } from '../../sharedComponents/SideBar/SideBar';

export const CartView = (props) => {
  const history = useHistory();
  const { columns, data } = props;
  return (
    <div style={HomeContainer}>
      <SideBar />
      <div style={MainView}>
        <Header name={'Cart'} />
        <div style={checkout}>
          <Table
            style={{
              borderRadius: 5,
              fontSize: 12,
              width: '75%',
              marginRight: 20,
              minHeight: 250,
            }}
            pagination={false}
            columns={columns}
            dataSource={data}
          />
          <Card title="Summary" style={{ width: 300, borderRadius: 5 }}>
            <div style={summaryItems}>
              <p style={{ color: '#0a2b41' }}>
                Subtotal{' '}
                <span style={{ color: '#b0c4d0', fontSize: 12 }}>
                  {' '}
                  item(s) 4
                </span>
              </p>
              <p style={{ color: '#0a2b41', fontSize: 12 }}> 20 EGP</p>
            </div>
            <div style={summaryItems}>
              <p style={{ color: '#0a2b41' }}>Delivery</p>
              <p style={{ color: '#0a2b41', fontSize: 12 }}> 20 EGP</p>
            </div>
            <div style={summaryItems}>
              <p style={{ color: '#0a2b41', fontWeight: 'bold' }}>Total</p>
              <p style={{ color: '#0a2b41', fontSize: 12, fontWeight: 'bold' }}>
                {' '}
                20 EGP
              </p>
            </div>
            <Button
              type="primary"
              style={{
                backgroundColor: '#0a2b41',
                borderRadius: 5,
                width: '100%',
              }}
              icon={<CheckCircleOutlined />}
            >
              Checkout
            </Button>
          </Card>
        </div>
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
const checkout = {
  display: 'flex',
  flexDirection: 'row',
};
const summaryItems = {
  display: 'flex',
  justifyContent: 'space-between',
};
