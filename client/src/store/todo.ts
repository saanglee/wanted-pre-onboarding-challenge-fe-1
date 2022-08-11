import { atom } from 'recoil';

export const todoState = atom({
  key: 'todo',
  default: {
    title: '',
    content: '',
  },
});
