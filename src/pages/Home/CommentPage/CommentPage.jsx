import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './CommentPage.scss';
import { addComment, fetchComment } from '../../../redux/Reducer/commentSlice';
import { getUser } from '../../../redux/Reducer/users';

function CommentPage() {
  const user = useSelector((state) => state.userSlice.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [postData, setPostData] = useState([]);
  const [blockStatus, setBlockStatus] = useState([]);
  const [User, setUser] = useState(() => JSON.parse(localStorage.getItem('user')));

  const sendPost = useCallback(async () => {
    if (text !== '') {
      const post = {
        User: User?.user.userName,
        text: text,
      };
      try {
        await axios.post('http://localhost:8080/comments', post);
        dispatch(addComment(post));
        setText('');
      } catch (error) {
        console.error('Unable to send post');
      }
    }
  }, [text, User, dispatch]);

  const getPost = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:8080/comments');
      dispatch(fetchComment(response.data));
      setPostData(response.data);
    } catch (error) {
      console.error('Load comments error');
    }
  }, [dispatch]);

  const getUsers = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:8080/users');
      dispatch(getUser(response.data));
      setBlockStatus(response.data);
    } catch (error) {
      console.error('Unable to get block status');
    }
  }, [dispatch]);

  useEffect(() => {
    getPost();
    getUsers();
  }, [getPost, getUsers]);

  const goToAllComments = useCallback(() => {
    navigate('/AllComments');
  }, [navigate]);

  const isBlocked = useMemo(() => {
    return blockStatus.some((el) => el.userName === User?.user.userName && el.block);
  }, [blockStatus, User]);

  const placeholderText = useMemo(() => {
    if (!User?.user.userName) {
      return 'Только зарегистрированные пользователи могут оставлять отзывы';
    } else if (isBlocked) {
      return 'Вы заблокированы за нарушение политики сайта и не можете оставлять отзывы';
    } else {
      return 'Оставьте свой отзыв';
    }
  }, [User, isBlocked]);

  const uniqueComments = useMemo(() => {
    const uniqueUsers = {};
    return [...postData]
      .reverse()
      .filter((el) => {
        if (el.User && !uniqueUsers[el.User]) {
          uniqueUsers[el.User] = true;
          return true;
        }
        return false;
      })
      .slice(0, 3);
  }, [postData]);

  return (
    <section className='commentPage'>
      <div className='container'>
        <div className='commentPage__box'>
          <h1 className='comment__title'>Последние отзывы</h1>
          <ul className='commentPage__list'>
            {uniqueComments.map((el, index) => (
              el.User && (
                <li key={index} className='commentPage__items'>
                  <h2 className='commentPage__user'>{el.User}</h2>
                  <p className='commentPage__text'>{el.text}</p>
                </li>
              )
            ))}
          </ul>
          <button onClick={goToAllComments} className='login__btn'>Читать все комментарии</button>
          <textarea
            disabled={!User || isBlocked}
            maxLength='1000'
            name='add-comment'
            id='add__comments'
            placeholder={placeholderText}
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <button onClick={sendPost} className='login__btn' disabled={!User || isBlocked}>Опубликовать</button>
        </div>
      </div>
    </section>
  );
}

export default CommentPage;
