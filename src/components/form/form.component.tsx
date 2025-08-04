import type { ReactNode } from 'react';
import styles from './form.module.scss';

type FormProps = {
  children?: ReactNode,
  action: (formData: FormData) => void
}

export default function Form({ children, action }: FormProps) {
  return (
    <form className={styles.form} action={action}>
      { children }
    </form>
  )
}