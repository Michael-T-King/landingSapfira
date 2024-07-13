import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { addComment, fetchComment, removeComment } from '../../../redux/Reducer/commentSlice';
import './Comments.scss';
import { getUser } from '../../../redux/Reducer/users';

function Comments() {
  const dispatch = useDispatch();
  const userStatus = useSelector((state) => state.userSlice.user);

  const [comments, setComments] = useState([]);

  const getComments = async () => {
    try {
      const response = await axios.get('http://localhost:8080/comments');
      dispatch(fetchComment(response.data));
      setComments(response.data);
    } catch (error) {
      console.error('Unable to fetch comments', error);
    }
  };

  useEffect(() => {
    getComments();
  }, [dispatch]);

  const removeOneComment = async (commentId) => {
    try {
      await axios.delete(`http://localhost:8080/comments/${commentId}`);
      dispatch(removeComment(commentId));
      setComments(comments.filter(comment => comment.id !== commentId));
    } catch (error) {
      console.error("Ошибка при удалении комментария", error);
    }
  };

  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/users');
      dispatch(getUser(response.data));
    } catch (error) {
      console.error('Fetching users failure');
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const getUserStatus = (username) => {
    if (!Array.isArray(userStatus)) {
      return false;
    }
    const foundUser = userStatus.find((usr) => usr?.userName === username);
    return foundUser ? foundUser?.status : false;
  };

  return (
    <section>
      {comments.map(el => (
        <div key={el.id} className='admin__comments'>
          <h3 className={`${getUserStatus(el.User) ? 'green' : ''} admin__comment-user`}>
            {el.User}
          </h3>
          <p className='admin__comment-text'>{el.text}</p>
          <button onClick={() => removeOneComment(el.id)} className="btn__del-comment">Удалить</button>
        </div>
      ))}
    </section>
  );
}

export default Comments;
