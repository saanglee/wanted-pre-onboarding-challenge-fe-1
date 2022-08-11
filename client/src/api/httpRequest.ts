import instance from './instance';
import { ToDo } from '../types/todo';

const getAll = () => {
  return instance.get<ToDo[]>(`/tutorials`);
};

const getById = (id: any) => {
  return instance.get<ToDo[]>(`/tutorials/${id}`);
};

const create = (data: ToDo) => {
  return instance.post<ToDo>(`/tutorials`, data); // post('url', 넣을 데이터)
};

const update = (id: any, data: ToDo) => {
  return instance.put<any>(`./tutorials/${id}`, data); // put('url+id', 넣을 데이터)
};

const remove = (id: any) => {
  return instance.delete<any>(`/tutorials/${id}`);
};

const removeAll = () => {
  return instance.delete<any>(`/tutorials`);
};

const findByTitle = (title: string) => {
  return instance.get<ToDo[]>(`/tutorials?title=${title}`);
};

const ToDoService = {
  getAll,
  getById,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default ToDoService;
