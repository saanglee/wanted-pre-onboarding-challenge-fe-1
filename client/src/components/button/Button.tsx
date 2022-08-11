import React from 'react';

interface PropsType {
  text: string;
  type: 'default' | 'positive' | 'negative';
  onClick: any; // TODO: any 수정
}

const Button = ({ text, type, onClick }: PropsType) => {
  return (
    <button
      className={['button', `button_${type}`].join(' ')}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
