import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCartDetails } from '../../redux/Reducer/cartSlice';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './AdminPanel.scss';
import Orders from './Orders/Orders';
import Graphs from './Graphs/Graphs';
import AddProduct from './AddProduct/AddProduct';
import EditProduct from './EditProduct/EditProduct';
import AddNews from './AddNews/AddNews';
import Users from './Users/Users';

import { stateAction } from '../../redux/Reducer/stateSlice';
import Comments from './Comments/Comments';
import Online from './Online/Online';

function AdminPanel() {
  const [selectedItem, setSelectedItem] = useState(() => {
    const storedItem = localStorage.getItem('selectedItem');
    return storedItem ? JSON.parse(storedItem) : 'Заказы';
  });
  
const dispatch = useDispatch();
  let state = useSelector(state => state.stateSlice.State);

 useEffect(()=>{
  switch (state) {
    case 'пользователи':
    return setSelectedItem('Пользователи');
    case 'онлайн':
      return setSelectedItem('Онлайн'); 
    default:
      break;
  }
 }, [state]);

    const ItemClick = (itemName) => {
      setSelectedItem(itemName);
      localStorage.setItem('selectedItem', JSON.stringify(itemName));
  
      if (itemName !== 'Пользователи') {
        dispatch(stateAction(null));

      }
    };


  const ChangeContext = ({ selectedItem }) => {


    switch (selectedItem ) {
      case 'Заказы':
        return <Orders/>;
      case 'Графики':
        return <Graphs/>;      
      case 'Добавить продукт':
        return <AddProduct/>;
      case 'Изменить продукт':
        return <EditProduct/>;
      case 'Новости':
        return <AddNews/>;
        case 'Комментарии':
        return <Comments/>;
      case 'Пользователи':
          return <Users/>;
      case 'Онлайн':
          return <Online/>;
      default: 
      
        return <div>ничего не найдено</div>;
    }
  };

  return (
    <section className='admin'>
      <h1 className="admin__title">Панель администратора</h1>
      <div className='admin__box'>
        <aside className="admin__aside">
        <a href='/' className='admin__to-home'>На главную</a>

          <ul className="admin__aside-list">
          <li onClick={() => {ItemClick('Заказы'); dispatch(stateAction(false));}} className={`admin__aside-items ${selectedItem === 'Заказы' ? 'checked__items' : ''}`}>Заказы</li>
            <li onClick={() => {ItemClick('Графики');dispatch(stateAction(false));}} className={`admin__aside-items ${selectedItem === 'Графики' ? 'checked__items' : ''}`}>Графики</li>

            <li onClick={() => {ItemClick('Добавить продукт');dispatch(stateAction(false));}} className={`admin__aside-items ${selectedItem === 'Добавить продукт' ? 'checked__items' : ''}`}>Добавить продукт</li>

            <li onClick={() => {ItemClick('Изменить продукт');dispatch(stateAction(false));}} className={`admin__aside-items ${selectedItem === 'Изменить продукт' ? 'checked__items' : ''}`}>Изменить продукт</li>

            <li onClick={() =>{ ItemClick('Новости');dispatch(stateAction(false));}} className={`admin__aside-items ${selectedItem === 'Новости' ? 'checked__items' : ''}`}>Новости</li>
            <li onClick={() =>{ ItemClick('Комментарии');dispatch(stateAction(false));}} className={`admin__aside-items ${selectedItem === 'Комментарии' ? 'checked__items' : ''}`}>Комментарии</li>
          </ul>
        </aside>
        <div className="admin__right">
        {ChangeContext({ selectedItem })}
        </div>
      </div>
    </section>
  );
}

export default AdminPanel;
