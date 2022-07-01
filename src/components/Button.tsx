import React from 'react';
import styles from 'button.module.scss';

type Button = 'default' | 'positive' | 'negative';

interface PropsTypes {
  text: string;
  type: Button;
  onClick: () => void;
}

const Button = ({ text, type, onClick }: PropsTypes) => {
  const btnType: Button = type;

  return (
    <button className={btnType} onClick={onClick}>
      {text}
    </button>
  ); // TODO: className 어떻게 scss로 바꾸지
};

Button.defaltProps = {
  type: 'default',
};

export default Button;
