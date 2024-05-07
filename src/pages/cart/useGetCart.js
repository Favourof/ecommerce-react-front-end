import { useEffect, useState } from "react";

export const useGetCart = () => {
  const [cart, setCart] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  async function getAllProduct() {
    setisLoading(true);
    try {
      const res = await fetch("http://localhost:4001/cart-product");
      const data = await res.json();
       if (data) {
        setCart(data.response)
        console.log(cart, "here njbdsjbvlkdJBVK");
       }
      
      console.log(data);
      
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
    cart,
    isLoading,
    isError,
  };
};