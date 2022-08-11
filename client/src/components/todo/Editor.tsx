import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { todoState } from '../../store/todo';
import Button from '../button/Button';
import Title from '../title/Title';

interface PropsType {
  isEdit: boolean;
}

const Editor = ({ isEdit }: PropsType) => {
  const navigate = useNavigate();
  const [todo, setTodo] = useRecoilState(todoState);
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };
  const handleSubmit = () => {};
  return (
    <div>
      <Title text={isEdit ? '할 일 수정하기' : '할 일 추가하기'} />
      <section>
        <input
          name='title'
          value={todo.title}
          type='text'
          className='todo_title'
          onChange={handleInputChange}
        />
        <textarea
          name='content'
          value={todo.content}
          className='todo_content'
          onChange={handleInputChange}
        ></textarea>
      </section>
      <section>
        <Button
          text={'취소하기'}
          type={'default'}
          onClick={() => {
            navigate(-1);
          }}
        />
        <Button text={'작성완료'} type={'positive'} onClick={handleSubmit} />
      </section>
    </div>
  );
};

export default Editor;
