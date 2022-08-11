import React from 'react';
import { useRecoilState } from 'recoil';
import Title from '../../components/title/Title';
import { userState } from '../../store/user';

const SignUp = () => {
  const [user, setUser] = useRecoilState(userState);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <div>
      <Title text={'회원가입'} />
      <input
        name='name'
        value={user.name}
        type='text'
        className='signup_name'
        onChange={handleInputChange}
      />
      <input
        name='email'
        value={user.email}
        type='text'
        className='signup_email'
        onChange={handleInputChange}
      />
      <input
        name='pwd'
        value={user.pwd}
        type='text'
        className='signup_pwd'
        onChange={handleInputChange}
      />
      <button className='signup_btn'>회원가입</button>
    </div>
  );
};
export default SignUp;
