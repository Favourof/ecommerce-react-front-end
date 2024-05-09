
import { useLogIn } from '../hooks/useLogIn';
import GenericFormInputs from '@/shared/GenericFormInputs';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';

const FormCom = () => {

  const { form, onSubmit, isLoading, inputs } = useLogIn();
  return (
    <div className="md:max-w-[500px] mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {inputs.map((elem, i) => (
            <GenericFormInputs key={i + elem.name} form={form} {...elem} />
          ))}
          <Button disabled={isLoading} type="submit">
            {isLoading ? "loading..." : "log in"}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default FormCom
