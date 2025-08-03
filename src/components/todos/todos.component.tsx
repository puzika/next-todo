import { fetchTodos } from '@/lib/data';
import Todo from '../todo/todo.component';
import styles from './todos.module.scss';

export default async function Todos() {
  const todos = await fetchTodos();

  return (
    <div className={styles.todos}>
      {
        todos.map(t => <Todo key={t.id} todo={t} />)
      }
    </div>
  )
}