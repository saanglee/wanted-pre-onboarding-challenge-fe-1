import React, { useState, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import Button from '../../components/button/Button';
import Modal from '../../components/modal/Modal';
import Title from '../../components/title/Title';
import { userState } from '../../store/user';
import SignUp from '../signup/SignUp';

const LogIn = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [user, setUser] = useRecoilState(userState);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const openModal = useCallback(() => {
    setIsOpenModal((current) => !current);
  }, [isOpenModal]);

  return (
    <div>
      <Title text={'로그인'} />
      {isOpenModal && (
        <Modal handleToggleModal={openModal}>
          <SignUp />
        </Modal>
      )}
      <form action='' className='login'>
        <input
          name='email'
          value={user.email}
          type='text'
          className='login_email'
          onChange={handleInputChange}
        />
        <input
          name='pwd'
          value={user.pwd}
          type='text'
          className='login_pwd'
          onChange={handleInputChange}
        />
        <button className='login_btn'>로그인</button>
      </form>
      <section>
        <div>아직 계정이 없으신가요?</div>
        <Button text={'회원가입'} type={'default'} onClick={openModal} />
      </section>
    </div>
  );
};

export default LogIn;
