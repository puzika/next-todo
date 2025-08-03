'use client';

import { useState } from 'react';
import styles from './checkbox.module.scss';
import clsx from 'clsx';

type CheckboxProps = {
  name?: string,
}

export default function Checkbox({ name }: CheckboxProps) {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <label className={styles.checkboxCustom}>
      <span className={clsx(styles.tick, { [styles.tick_hidden]: !checked })}></span>
      <input className={styles.checkboxOriginal} checked={checked} onChange={() => setChecked(!checked)} type="checkbox" name={name} />
    </label>
  )
}