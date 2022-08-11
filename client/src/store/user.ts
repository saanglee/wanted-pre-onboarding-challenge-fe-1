import { atom } from 'recoil';

export const userState = atom({
  key: 'user',
  default: {
    name: '',
    email: '',
    pwd: '',
  },
});
