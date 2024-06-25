import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { markOrderAsDone, removeFromAdmin } from '../../../redux/Reducer/cartSlice';
import './Orders.scss';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [checkedState, setCheckedState] = useState({});
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('authToken'); 
        const response = await axios.get('http://localhost:8080/form', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const ordersData = response.data;
        setOrders(ordersData);

        const initialCheckedState = {};
        ordersData.forEach(order => {
          initialCheckedState[order.id] = order.done || false;
        });
        setCheckedState(initialCheckedState);
        localStorage.setItem('checkedState', JSON.stringify(initialCheckedState));
      } catch (error) {
        console.error('Ошибка при получении заказов:', error);
      }
    };

    fetchOrders();
  }, []);

  const CheckboxChange = async (orderId) => {
    const isChecked = !checkedState[orderId];
    const updatedState = {
      ...checkedState,
      [orderId]: isChecked,
    };
    setCheckedState(updatedState);
    localStorage.setItem('checkedState', JSON.stringify(updatedState));
    
    const CheckedState = {
      done: isChecked
    };

    try {
      const token = localStorage.getItem('authToken'); 
      await axios.patch(`http://localhost:8080/form/${orderId}`, CheckedState, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      dispatch(markOrderAsDone({ orderId, done: isChecked }));
    } catch (error) {
      setError('Ошибка отправки формы');
    }
  };

  const RemoveItem = async (orderId) => {
    try {
      const token = localStorage.getItem('authToken'); 
      await axios.delete(`http://localhost:8080/form/${orderId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      dispatch(removeFromAdmin(orderId));
      setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
      const { [orderId]: removed, ...rest } = checkedState;
      setCheckedState(rest);
      localStorage.setItem('checkedState', JSON.stringify(rest));
    } catch (error) {
      console.error('Ошибка при удалении заказа:', error);
    }
  };

  return (
    <div className='order'>
      <h2 className='order__title'>Список заказов</h2>
      <table className='order__table'>
        <thead>
          <tr>
            <th>ID заказа</th>
            <th>Имя клиента</th>
            <th>Email клиента</th>
            <th>Адрес клиента</th>
            <th>Телефон клиента</th>
            <th>Описание</th>
            <th>Название продукта</th>
            <th>Цена продукта</th>
            <th>Артикул</th>
            <th>Отметить</th>
            <th>Удалить</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className={checkedState[order.id] ? 'admin__checked' : ''}>{order.id}</td>
              <td className={checkedState[order.id] ? 'admin__checked' : ''}>{order.name}</td>
              <td className={checkedState[order.id] ? 'admin__checked' : ''}>{order.email}</td>
              <td className={checkedState[order.id] ? 'admin__checked' : ''}>{order.address}</td>
              <td className={checkedState[order.id] ? 'admin__checked' : ''}>{order.phone}</td>
              <td className={checkedState[order.id] ? 'admin__checked' : ''}>{order.description}</td>
              
              <td className={checkedState[order.id] ? 'admin__checked' : ''}>
                {order.products && order.products.map((product, index) => (
                  <span key={product.id}>
                    {product.name}
                    {index !== order.products.length - 1 && '/ '}
                  </span>
                ))}
              </td>

              <td className={checkedState[order.id] ? 'admin__checked' : ''}>
                {order.products && order.products.map((product, index) => (
                  <span key={product.id}>
                    {product.price}
                    {index !== order.products.length - 1 && '/ '}
                  </span>
                ))}
              </td>

              <td className={checkedState[order.id] ? 'admin__checked' : ''}>
                {order.products && order.products.map((product, index) => (
                  <span key={product.id}>
                    {product.article}
                    {index !== order.products.length - 1 && '/ '}
                  </span>
                ))}
              </td>

              <td className={checkedState[order.id] ? 'admin__checked' : ''}>
                <input
                  type="checkbox"
                  checked={checkedState[order.id] || false}
                  onChange={() => CheckboxChange(order.id)}
                />
              </td>

              <td className={checkedState[order.id] ? 'admin__checked' : ''}>
                <button onClick={() => RemoveItem(order.id)}></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Orders;
