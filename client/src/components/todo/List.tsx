import { useNavigate } from 'react-router-dom';
import { ToDo } from '../../types/todo';
import Button from '../button/Button';
import Title from '../title/Title';
import ToDoItem from './ToDoItem';

const List = () => {
  const navigate = useNavigate();
  const todoList: ToDo[] = [
    {
      id: '1',
      title: 'todo1',
      content: 'todo content1',
      createdAt: '',
      updatedAt: '',
    },
  ]; // TODO: get from api

  const goAddTodoPage = () => {
    navigate('add');
  };

  return (
    <div>
      <Title text={'할 일 목록'} />
      <Button text={'할 일 추가'} type={'default'} onClick={goAddTodoPage} />
      <main>
        {todoList?.map((todo: ToDo) => (
          <ToDoItem key={todo.id} data={todo} />
        ))}
      </main>
    </div>
  );
};

export default List;
