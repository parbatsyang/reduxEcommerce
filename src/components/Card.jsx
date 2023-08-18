import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPos } from "../features/ProductApi";
import { addToCart } from "../features/CartSlice";

const Card = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPos());
  }, [dispatch]);

  const contents = useSelector((state) => state.content.contents);
  const isLoading = useSelector((state) => state.content.isLoading);
  const error = useSelector((state) => state.content.error);
  console.log(contents);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-3xl">
        "loading..."
      </div>
    );
  }

  if (error) {
    return error;
  }
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="bg-slate-100">
      <div className="text-3xl pt-5 font-serif text-center">Products</div>
      <div className="grid gap-4 grid-cols-1  md:grid-cols-3 lg:grid-cols-3  p-4 max-w-[1200px] mx-auto">
        {contents.map((item) => (
          <div key={item.id} className="border border-b w-[350px] m-5">
            <img src={item.images[0]} className="h-[200px] w-[350px]" />
            <div>
              <div className="font-bond text-xl m-2 h-[30px] overflow-hidden text-center">
                {item.title}
              </div>
              <div className="h-[50px]  overflow-hidden m-2 ">
                {item.description}
              </div>
              <div className="m-2 font-mono text-center">
                Price: ${item.price}
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-blue-500 w-[100px] text-white m-2 rounded-xl h-[30px]"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
