import api from "./utils";
import type { Todo } from "./definitions";

export async function fetchTodos() {
  try {
    const data = await api.get<Todo[]>('http://localhost:4000/todos');
    return data;
  } catch (error) {
    throw new Error('Could not fetch todos');
  }
}