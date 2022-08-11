interface ToDo {
  content: string;
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
}

type ToDonput = Pick<ToDo, 'title' | 'content'>;

export { ToDo, ToDoInput };
