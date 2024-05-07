import { useEffect, useState } from "react";

export const useGetProduct = () => {
  const [product, setproduct] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  async function getAllProduct() {
    setisLoading(true);
    try {
      const res = await fetch("http://localhost:4001/getallproduct");
      const data = await res.json();
      console.log(data);
      setproduct(data);
      if (data) {
        console.log(product, 'here i am');
      }
     
    } catch (error) {
      console.log(error);
      setisError(true);
    } finally {
      setisLoading(false);
    }
  }

  useEffect(() => {
    getAllProduct();
  }, []);

  return {
    product,
    isLoading,
    isError,
  };
};
