import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './AllComments.scss';
import { Link } from 'react-router-dom'
import { addComment, fetchComment } from '../../../redux/Reducer/commentSlice';

function AllComments() {
  const commentsData = useSelector((state) => state.commentSlice.comments);
  const dispatch = useDispatch();
  const [allComments, setAllComments] = useState([]);

  const getComments = async () => {
    try {
      const response = await axios.get('http://localhost:8080/comments');
      dispatch(fetchComment(response.data));
      setAllComments(response.data);
    } catch (error) {
      console.error('Unable to fetch comments', error);
    }
  };

  useEffect(() => {
    if (commentsData.length === 0) {
      getComments();
    } else {
      setAllComments(commentsData);
    }
  }, [commentsData]);

  return (
    <section className='all__comments'>
    <div className='container'>
      {[...allComments].reverse().map((el, index) => (
      
  <div className='comment__box'>
              <div className="comment__users">{el.User}</div>
              <div className="comment__text">{el.text}</div>
  </div>
      ))}
      <Link to = {'/'} className='comment__btn-back'>Назад</Link>
      </div>
    </section>
  );
}

export default AllComments;
