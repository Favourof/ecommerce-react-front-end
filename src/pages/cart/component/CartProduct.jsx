import React from 'react'
import { Button } from "@/components/ui/button";
import { useGetCart } from "../useGetCart";
const CartProduct = () => {
  const { isError, isLoading, cart } = useGetCart();

  if (isLoading) {
    return <div className="text-3xl text-black">loading...</div>;
  }
  if (isError) {
    return <div>error...</div>;
  }
  console.log(cart, "ndvKNWE VHKEV K");
  return (
    <div>
       <div>
        {cart?.map((product, index) => (
              <div key={index} className="flex items-center m-5">
                {/* Image */}
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                {/* Quantity Buttons */}
                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href="#">{product.title}</a>
                      </h3>
                      <p className="ml-4">${product.price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.description.slice(0, 10)}
                    </p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <div className="flex">
                      <button
                        type="button"
                        onClick={() => handleDecreaseQuantity(index)}
                        className="font-medium text-indigo-600 hover:text-indigo-500 mr-2"
                      >
                        -
                      </button>
                      <p className="text-gray-500">Qty {product.quantity}</p>
                      <button
                        type="button"
                        onClick={() => handleIncreaseQuantity(index)}
                        className="font-medium text-indigo-600 hover:text-indigo-500 ml-2"
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500 ml-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
       </div>
    </div>

   
  );
};

export default CartProduct
