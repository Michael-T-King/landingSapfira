import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './CommentPage.scss';
import { addComment, fetchComment } from '../../../redux/Reducer/commentSlice';
import AllComments from '../AllComments/AllComments';

function CommentPage() {
  const usersStatus = useSelector((state) => state.userStateSlice.userState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [postData, setPostData] = useState([]);
  const [blockStatus, setBlockStatus] = useState([]);

  const userStatus = usersStatus.length > 0 ? usersStatus[0].status : null;
  const userName = usersStatus.length > 0 ? usersStatus[0].user?.user?.userName : null;

  const sendPost = async () => {
    const post = {
      User: userName,
      text: text,
    };
    try {
      await axios.post('http://localhost:8080/comments', post);
      dispatch(addComment(post));
    } catch (error) {
      console.error('Unable to send post');
    }
  };

  const getPost = async () => {
    try {
      const response = await axios.get('http://localhost:8080/comments');
      dispatch(fetchComment(response.data));
      setPostData(response.data);
    } catch (error) {
      console.error('Load comments error');
    }
  };

  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/users');
      setBlockStatus(response.data);
    } catch (error) {
      console.error('Unable to get block status');
    }
  };

  useEffect(() => {
    getPost();
    getUsers();
  }, []);

  const goToAllComments = () => {
    navigate('/AllComments');
  };

  const Block = blockStatus
    .filter((el) => el.userName === userName && el.userName !== null)
    .map((el) => el.block);

  const placeholderText = () => {
    if (!userStatus) {
      return 'Только зарегистрированные пользователи могут оставлять отзывы';
    } else if (Block[0]) {
      return 'Вы заблокированы за нарушение политики сайта и не можете оставлять отзывы';
    } else {
      return 'Оставьте свой отзыв';
    }
  };

  const uniqueUsers = {};
  const uniqueComments = [...postData].reverse().filter((el) => {
    if (el.User && !uniqueUsers[el.User]) {
      uniqueUsers[el.User] = true;
      return true;
    }
    return false;
  }).slice(0, 3);

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
            disabled={!userStatus || Block[0]}
            maxLength='1000'
            name='add-comment'
            id='add__comments'
            placeholder={placeholderText()}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <button onClick={sendPost} className='login__btn'>Опубликовать</button>
        </div>
      </div>
    </section>
  );
}

export default CommentPage;
