import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getUsers, removeUser } from '../../../redux/Reducer/stateSlice';
import './users.scss';

function Users() {
  const dispatch = useDispatch();
  const usersOff = useSelector(state => state.stateSlice.data);

  const [blockUser, setBlockUser] = useState(false);

  const getUsersData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/users/`);
      dispatch(getUsers(response.data));
    } catch (error) {
      console.error('Unable to update users data:', error);
    }
  };

  useEffect(() => {
    getUsersData();
  }, [dispatch]);

  const handleBlockUser = async (userId, blockValue) => {
    const blockState = {
      block: blockValue,
    };
    try {
      await axios.patch(`http://localhost:8080/users/${userId}`, blockState);
      getUsersData(); 
    } catch (error) {
      console.error('Block user failed:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:8080/users/${userId}`);
      dispatch(removeUser(userId));
    } catch (error) {
      console.error('Unable to delete user:', error);
    }
  };

  return (
    <section className='users'>
      <table className='users__table'>
        <thead>
          <tr>
          <th>ID</th>
            <th>Логин</th>
            <th>Email клиента</th>
            <th>Телефон клиента</th>
            <th>Статус</th>
            <th>Заблокировать</th>
            <th>Удалить</th>
          </tr>
        </thead>
        <tbody>
          {usersOff && usersOff.length > 0 ? (
            usersOff.map((el) => (
              <tr key={el.id} className={el.block ? 'blocked__user' : ''}>
              <td>{el.id}</td>
                <td>{el.userName}</td>
                <td>{el.email}</td>
                <td>{el.phone}</td>
                <td className={el.status? 'online': 'offline'}>{el.status? 'Онлайн': 'Оффлайн'} </td>
                {el.userName !== 'admin' ? (
                  <>
                    <td>
                      <button
                        onClick={() => handleBlockUser(el.id, !el.block)}
                        className="block__user"
                      >
                        {el.block ? 'Разблокировать' : 'Заблокировать'} пользователя
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDeleteUser(el.id)} 
                        className="delete__user"
                      >
                        Удалить пользователя
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td></td>
                    <td></td>
                  </>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">тут пока пусто</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}

export default Users;
