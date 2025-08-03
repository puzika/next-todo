'use client';

import styles from './button.module.scss';

type ButtonProps = {
  title?: string,
  clickHandler?: () => {},
}

export default function Button({ title, clickHandler }: ButtonProps) {
  return (
    <button onClick={clickHandler} className={styles.btn}>{title}</button>
  )
}