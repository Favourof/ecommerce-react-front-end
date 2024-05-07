<<<<<<< HEAD
=======

>>>>>>> 8d49bdc62ff996226b93e3ef038688f6d46d1a0c
import React, {useState} from 'react'
import z from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from 'axios'
import { useParams } from "react-router-dom";
<<<<<<< HEAD
import { toast } from '@/components/ui/use-toast';


=======
import { useToast } from "@/components/ui/use-toast";
>>>>>>> 8d49bdc62ff996226b93e3ef038688f6d46d1a0c


const formSchema = z.object({
  title: z.string("title must be a string").min(2),
  description: z.string("description must be a string").min(2),
  price: z.any("price must be a string"),
  category: z.string("category must be a string").min(2).nullable().optional(),
});


export const useUpdateProduct = (product)=>{
    const [isLoading, setisLoading] = useState(false)
      const { id } = useParams();
<<<<<<< HEAD
    
=======
    const toast = useToast()
>>>>>>> 8d49bdc62ff996226b93e3ef038688f6d46d1a0c
      const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: product
    })

    const onSubmit = async(data)=>{
        setisLoading(true)
       try {
<<<<<<< HEAD
         const res = await axios.patch(`http://localhost:4001/updateproduct/${id}`, data)        
=======
         const res = await axios.patch(`http://localhost:4000/api/v1/product/update-product/${id}`, data)        
>>>>>>> 8d49bdc62ff996226b93e3ef038688f6d46d1a0c
         console.log(res);
          toast({
        title: "Success ✅✅",
        description: "product updated successfully",
      });
       } catch (error) {
<<<<<<< HEAD
        console.log(error);
=======
        
>>>>>>> 8d49bdc62ff996226b93e3ef038688f6d46d1a0c
       }finally{
                setisLoading(false)
       }
    }
    return{
        form,
        onSubmit,isLoading
    }
}