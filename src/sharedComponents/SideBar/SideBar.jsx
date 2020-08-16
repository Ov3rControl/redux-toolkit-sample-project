import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, selectCategories } from './SideBarSlice';
import { Link } from 'react-router-dom';
export const SideBar = () => {
  const [state, setState] = React.useState(null);
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const currNavigationTab = window.location.pathname.split('/')[2];
  useEffect(() => {
    setState(JSON.parse(localStorage.getItem('userId')));
    dispatch(getCategories());
  }, []);
  return (
    <div style={SideMenu}>
      <div style={Profile}>
        Hello, {state?.firstName} {state?.lastName}
      </div>
      <div style={Categories}>
        <p>Categories</p>
      </div>
      <div style={CategoryItems}>
        {categories?.categories.map((category) => (
          <div
            key={category.id}
            style={
              category.name === currNavigationTab
                ? CategoryItemActive
                : CategoryItem
            }
          >
            <Link style={{ color: '#fff' }} to={`/categories/${category.name}`}>
              <p style={Item}>{category.name}</p>
            </Link>
          </div>
        ))}
      </div>
      <div style={MyAccount}>
        <p>My Account</p>
      </div>
      <div style={CategoryItems}>
        <div style={CategoryItem}>
          <p style={Item}>Orders</p>
        </div>
        <div style={CategoryItem}>
          <p style={Item}>Cart</p>
        </div>
        <div
          onClick={() => {
            localStorage.clear();
            window.location.href = '/login';
          }}
          style={CategoryItem}
        >
          <p style={Item}>Logout</p>
        </div>
      </div>
    </div>
  );
};
const SideMenu = {
  width: '15%',
  backgroundColor: '#0e7ee7',
  textAlign: 'center',
  height: 800,
  color: 'white',
};
const Profile = {
  marginTop: 40,
};
const Categories = {
  textAlign: 'start',
  textTransform: 'uppercase',
  fontSize: 10,
  color: '#6abbfb',
  marginTop: 30,
  marginLeft: 10,
};
const CategoryItems = {
  marginTop: 10,
  textAlign: 'start',
  color: 'rgb(192 227 255)',
  cursor: 'pointer',
};
const Item = {
  marginLeft: 20,
};
const CategoryItemActive = {
  backgroundColor: '#2c97fa',
  color: 'white',
  fontSize: 12,
  lineHeight: '35px',
  height: 35,
};
const CategoryItem = {
  fontSize: 12,
  lineHeight: '35px',
  height: 35,
};
const MyAccount = {
  textAlign: 'start',
  textTransform: 'uppercase',
  fontSize: 10,
  color: '#6abbfb',
  marginTop: 40,
  marginLeft: 10,
};
