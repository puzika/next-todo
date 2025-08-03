import CreateForm from "@components/create-form/create-form.component"
import Todos from "@/components/todos/todos.component"

export default function RootPage() {
  return (
    <>
      <CreateForm />
      <Todos />
    </>
  )
}