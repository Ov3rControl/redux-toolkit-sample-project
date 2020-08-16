import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Card, Input, Button, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { SideBar } from '../SideBar/SideBar';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts, getProducts } from './ProductsSlice';

export const Products = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const state = useSelector(selectProducts);
  const [cart, setCart] = useState(0);
  const { products } = state;
  const categoryItems = {
    Medications: 1,
    Supplements: 2,
    Cosmetics: 3,
  };
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const addToCart = () => {
    setCart(cart + 1);
  };
  return (
    console.log(products),
    (
      <div style={MainContainer}>
        <SideBar />
        <div style={MainView}>
          <div style={SearchBar}>
            <Input.Search
              style={{ borderRadius: 5, width: '100%' }}
              placeholder="Search Products"
              onSearch={(value) => console.log(value)}
            />
            <Badge style={{ backgroundColor: '#0e7ee7' }} count={cart}>
              <ShoppingCartOutlined
                style={{
                  fontSize: 30,
                  marginLeft: 20,
                  cursor: 'pointer',
                  position: 'relative',
                }}
              />
            </Badge>
          </div>
          <Header name={categoryId} />
          <div style={ProductsContainer}>
            {products &&
              products
                .filter(
                  (product) => product.categoryId === categoryItems[categoryId]
                )
                .map((product) => {
                  return (
                    <Card
                      hoverable
                      //   loading={true}
                      style={{
                        width: 200,
                        borderRadius: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        alignContent: 'center',
                        textAlign: 'center',
                      }}
                    >
                      <p>{product.name}</p>
                      <img
                        style={{ marginTop: 10, marginBottom: 10 }}
                        width="80px"
                        height="100px"
                        src={product.imageUrl}
                        alt={product.name}
                      />
                      <h6
                        style={{
                          marginTop: 10,
                          fontWeight: 'bold',
                          color: 'grey',
                        }}
                      >
                        {product.price} EGP
                      </h6>
                      <Button
                        onClick={() => addToCart()}
                        icon={<ShoppingCartOutlined />}
                      >
                        Add To Cart
                      </Button>
                    </Card>
                  );
                })}
            ,
          </div>
        </div>
      </div>
    )
  );
};
const ProductsContainer = {
  backgroundColor: 'white',
  width: '100%',
  padding: 20,
  minHeight: 250,
  borderRadius: 5,
  display: 'flex',
  justifyContent: 'space-around',
};
const MainContainer = {
  display: 'flex',
  flexDirection: 'row',
};
const MainView = {
  padding: 20,
  width: '85%',
};
const SearchBar = { marginBottom: 5, display: 'flex' };

export default Products;
