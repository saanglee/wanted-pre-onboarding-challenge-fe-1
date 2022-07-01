import React, { useState } from 'react';
import styles from './header.module.scss';
const Header = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const headText: string = `${currentDate.getFullYear()}년 ${
    currentDate.getMonth() + 1
  }월`;
  console.log(currentDate);

  const getNextMonth = (): void => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        currentDate.getDate()
      )
    );
  };

  const getLastMonth = (): void => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        currentDate.getDate()
      )
    );
  };

  return (
    <header>
      <button onClick={getNextMonth}> 이전 </button>

      <div> {headText} </div>
      <button onClick={getLastMonth}> 다음 </button>
    </header>
  );
};

export default Header;
