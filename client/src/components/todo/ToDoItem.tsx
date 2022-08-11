import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToDo } from '../../types/todo';
import Button from '../button/Button';

const ToDoItem = ({ data }: { data: ToDo }) => {
  const { title, content, createdAt } = data;

  const navigate = useNavigate();

  const goDetailPage = () => {
    // navigate(`todo/${id}`);
  };
  const goEditPage = () => {
    // navigate(`edit/${id}`);
  };
  const handleRemove = () => {};
  return (
    <div>
      <section onClick={goDetailPage}>
        <div>할 일 {title}</div>
        <div>내용 {content}</div>
        <div>작성 일시 {createdAt}</div>
      </section>
      <section>
        <Button text={'편집'} type={'positive'} onClick={goEditPage} />
        <Button text={'삭제'} type={'negative'} onClick={handleRemove} />
      </section>
    </div>
  );
};

export default ToDoItem;
