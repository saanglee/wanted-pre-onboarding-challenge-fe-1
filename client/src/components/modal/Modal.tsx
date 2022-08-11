import React, { PropsWithChildren } from 'react';
import styles from './modal.module.scss';

interface PropsType {
  handleToggleModal: () => void;
}

const Modal = ({
  handleToggleModal,
  children,
}: PropsWithChildren<PropsType>) => {
  const closeModal = (event: React.MouseEvent) => {
    event.preventDefault();
    if (handleToggleModal) {
      handleToggleModal();
    }
  };
  return (
    <div className={styles.modal}>
      <div className={styles.modal_main}>{children}</div>
      <div className={styles.backDrop} onClick={closeModal}></div>
    </div>
  );
};

export default Modal;
