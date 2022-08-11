interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
}

type UserInput = Pick<User, 'email' | 'password'>;
