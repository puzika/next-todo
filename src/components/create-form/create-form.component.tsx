import Form from "@components/form/form.component";
import Heading from "@components/heading/heading.component";
import Button from "../button/button.component";
import { InputText, Textarea, Datepicker } from "@components/form-items/form-items";
import { createTodo } from "@/lib/actions";

export default function CreateForm() {

  return (
    <Form action={createTodo}>
      <Heading value="Create todo" type="medium" />
      <InputText required placeholder="Enough" label="title" name="title" />
      <Textarea placeholder="Get your shit together" label="description" name="description" />
      <Datepicker required label="Due" name="dueDate" />
      <Button title="Create" />
    </Form>
  )
}