import styles from './form-items.module.scss';

type InputProps = {
  placeholder?: string,
  label?: string,
  name?: string,
  required?: boolean,
}

export function InputText({ placeholder, label, name, required }: InputProps) {
  return (
    <label className={styles.item}>
      <span className={styles.label}>{label}</span>
      <input 
        type="text" 
        placeholder={placeholder}
        className={styles.inputText}
        name={name}
        required={!!required}
      />
    </label>
  )
}

export function Textarea({ placeholder, label, name, required }: InputProps) {
  return (
    <label className={styles.item}>
      <span className={styles.label}>{label}</span>
      <textarea 
        placeholder={placeholder}
        className={styles.textarea}
        name={name}
        required={!!required}
      >
      </textarea>
    </label>
  )
}

export function Datepicker({ placeholder, label, name, required }: InputProps) {
  return (
    <label className={styles.item}>
      <span className={styles.label}>{label}</span>
      <input 
        type="date" 
        placeholder={placeholder}
        className={styles.datepicker}
        name={name}
        required={!!required}
      />
    </label>
  )
}