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

function AdminPanel() {
  const [selectedItem, setSelectedItem] = useState(() => {
    const storedItem = localStorage.getItem('selectedItem');
    return storedItem ? JSON.parse(storedItem) : 'Заказы';
  }); 

  const ItemClick = (itemName) => {
    setSelectedItem(itemName);
    localStorage.setItem('selectedItem', JSON.stringify(itemName));
  }

  const ChangeContext = () => {
    switch (selectedItem) {
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
          <li onClick={() => ItemClick('Заказы')} className={`admin__aside-items ${selectedItem === 'Заказы' ? 'checked__items' : ''}`}>Заказы</li>
            <li onClick={() => ItemClick('Графики')} className={`admin__aside-items ${selectedItem === 'Графики' ? 'checked__items' : ''}`}>Графики</li>

            <li onClick={() => ItemClick('Добавить продукт')} className={`admin__aside-items ${selectedItem === 'Добавить продукт' ? 'checked__items' : ''}`}>Добавить продукт</li>

            <li onClick={() => ItemClick('Изменить продукт')} className={`admin__aside-items ${selectedItem === 'Изменить продукт' ? 'checked__items' : ''}`}>Изменить продукт</li>

            <li onClick={() => ItemClick('Новости')} className={`admin__aside-items ${selectedItem === 'Новости' ? 'checked__items' : ''}`}>Новости</li>
          </ul>
        </aside>
        <div className="admin__right">
        {ChangeContext()}
        </div>
      </div>
    </section>
  );
}

export default AdminPanel;
