import React from 'react';
import { CartView } from './CartView';
import { DeleteOutlined } from '@ant-design/icons';

const CartContainer = () => {
  const columns = [
    {
      title: 'Product',
      dataIndex: 'productName',
      key: 'productName',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Price',
      dataIndex: 'productPrice',
      key: 'productPrice',
    },
    {
      title: 'Item(s)',
      dataIndex: 'ItemCount',
      key: 'ItemCount',
    },
    {
      title: 'Total',
      dataIndex: 'Total',
      key: 'Total',
    },
    {
      render: (text, record) => (
        <DeleteOutlined style={{ cursor: 'pointer', color: 'red' }} />
      ),
    },
  ];

  const data = [
    {
      key: '1',
      productName: 'John Brown',
      productPrice: 32,
      ItemCount: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
      total: 33,
    },
    {
      key: '2',
      productName: 'Jim Green',
      productPrice: 42,
      ItemCount: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      productName: 'Joe Black',
      productPrice: 32,
      ItemCount: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  return <CartView columns={columns} data={data} />;
};
export default CartContainer;
