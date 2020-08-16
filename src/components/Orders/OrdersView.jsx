import React from 'react';
import { Steps, Card, Button } from 'antd';
import {
  CheckCircleOutlined,
  CheckCircleFilled,
  HomeFilled,
} from '@ant-design/icons';
import { SideBar } from '../../sharedComponents/SideBar/SideBar';
import Header from '../../sharedComponents/Header/Header';

const { Step } = Steps;
export const OrdersView = () => {
  return (
    <div style={OrdersContainer}>
      <SideBar />
      <div style={MainView}>
        <Header name={'Cart'} />
        <Card style={{ borderRadius: 5 }} title="#1 - 24 Dec 2019">
          <div style={OrderTracking}>
            <Steps>
              <Step
                status="finish"
                title="Pending"
                icon={<CheckCircleOutlined />}
              />
              <Step
                status="wait"
                title="Accepted"
                icon={<CheckCircleFilled />}
              />
              {/* <Step status="wait" title="Completed" icon={<HomeFilled />} /> */}
            </Steps>
          </div>
          <div style={OrderDetails}>
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
          </div>
          <Button
            type="primary"
            style={{
              borderRadius: 5,
              float: 'right',
            }}
            icon={<CheckCircleOutlined />}
          >
            View Order Details
          </Button>
        </Card>
      </div>
    </div>
  );
};
const OrdersContainer = { display: 'flex', flexDirection: 'row' };

const OrderTracking = {};
const MainView = {
  padding: 20,
  width: '85%',
};
const OrderDetails = { marginTop: 15 };
const summaryItems = {
  display: 'flex',
  justifyContent: 'space-between',
};
