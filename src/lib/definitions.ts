export type FetchOptions = {
  cache?: 'force-cache' | 'no-store',
  next?: {
    revalidate?: false | 0 | number,
    tags?: string[],
  }
}

export type Todo = {
  id: string,
  title: string,
  description: string,
  creationDate: string,
  dueDate: string,
  completed: boolean,
}