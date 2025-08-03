import Form from "@components/form/form.component";
import Heading from "@components/heading/heading.component";
import { InputText, Textarea, Datepicker } from "@components/form-items/form-items";
import Button from "../button/button.component";

export default function CreateForm() {
  return (
    <Form>
      <Heading value="Create todo" type="medium" />
      <InputText required placeholder="Enough" label="title" />
      <Textarea placeholder="Get your shit together" label="description" />
      <Datepicker required label="Due"/>
      <Button title="Create" />
    </Form>
  )
}