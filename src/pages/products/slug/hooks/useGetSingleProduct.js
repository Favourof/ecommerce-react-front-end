import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
<<<<<<< HEAD

=======
>>>>>>> 8d49bdc62ff996226b93e3ef038688f6d46d1a0c

export const useGetSingleProduct = () => {
  const [product, setproduct] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate()

  const getProduct = async () => {
    
    setisLoading(true);
    try {
      const res = await fetch(`http://localhost:4001/getsingleproduct/${id}`);
      const data = await res.json();
      setproduct(data.response);
    } catch (error) {
      setisError(true);
    } finally {
      setisLoading(false);
    }
  };

  const handleDeleteProduct = async() =>{
<<<<<<< HEAD
    console.log("jdjjfd")
    try {
      const res = await axios.delete(`http://localhost:4001/deletewithId/${id}`)
=======
    try {
      const res = await axios.delete(`http://localhost:4000/api/v1/product/delete/${id}`)
>>>>>>> 8d49bdc62ff996226b93e3ef038688f6d46d1a0c
      console.log(res.data);
      navigate('/products')
    } catch (error) {
      console.log(error);
    }
  }

<<<<<<< HEAD



=======
>>>>>>> 8d49bdc62ff996226b93e3ef038688f6d46d1a0c
  useEffect(() => {
    getProduct();
  }, [id]);

  return {
    product,
    isError,
<<<<<<< HEAD
    isLoading,
    handleDeleteProduct
=======
    isLoading,handleDeleteProduct
>>>>>>> 8d49bdc62ff996226b93e3ef038688f6d46d1a0c
  };
};
