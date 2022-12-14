import { Button } from 'Button';
import React from 'react';
import styles from './Ui.module.scss';

/* eslint-disable-next-line */
export interface UiProps {}

export const Ui: React.FC<UiProps> = (props) => {
  return (
    <div className={styles['container']}>
      <h1 className={styles.title}>Welcome to Ui!</h1>
      {props.children}
      <Button/>
    </div>
  );
}

export default Ui;
