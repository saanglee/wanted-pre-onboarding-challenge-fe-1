import React from 'react';

interface PropsType {
  text: string;
}

const Title = ({ text }: PropsType) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default Title;
