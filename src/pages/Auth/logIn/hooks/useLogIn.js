import { useToast } from "@/components/ui/use-toast";
import { useGetCurrentUser } from "@/shared/hooks/useGetCurrentUser";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

export const useLogIn = () => {
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate()
  const { currentUser } = useGetCurrentUser();

   
  useEffect(() => {
    if (currentUser?.email) {
      navigate("/dashboard");
    }
  }, [currentUser]);

  const inputs = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      required: true,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      required: true,
    },
  ];
  const { toast } = useToast();
  const formSchema = z.object({
    email: z
      .string()
      .email("Invalid email address")
      .nonempty("Email is required"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .nonempty("Password is required"),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setisLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:4001/api/v1/auth/loginuser",
        data
      );
      console.log(res);
      localStorage.setItem('token', res.data.token)
      toast({
        title: "Success ✅✅",
        description: `You are Logged in`,
      });
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast({
        title: "error",
        description: error.response.data.message,
      });
    }finally{
      setisLoading(false);
    }


    
  };

  return{ inputs, form, onSubmit, isLoading}
};
