
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import GenericFormInputs from "@/shared/GenericFormInputs";
import { inputs } from "../utils/inputs";
import { useSignUp } from "../hooks/useSignUp";

const FormComp = () => {
  const { form, onSubmit, isLoading } = useSignUp();
  return (
    <div className="md:max-w-[500px] mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {inputs.map((elem, i) => (
            <GenericFormInputs key={i + elem.name} form={form} {...elem} />
          ))}
          <Button disabled={isLoading} type="submit">
            {isLoading ? "loading..." : "Sign Up"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FormComp;