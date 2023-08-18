import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  getTotals,
} from "../features/CartSlice";

const CartItem = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.cart);

  const decreaseItem = (product) => {
    dispatch(decreaseQuantity(product));
  };
  const increaseItem = (product) => {
    dispatch(increaseQuantity(product));
  };
  const removeProduct = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className="w-[100%] md:px-32 py-8 ">
      <div className="shadow overflow-hidden rounded border-b border-gray-200">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-[10px] md:w-1/5 text-left py-3 px-4 uppercase font-semibold text-sm">
                Title
              </th>
              <th className="w-[10px] md:w-1/5 text-left py-3 px-4 uppercase font-semibold text-sm">
                Photo
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Price
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Quantity
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Total
              </th>
            </tr>
          </thead>

          {products.map((product) => {
            return (
              <tbody
                key={product.id}
                className="text-
          gray-700"
              >
                <tr>
                  <td className="w-[10px] md:w-1/5 text-left py-3 px-4">
                    {product.title}
                  </td>
                  <td className="w-[10px] text-left py-3 px-4">
                    <img src={product.images[0]} className="h-[50px]" />
                  </td>
                  <td className="text-left py-3 px-4">${product.price}</td>
                  <td className="flex text-left py-3 px-4">
                    <button
                      onClick={() => increaseItem(product)}
                      className="border p-2 me-2"
                    >
                      +
                    </button>
                    {product.cartQuantity}
                    <button
                      onClick={() => decreaseItem(product)}
                      className="border p-2 ms-2"
                    >
                      -
                    </button>
                  </td>
                  <td className="text-left py-3 px-4">
                    $ {product.cartQuantity * product.price}
                  </td>
                  <td>
                    <button
                      className="bg-red-500 text-white w-[100px] h-10 rounded-lg"
                      onClick={() => removeProduct(product)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default CartItem;
