// 'use client';

import type { Todo } from "@/lib/definitions";
import Heading from "../heading/heading.component";
import Checkbox from "../checkbox/checkbox.component";
import styles from './todo.module.scss';

type TodoProps = {
  todo: Todo,
}

export default function Todo({ todo }: TodoProps) {
  const { title, completed, id } = todo;

  return (
    <article className={styles.todo}>
      <Checkbox name={id} />
      <Heading type="small" value={title} />
    </article>
  )
}