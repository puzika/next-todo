import type { ReactNode } from 'react';
import styles from './form.module.scss';

type FormProps = {
  children?: ReactNode,
}

export default function Form({ children }: FormProps) {
  return (
    <form className={styles.form} action="">
      { children }
    </form>
  )
}