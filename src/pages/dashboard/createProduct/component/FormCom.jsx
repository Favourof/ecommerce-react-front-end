import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { inputs } from "@/myComponents/Form/input";
import GenericFormInputs from "@/shared/GenericFormInputs";
import { useSubmitForm } from "../hooks/useSubmitForm";
import { useToast } from "@/components/ui/use-toast";
// import { usePreviewImageURl } from "../hooks/UsePreviewImageURL";

const FormCom = () => {
  const { onSubmit, form, imageFile, handleChange, imageSrc } = useSubmitForm();
  const { toast } = useToast()
 


  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      {inputs.map((elem, i) => (
            <GenericFormInputs key={i + elem.name} form={form} {...elem} />
          ))}
    
        <div className="   leading-9   rounded-xlg shadow ">
       
      <input id="dropzone-file" onChange={handleChange} type="file" className="" />
          {/* <input onChange={handleChange} type="file" className="" /> */}
          <img className="w-20 h-20 p-1 rounded-full ring-2 mt-2 mb-5  ring-gray-300 dark:ring-gray-500" src={imageSrc} alt="Bordered avatar" />

          <Button type="submit" >
        Submit
      </Button>

        </div>
    

      
      </form>
      </Form>
    </div>
  );

};

export default FormCom;