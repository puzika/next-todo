'use server';

import type { Todo } from "./definitions";
import api from "./utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createTodo(formData: FormData) {
  const body: Todo = {
    id: crypto.randomUUID(),
    creationDate: new Date().toISOString(),
    completed: false,
    title: formData.get('title') as string,
    description: formData.get('description') as string,
    dueDate: formData.get('dueDate') as string,
  };

  await api.post<Todo>('http://localhost:4000/todos', body, { cache: 'no-store' });

  revalidatePath('http://localhost:3000');
  redirect('http://localhost:3000');
}